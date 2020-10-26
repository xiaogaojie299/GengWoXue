<template>
    <div>
        <div v-for="i in 2" :key="i">
            <exercisesItem />
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
    components:{
        exercisesItem
    }
}
</script>
<style lang="scss" scoped>

</style>