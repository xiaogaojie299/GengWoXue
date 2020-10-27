import container from "@/components/container"
import navBar from "@/components/nav-bar"
import footers from "@/components/footers"
import breadcrumbNav from "@/components/breadcrumb-nav"
import rowTemplate from "@/components/row-template"
import pageDevice from "@/components/page-device"
import calendar from "@/components/calendar" 
import tableFormat from "@/components/table-format"
import crumbs from "@/components/crumbs"
import myBox from "@/components/my-box"
import myTitle from "@/components/my-title"
import radioButton from "@/components/radio-button"  
function plugins(Vue){
        Vue.component("container",container)
        Vue.component("nav-bar",navBar)
        Vue.component("footers",footers)
        Vue.component("breadcrumbNav",breadcrumbNav)
        Vue.component("rowTemplate",rowTemplate)
        Vue.component("pageDevice",pageDevice)
        Vue.component("calendar",calendar)
        Vue.component("table-format",tableFormat)
        Vue.component("my-box",myBox)
	Vue.component("crumbs",crumbs )
        Vue.component("myTitle",myTitle)
        Vue.component("radioButton",radioButton)
}
export default plugins