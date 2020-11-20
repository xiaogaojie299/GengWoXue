function postType(data){
    // let data = {phone:"18328510362",value:"123456"};
    let str="?";
    for(var key in data){
        str+=`${key}=${data[key]}&&`
    }
    str=str.slice(0,-2);
    return str
}
export default postType