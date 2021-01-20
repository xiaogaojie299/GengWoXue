<template>
  <div class="footer">
    <div class="banner">
        <!-- 备案信息123 -->
        <ul>
            <li>黔ICP备20006997</li>
            <li>联系电话：{{KfInfo.content}}</li>
            <li>贵州倍晓锐教育科技有限公司</li>
            <li>联系地址：贵州省黔西南州兴义市桔山街道瑞金北路23号</li>
        </ul>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {

    }
  },
  computed:{
    KfInfo() {
      return this.$store.state.kfInfo;
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  background: #3b3b3b;
  /* 字体颜色 */
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #FFFFFF;
.banner {
    width: 100%;
    height: 120px;
    background-color: #3B3B3B;
    text-align: center;
    // line-height: 120px;
    font-size: 14px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
ul{
    
    li{
        margin-bottom: 6px;
    }
}

}
</style>