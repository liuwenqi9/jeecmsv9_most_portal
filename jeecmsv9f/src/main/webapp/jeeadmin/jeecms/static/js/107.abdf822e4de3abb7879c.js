webpackJsonp([107],{"0yTa":function(n,e,t){"use strict";function a(n){t("ovNI")}Object.defineProperty(e,"__esModule",{value:!0});var i=t("5HJ5"),s=t("lcoF"),r=t("x1ym"),l=(t("2sCs"),{mixins:[i.a,s.a],data:function(){var n=r.a.required("此项必填");return{params:{},rules:{search:[n],replacement:[n]},param:{search:"",replacement:""}}},methods:{save:function(n){var e=this,t=[],a=[],i=[];for(var s in this.tableData)i.push(this.tableData[s].id),t.push(this.tableData[s].replacement),a.push(this.tableData[s].search);this.$http.post(this.$api.wordSensitivityUpdate,{replacements:t.join(","),ids:i.join(","),searchs:a.join(",")}).then(function(n){"200"==n.code&&(e.successMessage("保存成功"),e.initTableData(e.$api.wordSensitivityList,e.params),e.param.search="",e.param.replacement=""),e.loading=!1}).catch(function(n){e.loading=!1})},add:function(){var n=this;this.$refs.form.validate(function(e){if(!e)return!1;n.loading=!0,n.$http.post(n.$api.wordSensitivitySave,n.param).then(function(e){"200"==e.code&&(n.initTableData(n.$api.wordSensitivityList,n.params),n.param.search="",n.param.replacement=""),n.loading=!1}).catch(function(e){n.loading=!1})})},update:function(){}},created:function(){this.initTableData(this.$api.wordSensitivityList,this.params)}}),c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[t("div",{staticClass:"cms-list-header"},[t("el-form",{ref:"form",attrs:{model:n.param,rules:n.rules,"label-width":"162px"}},[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"敏感词",prop:"search"}},[t("el-input",{model:{value:n.param.search,callback:function(e){n.$set(n.param,"search",e)},expression:"param.search"}})],1)],1),n._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"替换为",prop:"replacement"}},[t("el-input",{model:{value:n.param.replacement,callback:function(e){n.$set(n.param,"replacement",e)},expression:"param.replacement"}})],1)],1),n._v(" "),t("el-col",{attrs:{span:3}},[n._v(" ")]),n._v(" "),t("el-col",{attrs:{span:4}},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/Sensitivity/add",expression:"'/word/Sensitivity/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){n.add()}}},[n._v("添加\n                       ")])],1)],1)],1)],1),n._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:n.tableData,stripe:""},on:{"selection-change":n.checkIds}},[t("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),n._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),n._v(" "),t("el-table-column",{attrs:{prop:"search",label:"敏感词",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return t("div",{},[t("el-input",{staticClass:"cms-width",model:{value:e.row.search,callback:function(t){n.$set(e.row,"search",t)},expression:"scope.row.search"}})],1)}}])}),n._v(" "),t("el-table-column",{attrs:{align:"center",width:"50"}}),n._v(" "),t("el-table-column",{attrs:{prop:"replacement",label:"替换为",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return t("div",{},[t("el-input",{staticClass:"cms-width",model:{value:e.row.replacement,callback:function(t){n.$set(e.row,"replacement",t)},expression:"scope.row.replacement"}})],1)}}])}),n._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return t("div",{},[t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/Sensitivity/delete",expression:"'/word/Sensitivity/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(t){n.deleteBatch(n.$api.wordSensitivityDelete,e.row.id)}}})],1)}}])})],1),n._v(" "),t("div",{staticClass:"cms-list-footer "},[t("div",{staticClass:"cms-left"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/Sensitivity/delete",expression:"'/word/Sensitivity/delete'"}],attrs:{disabled:n.disabled},on:{click:function(e){n.deleteBatch(n.$api.wordSensitivityDelete,n.ids)}}},[n._v("批量删除")]),n._v(" "),t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/Sensitivity/update",expression:"'/word/Sensitivity/update'"}],attrs:{disabled:n.disabled},on:{click:function(e){n.save(n.ids)}}},[n._v("保存内容")])],1)])],1)},o=[],p={render:c,staticRenderFns:o},d=p,u=t("Z0/y"),m=a,v=u(l,d,!1,m,null,null);e.default=v.exports},T68O:function(n,e,t){e=n.exports=t("l95E")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},ovNI:function(n,e,t){var a=t("T68O");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("FIqI")("81c2a950",a,!0,{})}});