webpackJsonp([7],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var c=a(3),u=n(c),l=a(10),d=n(l),s=a(12),r=a(16),i=n(r),o=a(606),m={className:"[Optional] - Include additional class name(s)",size:"[Optional] - Bucket size -  [small]",type:"[Optional] - Bucket type -  [default | primary]"},B={React:u["default"],ReactDOM:d["default"],Bucket:s.Bucket,BucketBody:s.BucketBody,BucketHeader:s.BucketHeader,Icon:s.Icon,Table:s.Table},k=a(607),p={className:"[Optional] - Include additional class name(s)",icon:"[Optional] - Icon name",iconClassName:"[Optional] - Include additional class name(s) for icon",title:"[Optional] - Include tile for header"},f={React:u["default"],ReactDOM:d["default"],BucketHeader:s.BucketHeader,Icon:s.Icon},y=function(){return u["default"].createElement("div",null,u["default"].createElement("h1",{className:"site-headline"},"Buckets"),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Buckets"),u["default"].createElement("p",{className:"site-text-lead"},"Buckets are used to contain and separate portions of content. Buckets are most often constructed using ",u["default"].createElement("span",{className:"u-text-accent"},"BucketHeader")," and ",u["default"].createElement("span",{className:"u-text-accent"},"BucketBody")," child components.")),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Bucket Types"),u["default"].createElement("p",{className:"site-copy"},u["default"].createElement("code",null,'type="default | primary"')),u["default"].createElement("div",{className:"site-example-buckets"},u["default"].createElement(s.Bucket,null,u["default"].createElement(s.BucketHeader,{title:"Bucket Header",icon:"pencil"}),u["default"].createElement(s.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.")),u["default"].createElement(s.Bucket,{type:"primary"},u["default"].createElement(s.BucketHeader,{title:"Bucket Header",icon:"sms"}),u["default"].createElement(s.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.")))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Bucket Sizes"),u["default"].createElement("div",null,u["default"].createElement("p",{className:"site-copy"},u["default"].createElement("code",null,'size="small"')),u["default"].createElement("div",{className:"site-example-buckets"},u["default"].createElement(s.Bucket,{size:"small"},u["default"].createElement(s.BucketHeader,{title:"Bucket Header",icon:"pencil"}),u["default"].createElement(s.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros."))))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Bucket Playground"),u["default"].createElement(i["default"],{docClass:s.Bucket,propDescriptionMap:m,codeText:o,scope:B,noRender:!1})),u["default"].createElement("section",null,u["default"].createElement("h3",{className:"site-subheadline"},"Bucket Header Playground"),u["default"].createElement(i["default"],{docClass:s.BucketHeader,propDescriptionMap:p,codeText:k,scope:f,noRender:!1})))};d["default"].render(u["default"].createElement(y,null),document.getElementById("js-app"))},606:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-buckets">\n\n        <Bucket>\n          <BucketHeader title="Bucket Header" avatar="//source.unsplash.com/category/people/200x200" />\n          <BucketBody>Bucket body.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <BucketHeader title="Bucket Header" icon="pencil" />\n          <BucketBody>Bucket body.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <BucketHeader title="Bucket Header With Background" icon="pencil" className="u-bg-gray-lightest" />\n          <BucketBody>Bucket body.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <BucketHeader className="u-flex-justify-between" title="Bucket Header With Extra Content" icon="pencil">\n            <div>\n              <a href="" className="u-text-underline">Edit</a> | <a href="" className="u-text-underline">Delete</a>\n            </div>\n          </BucketHeader>\n          <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <BucketHeader className="u-bg-gray-lightest" avatar="//source.unsplash.com/category/people/200x200">Bucket Header Without Title Property</BucketHeader>\n          <BucketBody>Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.</BucketBody>\n        </Bucket>\n        \n        <Bucket>\n          <BucketBody>Bucket body in a default bucket.</BucketBody>\n        </Bucket>\n\n        <Bucket type="primary">\n          <BucketBody>Bucket body in a primary bucket.</BucketBody>\n        </Bucket>\n\n        <Bucket size="small">\n          <BucketBody>Bucket body in a small bucket.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <BucketBody className="u-bg-gray-lightest">Bucket body with background.</BucketBody>\n        </Bucket>\n\n        <Bucket>\n          <Table>\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Username</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>1</td>\n              <td>Ben</td>\n              <td>Bruning</td>\n              <td>@bruning</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>Blake</td>\n              <td>Guilloud</td>\n              <td>@guilloud</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>Keaton</td>\n              <td>Foster</td>\n              <td>@foster</td>\n            </tr>\n          </tbody>\n        </Table>\n        </Bucket>\n        \n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},607:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-bucketheaders">\n\n        <BucketHeader title="Bucket Header" avatar="//source.unsplash.com/category/people/200x200" />\n        \n        <BucketHeader title="Bucket Header" icon="pencil" />\n\n        <BucketHeader title="Bucket Header With Color" icon="pencil" className="u-text-danger" />\n\n        <BucketHeader title="Bucket Header With Colored Icon" icon="pencil" iconClassName="u-text-success" />\n\n        <BucketHeader title="Bucket Header Without Icon" />\n\n        <BucketHeader className="u-flex-justify-between" title="Bucket Header With Extra Content" icon="sms">\n          <div>\n            <a href="" className="u-text-underline">Edit</a> | <a href="" className="u-text-underline">Delete</a>\n          </div>\n        </BucketHeader>\n\n        <BucketHeader>\n          <Icon icon="sms" className="u-m-r-sm" /> Bucket Header Without Title or Icon Props\n        </BucketHeader>\n\n        <BucketHeader>\n          Bucket Header Without Title or Icon Props\n        </BucketHeader>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});