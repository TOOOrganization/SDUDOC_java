(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2386b4"],{fefe:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:2}},[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{label:"查询字段"},model:{value:e.defaultField,callback:function(t){e.defaultField=t},expression:"defaultField"}}),a("v-text-field",{attrs:{label:"查询内容"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),a("v-text-field",{attrs:{label:"排序"},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}}),a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"start"},model:{value:e.start,callback:function(t){e.start=t},expression:"start"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"rows"},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}})],1)],1),a("v-col",[a("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:function(t){return e.submit(e.start)}}},[e._v(" Execute Query ")])],1),a("v-col",[a("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:function(t){return e.check()}}},[e._v(" check ")])],1)],1)],1),a("v-col",{attrs:{cols:10}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",attrs:{data:e.articles.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize)},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._l(e.headers,(function(e){return a("el-table-column",{key:e.label,attrs:{prop:e.prop,label:e.label,"show-overflow-tooltip":!0}})}))],2),0!==e.articles.length?a("v-row",{staticStyle:{"margin-top":"20px"},attrs:{justify:"center"}},[a("v-col"),a("v-col",[a("el-pagination",{attrs:{align:"center","current-page":e.currentPage,"page-size":10,layout:"total, prev, pager, next, jumper",total:e.returnNumber},on:{"current-change":e.handleCurrentChange}})],1)],1):e._e()],1)],1)],1)},r=[],o=a("4328"),n=a.n(o),s={name:"SolrArticleHead",data:function(){return{valid:!1,loading:!1,defaultField:"",query:"",sort:"",start:0,rows:10,headers:[{prop:"aid",label:"aid"},{prop:"title",label:"title"},{prop:"articleAuthor",label:"articleAuthor"},{prop:"dynasty",label:"dynasty"},{prop:"bookname",label:"bookname"}],articles:[],returnNumber:0,numFound:0,currentPage:1,pageSize:10}},methods:{submit:function(){var e=this;this.loading=!0,this.$axios.post("/solr/query",n.a.stringify({coreName:"sms_article_head",defaultField:this.defaultField,query:this.query,sort:this.sort,start:this.start,rows:this.rows})).then((function(t){t&&(console.log(t.data),e.articles=t.data.results,e.numFound=t.data.numFound,e.returnNumber=t.data.results.length,console.log(e.articles),e.loading=!1)})).catch((function(e){console.log(e)}))},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),this.currentPage=e}}},i=s,c=a("2877"),u=a("6544"),d=a.n(u),p=a("8336"),v=a("62ad"),b=a("a523"),f=a("4bd4"),h=a("0fd9"),m=a("8654"),g=Object(c["a"])(i,l,r,!1,null,"7addb5fa",null);t["default"]=g.exports;d()(g,{VBtn:p["a"],VCol:v["a"],VContainer:b["a"],VForm:f["a"],VRow:h["a"],VTextField:m["a"]})}}]);
//# sourceMappingURL=chunk-2d2386b4.b6c2a46e.js.map