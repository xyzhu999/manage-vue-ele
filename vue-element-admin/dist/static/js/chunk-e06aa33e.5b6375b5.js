(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e06aa33e"],{"827a":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"newExam"},[e("div",{staticClass:"head"},[t._v("创建试卷")]),t._v(" "),e("div",{staticClass:"bigBox"},[e("el-row",{staticClass:"add"},[e("el-button",[t._v("添加新题")])],1),t._v(" "),e("div",{staticClass:"style_exam"},[e("h2",[t._v(t._s(t.CreateExamDataFunState.title))]),t._v(" "),e("p",{staticClass:"top"},[t._v("考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于")]),t._v(" "),t._l(this.createDate,function(a,n){return e("div",{key:n,staticClass:"style_questionitem"},[e("div",{staticClass:"style_questionitem__3ETlC"},[e("h4",[t._v('\n            "1"\n            '),e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.handleDel(n)}}},[t._v("删除")])]),t._v(" "),e("div",{staticClass:"react-markdown"},[e("p",[t._v(t._s(a.title))]),t._v(" "),e("p"),t._v(" "),e("p",[t._v("示例 1:")]),t._v(" "),e("pre",[t._v("                "),e("code",[t._v("\n                  "+t._s(a.questions_stem)+"\n                ")]),t._v("\n            ")]),t._v(" "),e("p",[t._v("示例 2:")]),t._v(" "),e("pre",[t._v("                "),e("code",[t._v("\n                  "+t._s(a.questions_answer)+"\n                ")]),t._v("\n            ")]),t._v(" "),e("p"),t._v(" "),e("p",[t._v("\n              "+t._s(a.questions_type_text)+"\n              "),e("br")]),t._v(" "),e("p",[t._v(t._s(a.questions_answer))])])])])}),t._v(" "),e("button",{on:{click:t.handleClick}},[t._v("创建试卷")])],2)],1)])},i=[],s=e("f499"),o=e.n(s),r=e("cebc"),c=e("2f62"),u={data:function(){return{createDate:[],obj:"",examID:""}},computed:Object(r["a"])({},Object(c["e"])({CreateExamState:function(t){return t.examination.CreateExamData},CreateExamDataFunState:function(t){return t.examination.CreateExamDataFun},UpdateExamState:function(t){return t.examination.UpdateExamData}})),mounted:function(){this.createDate=JSON.parse(window.localStorage.getItem("CreateExam"))},methods:Object(r["a"])({},Object(c["d"])({CreateExamSave:"examination/getCreateExam",CreateExamFunSave:"examination/getCreateExamFun",UpdateExamSave:"examination/getUpdateExam"}),Object(c["b"])({CreateExam:"examination/CreateExam",UpdateExam:"examination/UpdateExam",AllExam:"examination/AllExam"}),{handleDel:function(t){var a=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.createDate.splice(t,1)}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},handleClick:function(){var t=this;this.examID=this.CreateExamState.exam_exam_id,this.CreateExamState.questions.map(function(a){return t.obj=a.questions_id,t.obj}),this.UpdateExam({question_ids:{question_ids:o()(this.obj)},examID:this.examID}),this.AllExam(),this.$router.push({path:"/examination/minationlist"})}}),created:function(){}},m=u,_=(e("da82"),e("2877")),v=Object(_["a"])(m,n,i,!1,null,"9bcdc884",null);a["default"]=v.exports},9998:function(t,a,e){},a21f:function(t,a,e){var n=e("584a"),i=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},da82:function(t,a,e){"use strict";var n=e("9998"),i=e.n(n);i.a},f499:function(t,a,e){t.exports=e("a21f")}}]);