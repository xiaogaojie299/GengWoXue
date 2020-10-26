<template>
    <div>
        <el-pagination
            background
            layout="prev, pager, next"
            @size-change="test"
            @current-change="handleCurrentChange"
            :total="1000">
        </el-pagination>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        test(i){
            console.log('i',i);
        },
        handleCurrentChange(val){
            console.log('val',val)
        }
    }
}
</script>
<style lang="scss" scoped>
    /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #409EFF;
    color: #FFF;
    background: linear-gradient(110deg, #F13232, #EF763C);
    border-radius: 2px;
}
</style>