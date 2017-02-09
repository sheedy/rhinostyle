webpackJsonp([5],{0:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var n=t(3),r=l(n),c=t(9),d=l(c),s=t(15),o=l(s),i=t(7),u=t(629),m={className:"[Optional] - Include additional class name(s)",size:"[Optional] - LoaderCircle size -  [small | large]",type:"[Optional] - LoaderCircle type -  [default | primary]"},p={React:r.default,ReactDOM:d.default,LoaderCircle:i.LoaderCircle},f=t(630),E={className:"[Optional] - Include additional class name(s)"},L={React:r.default,ReactDOM:d.default,LoaderLine:i.LoaderLine},y=t(631),C={className:"[Optional] - Include additional class name(s)",type:"[Optional] - LoaderPulse type -  [secondary | accent]"},N={React:r.default,ReactDOM:d.default,LoaderPulse:i.LoaderPulse},h=function(){return r.default.createElement("div",null,r.default.createElement("h1",{className:"site-headline"},"Loaders"),r.default.createElement("section",{className:"site-section"},r.default.createElement("h3",{className:"site-subheadline"},"LoaderCircle Types"),r.default.createElement("p",{className:"site-copy"},r.default.createElement("code",null,'type="default | primary"')),r.default.createElement(i.LoaderCircle,null)," ",r.default.createElement(i.LoaderCircle,{type:"primary"})),r.default.createElement("section",{className:"site-section"},r.default.createElement("h3",{className:"site-subheadline"},"LoaderCircle Sizes"),r.default.createElement("p",{className:"site-copy"},r.default.createElement("code",null,'size="small | large"')),r.default.createElement(i.LoaderCircle,{size:"small"})," ",r.default.createElement(i.LoaderCircle,null)," ",r.default.createElement(i.LoaderCircle,{size:"large"})),r.default.createElement("section",{className:"site-section"},r.default.createElement("h3",{className:"site-subheadline"},"LoaderCircle Playground"),r.default.createElement(o.default,{docClass:i.LoaderCircle,propDescriptionMap:m,codeText:u,scope:p,noRender:!1})),r.default.createElement("section",{className:"site-section"},r.default.createElement("h3",{className:"site-subheadline"},"LoaderPulse Types"),r.default.createElement("p",{className:"site-copy"},r.default.createElement("code",null,'type="default | secondary | accent"')),r.default.createElement(i.LoaderPulse,null),r.default.createElement("br",null),r.default.createElement(i.LoaderPulse,{type:"accent"}),r.default.createElement("br",null),r.default.createElement(i.LoaderPulse,{type:"secondary"})),r.default.createElement("section",{className:"site-section"},r.default.createElement("h3",{className:"site-subheadline"},"LoaderPulse Playground"),r.default.createElement(o.default,{docClass:i.LoaderPulse,propDescriptionMap:C,codeText:y,scope:N,noRender:!1})),r.default.createElement("section",{className:"site-section"},r.default.createElement("h3",{className:"site-subheadline"},"LoaderLine"),r.default.createElement(i.LoaderLine,null)),r.default.createElement("section",null,r.default.createElement("h3",{className:"site-subheadline"},"LoaderLine Playground"),r.default.createElement(o.default,{docClass:i.LoaderLine,propDescriptionMap:E,codeText:f,scope:L,noRender:!1})))};d.default.render(r.default.createElement(h,null),document.getElementById("js-app"))},629:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <LoaderCircle size="small" />\n        <LoaderCircle />\n        <LoaderCircle size="large" />\n        <LoaderCircle size="small" type="primary" />\n        <LoaderCircle type="primary" />\n        <LoaderCircle size="large" type="primary" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},630:function(e,a){e.exports="class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <LoaderLine />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"},631:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <LoaderPulse type="secondary" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});