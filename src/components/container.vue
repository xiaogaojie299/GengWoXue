<template>
  <div class="container">
    <div class="container-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scope>
.container {
  width: 100%;
  height: 100%;
}
.container-content {
  width: 1400px;
  height: 100%;
  margin: 0 auto;
}
</style>
