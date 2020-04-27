(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contactLi:"ContactListItem_contactLi__1ftzr",contactLiP:"ContactListItem_contactLiP__3ll8N",contactLiBtn:"ContactListItem_contactLiBtn__32Cca"}},15:function(t,e,n){t.exports={section:"Section_section__Ow-57"}},16:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3c4qw"}},18:function(t,e,n){t.exports=n(28)},28:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=n(11),i=n(5),s=n(6),u=n(7),m=n(9),h=n(8),b=n(15),d=n.n(b),f=function(t){var e=t.title,n=t.children;return c.a.createElement("section",{className:d.a.section},c.a.createElement("h2",null,e),n)},p=n(16),v=n.n(p),g=n(17),C=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.changeHandler=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.submitHandler=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r={id:Object(g.v4)(),name:a,number:c};t.props.addContact(r),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.submitHandler,className:v.a.contactForm},c.a.createElement("label",{htmlFor:"nameInput"},"Name:",c.a.createElement("input",{type:"text",name:"name",value:e,placeholder:"enter name...",onChange:this.changeHandler,id:"nameInput"})),c.a.createElement("label",{htmlFor:"numberInput"},"Number:",c.a.createElement("input",{type:"tel",name:"number",value:n,placeholder:"enter number...",onChange:this.changeHandler,id:"numberInput"})),c.a.createElement("button",{type:"submit",disabled:!e.length||!n.length},"Add contact"))}}]),n}(a.Component),E=n(10),y=n.n(E),O=function(t){var e=t.name,n=t.number,a=t.onDelete;return c.a.createElement("li",{className:y.a.contactLi},c.a.createElement("p",{className:y.a.contactLiP},e,": ",n),c.a.createElement("button",{type:"button",onClick:a,className:y.a.contactLiBtn},"delete"))},I=function(t){var e=t.contacts,n=t.onDelete;return c.a.createElement("ul",null,e.length?e.map((function(t){var e=t.id,a=t.name,r=t.number;return c.a.createElement(O,{key:e,name:a,number:r,onDelete:function(){return n(e)}})})):c.a.createElement("p",null,"no contact with such name in your phone "))},L={display:"block"},_=function(t){var e=t.onChange;return c.a.createElement("label",{htmlFor:"filterInput"},"Find contacts by name",c.a.createElement("input",{type:"text",onChange:e,name:"filter",style:L,id:"filterInput"}))},j=n(4),N=(n(25),function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.changeHandler=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.deleteContactbyId=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:Object(l.a)(n)})},t.addContact=function(e){var n=e.name;t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(n.toLowerCase().trim())?(j.b.configure(),j.b.error("".concat(n," is already in contact list"),{position:j.b.POSITION.TOP_CENTER,autoClose:6e3,delay:200,transition:j.a})):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},t.filterContactsByName=function(){var e=t.state,n=e.contacts,a=e.filter;if(n.length)return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:Object(l.a)(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.contacts;return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{title:"Phonebook"},c.a.createElement(C,{addContact:this.addContact})),!!t.length&&c.a.createElement(f,{title:"Contacts"},t.length>1&&c.a.createElement(_,{onChange:this.changeHandler}),c.a.createElement(I,{contacts:this.filterContactsByName(),onDelete:this.deleteContactbyId})))}}]),n}(a.Component));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.342bb253.chunk.js.map