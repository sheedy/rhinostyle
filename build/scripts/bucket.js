webpackJsonp([16],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=a(3),c=l(n),s=a(12),u=l(s),d=a(16),m=a(18),i=l(m),r=a(559),o={className:"[Optional] - Include additional class name(s)",size:"[Optional] - Bucket size -  [small]",type:"[Optional] - Bucket type -  [default | warm]"},f={React:c["default"],ReactDOM:u["default"],Bucket:d.Bucket},p=function(){return c["default"].createElement("div",null,c["default"].createElement("h1",{className:"site-headline"},"Buckets"),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"About Buckets"),c["default"].createElement("p",{className:"u-text-lead"},"Buckets are used to contain and separate portions of content.")),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Bucket Types"),c["default"].createElement("p",{className:"site-copy"},c["default"].createElement("code",null,'type="default | warm"')),c["default"].createElement("div",{className:"site-example-buckets"},c["default"].createElement(d.Bucket,null,"I'm a default bucket."),c["default"].createElement(d.Bucket,{type:"warm"},"I'm a warm bucket."))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Bucket Sizes"),c["default"].createElement("div",null,c["default"].createElement("p",{className:"site-copy"},c["default"].createElement("code",null,'size="small"')),c["default"].createElement("div",{className:"site-example-buckets"},c["default"].createElement(d.Bucket,{size:"small"},"I'm a small bucket.")))),c["default"].createElement("section",null,c["default"].createElement("h3",{className:"site-subheadline"},"Playground"),c["default"].createElement(i["default"],{docClass:d.Bucket,propDescriptionMap:o,codeText:r,scope:f,noRender:!1})))};u["default"].render(c["default"].createElement(p,null),document.getElementById("js-app"))},559:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-buckets">\n        <Bucket>Bucket son!</Bucket>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});