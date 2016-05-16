webpackJsonp([3],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=a(15),u=l(n),c=a(62),d=l(c),o=a(73),r=a(74),i=l(r),s=a(406),m={React:u["default"],ReactDOM:d["default"],Button:o.Button,Icon:o.Icon},f=u["default"].createClass({displayName:"Rhinostyle Button Example",render:function(){return u["default"].createElement("div",null,u["default"].createElement("h1",{className:"site-headline"},"Buttons"),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Types"),u["default"].createElement(o.Button,{type:"default"},"Default"),u["default"].createElement(o.Button,{type:"primary"},"Primary"),u["default"].createElement(o.Button,{type:"secondary"},"Secondary"),u["default"].createElement(o.Button,{type:"default",outline:!0},"Default Outline"),u["default"].createElement(o.Button,{type:"primary",outline:!0},"Primary Outline"),u["default"].createElement(o.Button,{type:"link"},"Link")),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Sizes"),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(o.Button,{type:"default",size:"large"},"Large"),u["default"].createElement(o.Button,{type:"default"},"Default"),u["default"].createElement(o.Button,{type:"default",size:"small"},"Small")),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(o.Button,{type:"default",size:"large"},"Large"),u["default"].createElement(o.Button,{type:"default",size:"large"},u["default"].createElement(o.Icon,{icon:"cog"})," Large"),u["default"].createElement(o.Button,{type:"default",size:"large",iconOnly:!0},u["default"].createElement(o.Icon,{icon:"cog"}))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(o.Button,{type:"default"},"Default"),u["default"].createElement(o.Button,{type:"default"},u["default"].createElement(o.Icon,{icon:"cog"})," Default"),u["default"].createElement(o.Button,{type:"default",iconOnly:!0},u["default"].createElement(o.Icon,{icon:"cog"}))),u["default"].createElement("div",null,u["default"].createElement(o.Button,{size:"small"},"Small"),u["default"].createElement(o.Button,{size:"small"},u["default"].createElement(o.Icon,{icon:"cog"})," Small"),u["default"].createElement(o.Button,{size:"small",iconOnly:!0},u["default"].createElement(o.Icon,{icon:"cog"})))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Modifiers"),u["default"].createElement("div",{className:"u-m-b-md"},u["default"].createElement("h5",{className:"site-miniheadline"},"Block Buttons"),u["default"].createElement("p",{className:"site-copy"},"Add ",u["default"].createElement("code",null,"block=","{true}")," to create a block level button."),u["default"].createElement(o.Button,{block:!0},"Block Button")),u["default"].createElement("div",null,u["default"].createElement("h5",{className:"site-miniheadline"},"Icon-Only Buttons"),u["default"].createElement("p",{className:"site-copy"},"Add ",u["default"].createElement("code",null,"iconOnly=","{true}")," when you have a button with an icon but no text. This modifier adjusts the padding to give a more square appearance."),u["default"].createElement(o.Button,{iconOnly:!0},u["default"].createElement(o.Icon,{icon:"sms"})),u["default"].createElement(o.Button,{type:"primary",iconOnly:!0},u["default"].createElement(o.Icon,{icon:"email"})),u["default"].createElement(o.Button,{type:"secondary",iconOnly:!0},u["default"].createElement(o.Icon,{icon:"cog"})),u["default"].createElement(o.Button,{outline:!0,iconOnly:!0},u["default"].createElement(o.Icon,{icon:"clock"})),u["default"].createElement(o.Button,{outline:!0,type:"primary",iconOnly:!0},u["default"].createElement(o.Icon,{icon:"pencil"})))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button States"),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(o.Button,null,"Default"),u["default"].createElement(o.Button,{classes:"active"},"Default Active"),u["default"].createElement(o.Button,{classes:"disabled"},"Default Disabled")),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(o.Button,{type:"primary"},"Primary"),u["default"].createElement(o.Button,{type:"primary",classes:"active"},"Primary Active"),u["default"].createElement(o.Button,{type:"primary",classes:"disabled"},"Primary Disabled")),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(o.Button,{type:"secondary"},"Secondary"),u["default"].createElement(o.Button,{type:"secondary",classes:"active"},"Secondary Active"),u["default"].createElement(o.Button,{type:"secondary",classes:"disabled"},"Secondary Disabled")),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(o.Button,{outline:!0},"Default Outline"),u["default"].createElement(o.Button,{outline:!0,classes:"active"},"Default Outline Active"),u["default"].createElement(o.Button,{outline:!0,classes:"disabled"},"Default Outline Disabled")),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(o.Button,{type:"primary",outline:!0},"Primary Outline"),u["default"].createElement(o.Button,{type:"primary",outline:!0,classes:"active"},"Primary Outline Active"),u["default"].createElement(o.Button,{type:"primary",outline:!0,classes:"disabled"},"Primary Outline Disabled"))),u["default"].createElement("section",null,u["default"].createElement("h3",{className:"site-subheadline"},"Playground"),u["default"].createElement(i["default"],{codeText:s,scope:m,noRender:!1})))}});d["default"].render(u["default"].createElement(f,null),document.getElementById("js-app"))},406:function(e,t){e.exports='var ComponentExample = React.createClass({\n  render() {\n    return (\n      <div>\n        <Button>Default</Button>\n        <Button type="primary">Primary</Button>\n        <Button type="secondary" iconOnly={true}><Icon icon="cog" /></Button>\n      </div>\n    );\n  }\n});\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});