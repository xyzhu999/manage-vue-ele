(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15372290"],{"015e":function(t,e,s){"use strict";var i=s("be71"),n=s.n(i);n.a},"3ce7":function(t,e,s){},7953:function(t,e,s){"use strict";var i=s("3ce7"),n=s.n(i);n.a},"7dab":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",{staticClass:"title"},[t._v("查看试题")]),t._v(" "),s("Checkitem")],1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[s("ul",{staticClass:"name_list"},[s("span",[t._v("课程类型:")]),t._v(" "),t._l(t.subject,function(e,i){return s("li",{key:i,on:{click:function(s){return t.subject_id(e)}}},[t._v(t._s(e.subject_text))])})],2),t._v(" "),s("ul",{staticClass:"select"},[s("li",[s("span",[t._v("考试类型:")]),t._v(" "),s("el-select",{attrs:{placeholder:"请选择"},on:{change:t.Type},model:{value:t.exam_id,callback:function(e){t.exam_id=e},expression:"exam_id"}},t._l(t.examType,function(t,e){return s("el-option",{key:e,attrs:{label:t.exam_name,value:t.exam_id}})}),1)],1),t._v(" "),s("li",{staticClass:"styles"},[s("span",[t._v("题目类型:")]),t._v(" "),s("el-select",{attrs:{placeholder:"请选择"},on:{change:t.Questions},model:{value:t.questions_type_id,callback:function(e){t.questions_type_id=e},expression:"questions_type_id"}},t._l(t.QuestionsType,function(t,e){return s("el-option",{key:e,attrs:{label:t.questions_type_text,value:t.questions_type_id}})}),1)],1),t._v(" "),s("li",{staticClass:"styles"},[s("el-button",{staticClass:"addbtn",attrs:{type:"text"},on:{click:t.submit}},[t._v("查询")])],1)])]),t._v(" "),s("div",{staticClass:"content"},t._l(t.questionsa,function(e,i){return s("div",{key:i,staticClass:"content_list"},[s("div",{staticClass:"con_list_left",on:{click:function(s){return t.detail(e)}}},[s("span",{staticClass:"robot"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"tab_list"},[s("span",[t._v(t._s(e.questions_type_text))]),t._v(" "),s("span",[t._v(t._s(e.subject_text))]),t._v(" "),s("span",[t._v(t._s(e.exam_name))])]),t._v(" "),s("p",{staticClass:"name_issue"},[t._v(t._s(e.user_name))])]),t._v(" "),s("div",{staticClass:"con_list_right"},[s("span",{on:{click:function(s){return t.compile(e)}}},[t._v("编辑")])])])}),0)])},u=[],c=s("f499"),o=s.n(c),_=s("cebc"),l=s("2f62"),r={data:function(){return{exam_id:"",subjectid:"",questions_type_id:""}},computed:Object(_["a"])({},Object(l["e"])({examType:function(t){return t.exam.examType},subject:function(t){return t.exam.subject},QuestionsType:function(t){return t.exam.getQuestionsType},questionsa:function(t){return t.exam.questions}})),created:function(){this.getitem(),this.subjects(),this.getQuestionsType(),this.questions()},methods:Object(_["a"])({Questions:function(t){this.questions_type_id=t},Type:function(t){this.exam_id=t}},Object(l["b"])({getitem:"exam/getitems",subjects:"exam/subjects",getQuestionsType:"exam/getQuestionsType",questions:"exam/questions",condition:"exam/condition"}),{subject_id:function(t){this.subjectid=t.subject_id},submit:function(){this.condition({subject_id:this.subjectid,exam_id:this.exam_id,questions_type_id:this.questions_type_id})},compile:function(t){this.$router.push({path:"/Additem/adds"}),sessionStorage.setItem("questions_id",o()(t.questions_id))},detail:function(t){this.$router.push({path:"/Additem/detail"}),sessionStorage.setItem("questions_ids",o()(t.questions_id))}})},d=r,p=(s("015e"),s("2877")),m=Object(p["a"])(d,a,u,!1,null,"f88b4478",null),f=m.exports,v={components:{Checkitem:f}},b=v,x=(s("7953"),Object(p["a"])(b,i,n,!1,null,"064c08a9",null));e["default"]=x.exports},a21f:function(t,e,s){var i=s("584a"),n=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},be71:function(t,e,s){},f499:function(t,e,s){t.exports=s("a21f")}}]);