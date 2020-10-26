<template>
    <div class="box">
        <div class="nav-name"><slot name="nav-name"></slot></div>
        <div class="less">></div>
        <div class="nav-child"><slot name="nav-child"></slot></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .box{
        display: flex;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #343434;
        line-height: 55px;
        margin:20px 0;
        .less{
            margin:0 8px
        }
    }
</style>