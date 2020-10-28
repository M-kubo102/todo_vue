<template>
    <div class="topContainer">
        <myHeader></myHeader>

        <h1>買い物メモ</h1>
        <p>メモ帳程度に買うものを管理しよう</p>

        <shopMemo></shopMemo>
    </div>    
</template>

<script>
import shopMemo from '../components/shopMemo'
import myHeader from '../components/myHeader'

export default {
    name: 'ShopTop',
    components:{
        shopMemo,
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