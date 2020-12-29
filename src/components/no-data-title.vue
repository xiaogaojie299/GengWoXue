<template>
    <div class="no-data">
        <slot> 暂无数据 </slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .no-data{
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:22px;
        font-weight: bold;
        
    }
</style>