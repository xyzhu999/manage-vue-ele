(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69ea46a0"],{"182b":function(t,a,e){"use strict";var i=e("c686"),s=e.n(i);s.a},"7f15":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detail"},[e("div",{staticClass:"head"},[t._v("试卷详情")]),t._v(" "),e("div",{staticClass:"bigBox"},[e("div",{staticClass:"left"},[e("div",{staticClass:"style_exam__2fYLs"},[e("div",{staticClass:"style_questionitem"},t._l(t.DetailExamState,function(a,i){return e("div",{key:i,staticClass:"style_questionitem__1TQyr"},[e("textarea",{attrs:{id:"text-input",oninput:"this.editor.update()",rows:"19",cols:"63"}},[t._v("                <h4>1、"+t._s(a.title)+'</h4>\n                <div class="react-markdown">\n                  <h2>'+t._s(a.questions_type_text)+"</h2>\n                  <p>\n                    "+t._s(a.questions_answer)+'\n                    <br>\n                  </p>\n                  <pre>\n                      <code class="language-js">\n                        '+t._s(a.questions_stem)+"\n                      </code>\n                  </pre>\n                </div>\n            ")])])}),0)])]),t._v(" "),e("div",{staticClass:"right"})])])},s=[],n=e("cebc"),c=e("2f62"),l=(e("1aea").markdown,{data:function(){return{detailData:[]}},computed:Object(n["a"])({},Object(c["e"])({DetailExamState:function(t){return t.examination.DetailExamData}})),methods:Object(n["a"])({},Object(c["d"])({DetailExamSave:"examination/getDetailExam"}),Object(c["b"])({DetailExam:"examination/DetailExam"})),mouted:function(){this.detailData=JSON.parse(window.localStorage.getItem("examID"))}}),o=l,r=(e("182b"),e("2877")),d=Object(r["a"])(o,i,s,!1,null,"9e337ea6",null);a["default"]=d.exports},c686:function(t,a,e){}}]);