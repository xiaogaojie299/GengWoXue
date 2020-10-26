<template>
    <div class="container">
        <div class="container-content">
            <slot></slot>    
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scope>
    .container{
        width: 100%;
    }
    .container-content{
        width: 1400px;
        margin: 0 auto;
        position: relative;
    }
</style>