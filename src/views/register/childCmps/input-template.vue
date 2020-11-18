<template>
    <div>
        <div class="main-box">
          <div class="first-child">
            <slot name="left-content">
                <input type="text" placeholder="请输入您的手机号" />
            </slot>
            <div class="right-title">
                <slot name="right-content">
                    <div class="right-content-box">
                         <!-- <div class="select_Icon"></div>
                        <div class="right-txt">记住登录名</div> -->
                    </div>
                </slot>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

    input::-webkit-input-placeholder {
  /* WebKit browsers */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}

    .first-child {
      width: 100%;
    margin-top: 42px;
    padding-bottom: 6px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cdcdcd;
    input {
      width: 70%;
      border: none;
      font-size: 16px;
      outline: none;
    }
    .right-title :first-child {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      & .select_Icon {
          text-align: right;
        width: 16px;
        height: 16px;
      }
      & .right-txt {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #191616;
        margin-left:4px;
      }
    }
  }


</style>