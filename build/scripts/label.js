webpackJsonp([17],{0:function(e,l,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=t(3),c=a(n),d=t(8),r=a(d),i=t(9),u=t(15),o=a(u),m=t(645),s={className:"[Optional] - Include additional class name(s)",icon:"[Optional] - Icon name",iconBump:"[Optional] - Icon bump [down | up] - used to move icon up or down slightly for precise positioning",label:"[Required] - Label text",type:"[Optional] - Label type -  [default | primary | secondary | accent]"},b={React:c.default,ReactDOM:r.default,Label:i.Label,UtilityInlineGrid:i.UtilityInlineGrid},f=function(){return c.default.createElement("div",null,c.default.createElement("h1",{className:"site-headline"},"Labels"),c.default.createElement("section",{className:"site-section"},c.default.createElement("h3",{className:"site-subheadline"},"Label Types"),c.default.createElement("div",{className:"u-m-b"},c.default.createElement(i.UtilityInlineGrid,null,c.default.createElement(i.Label,{label:"DEFAULT"}),c.default.createElement(i.Label,{type:"secondary",label:"SECONDARY"}),c.default.createElement(i.Label,{type:"accent",label:"ACCENT"}),c.default.createElement(i.Label,{type:"danger",label:"DANGER"}),c.default.createElement(i.Label,{label:"DEFAULT",icon:"cog"}))),c.default.createElement("div",{className:"u-m-b"},c.default.createElement(i.UtilityInlineGrid,null,c.default.createElement(i.Label,{label:"Default"}),c.default.createElement(i.Label,{type:"secondary",label:"Secondary"}),c.default.createElement(i.Label,{type:"accent",label:"Accent"}),c.default.createElement(i.Label,{type:"danger",label:"Danger"}),c.default.createElement(i.Label,{label:"Default",icon:"cog"}))),c.default.createElement(i.UtilityInlineGrid,null,c.default.createElement(i.Label,{label:"default"}),c.default.createElement(i.Label,{type:"secondary",label:"secondary"}),c.default.createElement(i.Label,{type:"accent",label:"accent"}),c.default.createElement(i.Label,{type:"danger",label:"danger"}),c.default.createElement(i.Label,{label:"default",icon:"cog"}))),c.default.createElement("section",null,c.default.createElement("h3",{className:"site-subheadline"},"Playground"),c.default.createElement(o.default,{docClass:i.Label,propDescriptionMap:s,codeText:m,scope:b,noRender:!1})))};r.default.render(c.default.createElement(f,null),document.getElementById("js-app"))},645:function(e,l){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <UtilityInlineGrid>\n        <Label label="ben bruning" />\n        <Label type="secondary" label="craig anthony" />\n      </UtilityInlineGrid>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});