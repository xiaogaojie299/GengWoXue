const getYearMonthDay = (date=new Date()) => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return { year, month, day };
};
const getDate = (year, month, day) => {
  return new Date(year, month, day);
};
const getTimeType=(timer,MonthType=false)=>{
  let month=timer.getMonth()+1<10?"0"+(timer.getMonth()+1):timer.getMonth()+1;
  let day=timer.getDate()<10?"0"+timer.getDate():timer.getDate();
  if(MonthType){
    return timer.getFullYear()+"-"+month
  }else{
    return timer.getFullYear()+"-"+month+"-"+day
  }
}
export { getYearMonthDay, getDate, getTimeType };
