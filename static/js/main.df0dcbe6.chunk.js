(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(1),c=n.n(a),s=n(3),r=n.n(s),l=(n(13),n(4)),o=n(5),u=n(7),h=n(6);n(14),n(15);var j=function(t){return!isNaN(t)||"."===t},p=function(t){return"AC"===t||"+/-"===t||"%"===t},d=function(t){return Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(){return t.myAction(t.children)},className:" ".concat(j(t.children)?"Button_design":"".concat(p(t.children)?"light_blue":"Operator")," "),children:t.children})})};function O(t){return Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(){return t.myAction(t.children)},className:"SpecialZero",children:t.children})})}function m(t){var e=t.value,n=t.onChange;return Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"text",className:"Input_design",value:e,onChange:n})})}var b=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={input:"",Operation:"",Num2:"",clearFlag:"false"},t.Change=function(e){if("true"===t.state.clearFlag){var n=t.state.Num2;t.setState({Num2:n+e})}else{var i=t.state.input;t.setState({input:i+e})}},t.Action=function(e){if(isNaN(e)&&"."!==e){if("AC"===e)t.setState({input:"",Operation:"",Num2:"",clearFlag:"false"});else if("+"===e||"x"===e||"\xf7"===e||"-"===e||"="===e||"%"===e||"+/-"===e)if(""===t.state.Operation&&"="!==e)if("%"===e){var n=parseFloat(t.state.input)/100;t.setState({input:n+"",Operation:"",Num2:"",clearFlag:"true"})}else if("+/-"===e){var i=-1*parseFloat(t.state.input);t.setState({input:i+"",Operation:"",Num2:"",clearFlag:"true"})}else t.setState({Operation:e,clearFlag:"true"});else if("+"===t.state.Operation){var a=parseFloat(t.state.input)+parseFloat(t.state.Num2);"="===e?t.setState({input:a+"",Operation:"",Num2:"",clearFlag:"false"}):t.setState({input:a+"",Operation:e,Num2:"",clearFlag:"true"})}else if("x"===t.state.Operation){var c=parseFloat(t.state.input)*parseFloat(t.state.Num2);"="===e?t.setState({input:c+"",Operation:"",Num2:"",clearFlag:"false"}):t.setState({input:c+"",Operation:e,Num2:"",clearFlag:"true"})}else if("-"===t.state.Operation){var s=parseFloat(t.state.input)-parseFloat(t.state.Num2);"="===e?t.setState({input:s+"",Operation:"",Num2:"",clearFlag:"false"}):t.setState({input:s+"",Operation:e,Num2:"",clearFlag:"true"})}else if("\xf7"===t.state.Operation){var r=parseFloat(t.state.input)/parseFloat(t.state.Num2);"="===e?t.setState({input:r+"",Operation:"",Num2:"",clearFlag:"false"}):t.setState({input:r+"",Operation:e,Num2:"",clearFlag:"true"})}}else"true"===t.state.clearFlag?"."===e&&t.state.Num2.includes(".")?t.Change(""):t.Change(e):"."===e&&t.state.input.includes(".")?t.Change(""):t.Change(e)},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"Buttons_wrapper",children:[Object(i.jsx)(m,{value:this.state.input+this.state.Operation+this.state.Num2,onChange:this.Change,children:" "}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(d,{myAction:this.Action,children:"AC"}),Object(i.jsx)(d,{myAction:this.Action,children:"+/-"}),Object(i.jsx)(d,{myAction:this.Action,children:"%"}),Object(i.jsx)(d,{myAction:this.Action,children:"\xf7"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(d,{myAction:this.Action,children:"7"}),Object(i.jsx)(d,{myAction:this.Action,children:"8"}),Object(i.jsx)(d,{myAction:this.Action,children:"9"}),Object(i.jsx)(d,{myAction:this.Action,children:"x"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(d,{myAction:this.Action,children:"4"}),Object(i.jsx)(d,{myAction:this.Action,children:"5"}),Object(i.jsx)(d,{myAction:this.Action,children:"6"}),Object(i.jsx)(d,{myAction:this.Action,children:"-"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(d,{myAction:this.Action,children:"1"}),Object(i.jsx)(d,{myAction:this.Action,children:"2"}),Object(i.jsx)(d,{myAction:this.Action,children:"3"}),Object(i.jsx)(d,{myAction:this.Action,children:"+"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(O,{myAction:this.Action,children:"0"}),Object(i.jsx)(d,{myAction:this.Action,children:"."}),Object(i.jsx)(d,{myAction:this.Action,children:"="})]})]})})})}}]),n}(c.a.Component),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),i(t),a(t),c(t),s(t)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),A()}},[[16,1,2]]]);
//# sourceMappingURL=main.df0dcbe6.chunk.js.map