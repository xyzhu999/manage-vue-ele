(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07801870"],{"69e5":function(t,a,e){"use strict";var s=e("e5c8"),i=e.n(s);i.a},"7f15":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail"},[e("div",{staticClass:"head"},[t._v("试卷详情")]),t._v(" "),e("div",{staticClass:"bigBox"},[e("div",{staticClass:"left"},[e("div",{staticClass:"style_exam__2fYLs"},[e("div",{staticClass:"style_questionitem"},t._l(t.DetailExamState,function(a,s){return e("div",{key:s,staticClass:"style_questionitem__1TQyr"},[e("h4",[t._v("1、"+t._s(a.title))]),t._v(" "),e("div",{staticClass:"react-markdown"},[e("h2",[t._v(t._s(a.questions_type_text))]),t._v(" "),e("p",[t._v("\n                "+t._s(a.questions_answer)+"\n                "),e("br")]),t._v(" "),e("pre",[t._v("                  "),e("code",{staticClass:"language-js"},[t._v("\n                     "+t._s(a.questions_stem)+"\n                  ")]),t._v("\n              ")])])])}),0)])]),t._v(" "),e("div",{staticClass:"right"})])])},i=[],n=e("cebc"),c=e("2f62"),l={data:function(){return{detailData:[]}},computed:Object(n["a"])({},Object(c["e"])({DetailExamState:function(t){return t.examination.DetailExamData}})),methods:Object(n["a"])({},Object(c["d"])({DetailExamSave:"examination/getDetailExam"}),Object(c["b"])({DetailExam:"examination/DetailExam"})),mouted:function(){this.detailData=JSON.parse(window.localStorage.getItem("examID"))}},o=l,_=(e("69e5"),e("2877")),u=Object(_["a"])(o,s,i,!1,null,"417a104e",null);a["default"]=u.exports},e5c8:function(t,a,e){}}]);