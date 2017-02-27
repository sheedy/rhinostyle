webpackJsonp([16],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var l=a(3),s=n(l),i=a(8),d=n(i),u=a(9),c=a(15),r=n(c),o=a(655),m={className:"[Optional] - Include additional class name(s)",type:"[Optional] - Message type -  [primary | note]",direction:"[Optional] - Message direction -  [inbound | outbound]"},f={React:s.default,ReactDOM:d.default,Message:u.Message,UtilityInlineGrid:u.UtilityInlineGrid},E=function(){return s.default.createElement("div",null,s.default.createElement("h1",{className:"site-headline"},"Messages"),s.default.createElement("section",{className:"site-section"},s.default.createElement("h3",{className:"site-subheadline"},"Message Types"),s.default.createElement("p",{className:"site-copy"},s.default.createElement("code",null,'type="default | primary | note"')),s.default.createElement(u.UtilityInlineGrid,null,s.default.createElement("div",null,s.default.createElement(u.Message,null,"Default Message ",s.default.createElement("a",{href:"#"},"www.linktosomething.com"))),s.default.createElement("div",null,s.default.createElement(u.Message,{type:"primary"},"Primary Message ",s.default.createElement("a",{href:"#"},"www.linktosomething.com"))),s.default.createElement("div",null,s.default.createElement(u.Message,{type:"note"},"Note Message ",s.default.createElement("a",{href:"#"},"www.linktosomething.com"))))),s.default.createElement("section",{className:"site-section"},s.default.createElement("h3",{className:"site-subheadline"},"Message Direction"),s.default.createElement("div",{className:"u-m-b-md"},s.default.createElement("h5",{className:"site-miniheadline"},"Inbound Message"),s.default.createElement("p",{className:"site-copy"},s.default.createElement("code",null,'direction="inbound"')),s.default.createElement(u.UtilityInlineGrid,null,s.default.createElement("div",null,s.default.createElement(u.Message,{direction:"inbound"},"Default Message")),s.default.createElement("div",null,s.default.createElement(u.Message,{direction:"inbound",type:"primary"},"Primary Message")),s.default.createElement("div",null,s.default.createElement(u.Message,{direction:"inbound",type:"note"},"Note Message")))),s.default.createElement("div",{className:"u-m-b-md"},s.default.createElement("h5",{className:"site-miniheadline"},"Outbound Message"),s.default.createElement("p",{className:"site-copy"},s.default.createElement("code",null,'direction="outbound"')),s.default.createElement(u.UtilityInlineGrid,null,s.default.createElement("div",null,s.default.createElement(u.Message,{direction:"outbound"},"Default Message")),s.default.createElement("div",null,s.default.createElement(u.Message,{direction:"outbound",type:"primary"},"Primary Message")),s.default.createElement("div",null,s.default.createElement(u.Message,{direction:"outbound",type:"note"},"Note Message"))))),s.default.createElement("section",null,s.default.createElement("h3",{className:"site-subheadline"},"Playground"),s.default.createElement(r.default,{docClass:u.Message,propDescriptionMap:m,codeText:o,scope:f,noRender:!1})))};d.default.render(s.default.createElement(E,null),document.getElementById("js-app"))},655:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <UtilityInlineGrid>\n        <div>\n          <Message direction="outbound" type="note">\n            This is a note.\n          </Message>\n        </div>\n        <div>\n          <Message direction="inbound">\n            This is a default message.\n          </Message>\n        </div>\n      </UtilityInlineGrid>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});