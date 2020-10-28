<template>
    <div class="todoContainer">

        <table class="todoView">
            <tr>
                <th></th>
                <th>予定</th>
                <th>期限</th>
            </tr>
            <tr v-for="(todo, index) in todos" :key="index">
                <td class="deleteIcon" @click="deleteItem(todo.item, index)">
                    <p>x</p>
                </td>
                <td>{{ todo.item }}</td>
                <td>{{ todo.limit }}</td>
            </tr>
        </table>

        <div class="inputBtn" @click="openInput()">予定を入力する</div>

        <form class="inputArea" v-show="isOpen" @submit.prevent="addItem">
            <div>
                <label for="todo">予定</label>
                <br>
                <input type="text" id="todo" v-model="newItem">
            </div>

            <div>
                <label for="limit">期限</label>
                <br>
                <select id="limit" v-model="newLimit">
                    <option value="" hidden>選択してください</option>
                    <option value="今日中">今日中</option>
                    <option value="明日">明日</option>
                    <option value="数日後">数日後</option>
                    <option value="今週中">今週中</option>
                    <option value="猶予あり">猶予あり</option>
                    <option value="期限なし">期限なし</option>
                </select>
            </div>

            <div class="btnArea">
                <input type="submit" value="保存" class="todoBtn">
                <input type="reset" value="削除" class="todoBtn">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isOpen:false,
            todos: [
            {
                item: '',
                limit: ''
            },
            ],
            newItem: '',
            newLimit: '',
            sortKey: ''
        }
    },
    watch: {
        todos:{
            handler: function() {
                localStorage.setItem('todos', JSON.stringify(this.todos));
            },
            deep: true
        }
    },
    mounted: function() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
        openInput(){
            this.isOpen = !this.isOpen;
        },
        addItem(){
            this.todos.push({item: this.newItem, limit: this.newLimit});
            console.log(this.todos);
            this.newItem = '';
            this.newLimit = '';
        },
        deleteItem(todo, index){
            if (confirm(`予定「${todo}」を削除してよろしいですか？`)) {
                this.todos.splice(index, 1);
            }
        }
    }
}
</script>

<style>
    /* .todoContainer{
        background: chartreuse;
    } */
    .todoView{
        padding: 0;
        color: #684c27;
        border-collapse: collapse;
        border: 2px solid #684c27;
        margin: 10px auto;
        width: 300px;
    }

    .todoView th,
    .todoView td{
        padding: 10px;
        border: 1px dashed #684c27;
    }

    .todoView th{
        width: 20px;
        background: #eee2d2;
    }

    .todoView td{
        background: #fdfaf6;
    }

    .deleteIcon p{
        margin: 0 auto;
        padding: 0;
        background: #684c27;
        width: 20px;
        height: 20px;
        color: #fdfaf6;
        border-radius: 50%;
        font-weight: bold;
        cursor: pointer;
    }

    .deleteIcon p:hover{
        background: #e2d1c5;
    }

    .inputBtn{
        background: #e2d1c5;
        width: 120px;
        height: 50px;
        line-height: 50px;
        margin: 10px auto;
        padding: 0 5px;
        color: #684c27;
        border: 2px solid #684c27;
        border-radius: 10px;
        cursor: pointer;
        user-select: none;
    }

    .inputBtn:hover{
        opacity: .8;
    }

    .inputArea{
        background: #e2d1c5;
        margin: 20px auto;
        text-align: left;
        width: 300px;
        padding: 10px;
        border: 2px solid #684c27;
        border-radius: 10px;
        color: #684c27;
    }

    .inputArea input[type="text"]{
        width: 200px;
        height: 20px;
        font-size: 14px;
        padding: 5px;
        margin-bottom: 10px;
    }

    .inputArea select{
        height: 30px;
        padding: 5px;
        margin-bottom: 20px;
    }

    .btnArea{
        text-align: center;
    }

    .todoBtn{
        background: #684c27;
        color: #fdfaf6;
        font-weight: bold;
        border-radius: 5px;
        border: 2px solid #fdfaf6;
        cursor: pointer;
        width: 60px;
        height: 40px;
        font-size: 16px;
        margin: 0 10px;
    }

    .inputArea input[type="text"]:focus,
    .inputArea select:focus,
    .todoBtn:focus{
        outline: none;
    }
</style>