(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cccc6b38"],{"3e8f":function(t,e){},"63c6":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("p",{attrs:{id:"addUsers"}},[t._v("添加用户")]),t._v(" "),i("div",{staticClass:"box",attrs:{id:"box"}},[i("div",{staticClass:"user"},[i("p",[i("span",{attrs:{id:0===t.idx?"blue":"gray"},on:{click:function(e){return t.change(0)}}},[t._v("添加用户")]),t._v(" "),i("span",{staticClass:"updataTit",attrs:{id:1===t.idx?"blue":"gray"},on:{click:function(e){return t.change(1)}}},[t._v("更新用户")])]),t._v(" "),0===t.idx?i("div",[i("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),i("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}}),t._v(" "),i("el-select",{attrs:{placeholder:"请选择身份id"},model:{value:t.identityId,callback:function(e){t.identityId=e},expression:"identityId"}},t._l(t.identitysData,function(t,e){return i("el-option",{key:e,attrs:{label:t.identity_text,value:t.identity_text}})}),1)],1):t._e(),t._v(" "),1===t.idx?i("div",[i("el-select",{attrs:{placeholder:"请选择用户id"},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}},t._l(t.userData,function(t,e){return i("el-option",{key:e,attrs:{label:t.user_name,value:t.user_name}})}),1),t._v(" "),i("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),i("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}}),t._v(" "),i("el-select",{attrs:{placeholder:"请选择身份id"},model:{value:t.identityId,callback:function(e){t.identityId=e},expression:"identityId"}},t._l(t.identitysData,function(t,e){return i("el-option",{key:e,attrs:{label:t.identity_text,value:t.identity_text}})}),1)],1):t._e(),t._v(" "),i("div",{staticClass:"btn"},[i("el-button",{attrs:{type:"primary"},on:{click:t.user}},[t._v("确定")]),t._v(" "),i("el-button",{attrs:{plain:""},on:{click:function(e){return t.reset(1)}}},[t._v("重置")])],1)]),t._v(" "),i("div",{staticClass:"user"},[t._m(0),t._v(" "),i("el-input",{attrs:{placeholder:"请输入身份名称"},model:{value:t.identityName,callback:function(e){t.identityName=e},expression:"identityName"}}),t._v(" "),i("div",{staticClass:"btn"},[i("el-button",{attrs:{type:"primary"},on:{click:t.identity}},[t._v("确定")]),t._v(" "),i("el-button",{attrs:{plain:""},on:{click:function(e){return t.reset(2)}}},[t._v("重置")])],1)],1),t._v(" "),i("div",{staticClass:"user"},[t._m(1),t._v(" "),i("el-input",{attrs:{placeholder:"请输入api接口权限名称"},model:{value:t.apiJurisdictionName,callback:function(e){t.apiJurisdictionName=e},expression:"apiJurisdictionName"}}),t._v(" "),i("el-input",{attrs:{placeholder:"请输入api接口权限url"},model:{value:t.apiJurisdictionUrl,callback:function(e){t.apiJurisdictionUrl=e},expression:"apiJurisdictionUrl"}}),t._v(" "),i("el-input",{attrs:{placeholder:"请输入api接口权限方法"},model:{value:t.apiJurisdictionMethod,callback:function(e){t.apiJurisdictionMethod=e},expression:"apiJurisdictionMethod"}}),t._v(" "),i("div",{staticClass:"btn"},[i("el-button",{attrs:{type:"primary"},on:{click:t.jurisdiction}},[t._v("确定")]),t._v(" "),i("el-button",{attrs:{plain:""},on:{click:function(e){return t.reset(3)}}},[t._v("重置")])],1)],1),t._v(" "),i("div",{staticClass:"user"},[t._m(2),t._v(" "),i("div",[i("el-select",{attrs:{placeholder:"请选择已有视图"},model:{value:t.existingView,callback:function(e){t.existingView=e},expression:"existingView"}},t._l(t.identityViewAuthorityRelationsData,function(t,e){return i("el-option",{key:e,attrs:{label:t.view_authority_text,value:t.view_authority_text}})}),1)],1),t._v(" "),i("div",{staticClass:"btn"},[i("el-button",{attrs:{type:"primary"},on:{click:t.view}},[t._v("确定")]),t._v(" "),i("el-button",{attrs:{plain:""},on:{click:function(e){return t.reset(4)}}},[t._v("重置")])],1)]),t._v(" "),i("div",{staticClass:"user"},[t._m(3),t._v(" "),i("div",[i("el-select",{attrs:{placeholder:"请选择身份id"},model:{value:t.identityId2,callback:function(e){t.identityId2=e},expression:"identityId2"}},t._l(t.identitysData,function(t,e){return i("el-option",{key:e,attrs:{label:t.identity_text,value:t.identity_text}})}),1)],1),t._v(" "),i("div",[i("el-select",{attrs:{placeholder:"请选择api接口权限id"},model:{value:t.apiJurisdictionId,callback:function(e){t.apiJurisdictionId=e},expression:"apiJurisdictionId"}},t._l(t.apiAuthoritysData,function(t,e){return i("el-option",{key:e,attrs:{label:t.api_authority_text,value:t.api_authority_text}})}),1)],1),t._v(" "),i("div",{staticClass:"btn"},[i("el-button",{attrs:{type:"primary"},on:{click:t.api}},[t._v("确定")]),t._v(" "),i("el-button",{attrs:{plain:""},on:{click:function(e){return t.reset(5)}}},[t._v("重置")])],1)]),t._v(" "),i("div",{staticClass:"user"},[t._m(4),t._v(" "),i("div",[i("el-select",{attrs:{placeholder:"请选择身份id"},model:{value:t.identityId3,callback:function(e){t.identityId3=e},expression:"identityId3"}},t._l(t.identitysData,function(t,e){return i("el-option",{key:e,attrs:{label:t.identity_text,value:t.identity_text}})}),1)],1),t._v(" "),i("div",[i("el-select",{attrs:{placeholder:"请选择视图权限id"},model:{value:t.viewJurisdictionId,callback:function(e){t.viewJurisdictionId=e},expression:"viewJurisdictionId"}},t._l(t.viewAuthoritysData,function(t,e){return i("el-option",{key:e,attrs:{label:t.view_authority_text,value:t.view_authority_text}})}),1)],1),t._v(" "),i("div",{staticClass:"btn"},[i("el-button",{attrs:{type:"primary"},on:{click:t.set}},[t._v("确定")]),t._v(" "),i("el-button",{attrs:{plain:""},on:{click:function(e){return t.reset(6)}}},[t._v("重置")])],1)])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("span",[t._v("添加身份")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("span",[t._v("添加api接口权限")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("span",[t._v("添加视图接口权限")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("span",[t._v("给身份设置api接口权限")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("span",[t._v("给身份设置视图权限")])])}],s=(i("4917"),i("7514"),i("96cf"),i("3b8d")),a=i("cebc"),u=i("c24c"),o=i.n(u),d=(i("01d7"),i("fbde")),c=i("2f62"),l=(i("3e8f"),{name:"Guide",data:function(){return{userId:"",userName:"",pwd:"",identityId:"",identityId2:"",identityId3:"",identityName:"",apiJurisdictionName:"",apiJurisdictionUrl:"",apiJurisdictionMethod:"",existingView:"",apiJurisdictionId:"",viewJurisdictionId:"",idx:0,driver:null}},computed:Object(a["a"])({},Object(c["e"])({identityViewAuthorityRelationsData:function(t){return t.userShow.identityViewAuthorityRelationsData},apiAuthoritysData:function(t){return t.userShow.apiAuthoritysData},viewAuthoritysData:function(t){return t.userShow.viewAuthoritysData},identitysData:function(t){return t.userShow.identitysData},userData:function(t){return t.userShow.userData},code:function(t){return t.userManagement.code},msg:function(t){return t.userManagement.msg}})),mounted:function(){this.driver=new o.a},methods:Object(a["a"])({},Object(c["b"])({setAddUsers:"userManagement/setAddUsers",setUpdataUserInfo:"userManagement/setUpdataUserInfo",setAddIdentity:"userManagement/setAddIdentity",setAddAuthorityApi:"userManagement/setAddAuthorityApi",setAddAuthorityView:"userManagement/setAddAuthorityView",setIdentityApi:"userManagement/setIdentityApi",setIdentityView:"userManagement/setIdentityView",setUserData:"userShow/setUserData",setidentity:"userShow/setidentity",setApiAuthority:"userShow/setApiAuthority",setViewAuthority:"userShow/setViewAuthority",setidentityViewAuthorityRelation:"userShow/setidentityViewAuthorityRelation"}),{change:function(t){this.idx=t},reset:function(t){1===t?(this.userId="",this.userName="",this.pwd="",this.identityId=""):2===t?this.identityName="":3===t?(this.apiJurisdictionName="",this.apiJurisdictionUrl="",this.apiJurisdictionMethod=""):4===t?this.existingView="":5===t?(this.identityId2="",this.apiJurisdictionId=""):6===t&&(this.identityId3="",this.viewJurisdictionId="")},user:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,n,r,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={},i={},e=this.identitysData.find(function(t){return t.identity_text===s.identityId}),i=this.userData.find(function(t){return t.user_name===s.userId}),0!==this.idx){t.next=19;break}if(n=/^[a-zA-Z0-9_-]{4,16}$/,r=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,this.userName.match(n)){t.next=11;break}return this.$message({showClose:!0,message:"请输入正确的用户名",type:"warning"}),t.abrupt("return",!1);case 11:if(this.pwd.match(r)){t.next=14;break}return this.$message({showClose:!0,message:"请输入正确的用户密码",type:"warning"}),t.abrupt("return",!1);case 14:return t.next=16,this.setAddUsers({user_name:this.userName,user_pwd:this.pwd,identity_id:e.identity_id});case 16:this.hint(),t.next=24;break;case 19:if(this.identityId){t.next=22;break}return this.$message({showClose:!0,message:"请选择身份id",type:"warning"}),t.abrupt("return",!1);case 22:return t.next=24,this.setUpdataUserInfo({user_id:i.user_id,user_name:this.userName,user_pwd:this.pwd,identity_id:e.identity_id});case 24:this.hint();case 25:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),identity:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.identityName){t.next=3;break}return this.$message({showClose:!0,message:"请输入身份名称",type:"warning"}),t.abrupt("return",!1);case 3:return t.next=5,this.setAddIdentity({identity_text:this.identityName});case 5:return this.hint(),t.next=8,this.setidentity();case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),jurisdiction:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.apiJurisdictionName){t.next=3;break}return this.$message({showClose:!0,message:"请输入api接口权限名称",type:"warning"}),t.abrupt("return",!1);case 3:if(this.apiJurisdictionUrl){t.next=6;break}return this.$message({showClose:!0,message:"请输入api接口权限url",type:"warning"}),t.abrupt("return",!1);case 6:if(this.apiJurisdictionMethod){t.next=9;break}return this.$message({showClose:!0,message:"请输入api接口权限方法",type:"warning"}),t.abrupt("return",!1);case 9:return t.next=11,this.setAddAuthorityApi({api_authority_text:this.apiJurisdictionName,api_authority_url:this.apiJurisdictionUrl,api_authority_method:this.apiJurisdictionMethod});case 11:return this.hint(),t.next=14,this.setApiAuthority();case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),view:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={},e=this.identityViewAuthorityRelationsData.find(function(t){return t.view_authority_text===i.existingView}),this.existingView){t.next=5;break}return this.$message({showClose:!0,message:"请选择已有视图",type:"warning"}),t.abrupt("return",!1);case 5:return t.next=7,this.setAddAuthorityView({view_authority_text:this.existingView,view_id:e.view_id});case 7:this.hint();case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),api:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={},i={},e=this.identitysData.find(function(t){return t.identity_text===n.identityId2}),i=this.apiAuthoritysData.find(function(t){return t.api_authority_text===n.apiJurisdictionId}),this.identityId2){t.next=6;break}return this.$message({showClose:!0,message:"请选择身份id",type:"warning"}),t.abrupt("return",!1);case 6:if(this.apiJurisdictionId){t.next=9;break}return this.$message({showClose:!0,message:"请选择api接口权限id",type:"warning"}),t.abrupt("return",!1);case 9:return t.next=11,this.setIdentityApi({identity_id:e.identity_id,api_authority_id:i.api_authority_id});case 11:this.hint();case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),set:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={},i={},e=this.identitysData.find(function(t){return t.identity_text===n.identityId3}),i=this.viewAuthoritysData.find(function(t){return t.view_authority_text===n.viewJurisdictionId}),this.identityId3){t.next=6;break}return this.$message({showClose:!0,message:"请选择身份id",type:"warning"}),t.abrupt("return",!1);case 6:if(this.viewJurisdictionId){t.next=9;break}return this.$message({showClose:!0,message:"请选择视图权限id",type:"warning"}),t.abrupt("return",!1);case 9:return t.next=11,this.setIdentityView({identity_id:e.identity_id,view_authority_id:i.view_authority_id});case 11:this.hint();case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),hint:function(){1==this.code?this.$message({message:this.msg,type:"success"}):this.$message({message:this.msg,type:"error"})}}),created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.setidentityViewAuthorityRelation();case 2:return t.next=4,this.setUserData();case 4:return t.next=6,this.setidentity();case 6:return t.next=8,this.setApiAuthority();case 8:return t.next=10,this.setViewAuthority();case 10:e=localStorage.getItem("guide_addUser"),e||(this.driver.defineSteps(d["a"]),this.driver.start(),localStorage.setItem("guide_addUser","true"));case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}),p=l,h=(i("d5c6"),i("2877")),y=Object(h["a"])(p,n,r,!1,null,"a803b950",null);e["default"]=y.exports},7514:function(t,e,i){"use strict";var n=i("5ca1"),r=i("0a49")(5),s="find",a=!0;s in[]&&Array(1)[s](function(){a=!1}),n(n.P+n.F*a,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(s)},c67f:function(t,e,i){},d5c6:function(t,e,i){"use strict";var n=i("c67f"),r=i.n(n);r.a},fbde:function(t,e,i){"use strict";var n=[{element:"#addUsers",popover:{title:"添加用户",description:"标题",position:"bottom"}},{element:"#box",popover:{title:"填写位置",description:"填写需要添加的内容",position:"bottom"}},{element:"#userShow",popover:{title:"用户展示",description:"标题",position:"bottom"}},{element:"#nav",popover:{title:"tab导航切换",description:"点击切换不同内容",position:"bottom"}},{element:"#tits",popover:{title:"数据类型",description:"根据tab导航切换不同数据类型",position:"bottom"}},{element:"#table",popover:{title:"数据展示",description:"根据tab导航切换不同数据内容",position:"bottom"},padding:0},{element:"#pagination",popover:{title:"分页器",description:"点击切换页码，页数",position:"top"},padding:0}];e["a"]=n}}]);