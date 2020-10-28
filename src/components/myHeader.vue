<template>
    <header>
        <div class="logo">
            <h1>メモ帳</h1>
        </div>
        <div class="container">
            <ul class="menu">
                <li><router-link to="/" class="btn"><span class="btn-text">やること</span></router-link></li>
                <li><router-link to="/shopMemo" class="btn"><span class="btn-text">買い物</span></router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>

export default {
    
}
</script>

<style>
    header{
        width: 100%;
        height: 64px;
        background: #eee2d2;
        display: flex;
    }

    .logo{
        line-height: 15px;
        margin: 0 24px;
        color: #684c27;
        font-size: 18px;
    }

    .menu{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        font-size: 18px;
    }

    a{
        display: block;  
        text-decoration: none;     
    }

    .btn{
        width: 100px;
        line-height: 64px;
        text-align: center;
        position: relative;
        display: flex;
    }

    .btn-text{
        width: 100%;
        height: 100%;
        color: #684c27;
    }

    .btn-text:hover{
        background: #684c27;
        color: #eee2d2;
        transition: .2s;
    }

</style>