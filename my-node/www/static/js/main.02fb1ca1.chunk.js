(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{198:function(e,a,t){e.exports=t.p+"static/media/heart.cfdf4d87.png"},199:function(e,a,t){e.exports=t.p+"static/media/edit.f7659845.png"},200:function(e,a,t){e.exports=t.p+"static/media/delete.7c460015.png"},202:function(e,a,t){e.exports=t.p+"static/media/download.b7bf3101.png"},203:function(e,a,t){e.exports=t.p+"static/media/cancel.efb8f8cb.png"},204:function(e,a,t){e.exports=t.p+"static/media/attention-sign-png--2400.34146174.png"},207:function(e,a,t){e.exports=t.p+"static/media/user.b3863a57.png"},208:function(e,a,t){e.exports=t.p+"static/media/home.14d291e7.png"},209:function(e,a,t){e.exports=t.p+"static/media/bar-chart.bb47a069.png"},210:function(e,a,t){e.exports=t.p+"static/media/320139.acd93821.png"},211:function(e,a,t){e.exports=t(449)},216:function(e,a,t){},248:function(e,a){},449:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(33),l=t.n(c),r=(t(216),t(26)),o=t(21),i=t(13),m=t(4),u=t.n(m),d=t(16),p=t(36),f=t(37),v=t(39),h=t(38),E=t(40),g=t(7),_=t.n(g);function b(){return ge.filter((function(e){return"Chenge&RegLinks"===e.isVisible})).map((function(e){return s.a.createElement(r.b,{strict:"true",to:e.path,key:e.key}," ",e.title," ")}))}var N="http://localhost:5000",w="".concat(N,"/login"),y=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(v.a)(this,Object(h.a)(a).call(this,e))).handleOnChange=function(e){var a=e.target;a.value.length<=0?t.setState(Object(d.a)({},a.name,a.name)):t.setState(Object(d.a)({},a.name,a.value))},t.handleRegister=function(e){var a,n,s,c,l,r,o,i;return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.awrap(_.a.post(w,t.state));case 2:a=e.sent,n=a.data,s=n.message,c=n.user,l=n.token,r=n.likes,o=n.redirect,i=n.email,null===r?("[]",localStorage.setItem("I_Like","[]")):localStorage.setItem("I_Like","[".concat(r,"]")),l&&o?(localStorage.setItem("token",l),localStorage.setItem("user",c),localStorage.setItem("email",i),t.setState({redirect:!0}),alert(s)):alert(s);case 6:case"end":return e.stop()}}))},t.state={users_email:"",password:"",redirect:!1},t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"component"},this.state.redirect?s.a.createElement(o.a,{to:"/home"}):null,s.a.createElement("div",{className:"forms_us"},s.a.createElement("h1",{className:"form_tittle"},"Login :"),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"users_email"},"Email address"),s.a.createElement("input",{type:"email",name:"users_email",className:"form-control",id:"users_email",placeholder:"Enter your email",onChange:this.handleOnChange}),"users_email"===this.state.users_email?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"You can't login without Email!")):null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",name:"password",className:"form-control",id:"password",placeholder:"Password",onChange:this.handleOnChange}),"password"===this.state.password?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"You can't login without Password!")):null),s.a.createElement("button",{type:"button",className:"btn btn-success btn-block loginBut",onClick:this.handleRegister},"Submit")),s.a.createElement(b,null)))}}]),a}(s.a.Component),k=t(198),O=t.n(k),S=t(66),I=t.n(S),C=t(3),x=t.n(C),j="".concat(N,"/vacations/save_like"),Y="".concat(N,"/vacations/remove_like");var D=function(e){var a=localStorage.getItem("email"),t=Object(n.useState)(0),c=Object(i.a)(t,2),l=c[0],r=c[1],o=Object(n.useState)([]),m=Object(i.a)(o,2),d=m[0],p=m[1];function f(e){r(l+1);var t=JSON.parse(localStorage.getItem("I_Like"));t.push(e),localStorage.setItem("I_Like","[".concat(t,"]"));var n=localStorage.getItem("I_Like");p(n),function(e,a){u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(_.a.post(j,{vacation_id:e,users_email:a}));case 2:t.sent;case 3:case"end":return t.stop()}}))}(e,a)}function v(e){r(l-1);var t=JSON.parse(localStorage.getItem("I_Like"));t.splice(t.indexOf(e),1),localStorage.setItem("I_Like","[".concat(t,"]"));var n=localStorage.getItem("I_Like");p(n),function(e,a){u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(_.a.post(Y,{vacation_id:e,users_email:a}));case 2:t.sent;case 3:case"end":return t.stop()}}))}(e,a)}return Object(n.useEffect)((function(){r(JSON.parse(e.likes)),p(JSON.parse(localStorage.getItem("I_Like")))}),[]),s.a.createElement("div",{className:"inner_card"},s.a.createElement("img",{src:e.img,className:"card_img"}),s.a.createElement("div",{className:"content"},s.a.createElement("button",{className:"cardLikeButton",onClick:function(){d.includes(e.id)?v(e.id):f(e.id)}},s.a.createElement("img",{className:"like_png",src:d.includes(e.id)?I.a:O.a,alt:"..."})),s.a.createElement("p",null,l||"no"," likes"),s.a.createElement("h1",null,e.vacation_names),s.a.createElement("p",null,e.vacation_prices," $ / per day"),s.a.createElement("p",null,e.customer_id),s.a.createElement("p",{className:"desc"},e.vacation_descriptions),s.a.createElement("p",null,"Start: ",x()(e.start).format("YYYY.MM.DD")," End: ",x()(e.end).format("YYYY.MM.DD"))))},P="".concat(N,"/vacations");function M(){var e=Object(n.useState)("loader"),a=Object(i.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){c("loader"),function(){var e,a,t;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(_.a.get(P));case 2:(e=n.sent).data&&(a=[],t=JSON.parse(localStorage.I_Like),e.data.forEach((function(e){t.includes(e.vacation_id)&&a.push(e)})),e.data.forEach((function(e){t.includes(e.vacation_id)||a.push(e)})),localStorage.setItem("InfoResult",JSON.stringify(a)),c("result"));case 4:case"end":return n.stop()}}))}()}),[]),s.a.createElement("div",{className:"component"},s.a.createElement("div",null,s.a.createElement("h1",{className:"page_tittle "}," Users page")),"loader"===t?s.a.createElement("div",{className:"loader"}," "):s.a.createElement("div",{className:"cards"}," ",JSON.parse(localStorage.InfoResult).map((function(e,a){return s.a.createElement(D,{key:a,id:e.vacation_id,likes:e.LIKES,img:e.vacations_IMG,vacation_names:e.vacations_country,vacation_prices:e.vacations_prices,vacation_descriptions:e.vacations_description,start:e.vacations_start,end:e.vacations_end})}))))}var B=t(199),L=t.n(B),V=t(200),F=t.n(V),R="".concat(N,"/vacations/delete"),J="".concat(N,"/vacations/change");var A=function(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),c=t[0],l=t[1];return s.a.createElement("div",{className:"admin_cards"},!1===c?s.a.createElement("div",{className:"admin_inner_card"},s.a.createElement("img",{className:"admins_card_img",src:e.img}),s.a.createElement("div",{className:"content"},s.a.createElement("h3",null,e.vacation_names),e.likes?s.a.createElement("p",null,e.likes," ",s.a.createElement("img",{className:"like_png",src:I.a,alt:"..."})):s.a.createElement("p",null,"0 ",s.a.createElement("img",{className:"like_png",src:I.a,alt:"..."})),s.a.createElement("p",null,e.vacation_prices," $ / per day"),s.a.createElement("p",{className:"desc"},e.vacation_descriptions),s.a.createElement("p",null,"Start: ",x()(e.start).format("YYYY.MM.DD")," End: ",x()(e.end).format("YYYY.MM.DD")),s.a.createElement("div",null,s.a.createElement("button",{className:"cardAdminButtons",id:"del",onClick:function(){!function(){var a,t;u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(1!=window.confirm("Sure you want to delete this vacation?")){n.next=10;break}return n.next=4,u.a.awrap(_.a.post(R,{id:e.id}));case 4:a=n.sent,t=a.data.message,window.location.reload(),t&&alert(t),n.next=11;break;case 10:window.location.reload();case 11:case"end":return n.stop()}}))}()}},s.a.createElement("img",{className:"rem_png",alt:"...",src:F.a})),s.a.createElement("button",{className:"cardAdminButtons",onClick:function(){l(!0)}},s.a.createElement("img",{className:"rem_png",alt:"...",src:L.a}))))):s.a.createElement("div",{className:"c"},s.a.createElement("div",{className:"card",style:{backgroundColor:"grey"}},s.a.createElement("form",{className:"chengeVacation_form",name:e.id,id:"this_form_id"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"vacation_names",id:"vacation_names",className:"form-control",placeholder:e.vacation_names})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"vacation_prices",id:"vacation_prices",className:"form-control",placeholder:e.vacation_prices})),s.a.createElement("div",{className:"form-group"},s.a.createElement("textarea",{className:"form-control",name:"vacation_descriptions",id:"vacation_descriptions",placeholder:e.vacation_descriptions})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"date",name:"vacation_start",id:"vacation_start",className:"form-control",min:"2020-01-01",max:"2021-12-31",placeholder:x()(e.start).format("YYYY.MM.DD")})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"date",name:"vacation_end",id:"vacation_end",className:"form-control",min:"2020-01-01",max:"2021-12-31",placeholder:x()(e.end).format("YYYY.MM.DD")})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"vacation_pictures",id:"vacation_pictures",className:"form-control",placeholder:e.img})),s.a.createElement("button",{type:"button",className:"btn btn-dark btn-block loginBut",onClick:function(){var e=document.getElementById("this_form_id").name,a=document.getElementById("vacation_names").value||document.getElementById("vacation_names").placeholder,t=document.getElementById("vacation_prices").value||document.getElementById("vacation_prices").placeholder,n=document.getElementById("vacation_descriptions").value||document.getElementById("vacation_descriptions").placeholder,s=document.getElementById("vacation_start").value||document.getElementById("vacation_start").placeholder,c=document.getElementById("vacation_end").value||document.getElementById("vacation_end").placeholder,r=document.getElementById("vacation_pictures").value||document.getElementById("vacation_pictures").placeholder;!function(e,a,t,n,s,c,r){u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,u.a.awrap(_.a.post(J,{id:e,vacations_country:a,vacations_prices:t,vacations_description:n,vacations_start:s,vacations_end:c,vacations_IMG:r}));case 2:l.sent;case 3:case"end":return l.stop()}})),l(!1),window.location.reload()}(e,a,t,n,x()(s).format("YYYY-MM-DD"),x()(c).format("YYYY-MM-DD"),r)}},"Change Vacation"),s.a.createElement("button",{type:"button",className:"btn btn-dark btn-block loginBut",onClick:function(){window.location.reload()}},"\u0421ancel")))))},G=(t(238),t(286),t(201)),T="".concat(N,"/vacations/add_new"),K=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(v.a)(this,Object(h.a)(a).call(this,e))).handleOnChange=function(e){var a=e.target;a.value.length<=0?t.setState(Object(d.a)({},a.name,"")):t.setState(Object(d.a)({},a.name,a.value))},t.handleAddNew=function(){var e,a;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(_.a.post(T,{vacations_country:t.state.vacations_country,vacations_description:t.state.vacations_description,vacations_prices:t.state.vacations_prices,vacations_start:t.state.startDate.format("YYYY-MM-DD"),vacations_end:t.state.endDate.format("YYYY-MM-DD"),vacations_IMG:t.state.vacations_IMG}));case 2:e=n.sent,(a=e.data.message)&&alert(a);case 5:case"end":return n.stop()}}))},t.state={vacations_country:"",vacations_description:"",vacations_prices:"",vacations_start:"",vacations_end:"",startDate:null,endDate:null,vacations_IMG:""},t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{className:"newVacation_form"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"newVacation_text",htmlFor:"vacation_names"},"Vacations Tittle:"),s.a.createElement("input",{type:"text",name:"vacations_country",className:"form-control",onChange:this.handleOnChange}),""===this.state.vacations_country?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"Tittle should be filed!")):null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"newVacation_text",htmlFor:"vacation_prices"},"Vacation Price:"),s.a.createElement("input",{type:"text",name:"vacations_prices",className:"form-control",onChange:this.handleOnChange}),""===this.state.vacations_prices?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"Price should be filed!")):null),s.a.createElement("div",{className:"form-group description"},s.a.createElement("label",{className:"newVacation_text",htmlFor:"vacation_descriptions"},"Vacation Description:"),s.a.createElement("textarea",{className:"form-control",id:"vacation_descriptions",name:"vacations_description",rows:"3",onChange:this.handleOnChange}),""===this.state.vacations_description?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"Description should be filed!")):null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"newVacation_text",htmlFor:"vacation_dates"},"Vacation Dates:"),s.a.createElement(G.DateRangePicker,{startDate:this.state.startDate,startDateId:"start_date",endDate:this.state.endDate,endDateId:"end_date",onDatesChange:function(a){var t=a.startDate,n=a.endDate;e.setState({startDate:t,endDate:n}),e.setState({vacations_start:t}),e.setState({vacations_end:n})},focusedInput:this.state.focusedInput,onFocusChange:function(a){return e.setState({focusedInput:a})}}),null===this.state.startDate||null===this.state.endDate?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"Dates should be filed!")):null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"newVacation_text",htmlFor:"vacation_pictures"},"Image URL Link:"),s.a.createElement("input",{type:"text",name:"vacations_IMG",className:"form-control",onChange:this.handleOnChange}),""===this.state.vacations_IMG?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"Image URL Link should be filed!")):null),""===this.state.vacations_IMG||null===this.state.startDate||null===this.state.endDate||""===this.state.vacations_country||""===this.state.vacations_prices||""===this.state.vacations_description?null:s.a.createElement("button",{type:"button",className:"btn btn-dark btn-block loginBut",onClick:this.handleAddNew},"Add New Vacation"))}}]),a}(s.a.Component),U=t(202),H=t.n(U),W=t(203),$=t.n(W);function q(){return ge.filter((function(e){return"adminOnly"===e.for})).map((function(e){return s.a.createElement(r.b,{to:e.path,key:e.key},s.a.createElement("img",{src:e.icon,className:"nav_icons",alt:"..."})," ",e.title)}))}var z="".concat(N,"/vacations");function Z(){var e=Object(n.useState)("loader"),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),r=Object(i.a)(l,2),o=r[0],m=r[1];return Object(n.useEffect)((function(){c("loader"),function(){var e;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(_.a.get(z));case 2:(e=a.sent).data&&(localStorage.setItem("InfoResult",JSON.stringify(e.data)),c("result"));case 4:case"end":return a.stop()}}))}()}),[]),s.a.createElement("div",{className:""},s.a.createElement("div",{className:"admin_nav"},s.a.createElement("div",{id:"chartLinc"},s.a.createElement(q,null)),s.a.createElement("div",null,s.a.createElement("h1",{className:"page_tittle"}," Admins page"))),!1===o?s.a.createElement("button",{className:"btn btn-dark add_vac",onClick:function(){m(!0)}}," ",s.a.createElement("img",{alt:"...",className:"ic_png",src:H.a})," Add New Vacation "):s.a.createElement("div",{className:"newVacation_div"},s.a.createElement("button",{className:"x_button btn btn-dark",onClick:function(){m(!1),window.location.reload()}},s.a.createElement("img",{alt:"...",className:"ic_png",src:$.a})," Close"),s.a.createElement(K,null)),"loader"===t?s.a.createElement("div",{className:"loader"}):s.a.createElement("div",{className:"admins_component"},JSON.parse(localStorage.InfoResult).map((function(e,a){return s.a.createElement(A,{key:a,id:e.vacation_id,likes:e.LIKES,img:e.vacations_IMG,vacation_names:e.vacations_country,vacation_prices:e.vacations_prices,vacation_descriptions:e.vacations_description,start:e.vacations_start,end:e.vacations_end})}))))}function Q(e){return s.a.createElement("div",null,s.a.createElement("div",{className:"user_welcome"},localStorage.getItem("user")?s.a.createElement("h1",null,"Welcome ",localStorage.getItem("user")," "):null),"admin"===localStorage.getItem("user")?s.a.createElement(Z,null):s.a.createElement(M,null))}var X=t(204),ee=t.n(X),ae=t(205),te="".concat(N,"/vacations");function ne(){var e=Object(n.useState)("loader"),a=Object(i.a)(e,2),t=a[0],c=a[1],l=JSON.parse(localStorage.getItem("InfoResult")),r=l.map((function(e){return e.vacations_country})),m=l.map((function(e){return e.LIKES})),d=[],p=[];Object(n.useEffect)((function(){if("admin"===localStorage.getItem("user")){c("loader"),function(){var e;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(_.a.get(te));case 2:(e=a.sent).data&&(localStorage.setItem("InfoResult",JSON.stringify(e.data)),c("result"));case 4:case"end":return a.stop()}}))}()}else alert("Char is only for Admin"),c("redirect")}),[]);for(var f=0;f<=l.length;f++){var v=Math.floor(100*Math.random()),h=Math.floor(100*Math.random()),E=Math.floor(100*Math.random()),g="rgba(".concat(v,", ").concat(h,", ").concat(E,", 0.5)");d.push(g);var b="rgba(".concat(v+100,", ").concat(h+100,", ").concat(E+100,", 0.5)");p.push(b)}return s.a.createElement("div",null,s.a.createElement("div",{className:"user_welcome"},localStorage.getItem("user")?s.a.createElement("h1",null,"Welcome ",localStorage.getItem("user")," "):null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-1 col-md-1 col-lg-1"}),s.a.createElement("div",{className:"some col-sm-10 col-md-10 col-lg-10"},"redirect"===t?s.a.createElement(o.a,{to:"/login"}):s.a.createElement("div",{className:"chart"},"loader"===t?s.a.createElement("div",{className:"loader"}):s.a.createElement(ae.a,{data:{labels:r,datasets:[{label:"Vacations likes",data:m,backgroundColor:d,hoverBackgroundColor:p}]},options:{title:{display:!0,text:"Vacations rating",fontSize:25},legend:{display:!0,position:"right"},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})))),s.a.createElement("div",{className:"col-sm-1 col-md-1 col-lg-1"}))}var se="".concat(N,"/login/password-chenge"),ce=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(v.a)(this,Object(h.a)(a).call(this,e))).handleOnChange=function(e){var a=e.target;a.value.length<=0?t.setState(Object(d.a)({},a.name,a.name)):t.setState(Object(d.a)({},a.name,a.value))},t.handleCheck=function(e){var a=e.target;t.state.newpass!==a.value?t.setState({confPass:"confPass"}):t.setState(Object(d.a)({},a.name,a.value))},t.handleChengePass=function(){var e,a,n,s;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(t.state.newpass!==t.state.confpass){c.next=9;break}return c.next=3,u.a.awrap(_.a.post(se,{users_email:t.state.users_email,password:t.state.password,newpass:t.state.newpass}));case 3:e=c.sent,a=e.data,n=a.message,s=a.redirect,alert(n),s&&t.props.history.push("/login"),c.next=10;break;case 9:alert("passwords does not match");case 10:case"end":return c.stop()}}))},t.state={users_email:"",password:"",newpass:"",confPass:""},t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"component"},s.a.createElement("div",{className:"forms_us"},s.a.createElement("h1",{className:"form_tittle"},"Password Chenge :"),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"email"},"Email address"),s.a.createElement("input",{type:"email",name:"users_email",className:"form-control",id:"email",placeholder:"Enter your email",onChange:this.handleOnChange}),"users_email"===this.state.users_email?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"You can't chenge password without Email!")):null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",name:"password",className:"form-control",id:"password",placeholder:"Password",onChange:this.handleOnChange}),"password"===this.state.password?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"You can't chenge password without Ald Password!")):null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"newpass"},"New Password"),s.a.createElement("input",{type:"password",name:"newpass",className:"form-control",id:"newpass",placeholder:"New Password",onChange:this.handleOnChange}),"newpass"===this.state.newpass?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"No Password!")):null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"confpass"},"New Password Confirmation"),s.a.createElement("input",{type:"password",name:"confPass",className:"form-control",id:"confpass",placeholder:"Password Confirmation",onChange:this.handleCheck}),"confPass"===this.state.confPass?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"New Password don't match!")):null),s.a.createElement("button",{type:"button",className:"btn btn-success btn-block loginBut",onClick:this.handleChengePass},"Submit"))))}}]),a}(s.a.Component),le="".concat(N,"/registration"),re=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(v.a)(this,Object(h.a)(a).call(this,e))).handleOnChange=function(e){var a=e.target;a.value.length<=0?t.setState(Object(d.a)({},a.name,a.name)):t.setState(Object(d.a)({},a.name,a.value))},t.handleCheck=function(e){var a=e.target;t.state.password!==a.value?t.setState({confPass:"confPass"}):t.setState(Object(d.a)({},a.name,a.value))},t.handleRegister=function(){var e,a,n,s;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(t.state.password!==t.state.confPass){c.next=9;break}return c.next=3,u.a.awrap(_.a.post(le,t.state));case 3:e=c.sent,a=e.data,n=a.message,s=a.redirect,alert(n),!0===s&&t.props.history.push("/login"),c.next=10;break;case 9:alert("passwords does not match");case 10:case"end":return c.stop()}}))},t.state={users_email:"",password:"",confPass:"",users_first_name:"",users_last_name:""},t}return Object(E.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"component"},s.a.createElement("div",{className:"forms_us"},s.a.createElement("h1",{className:"form_tittle"},"Registration :"),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"email"},"Email address"),s.a.createElement("input",{type:"email",name:"users_email",className:"form-control",id:"email",placeholder:"Enter your email",onChange:this.handleOnChange}),"users_email"===this.state.users_email?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"You can't be registered without Email!")):null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password"},"Password must contain only 4 digits!"),s.a.createElement("input",{type:"password",name:"password",className:"form-control",id:"password",placeholder:"Password",onChange:this.handleOnChange}),"password"===this.state.password?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"You can't be registered without Password!")):null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"confPass"}," Password Confirmation"),s.a.createElement("input",{type:"password",name:"confPass",className:"form-control",id:"confPass",placeholder:"Password",onChange:this.handleCheck}),"confPass"===this.state.confPass?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"Your Password don't match!")):null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"F_name"},"First name must contain only letters and not less than two."),s.a.createElement("input",{type:"text",name:"users_first_name",className:"form-control",id:"F_name",placeholder:"First name",onChange:this.handleOnChange}),"users_first_name"===this.state.users_first_name?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"Names should be filed!")):null),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"L_name"},"Last name must contain only letters and not less than two."),s.a.createElement("input",{type:"text",name:"users_last_name",className:"form-control",id:"L_name",placeholder:"Last name",onChange:this.handleOnChange}),"users_last_name"===this.state.users_last_name?s.a.createElement("div",{className:"not_filed"},s.a.createElement("p",null,"Names should be filed!")):null),s.a.createElement("button",{type:"button",className:"btn btn-success btn-block loginBut",onClick:this.handleRegister},"Submit"))))}}]),a}(s.a.Component),oe="".concat(N,"/verification"),ie=function(e){return function(a){var t=Object(n.useState)("checking"),c=Object(i.a)(t,2),l=c[0],r=c[1],m=localStorage.token,d=localStorage.user;return Object(n.useEffect)((function(){if(!m)return r("varFail");!function(){var e;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.awrap(_.a.post(oe,{token:m,users_email:d}));case 3:if("invalid token"!==(e=a.sent).data.message){a.next=8;break}return a.abrupt("return",r("varFail"));case 8:if("ok"!==e.data.message){a.next=10;break}return a.abrupt("return",r("tokenValid"));case 10:a.next=14;break;case 12:a.prev=12,a.t0=a.catch(0);case 14:case"end":return a.stop()}}),null,null,[[0,12]])}()}),[]),"varFail"===l?(localStorage.removeItem("token"),alert(" Verification failed. Please, log in! "),s.a.createElement(o.a,{to:"/login"})):"checking"===l?s.a.createElement("div",{className:"loader"}):s.a.createElement(e,a)}},me=t(207),ue=t.n(me),de=t(208),pe=t.n(de),fe=t(209),ve=t.n(fe),he=t(210),Ee=t.n(he),ge=[{key:0,path:"/",component:function(e){var a=localStorage.getItem("user");return s.a.createElement("div",{className:"component"},a?s.a.createElement(o.a,{to:"/home"}):s.a.createElement(o.a,{to:"/login"}))}},{key:1,isVisible:"navBar ",for:"user",icon:ue.a,title:" Login ",path:"/login",component:y},{key:2,isVisible:"Chenge&RegLinks",title:" Chenge Password ",path:"/passwordChenge",component:ce},{key:3,isVisible:"navBar",for:"user",icon:pe.a,title:" Home ",path:"/home",component:function(e){var a=ie(Q);return s.a.createElement(a,e)}},{key:4,isVisible:"Chenge&RegLinks",title:" Registration ",path:"/registration",component:re},{key:5,isVisible:"navBar",for:"adminOnly",icon:ve.a,title:" Chart ",path:"/chart",component:function(e){var a=ie(ne);return s.a.createElement(a,e)}},{key:6,isVisible:"navBar",for:"user",icon:Ee.a,title:" Exit ",path:"/signout",component:function(e){return Object(n.useEffect)((function(){localStorage.removeItem("I_Like"),localStorage.removeItem("InfoResult"),localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("email")}),[]),s.a.createElement("div",{className:"component"},s.a.createElement("div",{className:"atantion"},s.a.createElement("img",{className:"atantion_icon",src:ee.a}),s.a.createElement("p",null,"This site was created by Julia Orendovsky as a presentation project."),s.a.createElement("p",null,"In the project I used Java Script, React,  Bootstrap, Node.js,  MySql."),s.a.createElement("p",null,"To login as administrator you will need:"),s.a.createElement("p",null,"Admin Name: \u201c ",s.a.createElement("b",null," admin ")," \u201d"),s.a.createElement("p",null,"Password: \u201c ",s.a.createElement("b",null," 123456789 ")," \u201d"),s.a.createElement("p",null,"Full code can be found on "),s.a.createElement("a",{className:"git_link",href:"https://github.com/julia30oren/Vacations_Proj"},"Git Hub")))}}];function _e(){return ge.filter((function(e){return"user"===e.for})).map((function(e){return s.a.createElement(r.b,{to:e.path,key:e.key},s.a.createElement("img",{src:e.icon,className:"nav_icons",alt:"..."})," ",e.title)}))}function be(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),c=t[0],l=t[1];localStorage.user;return s.a.createElement("nav",null,s.a.createElement("div",null,s.a.createElement("i",{className:"fas fa-bars fa-3x",onClick:function(){l(null===c||!c)}}),null===c||!1===c?null:s.a.createElement("ul",null,s.a.createElement("li",{className:"nav_links"},s.a.createElement(_e,null))),s.a.createElement("ul",{className:"big_nav"},s.a.createElement("li",{className:"nav_links"},s.a.createElement(_e,null)))))}function Ne(){return ge.map((function(e){return s.a.createElement(o.b,{path:e.path,component:e.component,key:e.key})}))}l.a.render(s.a.createElement((function(){return s.a.createElement("div",null,s.a.createElement(r.a,null,s.a.createElement(be,null),s.a.createElement(o.d,null,s.a.createElement(Ne,null))))}),null),document.getElementById("root"))},66:function(e,a,t){e.exports=t.p+"static/media/heart-green.4df75ecc.png"}},[[211,1,2]]]);
//# sourceMappingURL=main.02fb1ca1.chunk.js.map