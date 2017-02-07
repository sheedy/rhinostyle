webpackJsonp([14],{0:function(e,l,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=t(3),i=n(a),c=t(10),d=n(c),s=t(8),r=t(15),u=n(r),o=t(655),p={className:"[Optional] - Include additional class name(s)",disabled:"[Optional] - Pill is disabled",icon:"[Optional] - Attaches an Icon to the Pill",onClick:"[Required] - Include click function for Pill",label:"[Required] - Include label for Pill",type:"[Optional] - Pill type, as a string -  [default | neutral]"},f={React:i.default,ReactDOM:d.default,Pill:s.Pill,UtilityInlineGrid:s.UtilityInlineGrid},m=function(){return i.default.createElement("div",null,i.default.createElement("h1",{className:"site-headline"},"Pills"),i.default.createElement("section",{className:"site-section"},i.default.createElement("h3",{className:"site-subheadline"},"Pills"),i.default.createElement("p",{className:"site-text-lead"},"The Pill component is used to display current filters or selections.")),i.default.createElement("section",null,i.default.createElement("h3",{className:"site-subheadline"},"Playground"),i.default.createElement(u.default,{docClass:s.Pill,propDescriptionMap:p,codeText:o,scope:f,noRender:!1})))};d.default.render(i.default.createElement(m,null),document.getElementById("js-app"))},655:function(e,l){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <UtilityInlineGrid>\n        <Pill label="Default Pill" icon="cog" />\n        <Pill label="Default Pill" />\n        <Pill label="Default Pill Disabled" disabled />\n        <Pill label="Neutral Pill" type="neutral" icon="cog" />\n        <Pill label="Neutral Pill" type="neutral" />\n        <Pill label="Neutral Pill Disabled" type="neutral" disabled />\n        <br />\n        <Pill label="Click Me" onClick={() => alert(\'clicked!\')} />\n      </UtilityInlineGrid>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});