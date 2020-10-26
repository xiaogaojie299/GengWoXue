<template>
    <div class="box">
        <div>
            <bannar />
        </div>
        <!-- 聊天室 -->
        <div>
            <chat />
        </div>
    </div>
</template>
<script>
import bannar from "./bannar"
import chat from "./chat"
export default {
    data(){
        return {

        }
    },
    components:{
        bannar,
        chat
    }
}
</script>
<style lang="scss" scoped>
    .box{
    }
</style>