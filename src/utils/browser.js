const isBrowser = ()=>{
    if(navigator.userAgent.indexOf("MSIE")>0) {
        return "MSIE";
        }
        if(navigator.userAgent.indexOf("Firefox")>0){
            return "Firefox"
        }
        if(navigator.userAgent.indexOf("Safari")>0) {
        return "Safari";
        }
        if(navigator.userAgent.indexOf("Camino")>0){
        return "Camino";
        }
        if(navigator.userAgent.indexOf("Gecko/")>0){
        return "Gecko";
    }
}
export default isBrowser