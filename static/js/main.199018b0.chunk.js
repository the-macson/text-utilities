(this["webpackJsonptext-utilities"]=this["webpackJsonptext-utilities"]||[]).push([[0],{19:function(e,t,s){},27:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),o=s(15),c=s.n(o),i=(s(27),s(19),s(14)),a=s(2),l=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)(i.b,{to:"/text-utilities",children:"Home"}),Object(a.jsx)(i.b,{to:"/text-utilities/about",children:"About"})]})})},u=s(21),b=s(52),j=s(53),d=s(13),x=(s(37),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),s=t[0],r=t[1],o=function(){return""===s?0:!0===s.endsWith(" ")?s.split(" ").length-1:s.split(" ").length};return Object(a.jsx)(b.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Type Your Text here for Analyzing"}),Object(a.jsx)("div",{className:"box",children:Object(a.jsx)(j.a,{id:"myBox",value:s,onChange:function(e){r(e.target.value)},className:"textbox","aria-label":"minimum height",minRows:15,placeholder:"Enter your text here"})}),Object(a.jsxs)("button",{className:"btn1",onClick:function(){var e=s.toUpperCase();r(e),d.b.success("Your Text is converted into UpperCase",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:["Convert to UpperCase",Object(a.jsx)(d.a,{})]}),Object(a.jsx)("button",{className:"btn1",onClick:function(){var e=s.toLowerCase();r(e),d.b.success("Your Text is converted into LowerCase",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:"Convert to LowerCase"}),Object(a.jsx)("button",{className:"btn1",onClick:function(){r(""),d.b.success("Text is Cleared",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:"Clear Text"}),Object(a.jsx)("button",{className:"btn1",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value),d.b.success("Your Text is Copied",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:"Copy Text"}),Object(a.jsx)("button",{className:"btn1",onClick:function(){var e=s.split(/[ ]+/);r(e.join(" ")),d.b.success("Extra space is Removed",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:"Remove extra Space"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Your Text Summary"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:o()})," words and ",Object(a.jsx)("b",{children:s.length})," characters"]}),Object(a.jsxs)("p",{children:[.008*o()," Minutes read"]}),Object(a.jsx)("h2",{children:"Privew"}),s.length>0?s:"Enter something to perview here"]})]})})});var h=function(){return Object(a.jsx)("div",{className:"about",children:Object(a.jsx)("p",{children:"Using this website you can analyze your text and perform some opertaion on your text like converting into uppercase and converting into Lowercase also you can remove some extra space from paragraph"})})},p=s(3);var O=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(l,{}),Object(a.jsxs)(p.c,{children:[Object(a.jsx)(p.a,{exact:!0,path:"/text-utilities/about",children:Object(a.jsx)(h,{})}),Object(a.jsx)(p.a,{exact:!0,path:"/text-utilities",children:Object(a.jsx)(x,{})})]})]})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,54)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;s(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),g()}},[[38,1,2]]]);
//# sourceMappingURL=main.199018b0.chunk.js.map