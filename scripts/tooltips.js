webpackJsonp([10],{0:function(t,e,l){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=l(3),o=a(n),i=l(7),s=a(i),d=l(9),r=l(15),u=a(r),p=l(676),c={React:o.default,ReactDOM:s.default,Button:d.Button,Icon:d.Icon,UtilityInlineGrid:d.UtilityInlineGrid},m=function(){return o.default.createElement("div",null,o.default.createElement("h1",{className:"site-headline"},"Tooltips"),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"About Tooltips"),o.default.createElement("p",{className:"site-text-lead"},"Our tooltips are handled purely by CSS via data attributes. These ",o.default.createElement("strong",null,"are not")," ReactJS components.")),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Tooltip Data Attributes"),o.default.createElement("div",{className:"site-copy"},o.default.createElement("p",null,"Pass tooltip text into any one of the following attributes."),o.default.createElement("p",null,o.default.createElement("code",null,"data-tooltip-top | data-tooltip-bottom | data-tooltip-left | data-tooltip-right")))),o.default.createElement("section",{className:"site-section"},o.default.createElement("h3",{className:"site-subheadline"},"Tooltips Playground"),o.default.createElement(u.default,{codeText:p,scope:c,noRender:!1})))};s.default.render(o.default.createElement(m,null),document.getElementById("js-app"))},676:function(t,e){t.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <UtilityInlineGrid>\n        <span data-tooltip-top="Well hello there!">tooltip top</span> <span data-tooltip-bottom="Well hello there!">tooltip bottom</span>\n        <span data-tooltip-left="Well hello there!">tooltip left</span>\n        <span data-tooltip-right="Well hello there!">tooltip right</span>\n        <a href="#" data-tooltip-top="Well hello there!">link with tooltip</a>\n        <Button data-tooltip-top="Well hello there!">Button with Tooltip</Button>\n      </UtilityInlineGrid>\n    );\n  }\n}\nReactDOM.render(<ComponentExample />, mountNode);\n'}});