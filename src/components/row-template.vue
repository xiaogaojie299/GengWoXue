<template>
  <div class="box">
    <div class="left-title"><slot name="title"></slot></div>
    <div><slot name="content"></slot></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.box {
  min-height: 50px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  .left-title {
      width: 60px;
      text-align: left;
    font-size: 10px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #343434;
    // margin-right: 7px;
  }
}
</style>