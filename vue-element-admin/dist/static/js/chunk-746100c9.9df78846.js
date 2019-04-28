(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-746100c9"],{"0dd0":function(r,n,e){},"3f23":function(r,n){r.exports='/* Jison generated parser */\r\nvar jsonlint = (function(){\r\nvar parser = {trace: function trace() { },\r\nyy: {},\r\nsymbols_: {"error":2,"JSONString":3,"STRING":4,"JSONNumber":5,"NUMBER":6,"JSONNullLiteral":7,"NULL":8,"JSONBooleanLiteral":9,"TRUE":10,"FALSE":11,"JSONText":12,"JSONValue":13,"EOF":14,"JSONObject":15,"JSONArray":16,"{":17,"}":18,"JSONMemberList":19,"JSONMember":20,":":21,",":22,"[":23,"]":24,"JSONElementList":25,"$accept":0,"$end":1},\r\nterminals_: {2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},\r\nproductions_: [0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],\r\nperformAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {\r\n\r\nvar $0 = $$.length - 1;\r\nswitch (yystate) {\r\ncase 1: // replace escaped characters with actual character\r\n          this.$ = yytext.replace(/\\\\(\\\\|")/g, "$"+"1")\r\n                     .replace(/\\\\n/g,\'\\n\')\r\n                     .replace(/\\\\r/g,\'\\r\')\r\n                     .replace(/\\\\t/g,\'\\t\')\r\n                     .replace(/\\\\v/g,\'\\v\')\r\n                     .replace(/\\\\f/g,\'\\f\')\r\n                     .replace(/\\\\b/g,\'\\b\');\r\n        \r\nbreak;\r\ncase 2:this.$ = Number(yytext);\r\nbreak;\r\ncase 3:this.$ = null;\r\nbreak;\r\ncase 4:this.$ = true;\r\nbreak;\r\ncase 5:this.$ = false;\r\nbreak;\r\ncase 6:return this.$ = $$[$0-1];\r\nbreak;\r\ncase 13:this.$ = {};\r\nbreak;\r\ncase 14:this.$ = $$[$0-1];\r\nbreak;\r\ncase 15:this.$ = [$$[$0-2], $$[$0]];\r\nbreak;\r\ncase 16:this.$ = {}; this.$[$$[$0][0]] = $$[$0][1];\r\nbreak;\r\ncase 17:this.$ = $$[$0-2]; $$[$0-2][$$[$0][0]] = $$[$0][1];\r\nbreak;\r\ncase 18:this.$ = [];\r\nbreak;\r\ncase 19:this.$ = $$[$0-1];\r\nbreak;\r\ncase 20:this.$ = [$$[$0]];\r\nbreak;\r\ncase 21:this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);\r\nbreak;\r\n}\r\n},\r\ntable: [{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],12:1,13:2,15:7,16:8,17:[1,14],23:[1,15]},{1:[3]},{14:[1,16]},{14:[2,7],18:[2,7],22:[2,7],24:[2,7]},{14:[2,8],18:[2,8],22:[2,8],24:[2,8]},{14:[2,9],18:[2,9],22:[2,9],24:[2,9]},{14:[2,10],18:[2,10],22:[2,10],24:[2,10]},{14:[2,11],18:[2,11],22:[2,11],24:[2,11]},{14:[2,12],18:[2,12],22:[2,12],24:[2,12]},{14:[2,3],18:[2,3],22:[2,3],24:[2,3]},{14:[2,4],18:[2,4],22:[2,4],24:[2,4]},{14:[2,5],18:[2,5],22:[2,5],24:[2,5]},{14:[2,1],18:[2,1],21:[2,1],22:[2,1],24:[2,1]},{14:[2,2],18:[2,2],22:[2,2],24:[2,2]},{3:20,4:[1,12],18:[1,17],19:18,20:19},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:23,15:7,16:8,17:[1,14],23:[1,15],24:[1,21],25:22},{1:[2,6]},{14:[2,13],18:[2,13],22:[2,13],24:[2,13]},{18:[1,24],22:[1,25]},{18:[2,16],22:[2,16]},{21:[1,26]},{14:[2,18],18:[2,18],22:[2,18],24:[2,18]},{22:[1,28],24:[1,27]},{22:[2,20],24:[2,20]},{14:[2,14],18:[2,14],22:[2,14],24:[2,14]},{3:20,4:[1,12],20:29},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:30,15:7,16:8,17:[1,14],23:[1,15]},{14:[2,19],18:[2,19],22:[2,19],24:[2,19]},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:31,15:7,16:8,17:[1,14],23:[1,15]},{18:[2,17],22:[2,17]},{18:[2,15],22:[2,15]},{22:[2,21],24:[2,21]}],\r\ndefaultActions: {16:[2,6]},\r\nparseError: function parseError(str, hash) {\r\n    throw new Error(str);\r\n},\r\nparse: function parse(input) {\r\n    var self = this,\r\n        stack = [0],\r\n        vstack = [null], // semantic value stack\r\n        lstack = [], // location stack\r\n        table = this.table,\r\n        yytext = \'\',\r\n        yylineno = 0,\r\n        yyleng = 0,\r\n        recovering = 0,\r\n        TERROR = 2,\r\n        EOF = 1;\r\n\r\n    //this.reductionCount = this.shiftCount = 0;\r\n\r\n    this.lexer.setInput(input);\r\n    this.lexer.yy = this.yy;\r\n    this.yy.lexer = this.lexer;\r\n    if (typeof this.lexer.yylloc == \'undefined\')\r\n        this.lexer.yylloc = {};\r\n    var yyloc = this.lexer.yylloc;\r\n    lstack.push(yyloc);\r\n\r\n    if (typeof this.yy.parseError === \'function\')\r\n        this.parseError = this.yy.parseError;\r\n\r\n    function popStack (n) {\r\n        stack.length = stack.length - 2*n;\r\n        vstack.length = vstack.length - n;\r\n        lstack.length = lstack.length - n;\r\n    }\r\n\r\n    function lex() {\r\n        var token;\r\n        token = self.lexer.lex() || 1; // $end = 1\r\n        // if token isn\'t its numeric value, convert\r\n        if (typeof token !== \'number\') {\r\n            token = self.symbols_[token] || token;\r\n        }\r\n        return token;\r\n    }\r\n\r\n    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;\r\n    while (true) {\r\n        // retreive state number from top of stack\r\n        state = stack[stack.length-1];\r\n\r\n        // use default actions if available\r\n        if (this.defaultActions[state]) {\r\n            action = this.defaultActions[state];\r\n        } else {\r\n            if (symbol == null)\r\n                symbol = lex();\r\n            // read action for current state and first input\r\n            action = table[state] && table[state][symbol];\r\n        }\r\n\r\n        // handle parse error\r\n        _handle_error:\r\n        if (typeof action === \'undefined\' || !action.length || !action[0]) {\r\n\r\n            if (!recovering) {\r\n                // Report error\r\n                expected = [];\r\n                for (p in table[state]) if (this.terminals_[p] && p > 2) {\r\n                    expected.push("\'"+this.terminals_[p]+"\'");\r\n                }\r\n                var errStr = \'\';\r\n                if (this.lexer.showPosition) {\r\n                    errStr = \'Parse error on line \'+(yylineno+1)+":\\n"+this.lexer.showPosition()+"\\nExpecting "+expected.join(\', \') + ", got \'" + this.terminals_[symbol]+ "\'";\r\n                } else {\r\n                    errStr = \'Parse error on line \'+(yylineno+1)+": Unexpected " +\r\n                                  (symbol == 1 /*EOF*/ ? "end of input" :\r\n                                              ("\'"+(this.terminals_[symbol] || symbol)+"\'"));\r\n                }\r\n                this.parseError(errStr,\r\n                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});\r\n            }\r\n\r\n            // just recovered from another error\r\n            if (recovering == 3) {\r\n                if (symbol == EOF) {\r\n                    throw new Error(errStr || \'Parsing halted.\');\r\n                }\r\n\r\n                // discard current lookahead and grab another\r\n                yyleng = this.lexer.yyleng;\r\n                yytext = this.lexer.yytext;\r\n                yylineno = this.lexer.yylineno;\r\n                yyloc = this.lexer.yylloc;\r\n                symbol = lex();\r\n            }\r\n\r\n            // try to recover from error\r\n            while (1) {\r\n                // check for error recovery rule in this state\r\n                if ((TERROR.toString()) in table[state]) {\r\n                    break;\r\n                }\r\n                if (state == 0) {\r\n                    throw new Error(errStr || \'Parsing halted.\');\r\n                }\r\n                popStack(1);\r\n                state = stack[stack.length-1];\r\n            }\r\n\r\n            preErrorSymbol = symbol; // save the lookahead token\r\n            symbol = TERROR;         // insert generic error symbol as new lookahead\r\n            state = stack[stack.length-1];\r\n            action = table[state] && table[state][TERROR];\r\n            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error\r\n        }\r\n\r\n        // this shouldn\'t happen, unless resolve defaults are off\r\n        if (action[0] instanceof Array && action.length > 1) {\r\n            throw new Error(\'Parse Error: multiple actions possible at state: \'+state+\', token: \'+symbol);\r\n        }\r\n\r\n        switch (action[0]) {\r\n\r\n            case 1: // shift\r\n                //this.shiftCount++;\r\n\r\n                stack.push(symbol);\r\n                vstack.push(this.lexer.yytext);\r\n                lstack.push(this.lexer.yylloc);\r\n                stack.push(action[1]); // push state\r\n                symbol = null;\r\n                if (!preErrorSymbol) { // normal execution/no error\r\n                    yyleng = this.lexer.yyleng;\r\n                    yytext = this.lexer.yytext;\r\n                    yylineno = this.lexer.yylineno;\r\n                    yyloc = this.lexer.yylloc;\r\n                    if (recovering > 0)\r\n                        recovering--;\r\n                } else { // error just occurred, resume old lookahead f/ before error\r\n                    symbol = preErrorSymbol;\r\n                    preErrorSymbol = null;\r\n                }\r\n                break;\r\n\r\n            case 2: // reduce\r\n                //this.reductionCount++;\r\n\r\n                len = this.productions_[action[1]][1];\r\n\r\n                // perform semantic action\r\n                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1\r\n                // default location, uses first token for firsts, last for lasts\r\n                yyval._$ = {\r\n                    first_line: lstack[lstack.length-(len||1)].first_line,\r\n                    last_line: lstack[lstack.length-1].last_line,\r\n                    first_column: lstack[lstack.length-(len||1)].first_column,\r\n                    last_column: lstack[lstack.length-1].last_column\r\n                };\r\n                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);\r\n\r\n                if (typeof r !== \'undefined\') {\r\n                    return r;\r\n                }\r\n\r\n                // pop off stack\r\n                if (len) {\r\n                    stack = stack.slice(0,-1*len*2);\r\n                    vstack = vstack.slice(0, -1*len);\r\n                    lstack = lstack.slice(0, -1*len);\r\n                }\r\n\r\n                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)\r\n                vstack.push(yyval.$);\r\n                lstack.push(yyval._$);\r\n                // goto new state = table[STATE][NONTERMINAL]\r\n                newState = table[stack[stack.length-2]][stack[stack.length-1]];\r\n                stack.push(newState);\r\n                break;\r\n\r\n            case 3: // accept\r\n                return true;\r\n        }\r\n\r\n    }\r\n\r\n    return true;\r\n}};\r\n/* Jison generated lexer */\r\nvar lexer = (function(){\r\nvar lexer = ({EOF:1,\r\nparseError:function parseError(str, hash) {\r\n        if (this.yy.parseError) {\r\n            this.yy.parseError(str, hash);\r\n        } else {\r\n            throw new Error(str);\r\n        }\r\n    },\r\nsetInput:function (input) {\r\n        this._input = input;\r\n        this._more = this._less = this.done = false;\r\n        this.yylineno = this.yyleng = 0;\r\n        this.yytext = this.matched = this.match = \'\';\r\n        this.conditionStack = [\'INITIAL\'];\r\n        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};\r\n        return this;\r\n    },\r\ninput:function () {\r\n        var ch = this._input[0];\r\n        this.yytext+=ch;\r\n        this.yyleng++;\r\n        this.match+=ch;\r\n        this.matched+=ch;\r\n        var lines = ch.match(/\\n/);\r\n        if (lines) this.yylineno++;\r\n        this._input = this._input.slice(1);\r\n        return ch;\r\n    },\r\nunput:function (ch) {\r\n        this._input = ch + this._input;\r\n        return this;\r\n    },\r\nmore:function () {\r\n        this._more = true;\r\n        return this;\r\n    },\r\nless:function (n) {\r\n        this._input = this.match.slice(n) + this._input;\r\n    },\r\npastInput:function () {\r\n        var past = this.matched.substr(0, this.matched.length - this.match.length);\r\n        return (past.length > 20 ? \'...\':\'\') + past.substr(-20).replace(/\\n/g, "");\r\n    },\r\nupcomingInput:function () {\r\n        var next = this.match;\r\n        if (next.length < 20) {\r\n            next += this._input.substr(0, 20-next.length);\r\n        }\r\n        return (next.substr(0,20)+(next.length > 20 ? \'...\':\'\')).replace(/\\n/g, "");\r\n    },\r\nshowPosition:function () {\r\n        var pre = this.pastInput();\r\n        var c = new Array(pre.length + 1).join("-");\r\n        return pre + this.upcomingInput() + "\\n" + c+"^";\r\n    },\r\nnext:function () {\r\n        if (this.done) {\r\n            return this.EOF;\r\n        }\r\n        if (!this._input) this.done = true;\r\n\r\n        var token,\r\n            match,\r\n            tempMatch,\r\n            index,\r\n            col,\r\n            lines;\r\n        if (!this._more) {\r\n            this.yytext = \'\';\r\n            this.match = \'\';\r\n        }\r\n        var rules = this._currentRules();\r\n        for (var i=0;i < rules.length; i++) {\r\n            tempMatch = this._input.match(this.rules[rules[i]]);\r\n            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {\r\n                match = tempMatch;\r\n                index = i;\r\n                if (!this.options.flex) break;\r\n            }\r\n        }\r\n        if (match) {\r\n            lines = match[0].match(/\\n.*/g);\r\n            if (lines) this.yylineno += lines.length;\r\n            this.yylloc = {first_line: this.yylloc.last_line,\r\n                           last_line: this.yylineno+1,\r\n                           first_column: this.yylloc.last_column,\r\n                           last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}\r\n            this.yytext += match[0];\r\n            this.match += match[0];\r\n            this.yyleng = this.yytext.length;\r\n            this._more = false;\r\n            this._input = this._input.slice(match[0].length);\r\n            this.matched += match[0];\r\n            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);\r\n            if (this.done && this._input) this.done = false;\r\n            if (token) return token;\r\n            else return;\r\n        }\r\n        if (this._input === "") {\r\n            return this.EOF;\r\n        } else {\r\n            this.parseError(\'Lexical error on line \'+(this.yylineno+1)+\'. Unrecognized text.\\n\'+this.showPosition(), \r\n                    {text: "", token: null, line: this.yylineno});\r\n        }\r\n    },\r\nlex:function lex() {\r\n        var r = this.next();\r\n        if (typeof r !== \'undefined\') {\r\n            return r;\r\n        } else {\r\n            return this.lex();\r\n        }\r\n    },\r\nbegin:function begin(condition) {\r\n        this.conditionStack.push(condition);\r\n    },\r\npopState:function popState() {\r\n        return this.conditionStack.pop();\r\n    },\r\n_currentRules:function _currentRules() {\r\n        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;\r\n    },\r\ntopState:function () {\r\n        return this.conditionStack[this.conditionStack.length-2];\r\n    },\r\npushState:function begin(condition) {\r\n        this.begin(condition);\r\n    }});\r\nlexer.options = {};\r\nlexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {\r\n\r\nvar YYSTATE=YY_START\r\nswitch($avoiding_name_collisions) {\r\ncase 0:/* skip whitespace */\r\nbreak;\r\ncase 1:return 6\r\nbreak;\r\ncase 2:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 4\r\nbreak;\r\ncase 3:return 17\r\nbreak;\r\ncase 4:return 18\r\nbreak;\r\ncase 5:return 23\r\nbreak;\r\ncase 6:return 24\r\nbreak;\r\ncase 7:return 22\r\nbreak;\r\ncase 8:return 21\r\nbreak;\r\ncase 9:return 10\r\nbreak;\r\ncase 10:return 11\r\nbreak;\r\ncase 11:return 8\r\nbreak;\r\ncase 12:return 14\r\nbreak;\r\ncase 13:return \'INVALID\'\r\nbreak;\r\n}\r\n};\r\nlexer.rules = [/^(?:\\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\\.[0-9]+)?([eE][-+]?[0-9]+)?\\b)/,/^(?:"(?:\\\\[\\\\"bfnrt/]|\\\\u[a-fA-F0-9]{4}|[^\\\\\\0-\\x09\\x0a-\\x1f"])*")/,/^(?:\\{)/,/^(?:\\})/,/^(?:\\[)/,/^(?:\\])/,/^(?:,)/,/^(?::)/,/^(?:true\\b)/,/^(?:false\\b)/,/^(?:null\\b)/,/^(?:$)/,/^(?:.)/];\r\nlexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}};\r\n\r\n\r\n;\r\nreturn lexer;})()\r\nparser.lexer = lexer;\r\nreturn parser;\r\n})();\r\nif (typeof require !== \'undefined\' && typeof exports !== \'undefined\') {\r\nexports.parser = jsonlint;\r\nexports.parse = function () { return jsonlint.parse.apply(jsonlint, arguments); }\r\nexports.main = function commonjsMain(args) {\r\n    if (!args[1])\r\n        throw new Error(\'Usage: \'+args[0]+\' FILE\');\r\n    if (typeof process !== \'undefined\') {\r\n        var source = require(\'fs\').readFileSync(require(\'path\').join(process.cwd(), args[1]), "utf8");\r\n    } else {\r\n        var cwd = require("file").path(require("file").cwd());\r\n        var source = cwd.join(args[1]).read({charset: "utf-8"});\r\n    }\r\n    return exports.parser.parse(source);\r\n}\r\nif (typeof module !== \'undefined\' && require.main === module) {\r\n  exports.main(typeof process !== \'undefined\' ? process.argv.slice(1) : require("system").args);\r\n}\r\n}'},8822:function(r,n,e){(function(r){r(e("56b3"))})(function(r){"use strict";var n="CodeMirror-lint-markers";function e(n,e){var t=document.createElement("div");function i(n){if(!t.parentNode)return r.off(document,"mousemove",i);t.style.top=Math.max(0,n.clientY-t.offsetHeight-5)+"px",t.style.left=n.clientX+5+"px"}return t.className="CodeMirror-lint-tooltip",t.appendChild(e.cloneNode(!0)),document.body.appendChild(t),r.on(document,"mousemove",i),i(n),null!=t.style.opacity&&(t.style.opacity=1),t}function t(r){r.parentNode&&r.parentNode.removeChild(r)}function i(r){r.parentNode&&(null==r.style.opacity&&t(r),r.style.opacity=0,setTimeout(function(){t(r)},600))}function a(n,t,a){var o=e(n,t);function s(){r.off(a,"mouseout",s),o&&(i(o),o=null)}var l=setInterval(function(){if(o)for(var r=a;;r=r.parentNode){if(r&&11==r.nodeType&&(r=r.host),r==document.body)return;if(!r){s();break}}if(!o)return clearInterval(l)},400);r.on(a,"mouseout",s)}function o(r,n,e){this.marked=[],this.options=n,this.timeout=null,this.hasGutter=e,this.onMouseOver=function(n){v(r,n)},this.waitingFor=0}function s(r,n){return n instanceof Function?{getAnnotations:n}:(n&&!0!==n||(n={}),n)}function l(r){var e=r.state.lint;e.hasGutter&&r.clearGutter(n);for(var t=0;t<e.marked.length;++t)e.marked[t].clear();e.marked.length=0}function c(n,e,t,i){var o=document.createElement("div"),s=o;return o.className="CodeMirror-lint-marker-"+e,t&&(s=o.appendChild(document.createElement("div")),s.className="CodeMirror-lint-marker-multiple"),0!=i&&r.on(s,"mouseover",function(r){a(r,n,s)}),o}function u(r,n){return"error"==r?r:n}function f(r){for(var n=[],e=0;e<r.length;++e){var t=r[e],i=t.from.line;(n[i]||(n[i]=[])).push(t)}return n}function p(r){var n=r.severity;n||(n="error");var e=document.createElement("div");return e.className="CodeMirror-lint-message-"+n,"undefined"!=typeof r.messageHTML?e.innerHTML=r.messageHTML:e.appendChild(document.createTextNode(r.message)),e}function d(n,e,t){var i=n.state.lint,a=++i.waitingFor;function o(){a=-1,n.off("change",o)}n.on("change",o),e(n.getValue(),function(e,t){n.off("change",o),i.waitingFor==a&&(t&&e instanceof r&&(e=t),n.operation(function(){y(n,e)}))},t,n)}function h(n){var e=n.state.lint,t=e.options,i=t.options||t,a=t.getAnnotations||n.getHelper(r.Pos(0,0),"lint");if(a)if(t.async||a.async)d(n,a,i);else{var o=a(n.getValue(),i,n);if(!o)return;o.then?o.then(function(r){n.operation(function(){y(n,r)})}):n.operation(function(){y(n,o)})}}function y(r,e){l(r);for(var t=r.state.lint,i=t.options,a=f(e),o=0;o<a.length;++o){var s=a[o];if(s){for(var d=null,h=t.hasGutter&&document.createDocumentFragment(),y=0;y<s.length;++y){var m=s[y],k=m.severity;k||(k="error"),d=u(d,k),i.formatAnnotation&&(m=i.formatAnnotation(m)),t.hasGutter&&h.appendChild(p(m)),m.to&&t.marked.push(r.markText(m.from,m.to,{className:"CodeMirror-lint-mark-"+k,__annotation:m}))}t.hasGutter&&r.setGutterMarker(o,n,c(h,d,s.length>1,t.options.tooltips))}}i.onUpdateLinting&&i.onUpdateLinting(e,a,r)}function m(r){var n=r.state.lint;n&&(clearTimeout(n.timeout),n.timeout=setTimeout(function(){h(r)},n.options.delay||500))}function k(r,n){for(var e=n.target||n.srcElement,t=document.createDocumentFragment(),i=0;i<r.length;i++){var o=r[i];t.appendChild(p(o))}a(n,t,e)}function v(r,n){var e=n.target||n.srcElement;if(/\bCodeMirror-lint-mark-/.test(e.className)){for(var t=e.getBoundingClientRect(),i=(t.left+t.right)/2,a=(t.top+t.bottom)/2,o=r.findMarksAt(r.coordsChar({left:i,top:a},"client")),s=[],l=0;l<o.length;++l){var c=o[l].__annotation;c&&s.push(c)}s.length&&k(s,n)}}r.defineOption("lint",!1,function(e,t,i){if(i&&i!=r.Init&&(l(e),!1!==e.state.lint.options.lintOnChange&&e.off("change",m),r.off(e.getWrapperElement(),"mouseover",e.state.lint.onMouseOver),clearTimeout(e.state.lint.timeout),delete e.state.lint),t){for(var a=e.getOption("gutters"),c=!1,u=0;u<a.length;++u)a[u]==n&&(c=!0);var f=e.state.lint=new o(e,s(e,t),c);!1!==f.options.lintOnChange&&e.on("change",m),0!=f.options.tooltips&&"gutter"!=f.options.tooltips&&r.on(e.getWrapperElement(),"mouseover",f.onMouseOver),h(e)}}),r.defineExtension("performLint",function(){this.state.lint&&h(this)})})},a21f:function(r,n,e){var t=e("584a"),i=t.JSON||(t.JSON={stringify:JSON.stringify});r.exports=function(r){return i.stringify.apply(i,arguments)}},acdf:function(r,n,e){},ae67:function(r,n,e){e("f2b5")(e("3f23"))},d2de:function(r,n,e){(function(r){r(e("56b3"))})(function(r){"use strict";r.registerHelper("lint","json",function(n){var e=[];if(!window.jsonlint)return window.console&&window.console.error("Error: window.jsonlint not defined, CodeMirror JSON linting cannot run."),e;var t=window.jsonlint.parser||window.jsonlint;t.parseError=function(n,t){var i=t.loc;e.push({from:r.Pos(i.first_line-1,i.first_column),to:r.Pos(i.last_line-1,i.last_column),message:n})};try{t.parse(n)}catch(i){}return e})})},f2b5:function(r,n){r.exports=function(r){function n(r){"undefined"!==typeof console&&(console.error||console.log)("[Script Loader]",r)}function e(){return"undefined"!==typeof attachEvent&&"undefined"===typeof addEventListener}try{"undefined"!==typeof execScript&&e()?execScript(r):"undefined"!==typeof eval?eval.call(null,r):n("EvalError: No eval function available")}catch(t){n(t)}}},f499:function(r,n,e){r.exports=e("a21f")},f9d4:function(r,n,e){(function(r){r(e("56b3"))})(function(r){"use strict";r.defineMode("javascript",function(n,e){var t,i,a=n.indentUnit,o=e.statementIndent,s=e.jsonld,l=e.json||s,c=e.typescript,u=e.wordCharacters||/[\w$\xa1-\uffff]/,f=function(){function r(r){return{type:r,style:"keyword"}}var n=r("keyword a"),e=r("keyword b"),t=r("keyword c"),i=r("keyword d"),a=r("operator"),o={type:"atom",style:"atom"};return{if:r("if"),while:n,with:n,else:e,do:e,try:e,finally:e,return:i,break:i,continue:i,new:r("new"),delete:t,void:t,throw:t,debugger:r("debugger"),var:r("var"),const:r("var"),let:r("var"),function:r("function"),catch:r("catch"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:a,typeof:a,instanceof:a,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:r("this"),class:r("class"),super:r("atom"),yield:t,export:r("export"),import:r("import"),extends:t,await:t}}(),p=/[+\-*&%=<>!?|~^@]/,d=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function h(r){var n,e=!1,t=!1;while(null!=(n=r.next())){if(!e){if("/"==n&&!t)return;"["==n?t=!0:t&&"]"==n&&(t=!1)}e=!e&&"\\"==n}}function y(r,n,e){return t=r,i=e,n}function m(r,n){var e=r.next();if('"'==e||"'"==e)return n.tokenize=k(e),n.tokenize(r,n);if("."==e&&r.match(/^\d+(?:[eE][+\-]?\d+)?/))return y("number","number");if("."==e&&r.match(".."))return y("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(e))return y(e);if("="==e&&r.eat(">"))return y("=>","operator");if("0"==e&&r.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i))return y("number","number");if(/\d/.test(e))return r.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/),y("number","number");if("/"==e)return r.eat("*")?(n.tokenize=v,v(r,n)):r.eat("/")?(r.skipToEnd(),y("comment","comment")):Zr(r,n,1)?(h(r),r.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),y("regexp","string-2")):(r.eat("="),y("operator","operator",r.current()));if("`"==e)return n.tokenize=g,g(r,n);if("#"==e)return r.skipToEnd(),y("error","error");if(p.test(e))return">"==e&&n.lexical&&">"==n.lexical.type||(r.eat("=")?"!"!=e&&"="!=e||r.eat("="):/[<>*+\-]/.test(e)&&(r.eat(e),">"==e&&r.eat(e))),y("operator","operator",r.current());if(u.test(e)){r.eatWhile(u);var t=r.current();if("."!=n.lastType){if(f.propertyIsEnumerable(t)){var i=f[t];return y(i.type,i.style,t)}if("async"==t&&r.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return y("async","keyword",t)}return y("variable","variable",t)}}function k(r){return function(n,e){var t,i=!1;if(s&&"@"==n.peek()&&n.match(d))return e.tokenize=m,y("jsonld-keyword","meta");while(null!=(t=n.next())){if(t==r&&!i)break;i=!i&&"\\"==t}return i||(e.tokenize=m),y("string","string")}}function v(r,n){var e,t=!1;while(e=r.next()){if("/"==e&&t){n.tokenize=m;break}t="*"==e}return y("comment","comment")}function g(r,n){var e,t=!1;while(null!=(e=r.next())){if(!t&&("`"==e||"$"==e&&r.eat("{"))){n.tokenize=m;break}t=!t&&"\\"==e}return y("quasi","string-2",r.current())}var b="([{}])";function x(r,n){n.fatArrowAt&&(n.fatArrowAt=null);var e=r.string.indexOf("=>",r.start);if(!(e<0)){if(c){var t=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(r.string.slice(r.start,e));t&&(e=t.index)}for(var i=0,a=!1,o=e-1;o>=0;--o){var s=r.string.charAt(o),l=b.indexOf(s);if(l>=0&&l<3){if(!i){++o;break}if(0==--i){"("==s&&(a=!0);break}}else if(l>=3&&l<6)++i;else if(u.test(s))a=!0;else{if(/["'\/]/.test(s))return;if(a&&!i){++o;break}}}a&&!i&&(n.fatArrowAt=o)}}var w={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0};function $(r,n,e,t,i,a){this.indented=r,this.column=n,this.type=e,this.prev=i,this.info=a,null!=t&&(this.align=t)}function E(r,n){for(var e=r.localVars;e;e=e.next)if(e.name==n)return!0;for(var t=r.context;t;t=t.prev)for(e=t.vars;e;e=e.next)if(e.name==n)return!0}function _(r,n,e,t,i){var a=r.cc;S.state=r,S.stream=i,S.marked=null,S.cc=a,S.style=n,r.lexical.hasOwnProperty("align")||(r.lexical.align=!0);while(1){var o=a.length?a.pop():l?G:U;if(o(e,t)){while(a.length&&a[a.length-1].lex)a.pop()();return S.marked?S.marked:"variable"==e&&E(r,t)?"variable-2":n}}}var S={state:null,column:null,marked:null,cc:null};function M(){for(var r=arguments.length-1;r>=0;r--)S.cc.push(arguments[r])}function j(){return M.apply(null,arguments),!0}function N(r,n){for(var e=n;e;e=e.next)if(e.name==r)return!0;return!1}function A(r){var n=S.state;if(S.marked="def",n.context)if("var"==n.lexical.info&&n.context&&n.context.block){var t=O(r,n.context);if(null!=t)return void(n.context=t)}else if(!N(r,n.localVars))return void(n.localVars=new C(r,n.localVars));e.globalVars&&!N(r,n.globalVars)&&(n.globalVars=new C(r,n.globalVars))}function O(r,n){if(n){if(n.block){var e=O(r,n.prev);return e?e==n.prev?n:new I(e,n.vars,!0):null}return N(r,n.vars)?n:new I(n.prev,new C(r,n.vars),!1)}return null}function T(r){return"public"==r||"private"==r||"protected"==r||"abstract"==r||"readonly"==r}function I(r,n,e){this.prev=r,this.vars=n,this.block=e}function C(r,n){this.name=r,this.next=n}var R=new C("this",new C("arguments",null));function L(){S.state.context=new I(S.state.context,S.state.localVars,!1),S.state.localVars=R}function V(){S.state.context=new I(S.state.context,S.state.localVars,!0),S.state.localVars=null}function F(){S.state.localVars=S.state.context.vars,S.state.context=S.state.context.prev}function J(r,n){var e=function(){var e=S.state,t=e.indented;if("stat"==e.lexical.type)t=e.lexical.indented;else for(var i=e.lexical;i&&")"==i.type&&i.align;i=i.prev)t=i.indented;e.lexical=new $(t,S.stream.column(),r,null,e.lexical,n)};return e.lex=!0,e}function z(){var r=S.state;r.lexical.prev&&(")"==r.lexical.type&&(r.indented=r.lexical.indented),r.lexical=r.lexical.prev)}function P(r){function n(e){return e==r?j():";"==r||"}"==e||")"==e||"]"==e?M():j(n)}return n}function U(r,n){return"var"==r?j(J("vardef",n),$r,P(";"),z):"keyword a"==r?j(J("form"),Y,U,z):"keyword b"==r?j(J("form"),U,z):"keyword d"==r?S.stream.match(/^\s*$/,!1)?j():j(J("stat"),D,P(";"),z):"debugger"==r?j(P(";")):"{"==r?j(J("}"),V,fr,z,F):";"==r?j():"if"==r?("else"==S.state.lexical.info&&S.state.cc[S.state.cc.length-1]==z&&S.state.cc.pop()(),j(J("form"),Y,U,z,Nr)):"function"==r?j(Ir):"for"==r?j(J("form"),Ar,U,z):"class"==r||c&&"interface"==n?(S.marked="keyword",j(J("form","class"==r?r:n),Fr,z)):"variable"==r?c&&"declare"==n?(S.marked="keyword",j(U)):c&&("module"==n||"enum"==n||"type"==n)&&S.stream.match(/^\s*\w/,!1)?(S.marked="keyword","enum"==n?j(Xr):"type"==n?j(Rr,P("operator"),yr,P(";")):j(J("form"),Er,P("{"),J("}"),fr,z,z)):c&&"namespace"==n?(S.marked="keyword",j(J("form"),G,U,z)):c&&"abstract"==n?(S.marked="keyword",j(U)):j(J("stat"),ir):"switch"==r?j(J("form"),Y,P("{"),J("}","switch"),V,fr,z,z,F):"case"==r?j(G,P(":")):"default"==r?j(P(":")):"catch"==r?j(J("form"),L,q,U,z,F):"export"==r?j(J("stat"),Ur,z):"import"==r?j(J("stat"),Gr,z):"async"==r?j(U):"@"==n?j(G,U):M(J("stat"),G,P(";"),z)}function q(r){if("("==r)return j(Lr,P(")"))}function G(r,n){return B(r,n,!1)}function H(r,n){return B(r,n,!0)}function Y(r){return"("!=r?M():j(J(")"),G,P(")"),z)}function B(r,n,e){if(S.state.fatArrowAt==S.stream.start){var t=e?rr:Z;if("("==r)return j(L,J(")"),cr(Lr,")"),z,P("=>"),t,F);if("variable"==r)return M(L,Er,P("=>"),t,F)}var i=e?X:W;return w.hasOwnProperty(r)?j(i):"function"==r?j(Ir,i):"class"==r||c&&"interface"==n?(S.marked="keyword",j(J("form"),Vr,z)):"keyword c"==r||"async"==r?j(e?H:G):"("==r?j(J(")"),D,P(")"),z,i):"operator"==r||"spread"==r?j(e?H:G):"["==r?j(J("]"),Wr,z,i):"{"==r?ur(or,"}",null,i):"quasi"==r?M(K,i):"new"==r?j(nr(e)):"import"==r?j(G):j()}function D(r){return r.match(/[;\}\)\],]/)?M():M(G)}function W(r,n){return","==r?j(G):X(r,n,!1)}function X(r,n,e){var t=0==e?W:X,i=0==e?G:H;return"=>"==r?j(L,e?rr:Z,F):"operator"==r?/\+\+|--/.test(n)||c&&"!"==n?j(t):c&&"<"==n&&S.stream.match(/^([^>]|<.*?>)*>\s*\(/,!1)?j(J(">"),cr(yr,">"),z,t):"?"==n?j(G,P(":"),i):j(i):"quasi"==r?M(K,t):";"!=r?"("==r?ur(H,")","call",t):"."==r?j(ar,t):"["==r?j(J("]"),D,P("]"),z,t):c&&"as"==n?(S.marked="keyword",j(yr,t)):"regexp"==r?(S.state.lastType=S.marked="operator",S.stream.backUp(S.stream.pos-S.stream.start-1),j(i)):void 0:void 0}function K(r,n){return"quasi"!=r?M():"${"!=n.slice(n.length-2)?j(K):j(G,Q)}function Q(r){if("}"==r)return S.marked="string-2",S.state.tokenize=g,j(K)}function Z(r){return x(S.stream,S.state),M("{"==r?U:G)}function rr(r){return x(S.stream,S.state),M("{"==r?U:H)}function nr(r){return function(n){return"."==n?j(r?tr:er):"variable"==n&&c?j(br,r?X:W):M(r?H:G)}}function er(r,n){if("target"==n)return S.marked="keyword",j(W)}function tr(r,n){if("target"==n)return S.marked="keyword",j(X)}function ir(r){return":"==r?j(z,U):M(W,P(";"),z)}function ar(r){if("variable"==r)return S.marked="property",j()}function or(r,n){return"async"==r?(S.marked="property",j(or)):"variable"==r||"keyword"==S.style?(S.marked="property","get"==n||"set"==n?j(sr):(c&&S.state.fatArrowAt==S.stream.start&&(e=S.stream.match(/^\s*:\s*/,!1))&&(S.state.fatArrowAt=S.stream.pos+e[0].length),j(lr))):"number"==r||"string"==r?(S.marked=s?"property":S.style+" property",j(lr)):"jsonld-keyword"==r?j(lr):c&&T(n)?(S.marked="keyword",j(or)):"["==r?j(G,pr,P("]"),lr):"spread"==r?j(H,lr):"*"==n?(S.marked="keyword",j(or)):":"==r?M(lr):void 0;var e}function sr(r){return"variable"!=r?M(lr):(S.marked="property",j(Ir))}function lr(r){return":"==r?j(H):"("==r?M(Ir):void 0}function cr(r,n,e){function t(i,a){if(e?e.indexOf(i)>-1:","==i){var o=S.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),j(function(e,t){return e==n||t==n?M():M(r)},t)}return i==n||a==n?j():e&&e.indexOf(";")>-1?M(r):j(P(n))}return function(e,i){return e==n||i==n?j():M(r,t)}}function ur(r,n,e){for(var t=3;t<arguments.length;t++)S.cc.push(arguments[t]);return j(J(n,e),cr(r,n),z)}function fr(r){return"}"==r?j():M(U,fr)}function pr(r,n){if(c){if(":"==r||"in"==n)return j(yr);if("?"==n)return j(pr)}}function dr(r){if(c&&":"==r)return S.stream.match(/^\s*\w+\s+is\b/,!1)?j(G,hr,yr):j(yr)}function hr(r,n){if("is"==n)return S.marked="keyword",j()}function yr(r,n){return"keyof"==n||"typeof"==n||"infer"==n?(S.marked="keyword",j("typeof"==n?H:yr)):"variable"==r||"void"==n?(S.marked="type",j(gr)):"|"==n||"&"==n?j(yr):"string"==r||"number"==r||"atom"==r?j(gr):"["==r?j(J("]"),cr(yr,"]",","),z,gr):"{"==r?j(J("}"),cr(kr,"}",",;"),z,gr):"("==r?j(cr(vr,")"),mr,gr):"<"==r?j(cr(yr,">"),yr):void 0}function mr(r){if("=>"==r)return j(yr)}function kr(r,n){return"variable"==r||"keyword"==S.style?(S.marked="property",j(kr)):"?"==n||"number"==r||"string"==r?j(kr):":"==r?j(yr):"["==r?j(P("variable"),pr,P("]"),kr):"("==r?M(Cr,kr):void 0}function vr(r,n){return"variable"==r&&S.stream.match(/^\s*[?:]/,!1)||"?"==n?j(vr):":"==r?j(yr):"spread"==r?j(vr):M(yr)}function gr(r,n){return"<"==n?j(J(">"),cr(yr,">"),z,gr):"|"==n||"."==r||"&"==n?j(yr):"["==r?j(yr,P("]"),gr):"extends"==n||"implements"==n?(S.marked="keyword",j(yr)):"?"==n?j(yr,P(":"),yr):void 0}function br(r,n){if("<"==n)return j(J(">"),cr(yr,">"),z,gr)}function xr(){return M(yr,wr)}function wr(r,n){if("="==n)return j(yr)}function $r(r,n){return"enum"==n?(S.marked="keyword",j(Xr)):M(Er,pr,Mr,jr)}function Er(r,n){return c&&T(n)?(S.marked="keyword",j(Er)):"variable"==r?(A(n),j()):"spread"==r?j(Er):"["==r?ur(Sr,"]"):"{"==r?ur(_r,"}"):void 0}function _r(r,n){return"variable"!=r||S.stream.match(/^\s*:/,!1)?("variable"==r&&(S.marked="property"),"spread"==r?j(Er):"}"==r?M():"["==r?j(G,P("]"),P(":"),_r):j(P(":"),Er,Mr)):(A(n),j(Mr))}function Sr(){return M(Er,Mr)}function Mr(r,n){if("="==n)return j(H)}function jr(r){if(","==r)return j($r)}function Nr(r,n){if("keyword b"==r&&"else"==n)return j(J("form","else"),U,z)}function Ar(r,n){return"await"==n?j(Ar):"("==r?j(J(")"),Or,z):void 0}function Or(r){return"var"==r?j($r,Tr):"variable"==r?j(Tr):M(Tr)}function Tr(r,n){return")"==r?j():";"==r?j(Tr):"in"==n||"of"==n?(S.marked="keyword",j(G,Tr)):M(G,Tr)}function Ir(r,n){return"*"==n?(S.marked="keyword",j(Ir)):"variable"==r?(A(n),j(Ir)):"("==r?j(L,J(")"),cr(Lr,")"),z,dr,U,F):c&&"<"==n?j(J(">"),cr(xr,">"),z,Ir):void 0}function Cr(r,n){return"*"==n?(S.marked="keyword",j(Cr)):"variable"==r?(A(n),j(Cr)):"("==r?j(L,J(")"),cr(Lr,")"),z,dr,F):c&&"<"==n?j(J(">"),cr(xr,">"),z,Cr):void 0}function Rr(r,n){return"keyword"==r||"variable"==r?(S.marked="type",j(Rr)):"<"==n?j(J(">"),cr(xr,">"),z):void 0}function Lr(r,n){return"@"==n&&j(G,Lr),"spread"==r?j(Lr):c&&T(n)?(S.marked="keyword",j(Lr)):c&&"this"==r?j(pr,Mr):M(Er,pr,Mr)}function Vr(r,n){return"variable"==r?Fr(r,n):Jr(r,n)}function Fr(r,n){if("variable"==r)return A(n),j(Jr)}function Jr(r,n){return"<"==n?j(J(">"),cr(xr,">"),z,Jr):"extends"==n||"implements"==n||c&&","==r?("implements"==n&&(S.marked="keyword"),j(c?yr:G,Jr)):"{"==r?j(J("}"),zr,z):void 0}function zr(r,n){return"async"==r||"variable"==r&&("static"==n||"get"==n||"set"==n||c&&T(n))&&S.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(S.marked="keyword",j(zr)):"variable"==r||"keyword"==S.style?(S.marked="property",j(c?Pr:Ir,zr)):"number"==r||"string"==r?j(c?Pr:Ir,zr):"["==r?j(G,pr,P("]"),c?Pr:Ir,zr):"*"==n?(S.marked="keyword",j(zr)):c&&"("==r?M(Cr,zr):";"==r||","==r?j(zr):"}"==r?j():"@"==n?j(G,zr):void 0}function Pr(r,n){if("?"==n)return j(Pr);if(":"==r)return j(yr,Mr);if("="==n)return j(H);var e=S.state.lexical.prev,t=e&&"interface"==e.info;return M(t?Cr:Ir)}function Ur(r,n){return"*"==n?(S.marked="keyword",j(Dr,P(";"))):"default"==n?(S.marked="keyword",j(G,P(";"))):"{"==r?j(cr(qr,"}"),Dr,P(";")):M(U)}function qr(r,n){return"as"==n?(S.marked="keyword",j(P("variable"))):"variable"==r?M(H,qr):void 0}function Gr(r){return"string"==r?j():"("==r?M(G):M(Hr,Yr,Dr)}function Hr(r,n){return"{"==r?ur(Hr,"}"):("variable"==r&&A(n),"*"==n&&(S.marked="keyword"),j(Br))}function Yr(r){if(","==r)return j(Hr,Yr)}function Br(r,n){if("as"==n)return S.marked="keyword",j(Hr)}function Dr(r,n){if("from"==n)return S.marked="keyword",j(G)}function Wr(r){return"]"==r?j():M(cr(H,"]"))}function Xr(){return M(J("form"),Er,P("{"),J("}"),cr(Kr,"}"),z,z)}function Kr(){return M(Er,Mr)}function Qr(r,n){return"operator"==r.lastType||","==r.lastType||p.test(n.charAt(0))||/[,.]/.test(n.charAt(0))}function Zr(r,n,e){return n.tokenize==m&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(n.lastType)||"quasi"==n.lastType&&/\{\s*$/.test(r.string.slice(0,r.pos-(e||0)))}return F.lex=!0,z.lex=!0,{startState:function(r){var n={tokenize:m,lastType:"sof",cc:[],lexical:new $((r||0)-a,0,"block",!1),localVars:e.localVars,context:e.localVars&&new I(null,null,!1),indented:r||0};return e.globalVars&&"object"==typeof e.globalVars&&(n.globalVars=e.globalVars),n},token:function(r,n){if(r.sol()&&(n.lexical.hasOwnProperty("align")||(n.lexical.align=!1),n.indented=r.indentation(),x(r,n)),n.tokenize!=v&&r.eatSpace())return null;var e=n.tokenize(r,n);return"comment"==t?e:(n.lastType="operator"!=t||"++"!=i&&"--"!=i?t:"incdec",_(n,e,t,i,r))},indent:function(n,t){if(n.tokenize==v)return r.Pass;if(n.tokenize!=m)return 0;var i,s=t&&t.charAt(0),l=n.lexical;if(!/^\s*else\b/.test(t))for(var c=n.cc.length-1;c>=0;--c){var u=n.cc[c];if(u==z)l=l.prev;else if(u!=Nr)break}while(("stat"==l.type||"form"==l.type)&&("}"==s||(i=n.cc[n.cc.length-1])&&(i==W||i==X)&&!/^[,\.=+\-*:?[\(]/.test(t)))l=l.prev;o&&")"==l.type&&"stat"==l.prev.type&&(l=l.prev);var f=l.type,p=s==f;return"vardef"==f?l.indented+("operator"==n.lastType||","==n.lastType?l.info.length+1:0):"form"==f&&"{"==s?l.indented:"form"==f?l.indented+a:"stat"==f?l.indented+(Qr(n,t)?o||a:0):"switch"!=l.info||p||0==e.doubleIndentSwitch?l.align?l.column+(p?0:1):l.indented+(p?0:a):l.indented+(/^(?:case|default)\b/.test(t)?a:2*a)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:l?null:"/*",blockCommentEnd:l?null:"*/",blockCommentContinue:l?null:" * ",lineComment:l?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:l?"json":"javascript",jsonldMode:s,jsonMode:l,expressionAllowed:Zr,skipExpression:function(r){var n=r.cc[r.cc.length-1];n!=G&&n!=H||r.cc.pop()}}}),r.registerHelper("wordChars","javascript",/[\w$]/),r.defineMIME("text/javascript","javascript"),r.defineMIME("text/ecmascript","javascript"),r.defineMIME("application/javascript","javascript"),r.defineMIME("application/x-javascript","javascript"),r.defineMIME("application/ecmascript","javascript"),r.defineMIME("application/json",{name:"javascript",json:!0}),r.defineMIME("application/x-json",{name:"javascript",json:!0}),r.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),r.defineMIME("text/typescript",{name:"javascript",typescript:!0}),r.defineMIME("application/typescript",{name:"javascript",typescript:!0})})}}]);