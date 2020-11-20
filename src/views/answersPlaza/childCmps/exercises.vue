<template>
    <div>
        <div v-for="(item,index) in questionSquareList" :key="index">
            <exercisesItem :item="item" />
        </div>
    </div>
</template>
<script>
import exercisesItem from './exercises-item'
export default {
    data(){
        return {
            
        }
    },
    props:{
        questionSquareList:{
            type:Array,
            default:[]
        }
    },
    components:{
        exercisesItem
    }
}
</script>
<style lang="scss" scoped>

</style>