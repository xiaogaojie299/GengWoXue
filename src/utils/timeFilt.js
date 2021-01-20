const timeType = {
    // 1.timestamp 时间戳转换为时分秒
    tStamp:function parseTime(timestamp){
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear();
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
        var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate());
        var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours());
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes());
        var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());

        let strDate = Y+M+D+h+m+s;
        console.log(strDate) //2020-05-08 17:44:56　
        return {year:Y,month:M,Date:D,house:h,minutes:m,seconds:s};
    }
}
export default timeType
