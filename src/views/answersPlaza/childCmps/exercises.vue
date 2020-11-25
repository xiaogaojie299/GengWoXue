<template>
    <div>
        <div  v-for="(item,index) in questionSquareList" :key="index">
            <exercisesItem :item="item" /> 
        </div>
    </div>
</template>
<script>
import exercisesItem from './exercises-item'
import {myMixin} from "../mixins/mixins"
export default {
    mixins:[myMixin],
    data(){
        return {
        }
    },
    watch: {
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