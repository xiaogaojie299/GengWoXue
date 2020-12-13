<template>
  <div class="box">
    <!-- 头部 -->
    <div>
      <breadcrumb-nav>
        <div class="hand" slot="nav-name" @click="go_back">问题反馈</div>
        <div slot="nav-child">历史反馈</div>
      </breadcrumb-nav>
    </div>
    <!-- 中间表格 -->
    <div class="table">
      <feedback-table></feedback-table>
    </div>
  </div>
</template>
<script>
import feedbackTable from "./childCmps/feedback-table";
export default {
  data() {
    return {};
  },
  components: {
    feedbackTable,
  },
  methods: {
    go_back() {
      this.$router.back(-1);
    },
  },
};
</script>
