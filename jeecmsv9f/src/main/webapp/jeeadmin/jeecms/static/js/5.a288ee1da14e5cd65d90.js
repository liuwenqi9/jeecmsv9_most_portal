webpackJsonp([5],{"1D1i":function(t,e,i){var s=i("2CmQ");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("FIqI")("bb32fcb2",s,!0,{})},"2CmQ":function(t,e,i){e=t.exports=i("I71c")(!1),e.push([t.i,"\n.que-conent,\r\n.btn-add-group{\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  background-color: #FBFDFF;\r\n  border: 1px dashed #E8EFF4;\r\n  margin-top:10px;\n}\n.el-row .el-col .cms-upload .cms-upload-box ,\r\n.el-row .el-col .cms-upload .avatar-uploader-icon,\r\n.el-row .el-col .cms-upload .cms-upload-box .cms-progress,\r\n.el-row .el-col .cms-upload .cms-upload-box .el-progress-circle{\r\n  width: 60px !important;\r\n  height: 60px !important;\r\n  line-height: 60px;\n}\n.el-row .el-col .cms-upload .cms-upload-box .cms-zoom-icon{\r\n  width: 50px;\r\n  left:50%;\r\n  margin-left: -20px;\r\n  margin-top: -20px;\r\n  font-size: 13px;\n}\n.el-row .el-col .cms-upload .cms-upload-box .cms-zoom-font{\r\n  font-size: 10px;\n}\n.el-row .el-col .cms-upload .cms-upload-box .cms-img-bottom{\r\n  height: 20px;\r\n  line-height: 20px;\n}\n.que-item-title{\r\n  height: 20px;\r\n  line-height: 20px;\n}\n.que-item{\r\n  height: 70px;\r\n  line-height: 70px;\n}\n.que-item .el-button{\r\n  padding: 0px 0px;\r\n  min-width: 0px;\r\n  border: 0px solid #dcdfe6;\r\n  color:#9DBED7;\n}\n.que-item .el-button:hover,\r\n.que-item-btn .el-button:hover{\r\n  background-color: #FFFFFF;\n}\n.que-item .el-button:focus,\r\n.que-item-btn .el-button:focus {\r\n  background-color: #FFFFFF;\n}\n.que-item .el-button:active,\r\n.que-item-btn .el-button:active {\r\n  background-color: #FFFFFF;\n}\n.que-item .el-button .iconfont{\r\n  font-size: 30px;\n}\n.que-item-btn .el-button{\r\n  margin: 20px 0px;\r\n  padding: 7px 10px;\r\n  min-width: 0px;\r\n  border: 1px solid #FFCBA1;\r\n  color:#FFCBA1;\n}\n.que-item-btn .el-button .iconfont {\r\n  font-size: 12px;\r\n  font-weight: 100;\n}\n.que-item .el-form-item{\r\n  border:0px;\n}\n.el-form-item__error {\r\n    left: 84%;\n}\r\n\r\n",""])},"8DFY":function(t,e,i){"use strict";function s(t){i("1D1i")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("HzJ8"),o=i.n(n),a=i("3cXf"),r=i.n(a),l=i("2sCs"),c=i.n(l),u=i("x1ym"),m=i("lcoF"),p={mixins:[m.a],data:function(){return{dataInfo:{},dateRange:"",queItems:[],defaultRole:{},ftp_div_show:!1,rules:{title:[u.a.required("此项必填")],repeateHour:[u.a.number("请输入数字")]},queFlage:!1,voteFlage:!1,fromFlage:!1}},methods:{resetSort:function(t){for(var e in t)t[e].priority=parseInt(e)+1},swithcVoteType:function(t){var e=this.queItems[t].type,i=this.queItems[t];3==e?delete i.voteItems:i.voteItems=[{id:"",percent:0,title:"",voteCount:0,priority:1,picture:""}],this.$set(this.queItems,i,t)},itemDelete:function(t,e){this.queItems[t].voteItems.splice(e,1)},itemUp:function(t,e){if(0==e)return this.errorMessage("当前选项已经是第一项，无法移动"),!1;this.$switchArrOrder(this.queItems[t].voteItems,e),this.resetSort(this.queItems[t].voteItems)},itemDown:function(t,e){if(this.queItems[t].voteItems.length==e+1)return this.errorMessage("当前选项已经是最后一项，无法移动"),!1;this.$switchArrOrder(this.queItems[t].voteItems,e,"down"),this.resetSort(this.queItems[t].voteItems)},itemAdd:function(t){this.queItems[t].voteItems.push({id:"",percent:0,title:"",voteCount:0,priority:1,picture:""})},queDelete:function(t){this.queItems.splice(t,1)},queUp:function(t){if(0==t)return this.errorMessage("当前选项已经是第一项，无法移动"),!1;this.$switchArrOrder(this.queItems,t),this.resetSort(this.queItems)},queDown:function(t){if(this.queItems.length==t+1)return this.errorMessage("当前选项已经是最后一项，无法移动"),!1;this.$switchArrOrder(this.queItems,t,"down"),this.resetSort(this.queItems)},queTop:function(t){if(0==t)return this.errorMessage("当前选项已经是第一项，无法移动"),!1;var e=[];e.push(this.queItems[t]),this.queItems.splice(t,1),e=e.concat(this.queItems),this.queItems=e,this.resetSort(this.queItems)},queUnder:function(t){if(this.queItems.length==t+1)return this.errorMessage("当前选项已经是第后一项，无法移动"),!1;var e=this.queItems[t];this.queItems.splice(t,1),this.queItems.push(e),this.resetSort(this.queItems)},queAdd:function(t){var e={id:"",title:"",type:t,priority:1,voteItems:[{id:"",percent:0,title:"",voteCount:0,priority:1,picture:""}]};3==t&&(e={id:"",title:"",type:3,priority:1}),this.queItems.push(e)},getDataInfo:function(t){var e=this;this.$api;c.a.post(this.$api.voteGet,{id:t}).then(function(i){if(e.loading=!1,e.dataInfo=i.body,0==t)e.queItems=[],e.queAdd(1);else{if(i.body.subtopics.length>0){e.queItems=i.body.subtopics;for(var s in e.queItems)3==e.queItems[s].type||e.queItems[s].hasOwnProperty("voteItems")||(e.queItems[s].voteItems=[{id:"",percent:0,title:"",voteCount:0,priority:1,picture:""}])}e.dateRange=[i.body.startTime,i.body.endTime]}}).catch(function(t){e.loading=!1})},getParam:function(){this.dateRange.length>1&&(this.dataInfo.startTime=this.dateRange[0],this.dataInfo.endTime=this.dateRange[1]),this.dataInfo.source=r()(this.queItems),delete this.dataInfo.subtopics},getPath:function(t,e,i){this.queItems[i].voteItems[e].picture=t},valiate:function(){this.fromFlage=this.voteFlage=this.queFlage=!1;var t=this.queItems;if(0==t.length)return void(this.queFlage=!0);var e=!0,i=!1,s=void 0;try{for(var n,a=o()(t);!(e=(n=a.next()).done);e=!0){var r=n.value;if(""==r.title)return void(this.fromFlage=!0);if(3!=r.type){if(""==r.voteItems)return void(this.voteFlage=!0);if(0==r.voteItems.length)return void(this.voteItems=!0);var l=r.voteItems,c=!0,u=!1,m=void 0;try{for(var p,d=o()(l);!(c=(p=d.next()).done);c=!0){if(""==p.value.title)return void(this.fromFlage=!0)}}catch(t){u=!0,m=t}finally{try{!c&&d.return&&d.return()}finally{if(u)throw m}}}}}catch(t){i=!0,s=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw s}}},update:function(t){return this.valiate(),this.queFlage?(this.errorMessage("调查问卷至少添加一项题目，请确认!"),!1):this.voteFlage?(this.errorMessage("单选题或多选题至少添加一项选项，请确认!"),!1):this.fromFlage?(this.errorMessage("题目或题目选项未填写，请确认!"),!1):(this.getParam(),console.log(this.$api.voteUpdate),void this.updateDataInfo(this.$api.voteUpdate,this.dataInfo,"list"))},add:function(t){return this.valiate(),this.queFlage?(this.errorMessage("调查问卷至少添加一项题目，请确认!"),!1):this.voteFlage?(this.errorMessage("单选题或多选题至少添加一项选项，请确认!"),!1):this.fromFlage?(this.errorMessage("题目或题目选项未填写，请确认!"),!1):(this.getParam(),void this.saveDataInfo(t,this.$api.voteSave,this.dataInfo,"list"))}},created:function(){this.getDataInfo(this.id)}},d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[i("cms-back"),t._v(" "),i("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[i("el-form-item",{staticClass:"flex-100 ",attrs:{label:"标题",prop:"title"}},[i("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.title,callback:function(e){t.$set(t.dataInfo,"title",e)},expression:"dataInfo.title"}})],1),t._v(" "),i("el-form-item",{staticClass:"flex-100",attrs:{label:"说明"}},[i("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.description,callback:function(e){t.$set(t.dataInfo,"description",e)},expression:"dataInfo.description"}})],1),t._v(" "),i("el-form-item",{staticClass:"flex-50",attrs:{label:"有效期"}},[i("el-date-picker",{staticClass:"cms-width",attrs:{type:"daterange",align:"right","value-format":"yyyy-MM-dd","unlink-panels":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}}),t._v(" "),i("span",{staticClass:"gray"},[t._v("留空为不限制时间")])],1),t._v(" "),i("el-form-item",{staticClass:"flex-50 ",attrs:{label:"重复答卷限制"}},[i("el-input",{staticClass:"cms-width",attrs:{type:"number",prop:"repeateHour"},model:{value:t.dataInfo.repeateHour,callback:function(e){t.$set(t.dataInfo,"repeateHour",e)},expression:"dataInfo.repeateHour"}}),t._v(" "),i("span",{staticClass:"gray"},[t._v("单位：小时。为空禁止重复投票；0为不限制重复投票。")])],1),t._v(" "),i("el-form-item",{staticClass:"flex-50 ",attrs:{label:"答卷限制"}},[i("el-radio-group",{staticClass:"cms-width",model:{value:t.dataInfo.restrictMember,callback:function(e){t.$set(t.dataInfo,"restrictMember",e)},expression:"dataInfo.restrictMember"}},[i("el-radio",{attrs:{label:!0}},[t._v("是")]),t._v(" "),i("el-radio",{attrs:{label:!1}},[t._v("否")])],1),t._v(" "),i("span",{staticClass:"gray"},[t._v("选择开启则表示必须登录才能参与答卷")])],1),t._v(" "),i("el-form-item",{staticClass:"flex-50"}),t._v(" "),i("el-form-item",{staticClass:"flex-100 ",attrs:{label:" "}},[t._l(t.queItems,function(e,s){return i("div",{key:s,staticClass:"cms-width el-input que-conent"},[i("el-row",{staticClass:"que-item"},[i("el-col",{attrs:{span:15}},[i("el-input",{staticClass:"cms-width",attrs:{placeholder:"请输入问题标题",prop:"queTitle"},model:{value:t.queItems[s].title,callback:function(e){t.$set(t.queItems[s],"title",e)},expression:"queItems[index].title"}})],1),t._v(" "),i("el-col",{attrs:{span:9}},[i("el-form-item",{attrs:{label:"更换题型:"}},[i("el-select",{attrs:{placeholder:"请选择"},on:{change:function(e){t.swithcVoteType(s)}},model:{value:t.queItems[s].type,callback:function(e){t.$set(t.queItems[s],"type",e)},expression:"queItems[index].type"}},[i("el-option",{attrs:{label:"单选题",value:1}}),t._v(" "),i("el-option",{attrs:{label:"多选题",value:2}}),t._v(" "),i("el-option",{attrs:{label:"问答题",value:3}})],1)],1)],1)],1),t._v(" "),3!=t.queItems[s].type?[i("el-row",{staticClass:"que-item-title"},[i("el-col",{attrs:{span:14}},[t._v("选项")]),t._v(" "),i("el-col",{attrs:{span:5}},[t._v("图片")]),t._v(" "),i("el-col",{attrs:{span:5}},[t._v("操作")])],1),t._v(" "),t._l(t.queItems[s].voteItems,function(e,n){return i("el-row",{key:n},[i("el-row",{staticClass:"que-item"},[i("el-col",{attrs:{span:14}},[i("el-input",{staticClass:"cms-width",attrs:{placeholder:"选项",prop:"itemTitle"},model:{value:t.queItems[s].voteItems[n].title,callback:function(e){t.$set(t.queItems[s].voteItems[n],"title",e)},expression:"queItems[index].voteItems[objIndex].title"}})],1),t._v(" "),i("el-col",{attrs:{span:5}},[i("cms-upload",{attrs:{src:t.queItems[s].voteItems[n].picture,pIndex:s,index:n},on:{change:t.getPath}})],1),t._v(" "),i("el-col",{attrs:{span:5}},[i("el-button",{attrs:{icon:"iconfont  icon-icon--3",title:"删除"},on:{click:function(e){t.itemDelete(s,n)}}}),t._v(" "),i("el-button",{attrs:{icon:"iconfont  icon-icon--",title:"上移"},on:{click:function(e){t.itemUp(s,n)}}}),t._v(" "),i("el-button",{attrs:{icon:"iconfont  icon-icon--1",title:"下移"},on:{click:function(e){t.itemDown(s,n)}}})],1)],1)],1)})]:t._e(),t._v(" "),i("el-row",{staticClass:"que-item-btn text-right"},[3!=t.queItems[s].type?i("el-button",{attrs:{icon:"iconfont icon-tianjia",size:"small"},on:{click:function(e){t.itemAdd(s)}}},[t._v("添加")]):t._e(),t._v(" "),i("el-button",{attrs:{icon:"iconfont icon-jiantoushang",size:"small"},on:{click:function(e){t.queUp(s)}}},[t._v("上移")]),t._v(" "),i("el-button",{attrs:{icon:"iconfont icon-jiantouxia",size:"small"},on:{click:function(e){t.queDown(s)}}},[t._v("下移")]),t._v(" "),i("el-button",{attrs:{icon:"iconfont icon-huidaodingbu",size:"small"},on:{click:function(e){t.queTop(s)}}},[t._v("最前")]),t._v(" "),i("el-button",{attrs:{icon:"iconfont icon-huidaodingbu-copy",size:"small"},on:{click:function(e){t.queUnder(s)}}},[t._v("最后")]),t._v(" "),i("el-button",{attrs:{icon:"iconfont icon-shanchu1",size:"small"},on:{click:function(e){t.queDelete(s)}}},[t._v("删除题目")])],1)],2)}),t._v(" "),i("div",{staticClass:"cms-width el-input btn-add-group",attrs:{align:"center"}},[i("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(e){t.queAdd(1)}}},[t._v("添加单选题")]),t._v(" "),i("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(e){t.queAdd(2)}}},[t._v("添加多选题")]),t._v(" "),i("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(e){t.queAdd(3)}}},[t._v("添加问答题")])],1)],2),t._v(" "),i("div",{staticClass:"form-footer"},[t.isType("save")?i("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/vote/save",expression:"'/vote/save'"}],attrs:{type:"warning"},on:{click:function(e){t.add(!0)}}},[t._v("\n              提交并继续添加\n            ")]):t._e(),t._v(" "),t.isType("save")?i("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/vote/save",expression:"'/vote/save'"}],attrs:{type:"primary"},on:{click:function(e){t.add(!1)}}},[t._v("\n              提交\n            ")]):t._e(),t._v(" "),t.isType("update")?i("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/vote/update",expression:"'/vote/update'"}],attrs:{type:"primary"},on:{click:function(e){t.update()}}},[t._v("\n              修改\n            ")]):t._e(),t._v(" "),i("el-button",{attrs:{type:"info"},on:{click:t.reset}},[t._v("重置")]),t._v(" "),t.isType("save")?i("span",{staticClass:"gray"},[t._v("选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页")]):t._e()],1)],1)],1)},v=[],h={render:d,staticRenderFns:v},f=h,I=i("Z0/y"),g=s,b=I(p,f,!1,g,null,null);e.default=b.exports}});