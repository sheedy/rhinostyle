webpackJsonp([13],{0:function(e,l,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var n=t(3),i=a(n),s=t(8),c=a(s),d=t(12),u=t(15),o=a(u),r=t(634),p={className:"[Optional] - Include additional class name(s)",disabled:"[Optional] - Pill is disabled",icon:"[Optional] - Attaches an Icon to the Pill",onClick:"[Required] - Include click function for Pill",label:"[Required] - Include label for Pill",type:"[Optional] - Pill type, as a string -  [default | neutral]"},m={React:i["default"],ReactDOM:c["default"],Pill:d.Pill},f=function(){return i["default"].createElement("div",null,i["default"].createElement("h1",{className:"site-headline"},"Pills"),i["default"].createElement("section",{className:"site-section"},i["default"].createElement("h3",{className:"site-subheadline"},"Pills"),i["default"].createElement("p",{className:"site-text-lead"},"The Pill component is used to display current filters or selections.")),i["default"].createElement("section",null,i["default"].createElement("h3",{className:"site-subheadline"},"Playground"),i["default"].createElement(o["default"],{docClass:d.Pill,propDescriptionMap:p,codeText:r,scope:m,noRender:!1})))};c["default"].render(i["default"].createElement(f,null),document.getElementById("js-app"))},634:function(e,l){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-pills">\n        <Pill label="Default Pill" icon="cog" />\n        <Pill label="Default Pill" />\n        <Pill label="Default Pill Disabled" disabled />\n        <Pill label="Neutral Pill" type="neutral" icon="cog" />\n        <Pill label="Neutral Pill" type="neutral" />\n        <Pill label="Neutral Pill Disabled" type="neutral" disabled />\n        <br />\n        <Pill label="Click Me" onClick={() => alert(\'clicked!\')} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});