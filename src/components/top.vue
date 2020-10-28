<template>
    <div class="topContainer">
        <myHeader></myHeader>

        <h1>やることメモ</h1>
        <p>メモ帳程度にToDoを管理しよう</p>

        <todo></todo>
    </div>    
</template>

<script>
import todo from '../components/todo'
import myHeader from '../components/myHeader'

export default {
    name: 'Top',
    components:{
        todo,
        myHeader
    }
    
}
</script>

<style>
    .topContainer{
        background: #fdfaf6;
        width: 800px;
        border: 2px solid #eee2d2;
        margin: 0 auto;
    }

    .topContainer >h1,
    .topContainer >p{
        margin: 10px 0;
        color: #684c27;
        padding: 5px;
        text-align: center;
    }

</style>