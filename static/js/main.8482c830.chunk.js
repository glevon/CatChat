(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(e,t){},119:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(18),r=a.n(i),o=(a(64),a(2)),l=a(3),c=a(6),d=a(5),m=a(57),u=a.n(m).a.create({baseURL:"http://localhost:8000",headers:{"content-type":"application/json"}}),h=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"register",value:function(e){return u.post("/auth/signup",e)}},{key:"login",value:function(e){return u.post("/auth/login",e)}}]),e}()),p=(a(39),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={inp:{name:"",surname:"",email:"",age:"",password:"",confirm_password:""},errors:{}},s}return Object(l.a)(a,[{key:"change",value:function(e){this.state.inp[e.target.getAttribute("data-id")]=e.target.value,this.setState({})}},{key:"sendWithEnter",value:function(e){"Enter"===e.key&&(e.preventDefault(),this.register())}},{key:"register",value:function(){var e=this;h.register(this.state.inp).then((function(t){0!==t.data.length?(e.state.errors={},t.data.forEach((function(t){e.state.errors[t.param]=t.msg})),e.setState({})):(e.state.errors={},e.state.inp={name:"",surname:"",email:"",age:"",password:"",confirm_password:""},e.setState({}),e.props.history.push("/signin","Regidtered successfully"))}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("input",{type:"text",placeholder:"Enter your name",className:"inp",value:this.state.inp.name,"data-id":"name",onChange:this.change.bind(this),onKeyDown:function(t){return e.sendWithEnter(t)}}),this.state.errors.name?n.a.createElement("div",{className:"noth"},this.state.errors.name):null,n.a.createElement("input",{type:"text",placeholder:"Enter your surname",className:"inp",value:this.state.inp.surname,"data-id":"surname",onChange:this.change.bind(this),onKeyDown:function(t){return e.sendWithEnter(t)}}),this.state.errors.surname?n.a.createElement("div",{className:"noth"},this.state.errors.surname):null,n.a.createElement("input",{type:"text",placeholder:"Enter your email",className:"inp",value:this.state.inp.email,"data-id":"email",onChange:this.change.bind(this),onKeyDown:function(t){return e.sendWithEnter(t)}}),this.state.errors.email?n.a.createElement("div",{className:"noth"},this.state.errors.email):null,n.a.createElement("input",{type:"text",placeholder:"Enter your age",className:"inp",value:this.state.inp.age,"data-id":"age",onChange:this.change.bind(this),onKeyDown:function(t){return e.sendWithEnter(t)}}),this.state.errors.age?n.a.createElement("div",{className:"noth"},this.state.errors.age):null,n.a.createElement("input",{type:"password",placeholder:"Enter your password",className:"inp",value:this.state.inp.password,"data-id":"password",onChange:this.change.bind(this),onKeyDown:function(t){return e.sendWithEnter(t)}}),this.state.errors.password?n.a.createElement("div",{className:"noth"},this.state.errors.password):null,n.a.createElement("input",{type:"password",placeholder:"Confirm your password",className:"inp",value:this.state.inp.confirm_password,"data-id":"confirm_password",onChange:this.change.bind(this),onKeyDown:function(t){return e.sendWithEnter(t)}}),this.state.errors.confirm_password?n.a.createElement("div",{className:"noth"},this.state.errors.confirm_password):null,n.a.createElement("button",{className:"Button",onClick:this.register.bind(this)},"Sign up"))}}]),a}(s.Component)),g=a(11),f=a(1),v=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={inp:{email:"",password:""},errors:{}},s}return Object(l.a)(a,[{key:"change",value:function(e){this.state.inp[e.target.getAttribute("data-id")]=e.target.value,this.setState({})}},{key:"sendWithEnter",value:function(e){"Enter"===e.key&&(e.preventDefault(),this.login())}},{key:"login",value:function(){var e=this;h.login(this.state.inp).then((function(t){t.data.id?(e.state.errors={},e.state.inp={email:"",password:""},e.setState({}),t.data.accessToken&&localStorage.setItem("user",JSON.stringify(t.data)),e.props.history.push("/profile")):(e.state.errors={},t.data.forEach((function(t){e.state.errors[t.param]=t.msg})),e.setState({}))}))}},{key:"logTab",value:function(e,t){var a,s,n;for(s=document.getElementsByClassName("tabcontent"),a=0;a<s.length;a++)s[a].style.display="none";for(n=document.getElementsByClassName("tablinks"),a=0;a<n.length;a++)n[a].className=n[a].className.replace(" active","");document.getElementById(e).style.display="block",t.target.className+=" active"}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"header grid-container"},n.a.createElement("div",{className:"profile"},n.a.createElement("h3",null,n.a.createElement(g.b,{to:"/profile"},"CatChat ")))),n.a.createElement("div",{className:"cont"},n.a.createElement("div",{className:"tab"},n.a.createElement("button",{className:"tablinks active",onClick:this.logTab.bind(this,"Sign In")},"  Sign In"),n.a.createElement("button",{className:"tablinks",onClick:this.logTab.bind(this,"Sign Up")}," Sign Up")),n.a.createElement("div",{id:"Sign In",className:"tabcontent ",style:{display:"block"}},this.props.location.state?n.a.createElement("div",{className:"noth"},this.props.location.state):null,n.a.createElement("input",{type:"text",placeholder:"Enter your email",className:"inp",value:this.state.inp.email,"data-id":"email",onChange:this.change.bind(this),onKeyDown:function(t){return e.sendWithEnter(t)}}),this.state.errors.email?n.a.createElement("div",{className:"noth"},this.state.errors.email):null,n.a.createElement("input",{type:"password",placeholder:"Enter your password",className:"inp",value:this.state.inp.password,"data-id":"password",onChange:this.change.bind(this),onKeyDown:function(t){return e.sendWithEnter(t)}}),this.state.errors.password?n.a.createElement("div",{className:"noth"},this.state.errors.password):null,n.a.createElement("button",{onClick:this.login.bind(this),className:"Button"},"Sign in")),n.a.createElement("div",{id:"Sign Up",className:"tabcontent"},n.a.createElement(p,null))))}}]),a}(s.Component),E=(a(85),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={mess:"",date:""},s.messBox="",s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){var e=r.a.findDOMNode(this.messBox);e.scrollTop=e.scrollHeight}},{key:"change",value:function(e){this.state.mess=e.target.value,this.setState({})}},{key:"send",value:function(){this.props.send(this.state.mess,this.props.data.id),this.state.mess="",this.setState({})}},{key:"sendWithEnter",value:function(e){"Enter"==e.key&&(e.preventDefault(),this.send())}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"chat"},n.a.createElement("div",{className:"chat_header"},n.a.createElement("div",{className:"fr_data"},n.a.createElement("h5",null,this.props.data.name,this.props.data.surname)),n.a.createElement("div",null,n.a.createElement("i",{class:"fa fa-close btn",style:{color:"white"},onClick:this.props.close.bind(this),"aria-hidden":"true"}))),n.a.createElement("div",{className:"chat_body",ref:function(t){e.messBox=t}},this.props.mess.map((function(e){return n.a.createElement("div",{key:e.id,className:e.me?"myMessage":"yourMessage"},n.a.createElement("h6",null,e.message),n.a.createElement("h6",{className:"time"},n.a.createElement("i",null,new Date(e.time).getDate(),"-",new Date(e.time).getMonth()+1,"-",new Date(e.time).getFullYear()," ",new Date(e.time).getHours(),":",new Date(e.time).getMinutes())))}))),n.a.createElement("div",{className:"chat_footer"},n.a.createElement("input",{onKeyDown:this.sendWithEnter.bind(this),className:"chat-inp",placeholder:"type  message...",value:this.state.mess,onChange:this.change.bind(this)}),n.a.createElement("button",{onClick:this.send.bind(this),className:"chat-button"},n.a.createElement("i",{className:"fa fa-paper-plane","aria-hidden":"true"})))))}}]),a}(s.Component));function y(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var b=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getUserData",value:function(){return u.get("/profile",{headers:y()})}},{key:"edit",value:function(e){return u.post("/profile/edit",e,{headers:y()})}},{key:"changePassword",value:function(e){return u.post("/profile/changepas",e,{headers:y()})}},{key:"addProf",value:function(e){return u.post("/profile/addprof",e,{headers:y()})}},{key:"search",value:function(e){return u.post("/profile/search",{search:e},{headers:y()})}},{key:"addFriend",value:function(e){return u.post("/profile/addfriend",{id:e},{headers:y()})}},{key:"removeReq",value:function(e){return u.post("/profile/removeReq",{id:e},{headers:y()})}},{key:"note",value:function(e){return u.post("/profile/note",e,{headers:y()})}},{key:"accept",value:function(e){return u.post("/profile/accept",{id:e},{headers:y()})}},{key:"delete",value:function(e){return u.post("/profile/delete",{id:e},{headers:y()})}},{key:"addPost",value:function(e){return u.post("/profile/addpost",e,{headers:y()})}},{key:"getPost",value:function(e){return u.post("/profile/getpost",e,{headers:y()})}},{key:"getFriends",value:function(){return u.get("/profile/getFriends",{headers:y()})}},{key:"getMyRequests",value:function(){return u.get("/profile/getMyRequests",{headers:y()})}},{key:"addComment",value:function(e,t){return u.post("/profile/addcomment",{data:e,postId:t},{headers:y()})}},{key:"addLike",value:function(e){return u.post("/profile/addlike",{postId:e},{headers:y()})}},{key:"delLike",value:function(e){return u.post("/profile/dellike",{postId:e},{headers:y()})}},{key:"getMessages",value:function(e){return u.post("/profile/getMEssages",{id:e},{headers:y()})}}]),e}()),k=(a(42),a(86),a(29)),N=a.n(k),w=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).socket="",s.state={data:{},hide:"none",inp:{old_password:"",new_password:"",new_confirm_password:""},errors:{},profPic:"",search:"",users:[],requests:[],postInp:{post:"",pic:""},posts:[],inp_comment:{},friends:[],myRequests:[],openChat:!1,chatFrData:{},messages:[]},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.getUserData().then((function(t){t.data.id?(e.state.data=t.data,b.getPost().then((function(t){e.state.posts=t.data,e.setState({}),b.getFriends().then((function(t){e.state.friends=t.data,e.setState({}),b.note().then((function(t){e.state.requests=t.data,e.setState({})})),b.getMyRequests().then((function(t){e.state.myRequests=t.data,e.setState({}),e.socket=N.a.connect("http://localhost:8000",{query:"id=".concat(e.state.data.id)})}))}))}))):e.props.history.push("/signin","Please Log in")}))}},{key:"logout",value:function(){window.localStorage.removeItem("user"),this.props.history.push("/signin","Please Log in")}},{key:"sendWithEnter",value:function(e,t){"Enter"===e.key&&(e.preventDefault(),this.addComment(t))}},{key:"toggle",value:function(){"none"===this.state.hide?this.state.hide="block":this.state.hide="none",this.setState({})}},{key:"clickBody",value:function(){this.state.hide="none",this.setState({})}},{key:"toggle_comment",value:function(e){var t=document.getElementsByClassName("hide_"+e)[0];"none"===t.style.display?t.style.display="block":t.style.display="none"}},{key:"change",value:function(e){this.state.inp[e.target.getAttribute("data-id")]=e.target.value,this.setState({})}},{key:"changePost",value:function(e){"pic"===e.target.getAttribute("data-id")?this.state.postInp[e.target.getAttribute("data-id")]=e.target.files[0]:this.state.postInp[e.target.getAttribute("data-id")]=e.target.value,this.setState({})}},{key:"changeSearch",value:function(e){var t=this;this.state.users=[],this.state[e.target.getAttribute("data-id")]=e.target.value,this.setState({}),b.search(this.state.search).then((function(e){""!==t.state.search&&(e.data.forEach((function(e){e.status="ok",e.id===t.state.data.id?e.status="me":(t.state.friends.forEach((function(t){e.id!==t.userId&&e.id!==t.myId||(e.status="friend")})),t.state.myRequests.forEach((function(t){e.id===t.userId&&(e.status="requested")})))})),t.state.users=e.data,t.setState({}))}))}},{key:"changeComment",value:function(e,t){this.state[t.target.getAttribute("data-id")].id=t.target.value,this.setState({})}},{key:"changePhoto",value:function(e){this.state[e.target.getAttribute("data-id")]=e.target.files[0],this.setState({})}},{key:"addProfPic",value:function(){var e=this,t=new FormData;t.append("profPic",this.state.profPic),b.addProf(t).then((function(t){e.state.data.photo=t.data.filename,e.state.hide="none",e.setState({})}))}},{key:"addPost",value:function(){var e=this,t=new FormData;t.append("post",this.state.postInp.post),t.append("pic",this.state.postInp.pic),b.addPost(t).then((function(t){e.state.postInp={post:"",pic:""}}))}},{key:"changePassword",value:function(){var e=this;b.changePassword(this.state.inp).then((function(t){0!==t.data.length?(e.state.errors={},t.data.forEach((function(t){e.state.errors[t.param]=t.msg})),e.snackbar("Password has successfuly changed"),e.setState({})):(e.state.errors={},e.setState({}),window.localStorage.removeItem("user"),e.props.history.push("/signin","Password changed successfully. Please Sign in"))}))}},{key:"addFriend",value:function(e){var t=this;b.addFriend(e).then((function(a){t.state.users.find((function(t){return t.id===e})).status="requested",t.setState({})}))}},{key:"addComment",value:function(e){var t=this;b.addComment(this.state.inp_comment.id,e).then((function(a){t.state.posts.map((function(s){s.id===e&&(a.data.user=t.state.data,s.comments.push(a.data),t.state.inp_comment[e]="")})),t.setState({})}))}},{key:"snackbar",value:function(e){var t=document.getElementById("snackbar");t.innerText=e,t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)}},{key:"note",value:function(){var e=this;b.note().then((function(t){e.state.requests=t.data,e.setState({})}))}},{key:"accept",value:function(e){var t=this;b.accept(e).then((function(e){t.snackbar("Request is accepted"),t.note(),t.setState({})}))}},{key:"delete",value:function(e){var t=this;b.delete(e).then((function(e){t.snackbar("Request is deleted"),t.note(),t.setState({})}))}},{key:"addLike",value:function(e,t){var a=this;b.addLike(e).then((function(t){a.state.posts.map((function(s){s.id===e&&(t.data.user=a.state.data,s.likes.push(t.data))})),a.setState({})}))}},{key:"delLike",value:function(e,t){var a=this;b.delLike(e).then((function(t){a.state.posts.map((function(t){if(t.id===e)for(var s=0;s<t.likes.length;s++)t.likes[s].userId===a.state.data.id&&t.likes.splice(s,1)})),a.setState({})}))}},{key:"openMess",value:function(e){var t=this;this.socket=N.a.connect("http://localhost:8000",{query:"id=".concat(this.state.data.id)}),this.state.messages=[],this.state.openChat=!0,this.state.data.id!==e.uxarkox.id?this.state.chatFrData=e.uxarkox:this.state.chatFrData=e.stacox,this.setState({}),b.getMessages(this.state.chatFrData.id).then((function(e){e.data.forEach((function(e){e.myId===t.state.data.id?t.state.messages.push({me:!0,message:e.message,time:e.time,photo:e.photo,id:e.id}):t.state.messages.push({me:!1,message:e.message,time:e.time,photo:e.photo,id:e.id}),t.setState({})}))})),this.socket.on("showMyMessages",(function(e){t.state.messages.push({me:!0,message:e.message.message,time:e.message.time,id:e.message.id}),t.setState({})})),this.socket.on("showYourMessages",(function(e){t.state.messages.push({me:!1,message:e.message.message,time:e.message.time,id:e.message.id}),t.setState({})}))}},{key:"close",value:function(){this.state.openChat=!1,this.setState({}),this.socket.disconnect()}},{key:"removeReq",value:function(e){var t=this;b.removeReq(e).then((function(a){t.state.users.find((function(t){return t.id===e})).status="ok",t.setState({})}))}},{key:"send",value:function(e,t){this.socket.emit("send_message",{message:e,userId:t,myId:this.state.data.id})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"header grid-container"},n.a.createElement("div",{className:"profile"},n.a.createElement("h3",null,n.a.createElement(g.b,{to:"/profile"},"CatChat "))),n.a.createElement("div",{className:"search"},n.a.createElement("input",{type:"text",placeholder:"Search people",className:"form-control right ",value:this.state.search,"data-id":"search",onChange:this.changeSearch.bind(this)}),n.a.createElement("div",{className:"search-div"},this.state.users.map((function(t){return n.a.createElement("div",{key:t.id,className:"search-div-el"},n.a.createElement("img",{className:"img",src:"http://localhost:8000/images/".concat(t.photo),alt:""}),n.a.createElement("div",{className:"search-name"},n.a.createElement("div",{className:"search-div-name"},n.a.createElement(g.b,{to:"/friend/".concat(t.id,"/profile")}," ",t.name," ",t.surname," "),"friend"===t.status?n.a.createElement("p",{className:"search-status"},"Friends"):"me"===t.status?n.a.createElement("p",{className:"search-status"},"Me"):"")),"ok"===t.status?n.a.createElement("button",{className:"search-but",onClick:e.addFriend.bind(e,t.id)},"Add Friends"):"requested"===t.status?n.a.createElement("button",{className:"search-but",onClick:e.removeReq.bind(e,t.id)},"Remove request"):"")})))),n.a.createElement("div",{className:"note",onClick:this.note.bind(this),type:"button","data-toggle":"modal","data-target":"#myModal"},n.a.createElement("i",{className:"fa fa-bell",style:{fontSize:"36px"},"aria-hidden":"true"}),n.a.createElement("span",{className:"badge"},this.state.requests.length)),n.a.createElement("div",{className:"user",onClick:this.toggle.bind(this)},n.a.createElement("img",{className:"img",src:"http://localhost:8000/images/".concat(this.state.data.photo),alt:"http://localhost:8000/images/unknown.png"}))),n.a.createElement("div",{className:"row",onClick:this.clickBody.bind(this)},n.a.createElement("div",{className:"col-manu "},n.a.createElement("div",{className:"myData"},n.a.createElement("h1",null,this.state.data.name),n.a.createElement("h6",null,this.state.data.email)),n.a.createElement("div",{className:"myFriends"},n.a.createElement("h1",null,"My friends"),this.state.friends.map((function(t){return n.a.createElement("div",{key:t.id},n.a.createElement("div",{className:"myFriends-chat"},t.uxarkox.id!==e.state.data.id?n.a.createElement("p",null,t.uxarkox.name,t.uxarkox.surname):n.a.createElement("p",null,t.stacox.name,t.stacox.surname),n.a.createElement("div",{onClick:e.openMess.bind(e,t),className:"fa fa-comments-o chat-icon","aria-hidden":"true"})))})))),n.a.createElement("div",{className:"col-post"},n.a.createElement("div",{className:"postdiv"},n.a.createElement("textarea",{placeholder:"Add post","data-id":"post",value:this.state.postInp.post,onChange:this.changePost.bind(this)}),n.a.createElement("div",{className:"upload_pic"},n.a.createElement("label",null,n.a.createElement("input",{type:"file","data-id":"pic",onChange:this.changePost.bind(this),id:"file-upload",style:{display:"none"}}),n.a.createElement("i",{className:"fa fa-cloud-upload"},"Upload photo"))),n.a.createElement("button",{onClick:this.addPost.bind(this),className:"myButton"},"Publish")),n.a.createElement("div",null,this.state.posts.map((function(t){return n.a.createElement("div",{key:t.id,className:"post"},n.a.createElement("div",null,n.a.createElement("div",{style:{display:"inline-flex"}},n.a.createElement("img",{src:"http://localhost:8000/images/".concat(t.user.photo),alt:"",height:"25px",width:"25px"}),n.a.createElement("h2",null,t.user.name,t.user.surname)),n.a.createElement("div",{style:{height:"auto",width:"auto"}},""!==t.pic?n.a.createElement("img",{src:"http://localhost:8000/images/".concat(t.pic),alt:"",className:"pic-min"}):"",n.a.createElement("h1",null,t.post,t.likes.find((function(t){return t.userId===e.state.data.id}))?n.a.createElement("i",{onClick:e.delLike.bind(e,t.id),className:"fa fa-thumbs-down ",style:{float:"right"}},t.likes.length):n.a.createElement("i",{onClick:e.addLike.bind(e,t.id),className:"fa fa-thumbs-up",style:{float:"right"}},t.likes.length)))),n.a.createElement("h2",{onClick:e.toggle_comment.bind(e,t.id),style:{textDecoration:"underline"}},"Comments"),n.a.createElement("div",{className:"hide_"+t.id+" comment",style:{display:"none"}},t.comments.map((function(e){return n.a.createElement("div",{key:e.id,className:"m-2",style:{display:"grid"}},n.a.createElement("img",{src:"http://localhost:8000/images/".concat(e.user.photo),alt:"",height:"25px",width:"25px",style:{borderRadius:"50%"}}),n.a.createElement("div",{className:"comment-item"},n.a.createElement("b",null,e.user.name,e.user.surname),n.a.createElement("p",null," ",e.comment),n.a.createElement("h6",{style:{float:"inline-end"}},n.a.createElement("i",{className:"time"},new Date(e.time).getDate(),"-",new Date(e.time).getMonth()+1,"-",new Date(e.time).getFullYear()," ",new Date(e.time).getHours(),":",new Date(e.time).getMinutes()))))}))),n.a.createElement("div",{className:"group"},n.a.createElement("input",{onKeyDown:function(a){return e.sendWithEnter(a,t.id)},type:"text",placeholder:"Add comment",className:"comment-inp",value:e.state.inp_comment[t.id],"data-id":"inp_comment",onChange:e.changeComment.bind(e,t.id)}),n.a.createElement("button",{className:"Button",onClick:e.addComment.bind(e,t.id)},"Add")))})))),n.a.createElement("div",{className:"col-chat "},this.state.openChat?n.a.createElement(E,{send:this.send.bind(this),data:this.state.chatFrData,mess:this.state.messages,close:this.close.bind(this)}):null)),n.a.createElement("div",{className:"myDIV",style:{display:this.state.hide}},n.a.createElement("img",{className:"img",src:"http://localhost:8000/images/".concat(this.state.data.photo),alt:""}),n.a.createElement("div",{"data-toggle":"modal","data-target":"#exampleModalCenter1",className:"im-up"},n.a.createElement("img",{className:"img_icon",src:"https://www.clipartmax.com/png/small/281-2810310_png-file-cloud-upload-icon.png",alt:"http://localhost:8000/images/unknown.png"})),n.a.createElement("h1",null,this.state.data.name," ",this.state.data.surname),n.a.createElement("h6",null,this.state.data.email),n.a.createElement(g.b,{className:"Button",to:"/profile/edit"}," Manage your Account "),n.a.createElement("button",{className:"Button","data-toggle":"modal","data-target":"#exampleModalCenter"},"Change Password"),n.a.createElement("button",{onClick:this.logout.bind(this),className:"Button"},"Logout\u2002",n.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"}," "))),n.a.createElement("div",{className:"modal fade",id:"exampleModalCenter1",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},"Change Password"),n.a.createElement("button",{type:"button",className:"Button","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("input",{type:"file",className:"form-control m-2",accept:"image/*","data-id":"profPic",onChange:this.changePhoto.bind(this)})),n.a.createElement("div",null,n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"commentButton","data-dismiss":"modal"},"Close"),n.a.createElement("button",{onClick:this.addProfPic.bind(this),type:"button",className:"btn btn-primary"},"Add Propile pic")))))),n.a.createElement("div",{className:"modal fade",id:"exampleModalCenter",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},n.a.createElement("div",{className:"pass-content"},n.a.createElement("div",{className:"pass-header"},n.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},"Change Password"),n.a.createElement("span",{"data-dismiss":"modal","aria-label":"Close","aria-hidden":"true"},"x")),n.a.createElement("div",{className:"pass-body"},n.a.createElement("input",{type:"password",placeholder:"Enter your old password",className:"password-input",value:this.state.inp.old_password,"data-id":"old_password",onChange:this.change.bind(this)}),this.state.errors.old_password?n.a.createElement("div",{className:"alert alert-danger m-2 w-100"},this.state.errors.old_password):null,n.a.createElement("input",{type:"password",placeholder:"Enter your new password",className:"password-input",value:this.state.inp.new_password,"data-id":"new_password",onChange:this.change.bind(this)}),this.state.errors.new_password?n.a.createElement("div",{className:"alert alert-danger m-2 w-100"},this.state.errors.new_password):null,n.a.createElement("input",{type:"password",placeholder:"Confirm your new password",className:"password-input",value:this.state.inp.new_confirm_password,"data-id":"new_confirm_password",onChange:this.change.bind(this)}),this.state.errors.new_confirm_password?n.a.createElement("div",{className:"alert alert-danger m-2 w-100"},this.state.errors.new_confirm_password):null),n.a.createElement("div",{className:"pass-footer"},n.a.createElement("button",{onClick:this.changePassword.bind(this),type:"button",className:"Button-pass"},"Save changes"))))),n.a.createElement("div",{className:"modal fade",id:"myModal"},n.a.createElement("div",{className:"modal-dialog"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h4",{className:"modal-title"},"Notification"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),n.a.createElement("div",{className:"modal-body"},this.state.requests.map((function(t){return n.a.createElement("div",{key:t.id},n.a.createElement("img",{src:"http://localhost:8000/images/".concat(t.photo),alt:"",height:"70px",width:"70px"}),n.a.createElement("b",null,n.a.createElement("p",null,t.name,t.surname)),n.a.createElement("button",{className:"accept-button ",onClick:e.accept.bind(e,t.id)},"Accept"),n.a.createElement("div",{id:"snackbar"}),n.a.createElement("button",{className:"delete-button",onClick:e.delete.bind(e,t.id)},"Delete"),n.a.createElement("hr",null))})))))))}}]),a}(s.Component),C=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={data:{name:"",surname:"",age:""},errors:{}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.getUserData().then((function(t){t.data.id?(e.state.data=t.data,e.setState({})):e.props.history.push("/signin","Please Log in")}))}},{key:"change",value:function(e){this.state.data[e.target.getAttribute("data-id")]=e.target.value,this.setState({})}},{key:"edit",value:function(){var e=this;b.edit(this.state.data).then((function(t){console.log(t),0!==t.data.length?(e.state.errors={},t.data.forEach((function(t){e.state.errors[t.param]=t.msg})),e.setState({}),console.log(e.state.errors)):(e.state.errors={},e.setState({}),e.props.history.push("/profile","Data changed successfully"))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"manage-account"},n.a.createElement("h3",null,"Manage your Account"),n.a.createElement("div",null,n.a.createElement("input",{type:"text",placeholder:"Enter your name",value:this.state.data.name,"data-id":"name",onChange:this.change.bind(this)}),this.state.errors.name?n.a.createElement("div",{className:"alert alert-danger m-2 w-100"},this.state.errors.name):null,n.a.createElement("input",{type:"text",placeholder:"Enter your surname",value:this.state.data.surname,"data-id":"surname",onChange:this.change.bind(this)}),this.state.errors.surname?n.a.createElement("div",{className:"alert alert-danger m-2 w-100"},this.state.errors.surname):null,n.a.createElement("input",{type:"text",placeholder:"Enter your age",value:this.state.data.age,"data-id":"age",onChange:this.change.bind(this)}),this.state.errors.age?n.a.createElement("div",{className:"alert alert-danger m-2 w-100"},this.state.errors.age):null),n.a.createElement("button",{onClick:this.edit.bind(this),className:"Button"},"Edit"))}}]),a}(s.Component),S=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getData",value:function(e){return u.get("/friend/".concat(e,"/profile"),{headers:y()})}}]),e}()),x=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={data:{}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){S.getData(this.props.match.params.id).then((function(e){}))}},{key:"render",value:function(){return n.a.createElement("div",null)}}]),a}(s.Component),D=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(g.a,null,n.a.createElement(f.a,{path:"/",exact:!0,component:p}),n.a.createElement(f.a,{path:"/signin",component:v}),n.a.createElement(f.a,{path:"/profile",exact:!0,component:w}),n.a.createElement(f.a,{path:"/profile/edit",component:C}),n.a.createElement(f.a,{path:"/friend/:id/profile",exact:!0,component:x}))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,a){},42:function(e,t,a){},59:function(e,t,a){e.exports=a(119)},64:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.8482c830.chunk.js.map