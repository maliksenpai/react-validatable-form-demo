(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[629],{23508:function(e,r,a){"use strict";var n=a(95318);r.Z=void 0;var t=n(a(64938)),l=a(85893),o=(0,t.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");r.Z=o},53457:function(e,r,a){"use strict";a.d(r,{Z:function(){return f}});var n=a(63366),t=a(87462),l=a(67294),o=a(86010),s=a(77463),i=a(11496),u=a(33616),c=a(21420);function d(e){return(0,c.Z)("MuiFormGroup",e)}(0,a(11271).Z)("MuiFormGroup",["root","row"]);var v=a(85893);const p=["className","row"],h=(0,i.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,a.row&&r.row]}})((({ownerState:e})=>(0,t.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var f=l.forwardRef((function(e,r){const a=(0,u.Z)({props:e,name:"MuiFormGroup"}),{className:l,row:i=!1}=a,c=(0,n.Z)(a,p),f=(0,t.Z)({},a,{row:i}),x=(e=>{const{classes:r,row:a}=e,n={root:["root",a&&"row"]};return(0,s.Z)(n,d,r)})(f);return(0,v.jsx)(h,(0,t.Z)({className:(0,o.Z)(x.root,l),ownerState:f,ref:r},c))}))},25347:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/equality",function(){return a(22314)}])},49072:function(e,r,a){"use strict";var n=a(85893),t=a(82280),l=a(38895),o=a(22797),s=a(23508);var i=function(e){var r="____PLACEHOLDER____",a=[],n=JSON.stringify(e,(function(e,n){return"function"===typeof n?(a.push(n),r):(t=n,(null!=(l=RegExp)&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](t):t instanceof l)?(a.push("/"+n.source+"/"),r):n);var t,l}),2);return n=n.replace(new RegExp('"'+r+'"',"g"),(function(){return a.shift()}))};r.Z=function(e){var r=e.currentRules,a=e.header,u=void 0===a?"Current Rules":a;return(0,n.jsx)("div",{className:"currentRuleInfoDiv",children:(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(l.Z,{expandIcon:(0,n.jsx)(s.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsx)("span",{className:"currentRuleLabel",children:u})}),(0,n.jsx)(o.Z,{children:(0,n.jsx)("span",{className:"currentRuleString",children:i(r)})})]})})}},73952:function(e,r,a){"use strict";var n=a(85893),t=(a(25675),a(365));r.Z=function(e){var r,a=e.isValid,l="";return a?(r="".concat(t.O,"/valid.png"),l="valid"):(r="".concat(t.O,"/invalid.png"),l="invalid"),(0,n.jsxs)("div",{className:"validationResultDiv",children:[(0,n.jsx)("span",{children:"Validation Result: "}),(0,n.jsx)("img",{src:r,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,n.jsx)("span",{className:a?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},22314:function(e,r,a){"use strict";a.r(r);var n=a(85893),t=a(64459),l=a(2386),o=a(37840),s=a(73952),i=a(49072),u=a(53457),c=a(94054),d=a(50480),v=a(85071),p=a(56815),h={val:!1,val2:"aa",comparisonValue:"aba"},f=[{path:"val",ruleSet:[{rule:"required"},{rule:"equality",equalTo:!0}]},{path:"val2",ruleSet:[{rule:"required"},{rule:"equality",equalTo:function(e){return e.comparisonValue}}],dependantPaths:["comparisonValue"]}];r.default=function(){var e=(0,t.c)({rules:f,initialFormData:h}),r=e.isValid,a=e.setPathValue,x=e.getValue,m=e.getError;return(0,n.jsxs)(l.Z,{header:"equality",codeUrl:"components/rules/Equality.js",children:[(0,n.jsxs)("p",{className:"infoParagraph",children:[(0,n.jsx)("b",{children:"equality"})," rule checks if the given value is equal to comparison value."]}),(0,n.jsx)("div",{children:(0,n.jsx)(u.Z,{className:"checkboxOnRight",children:(0,n.jsx)(c.Z,{error:!!m("val"),children:(0,n.jsx)(d.Z,{control:(0,n.jsx)(v.Z,{checked:x("val")||!1,onChange:function(e){return a("val",e.target.checked)}}),label:(0,n.jsx)(p.Z,{children:m("val")||" "})})})})}),(0,n.jsxs)("div",{className:"comparisonDiv",children:[(0,n.jsx)(o.Z,{error:!!m("val2"),helperText:m("val2")||" ",label:"val2",type:"text",value:x("val2")||"",onChange:function(e){return a("val2",e.target.value)}}),(0,n.jsx)(o.Z,{className:"comparisonComponent",label:"comparisonValue",type:"text",value:x("comparisonValue"),onChange:function(e){return a("comparisonValue",e.target.value)}})]}),(0,n.jsx)(s.Z,{isValid:r}),(0,n.jsx)(i.Z,{currentRules:f})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return r=25347,e(e.s=r);var r}));var r=e.O();_N_E=r}]);