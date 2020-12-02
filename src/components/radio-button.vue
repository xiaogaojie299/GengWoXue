<template>
    <div>
        <div class="radio-box">
        <div class="readio" @click="checkoutBtn(0)">
          <!-- incon -->
          <img
            :src="currentActive==0?selected:unselect"
            class="incon"
            alt=""
          />
          <span><slot name="radio1"> </slot></span>
        </div>

        <div class="readio" @click="checkoutBtn(1)">
          <!-- incon -->
          <img
            :src="currentActive==1?selected:unselect"
            class="incon"
            alt=""
          />
          <span><slot name="radio2"> </slot></span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        // 默认选中的单选框
        currentActive:0,
        // 选中icon
        selected:require("@/assets/img/personalCenter/icon_radiobutton_selected.png"),
        // 未选中icon
        unselect:require("@/assets/img/personalCenter/icon_radiobutton.png")
    };
  },
  methods:{
      checkoutBtn(i){
          this.currentActive=i;
          this.$emit("chekoutIndex",i);
          console.log("this.currentActive",this.currentActive)
      }
  }
};
</script>
<style lang="scss" scoped>
    //   下方单选框
  .radio-box {
    display: flex;
    align-items: center;
    margin: 19px 0;
    .readio {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      display: flex;
      align-items: center;
      margin-right: 35px;
      & img {
        width: 14px;
        height: 14px;
        margin-right: 6px;
      }
    }
  }
</style>