webpackJsonp([4],{0:function(e,a,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var s=n(3),i=t(s),r=n(8),l=t(r),o=n(12),m=n(15),d=t(m),u=n(612),h=n(615),v=n(613),c=n(614),N={className:"[Optional] - Additional class to add to cover div"},C={icon:"[Optional] - Attaches an Icon to the Cover Header",iconClassName:"[Optional] - Adds a class to the Cover Header icon",onClose:"[Optional] - Callback function to execute in addition to closing the cover",title:"[Optional] - Cover Title -  String to represent the Cover Header"},g={size:"[Optional] - Container size -  [ sm | md | lg ] - defaults to a small sized cover body"},p={React:i["default"],ReactDOM:l["default"],Button:o.Button,Input:o.Input,Cover:o.Cover,CoverSystem:o.CoverSystem,CoverHeader:o.CoverHeader,CoverBody:o.CoverBody,CoverFooter:o.CoverFooter,Icon:o.Icon},f=function(){return i["default"].createElement("div",null,i["default"].createElement("h1",{className:"site-headline"},"Covers"),i["default"].createElement("section",{className:"site-section"},i["default"].createElement("h3",{className:"site-subheadline"},"Cover Example"),i["default"].createElement("p",{className:"site-copy"},"You can inject a cover by calling ",i["default"].createElement("code",null,"CoverSystem.addCover(cover)"),", where ",i["default"].createElement("code",null,"cover")," can be ",i["default"].createElement("code",null,"Cover")," containing ",i["default"].createElement("code",null,"CoverHeader"),", ",i["default"].createElement("code",null,"CoverBody"),", ",i["default"].createElement("code",null,"CoverFooter"),"."),i["default"].createElement(d["default"],{docClass:o.Cover,propDescriptionMap:N,codeText:u,scope:p,noRender:!1})),i["default"].createElement("section",{className:"site-section"},i["default"].createElement("h3",{className:"site-subheadline"},"CoverHeader"),i["default"].createElement(d["default"],{docClass:o.CoverHeader,propDescriptionMap:C,codeText:h,scope:p,noRender:!1})),i["default"].createElement("section",{className:"site-section"},i["default"].createElement("h3",{className:"site-subheadline"},"CoverBody"),i["default"].createElement(d["default"],{docClass:o.CoverBody,propDescriptionMap:g,codeText:v,scope:p,noRender:!1})),i["default"].createElement("section",{className:"site-section"},i["default"].createElement("h3",{className:"site-subheadline"},"CoverFooter"),i["default"].createElement(d["default"],{docClass:o.CoverFooter,codeText:c,scope:p,noRender:!1})))};l["default"].render(i["default"].createElement(f,null),document.getElementById("js-app"))},612:function(e,a){e.exports='class ComponentExample extends React.Component {\n  state = {\n    firstName: \'\',\n    lastName: \'\',\n  }\n\n  onClick = () => {\n    CoverSystem.addCover(this.renderContent());\n  };\n\n  closeCover = () => {\n    CoverSystem.removeCover();\n  }\n\n  handleChange = (name, value) => {\n    const newState = {};\n\n    newState[name] = value;\n    this.setState(newState);\n  }\n\n  saveChanges = () => {\n    const errors = {};\n\n    if (!this.state.firstName) {\n      errors.firstName = \'FirstName is required!\';\n    }\n\n    if (!this.state.lastName) {\n      errors.lastName = \'LastName is required!\';\n    }\n\n    const errorCount  = Object.keys(errors).length\n\n    if (errorCount > 0) {\n      CoverSystem.refreshCover(this.renderContent(errors));\n    } else {\n      alert(\'Changes were saved!\');\n      this.closeCover();\n    }\n  }\n\n  renderContent = (errors) => {\n    const errorList = errors || {};\n\n    return (\n      <Cover>\n        <CoverHeader icon="pencil" title="This is a sample Cover" />\n        <CoverBody>\n          <div className="form">\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div className="form__group">\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n          </div>\n        </CoverBody>\n        <CoverFooter>\n          <div className="u-text-right">\n            <Button type="default" onClick={this.closeCover}>Close</Button>&nbsp;\n            <Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>\n          </div>\n        </CoverFooter>\n      </Cover>\n    );\n  }\n\n  render() {\n    return (\n      <div>\n        <Button type="primary" onClick={this.onClick}>Launch Cover</Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},613:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverBody>\n        <div className="form">\n          <div className="form__group">\n            <Input label="First Name" name="firstName" initialValue="First Name" validationMessage="" required />\n          </div>\n          <div>\n            <Input label="Last Name" name="lastName" initialValue="" validationMessage="LastName is required!" required />\n          </div>\n        </div>\n      </CoverBody>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},614:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverFooter>\n        <div className="u-text-right">\n          <Button type="default" onClick={this.closeCover}>Close</Button><Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>\n        </div>\n      </CoverFooter>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},615:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverHeader icon="cog" title="This is a sample CoverHeader" />\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});