<template>
  <div>
    测试页面
    <!-- <a class="target" href="" @click="jump">跳转</a> -->
    <button @click="jump">跳转</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    jump() {
      console.log("window", window.location);
      window.location.href = "http://www.baidu.com";
    },
  },
};
</script>
