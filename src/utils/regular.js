export function validatePhone(value,callback) {
    const reg =/^[1][3-9][0-9]{9}$/;
    if(value==''||value==undefined||value==null){
        console.log("谁允许你为空的？");
      callback(new Error('手机号码不能为空'));
    }else {
      if ((!reg.test(value)) && value != '') {
        callback(new Error('请输入正确的电话号码'));
      } else {
        callback();
      }
    }
  }