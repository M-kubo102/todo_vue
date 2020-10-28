<template>
    <div class="todoContainer">

        <table class="shopView">
            <tr>
                <th></th>
                <th @click="sortBy('item')">買うもの</th>
                <th @click="sortBy('limit')">期限</th>
                <th @click="sortBy('category')">カテゴリ</th>
            </tr>
            <tr v-for="(memo, index) in sortMemo" :key="index">
                <td class="deleteIcon" @click="deleteItem(memo.item, index)">
                    <p>x</p>
                </td>
                <td>{{ memo.item }}</td>
                <td>{{ memo.limit }}</td>
                <td>{{ memo.category }}</td>
            </tr>
        </table>

        <div class="inputBtn" @click="openInput()">メモを入力する</div>

        <form class="inputArea" v-show="isOpen" @submit.prevent="addItem">
            <div>
                <label for="todo">買うもの</label>
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

            <div>
                <label for="todo">カテゴリー</label>
                <br>
                <input type="text" id="todo" v-model="newCategory">
            </div>

            <div class="btnArea">
                <input type="submit" value="保存" class="todoBtn">
                <input type="reset" value="削除" class="todoBtn">
            </div>
        </form>
    </div>
</template>

<script>
import myHeader from '../components/myHeader'

export default {
    name: 'ShopMemo',
    components:{
        myHeader
    },
    data(){
        return{
            isOpen:false,
            shopMemos: [
            {
                item: '',
                limit: '',
                category: ''
            },
            ],
            newItem: '',
            newLimit: '',
            newCategory: '',
            sortKey: ''
        }
    },
    watch: {
        shopMemos:{
            handler: function() {
                localStorage.setItem('shopMemos', JSON.stringify(this.shopMemos));
            },
            deep: true
        }
    },
    mounted: function() {
      this.shopMemos = JSON.parse(localStorage.getItem('shopMemos')) || [];
    },
    computed: {
        sortMemo() {
            if (this.sortKey != "") {
                this.shopMemos.sort((a, b) => {
                    if (a[this.sortKey] < b[this.sortKey]) return -1;
                    if (a[this.sortKey] > b[this.sortKey]) return 1;
                    return 0;
                });
                return this.shopMemos;
            } else {
                return this.shopMemos;
            }
        }
    },
    methods: {
        openInput(){
            this.isOpen = !this.isOpen;
        },
        addItem(){
            this.shopMemos.push({item: this.newItem, limit: this.newLimit, category: this.newCategory});
            this.newItem = '';
            this.newLimit = '';
            this.newCategory = '';
        },
        deleteItem(item, index){
            if (confirm(`買うもの「${item}」を削除してよろしいですか？`)) {
                this.shopMemos.splice(index, 1);
            }
        },
        sortBy(key){
            this.sortKey = key;
        }
    }
}
</script>

<style>
    .shopView{
        padding: 0;
        color: #684c27;
        border-collapse: collapse;
        border: 2px solid #684c27;
        margin: 10px auto;
        width: 500px;
    }

    .shopView th,
    .shopView td{
        padding: 10px;
        border: 1px dashed #684c27;
    }

    .shopView th{
        width: 50px;
        background: #eee2d2;
        cursor: pointer;
    }

    .shopView td{
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