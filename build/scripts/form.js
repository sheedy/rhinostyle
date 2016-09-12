webpackJsonp([1],{0:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=t(3),o=l(n),i=t(11),c=l(i),s=t(12),d=t(16),r=l(d),m=t(608),u={addon:"[Optional] - Display an add-on on the input, as a string - [left | right | both]",clear:"[Optional] - Form control gets a clear value button",label:"[Optional] - A label for the input",naked:"[Optional] - Form control is stripped down in appearance",name:"[Optional] - An id for the label and the input, use if you want clicking the label to activate the input",placeholder:"[Optional] - Any placeholder text you want in the input",type:"[Optional] - As a string, what type of input you are creating - [email | password | number | search] - defaults to text",required:"[Optional] - Field is required and asterisk is added to label",initialValue:"[Optional] - Any initial value for the input"},p={React:o["default"],ReactDOM:c["default"],Icon:s.Icon,Input:s.Input},h=t(621),f={label:"[Optional] - A label for the select",name:"[Optional] - An id for the label and the select, use if you want clicking the label to activate the select",options:"[Required] - Array of objects that contain the values and text for the options, with an optional selected key, {value:string, text:string, selected:bool}",required:"[Optional] - Field is required and asterisk is added to label"},x={React:o["default"],ReactDOM:c["default"],Select:s.Select},E=[{value:"1",text:"Option One"},{value:"2",text:"Option Two"},{value:"3",text:"Option Three",selected:!0},{value:"4",text:"Option Four"}],b=t(625),R={label:"[Optional] - A label for the textarea",name:"[Optional] - An id for the label and the textarea, use if you want clicking the label to activate the textarea",placeholder:"[Optional] - Any placeholder text you want in the textarea",initialValue:"[Optional] - Any initial value for the textarea",required:"[Optional] - Field is required and asterisk is added to label"},k={React:o["default"],ReactDOM:c["default"],Textarea:s.Textarea},N=t(613),C={label:"[Optional] - A label for the textarea",name:"[Optional] - An id for the label and the textarea, use if you want clicking the label to activate the Message Box",placeholder:"[Optional] - Any placeholder text you want in the textarea",initialValue:"[Optional] - Any initial value for the textarea",maxHeight:"[Optional] - Controls the max-height (default: none)",required:"[Optional] - Field is required and asterisk is added to label"},v={React:o["default"],ReactDOM:c["default"],MessageBox:s.MessageBox},y=t(601),w={inline:"[Optional] - Inline the checkboxes",isChecked:"[Optional] - Set initial checked state",name:"[Required] - An id, and label for the checkbox",onClick:"[Optional] - A function you want to trigger when the checkbox is toggled"},O={React:o["default"],ReactDOM:c["default"],Checkbox:s.Checkbox},g=t(618),I={inline:"[Optional] - Inline the radios",name:"[Optional] - The name, and the basis of the id for the radio",onChange:"[Optional] - A function you which to trigger when you change the selection",selectedValue:"[Optional] - The radio you want selected, when used in a group",value:"[Optional] - A value for the radio"},T={React:o["default"],ReactDOM:c["default"],RadioGroup:s.RadioGroup,Radio:s.Radio},M=t(619),A={className:"[Optional] - Any class name you would like to add to the switch",disabled:"[Optional] - Disable the switch",isChecked:"[Optional] - Set initial on/off state",name:"[Optional] - The name, and the basis of the id for the switch"},F={React:o["default"],ReactDOM:c["default"],RhinoSwitch:s.RhinoSwitch},S=function(){return o["default"].createElement("div",null,o["default"].createElement("h1",{className:"site-headline"},"Forms"),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Forms"),o["default"].createElement("p",{className:"site-text-lead"},"Forms are assembled using our suite of custom form components. It is important to understand that form components have a ",o["default"].createElement("code",null,"form__control")," class for consistent appearance. Form components are also wrapped in a ",o["default"].createElement("code",null,"form__group")," class which provides vertical spacing. Finally, you may use the ",o["default"].createElement("code",null,"form__section")," class to provide vertical spacing between sections of a form.")),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Form Example"),o["default"].createElement("form",{className:"form"},o["default"].createElement(s.Input,{name:"exampleInputEmail1",label:"Email Address",placeholder:"Email",type:"email",required:!0}),o["default"].createElement(s.Input,{name:"exampleInputPassword1",label:"Password",placeholder:"Password",type:"password",required:!0}),o["default"].createElement(s.Select,{name:"exampleSelect1",label:"Select",options:E,required:!0}),o["default"].createElement(s.Textarea,{label:"Text Area",name:"exampleTextarea1",placeholder:"Enter some text",required:!0}),o["default"].createElement(s.MessageBox,{label:"Message Box",placeholder:"Enter some text",name:"exampleMessageBoxarea1",required:!0}),o["default"].createElement("div",{className:"form__group"},o["default"].createElement("label",{htmlFor:"",className:"u-block"},"Checkboxes"),o["default"].createElement(s.Checkbox,{inline:!0,name:"exampleCheckbox1"},"Checkbox One"),o["default"].createElement(s.Checkbox,{inline:!0,name:"exampleCheckbox2"},"Checkbox Two"),o["default"].createElement(s.Checkbox,{inline:!0,name:"exampleCheckbox3"},"Checkbox Three")),o["default"].createElement(s.RadioGroup,{inline:!0,name:"exampleRadio1",label:"Radios",selectedValue:"2"},o["default"].createElement(s.Radio,{value:"1"},"Radio One"),o["default"].createElement(s.Radio,{value:"2"},"Radio Two"),o["default"].createElement(s.Radio,{value:"3"},"Radio Three")),o["default"].createElement("div",{className:"form__group"},o["default"].createElement("label",{htmlFor:"",className:"u-block"},"Switcher"),o["default"].createElement(s.RhinoSwitch,{name:"exampleSwitch1"})),o["default"].createElement("div",{className:"u-text-right"},o["default"].createElement(s.Button,{type:"primary"},"Submit Form")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Form Modifiers"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Inline Form"),o["default"].createElement("p",{className:"site-copy"},"Add the ",o["default"].createElement("code",null,"form--inline")," modifier to ",o["default"].createElement("code",null,"form"),"."),o["default"].createElement("form",{className:"form form--inline"},o["default"].createElement(s.Input,{name:"exampleEmail2",label:"Email Address",placeholder:"Enter email",type:"email"}),o["default"].createElement(s.Input,{name:"examplePassword2",label:"Password",placeholder:"Password",type:"password"}),o["default"].createElement(s.Button,{type:"primary"},"Sign In")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Input"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Common Input"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Properties include ",o["default"].createElement("code",null,"initialValue, label, name, placeholder, required, and type"),".")),o["default"].createElement(s.Input,{name:"exampleInputEmail31",label:"Email Address",type:"email",required:!0}),o["default"].createElement(s.Input,{name:"exampleInputName31",label:"First Name",placeholder:"First Name",type:"text",initialValue:"Ian"}),o["default"].createElement(s.Input,{name:"exampleInputPassword31",label:"Password",placeholder:"Password",type:"password"})),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Input Add-On"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Use the ",o["default"].createElement("code",null,"addon")," property on Inputs with add-ons. Pass the addons as renderable nodes.")),o["default"].createElement(s.Input,{addon:"left",type:"text",placeholder:"Encrypted"},o["default"].createElement(s.Icon,{icon:"lock"})),o["default"].createElement(s.Input,{addon:"left",type:"text",placeholder:"Search"},o["default"].createElement(s.Icon,{icon:"search"})),o["default"].createElement(s.Input,{addon:"right",type:"text"},o["default"].createElement("a",{href:"javascript:void(0)"},"Go For It!")),o["default"].createElement(s.Input,{addon:"both",type:"text",placeholder:"Lorem ipsum dolor sit"},o["default"].createElement("span",null,"Amount $"),o["default"].createElement("span",null,".00"))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Clear Input"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Use the ",o["default"].createElement("code",null,"clear")," property on Inputs to include a clear value button.")),o["default"].createElement(s.Input,{name:"exampleInputText111",label:"Clear Input",type:"text",clear:!0})),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Naked Input"),o["default"].createElement("div",{className:"site-copy"},o["default"].createElement("p",null,"Use the ",o["default"].createElement("code",null,"naked")," property on Inputs to strip it of background, border, height, and padding.")),o["default"].createElement(s.Input,{name:"exampleInputText999",placeholder:"Naked Input",type:"text",naked:!0}))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Input Playground"),o["default"].createElement(r["default"],{docClass:s.Input,propDescriptionMap:u,codeText:m,scope:p,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Text Area"),o["default"].createElement(s.Textarea,{label:"Text Area",name:"exampleTextarea2",placeholder:"Enter some text"})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Text Area Playground"),o["default"].createElement(r["default"],{docClass:s.Textarea,propDescriptionMap:R,codeText:b,scope:k,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Message Box "),o["default"].createElement("p",{className:"site-copy"},"We are using a light-weight plugin, ",o["default"].createElement("a",{href:"http://www.jacklmoore.com/autosize/",target:"_blank"},"Jack Moore's Autosize"),", with custom styling for the autogrow functionality."),o["default"].createElement(s.MessageBox,{label:"Message Box",name:"exampleMessageBoxarea2",placeholder:"Enter some text"})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Message Box Playground"),o["default"].createElement(r["default"],{docClass:s.MessageBox,propDescriptionMap:C,codeText:N,scope:v,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Checkbox"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinobox"),o["default"].createElement("p",{className:"site-copy"},"Our custom checkbox element is called ",o["default"].createElement("code",null,"rhinobox"),". By default, these are stacked."),o["default"].createElement(s.Checkbox,{isChecked:!0,name:"exampleCheckbox11"},"Checkbox One"),o["default"].createElement(s.Checkbox,{name:"exampleCheckbox12"},"Checkbox Two"),o["default"].createElement(s.Checkbox,{name:"exampleCheckbox13"},"Checkbox Three")),o["default"].createElement("div",null,o["default"].createElement("h5",{className:"site-miniheadline"},"Inline Rhinobox"),o["default"].createElement("p",{className:"site-copy"},"Add the ",o["default"].createElement("code",null,"inline")," modifier to create inline checkboxes."),o["default"].createElement(s.Checkbox,{inline:!0,name:"exampleCheckbox21"},"Checkbox One"),o["default"].createElement(s.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox22"},"Checkbox Two"),o["default"].createElement(s.Checkbox,{inline:!0,isChecked:!0,name:"exampleCheckbox23"},"Checkbox Three"))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Checkbox Playground"),o["default"].createElement(r["default"],{docClass:s.Checkbox,propDescriptionMap:w,codeText:y,scope:O,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Radio"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinodio"),o["default"].createElement("p",{className:"site-copy"},"Our custom radio element is called ",o["default"].createElement("code",null,"rhinodio"),". By default, these are stacked."),o["default"].createElement(s.RadioGroup,{name:"exampleRadio2",label:"Radios",selectedValue:"2"},o["default"].createElement(s.Radio,{value:"1"},"Radio One"),o["default"].createElement(s.Radio,{value:"2"},"Radio Two"),o["default"].createElement(s.Radio,{value:"3"},"Radio Three"))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Inline Rhinodio"),o["default"].createElement("p",{className:"site-copy"},"Add the ",o["default"].createElement("code",null,"inline")," property to create inline radios."),o["default"].createElement(s.RadioGroup,{inline:!0,name:"exampleRadio3",label:"Radios",selectedValue:"2"},o["default"].createElement(s.Radio,{value:"1"},"Radio One"),o["default"].createElement(s.Radio,{value:"2"},"Radio Two"),o["default"].createElement(s.Radio,{value:"3"},"Radio Three")))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Radio Playground"),o["default"].createElement(r["default"],{docClass:s.Radio,propDescriptionMap:I,codeText:g,scope:T,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Select"),o["default"].createElement("div",null,o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinoselect"),o["default"].createElement("p",{className:"site-copy"},"Our custom select element is called ",o["default"].createElement("strong",null,"rhinoselect"),"."),o["default"].createElement(s.Select,{name:"exampleSelect2",label:"Select",options:E}))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Select Playground"),o["default"].createElement(r["default"],{docClass:s.Select,propDescriptionMap:f,codeText:h,scope:x,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Switcher"),o["default"].createElement("h5",{className:"site-miniheadline"},"Rhinoswitcher"),o["default"].createElement("p",{className:"site-copy"},"Our custom switcher element is called ",o["default"].createElement("code",null,"rhinoswitcher"),". Disable the switcher using the ",o["default"].createElement("code",null,"disabled")," property."),o["default"].createElement(s.RhinoSwitch,{name:"rhinoswitch2",className:"u-m-r-sm",isChecked:!0}),o["default"].createElement(s.RhinoSwitch,{name:"rhinoswitch3",isChecked:!0,disabled:!0})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Switcher Playground"),o["default"].createElement(r["default"],{docClass:s.RhinoSwitch,propDescriptionMap:A,codeText:M,scope:F,noRender:!1})))};c["default"].render(o["default"].createElement(S,null),document.getElementById("js-app"))},601:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-checkbox">\n        <div className="form__group">\n          <label htmlFor="" className="u-block">Checkboxes</label>\n          <Checkbox name="exampleCheckbox31">Checkbox One</Checkbox>\n          <Checkbox name="exampleCheckbox32">Checkbox Two</Checkbox>\n          <Checkbox name="exampleCheckbox33">Checkbox Three</Checkbox>\n        </div>\n        <div className="form__group">\n          <label htmlFor="" className="u-block">Checkboxes Inline</label>\n          <Checkbox inline name="exampleCheckbox311">Checkbox One</Checkbox>\n          <Checkbox inline name="exampleCheckbox321">Checkbox Two</Checkbox>\n          <Checkbox inline name="exampleCheckbox331">Checkbox Three</Checkbox>\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},608:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-inputs">\n        <Input name="exampleInputFirstName31" label="First Name" placeholder="First Name" type="text" required />\n        <Input name="exampleInputLastName31" label="Last Name" placeholder="Last Name" type="text" required />\n        <Input name="exampleInputPassword31" placeholder="Password" type="password" />\n        <Input addon="both" type="text" placeholder="Lorem ipsum dolor sit">\n          <span>Amount $</span>\n          <span>.00</span>\n        </Input>\n        <Input name="exampleInputText0202" label="Clear Input" type="text" clear />\n        <Input name="exampleInputText002" placeholder="Naked Input" type="text" naked />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},613:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-messageBox">\n        <MessageBox label="Bio" name="biography" rows={1} placeholder="I like messages!" />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},618:function(e,a){e.exports='class ComponentExample extends React.Component {\n  optionalCallbackFunction = (value) => {\n     console.log(\'Run optional callback function\', value);\n   };\n\n  render() {\n    return (\n      <div className="site-example-radio">\n        <RadioGroup name="exampleRadio4" label="Radios" onChange={this.optionalCallbackFunction} selectedValue="3">\n          <Radio value="1">Radio One</Radio>\n          <Radio value="2">Radio Two</Radio>\n          <Radio value="3">Radio Three</Radio>\n        </RadioGroup>\n        <RadioGroup inline name="exampleRadio44" label="Radios Inline" onChange={this.optionalCallbackFunction} selectedValue="3">\n          <Radio value="1">Radio One</Radio>\n          <Radio value="2">Radio Two</Radio>\n          <Radio value="3">Radio Three</Radio>\n        </RadioGroup>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},619:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-switch">\n        <div className="form__group">\n          <label htmlFor="" className="u-block">Switcher</label>\n          <RhinoSwitch name="exampleSwitch4" />\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},621:function(e,a){e.exports="var selectOpts = [\n  { value: '1', text: 'Option One' }, \n  { value: '2', text: 'Option Two' }, \n  { value: '3', text: 'Option Three', selected: true }, \n  { value: '4', text: 'Option Four' },\n];\n\nclass ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className=\"site-example-selects\">\n        <Select name=\"mySelect\" label=\"Choose One\" options={selectOpts} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"},625:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-textareas">\n        <Textarea label="Bio" name="biography" rows={5} placeholder="I like pizza!" />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});