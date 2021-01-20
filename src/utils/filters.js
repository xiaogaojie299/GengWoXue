// 切割 带%& 的图片URL
   
    let filters={
      splitImg(item,symbol="%&"){   // 图片转换
        let tepArr=[];
        if(!item || item =="undefined"){
          return  tepArr=[];
        }else if(item.includes(symbol)){
          return tepArr = item.split(symbol); 
        }else{
          return tepArr=[item]
        }
      },
      /**
        12:00:26  ===》12:00
      */
      delSec(time){
        return time.split(":")[0] + ":"+time.split(":")[1]
      }
    }

    export default filters