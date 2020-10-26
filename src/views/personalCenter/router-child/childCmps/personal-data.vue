<template>
    <div>
        <!-- 头部个人资料 -->
        <div class="title">我的班级</div>
        <!-- 中间内容 -->
        <div class="main">
            <!-- 基本信息 -->
            <div class="nav-bar">
                <span
                @click="go_url(item.path)" 
                class="active"
                v-for="(item,index) in navbarList"
                :key="index"
                >{{item.title}}</span>
                <!-- <span>账号安全</span> -->
            </div>
            <!-- 判断是否是基本信息还是账号安全 -->
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navbarList:[{
                path:"account-security",
                title:"账号安全"
            },
            {
                path:"personal-info",
                title:"基本信息"
            }
            ]
        }
    },
    methods:{
        go_url(url){
            this.$router.push({
                path:"/personalCenter/personal/data/"+url
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .title {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #343434;
  margin: 20px 0;
}
// 选中
.active{
    
font-size: 20px;
font-family: Source Han Sans CN;
font-weight: bold;
color: #333333;
}
.main{
    width: 1014px;
height: 1080px;
background: #F8F9F9;
.nav-bar{
    width: 100%;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #7B7B7B;
    line-height: 54px;
    & >:first-child{
        border: 1px solid red;
        margin-right: 25px;
    }
}
}
</style>