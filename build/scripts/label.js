webpackJsonp([17],{0:function(e,l,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=t(3),r=a(n),c=t(8),i=a(c),d=t(9),u=t(15),s=a(u),o=t(645),m={className:"[Optional] - Include additional class name(s)",label:"[Required] - Label text",type:"[Optional] - Label type -  [default | primary | secondary | accent]"},b={React:r.default,ReactDOM:i.default,Label:d.Label,UtilityInlineGrid:d.UtilityInlineGrid},p=function(){return r.default.createElement("div",null,r.default.createElement("h1",{className:"site-headline"},"Labels"),r.default.createElement("section",{className:"site-section"},r.default.createElement("h3",{className:"site-subheadline"},"Label Types"),r.default.createElement(d.UtilityInlineGrid,null,r.default.createElement(d.Label,{label:"default label"}),r.default.createElement(d.Label,{type:"primary",label:"primary label"}),r.default.createElement(d.Label,{type:"secondary",label:"secondary label"}),r.default.createElement(d.Label,{type:"accent",label:"accent label"}))),r.default.createElement("section",null,r.default.createElement("h3",{className:"site-subheadline"},"Playground"),r.default.createElement(s.default,{docClass:d.Label,propDescriptionMap:m,codeText:o,scope:b,noRender:!1})))};i.default.render(r.default.createElement(p,null),document.getElementById("js-app"))},645:function(e,l){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <UtilityInlineGrid>\n        <Label label="ben bruning" />\n        <Label type="primary" label="craig anthony" />\n      </UtilityInlineGrid>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});