"use strict";(self.webpackChunksocial_network_app=self.webpackChunksocial_network_app||[]).push([[433],{2896:function(n,e,o){o.d(e,{o:function(){return p}});var t=o(4165),i=o(4942),s=o(1413),a=o(5861),r=o(9439),l=o(1363),c=o(2791),d=o(1672),u=o(9722),m=o(184),p=function(n){var e=n.toggleShowCreatePost,o=n.onAddPost,p=n.isShowCreatePost,h=n.loggedInUser,v=(0,c.useState)({body:"",imgBodyUrl:null,videoBodyUrl:null,link:"",title:"",style:{textAlign:"ltr"}}),f=(0,r.Z)(v,2),g=f[0],x=f[1],j=(0,c.useState)(!1),N=(0,r.Z)(j,2),y=N[0],b=N[1],U=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var o,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=e.target.name,a="number"===e.target.type?+e.target.value||"":e.target.value,x((function(n){return(0,s.Z)((0,s.Z)({},n),{},(0,i.Z)({},o,a))}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();(0,c.useEffect)((function(){return function(){x(null)}}),[]);var k=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,(0,d.T)(e);case 4:o=n.sent,b(!1),x((function(n){return(0,s.Z)((0,s.Z)({},n),{},{imgBodyUrl:o.url})})),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),b(!1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),Z=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,(0,d.u)(e);case 4:o=n.sent,b(!1),x((function(n){return(0,s.Z)((0,s.Z)({},n),{},{videoBodyUrl:o.url})})),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),b(!1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsx)("section",{className:p?" create-post-modal":"hide create-post-modal",onClick:function(n){n.stopPropagation(),e()},children:(0,m.jsxs)("form",{className:"container",onSubmit:function(n){n.preventDefault(),o(g)},onClick:function(n){n.stopPropagation()},children:[(0,m.jsxs)("div",{className:"title",children:[(0,m.jsx)("h1",{children:"Create a post"}),(0,m.jsx)("span",{className:"close-icon",onClick:e,children:(0,m.jsx)(l.G,{icon:"fa-solid fa-x"})})]}),(0,m.jsxs)("div",{className:"name-container",children:[(0,m.jsx)("div",{className:"img-container",children:(0,m.jsx)("img",{src:null===h||void 0===h?void 0:h.imgUrl,alt:"",className:"img-profile"})}),(0,m.jsx)("div",{className:"name",children:(0,m.jsx)("h2",{children:null===h||void 0===h?void 0:h.fullname})})]}),(0,m.jsx)("div",{className:"input-container",children:(0,m.jsx)("textarea",{required:!0,ref:function(n){n&&n.focus()},onChange:U,type:"text",id:"body",name:"body",value:g.txt,placeholder:"What do you want to talk about?"})}),(0,m.jsx)("div",{className:"link-container",children:(0,m.jsx)("input",{id:"link",name:"link",value:g.link,onChange:U,type:"text",placeholder:"Add a link here"})}),(0,m.jsx)("div",{className:"is-loading-container",children:(0,m.jsx)("p",{children:y&&(0,m.jsx)("span",{children:(0,m.jsx)("img",{src:u,alt:""})})})}),(0,m.jsx)("div",{className:"container-video-body",children:(0,m.jsx)("div",{className:"body-video",children:g.videoBodyUrl&&(0,m.jsx)("video",{width:"100%",height:"300",controls:!0,children:(0,m.jsx)("source",{src:g.videoBodyUrl,type:"video/mp4"})})})}),(0,m.jsx)("div",{className:"container-img-body",children:(0,m.jsx)("div",{className:"body-img",children:g.imgBodyUrl&&(0,m.jsx)("img",{src:g.imgBodyUrl,alt:"",className:"img"})})}),(0,m.jsxs)("div",{className:"btns-add-container",children:[(0,m.jsx)("div",{className:"cancel-btn btn",onClick:function(){x({body:"",imgBodyUrl:null,videoBodyUrl:null,title:"",style:{textAlign:"ltr"}}),e()},children:"Cancel"}),!g.videoBodyUrl&&(0,m.jsx)("div",{className:"add-video-btn btn",children:(0,m.jsxs)("label",{htmlFor:"videoUrl",className:"add-video-container",children:[(0,m.jsx)("input",{onChange:Z,id:"videoUrl",type:"file",name:"videoUrl",accept:"video/*",hidden:!0}),(0,m.jsx)("p",{className:"add-video-body",children:"Add video"})]})}),!g.imgBodyUrl&&(0,m.jsx)("div",{className:"add-img-btn btn",children:(0,m.jsxs)("label",{htmlFor:"imgUrl",className:"add-img-container",children:[(0,m.jsx)("input",{onChange:k,id:"imgUrl",type:"file",name:"imgUrl",accept:"image/*",hidden:!0}),(0,m.jsx)("p",{className:"add-img-body",children:"Add photo"})]})}),(0,m.jsx)("button",{className:"post-btn btn",children:"Done"})]})]})})}},9334:function(n,e,o){o.d(e,{O:function(){return u}});var t=o(4165),i=o(5861),s=o(9439),a=o(2791),r=o(1363),l=o(8931),c=o(8874),d=o(184);function u(n){var e=n.toggleShowImg,o=n.imgUrl,u=n.videoUrl,m=n.title,p=n.post,h=n.body,v=(0,l.k6)(),f=(0,a.useState)(null),g=(0,s.Z)(f,2),x=g[0],j=g[1],N=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.W.getById(e);case 2:o=n.sent,j(o);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,a.useEffect)((function(){null!==p&&void 0!==p&&p.userId&&N(p.userId)}),[]),(0,d.jsxs)("div",{className:"img-profile-preview",children:[(0,d.jsx)("div",{className:"bg",onClick:e}),(0,d.jsxs)("section",{className:"container",children:[(0,d.jsxs)("div",{className:"title",children:[x&&p&&(0,d.jsxs)("div",{className:"user-details",onClick:function(){return v.push("/main/profile/".concat(p.userId))},children:[(0,d.jsx)("img",{src:x.imgUrl,alt:"",className:"img"}),(0,d.jsx)("p",{className:"fullname",children:x.fullname})]})||p&&(0,d.jsx)("p",{className:"user-details",children:"Loading user..."}),(0,d.jsx)("p",{children:m}),(0,d.jsx)("span",{className:"logo-close",onClick:e,children:(0,d.jsx)(r.G,{icon:"fa-solid fa-x"})})]}),h&&(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:"body",children:h})}),p&&(0,d.jsx)("div",{className:"see-post",children:(0,d.jsx)("p",{onClick:function(){return v.push("/main/post/".concat(p.userId,"/").concat(p._id))},children:"See original post"})}),(0,d.jsx)("div",{className:"img-container",children:o&&(0,d.jsx)("img",{className:"img",src:o,alt:""})||u&&(0,d.jsx)("div",{children:(0,d.jsx)("video",{width:"100%",height:"300",controls:!0,children:(0,d.jsx)("source",{src:u,type:"video/mp4"})})})})]})]})}},7433:function(n,e,o){o.r(e),o.d(e,{default:function(){return x}});var t=o(1413),i=o(9439),s=o(2791),a=o(2040),r=o(9434),l=o(8931),c=o(184),d=function(n){var e=n.url,o=n.userId,t=n.fullname,a=n.isCloseUserIcon,r=(0,s.useState)(!1),d=(0,i.Z)(r,2),u=d[0],m=d[1],p=(0,l.k6)();return(0,s.useEffect)((function(){return a&&m(!1),function(){}}),[a]),(0,c.jsxs)("div",{className:"user-icon-pos-container",onClick:function(n){n.stopPropagation(),m((function(n){return!n}))},children:[(0,c.jsx)("img",{className:"user-icon-pos",src:e,alt:t,title:t}),u&&(0,c.jsxs)("div",{className:"menu-container",children:[(0,c.jsxs)("div",{className:"opts-btns",children:[(0,c.jsx)("div",{className:"fullname ",children:(0,c.jsx)("p",{children:t})}),(0,c.jsx)("div",{className:"go-to-profile opt",onClick:function(){return p.push("/main/profile/".concat(o))},children:(0,c.jsx)("p",{children:"Go to profile"})}),(0,c.jsx)("div",{className:"send-message opt",onClick:function(){return p.push("/main/message/".concat(o))},children:(0,c.jsx)("p",{children:"Send a message"})})]}),(0,c.jsx)("div",{className:"close",onClick:function(n){n.stopPropagation(),m(!1)},children:(0,c.jsx)("span",{children:"Close"})})]})]})},u=o(1363),m=function(n){n.menuPosition;var e=n.setIsCreateShowPost;return(0,c.jsxs)("section",{className:"map-menu",children:[(0,c.jsx)("span",{className:"location-icon",children:(0,c.jsx)(u.G,{icon:"fa-solid fa-location-dot"})}),(0,c.jsx)("div",{className:"opts-container",children:(0,c.jsx)("div",{className:"add-post-to-map opt",onClick:function(){e(!0)},children:(0,c.jsx)("p",{children:"Add a post here"})})})]})},p=function(n){var e=n.post,o=n.setPostToPreview;return(0,c.jsx)("section",{className:"post-icon-map",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"logo-post-icon-map-container",onClick:function(){return o(e)},children:(0,c.jsx)("span",{className:"img-logo",children:e.imgBodyUrl&&(0,c.jsx)("img",{src:e.imgBodyUrl,alt:"",className:"img"})||e.videoBodyUrl&&(0,c.jsx)("p",{children:(0,c.jsx)("span",{className:"post-logo",children:(0,c.jsx)(u.G,{icon:"fa-solid fa-video"})})})||(0,c.jsx)("p",{children:(0,c.jsx)("span",{className:"post-logo",children:(0,c.jsx)(u.G,{icon:"fa-solid fa-comment-dots"})})})})})})})},h=o(9334),v=o(2896),f=o(262),g=o(4029);var x=function(){var n=(0,r.I0)(),e=(0,s.useState)({center:{lat:32.05591645013164,lng:34.7549857056555},zoom:2,yesIWantToUseGoogleMapApiInternals:!0}),o=(0,i.Z)(e,2),l=o[0],u=(o[1],(0,s.useState)(!1)),x=(0,i.Z)(u,2),j=x[0],N=x[1],y=(0,s.useState)(!1),b=(0,i.Z)(y,2),U=b[0],k=b[1],Z=(0,s.useState)(null),C=(0,i.Z)(Z,2),w=C[0],S=C[1],I=(0,s.useState)(!1),P=(0,i.Z)(I,2),B=P[0],_=P[1],A=(0,s.useState)(!1),G=(0,i.Z)(A,2),T=G[0],M=G[1],D=(0,r.v9)((function(n){return n.userModule})).loggedInUser,E=(0,r.v9)((function(n){return n.userModule})).users,W=(0,r.v9)((function(n){return n.postModule})).posts;(0,s.useEffect)((function(){n((0,f.rd)("map"));var e={position:"position"};return n((0,g.uQ)(e)),n((0,g.Rf)()),n((0,f.L6)(e)),n((0,f.Nz)()),navigator.geolocation?navigator.geolocation.getCurrentPosition(F):console.log("Geolocation is not supported by this browser."),function(){n((0,f.L6)(null)),n((0,g.uQ)(null))}}),[]);var z=function(){M((function(n){return!n}))};function F(e){var o={lat:e.coords.latitude,lng:e.coords.longitude};e&&function(e){D&&n((0,g.Nq)((0,t.Z)((0,t.Z)({},D),{},{position:e})))}(o)}var L=function(n){var e={lat:n.lat,lng:n.lng};N((function(n){return!n})),S(e),k((function(n){return!n}))};return(0,c.jsxs)("section",{className:"map-page ",children:[(0,c.jsx)("div",{className:"map",style:{height:"100%",width:"100%"},children:(0,c.jsxs)(a.ZP,{bootstrapURLKeys:{key:"".concat("AIzaSyBHA9006a2Ddj1ymrGvMDWbkMjbXaPhQEU")},defaultCenter:l.center,defaultZoom:l.zoom,yesIWantToUseGoogleMapApiInternals:!0,onClick:function(n){return L(n)},children:[E&&E.map((function(n){var e,o;return(0,c.jsx)(d,{lat:(null===n||void 0===n||null===(e=n.position)||void 0===e?void 0:e.lat)||32.05591645013164,lng:(null===n||void 0===n||null===(o=n.position)||void 0===o?void 0:o.lng)||34.7549857056555,url:n.imgUrl,userId:n._id,fullname:n.fullname,isCloseUserIcon:j},n._id)})),W&&W.map((function(n){var e,o;return(0,c.jsx)(p,{lat:null===n||void 0===n||null===(e=n.position)||void 0===e?void 0:e.lat,lng:null===n||void 0===n||null===(o=n.position)||void 0===o?void 0:o.lng,post:n,setPostToPreview:_},null===n||void 0===n?void 0:n._id)})),U&&w&&(0,c.jsx)(m,{menuPosition:w,lat:w.lat,lng:w.lng,setIsCreateShowPost:M})]})}),B&&(0,c.jsx)(h.O,{toggleShowImg:function(n){_(B?null:n)},title:B.title,body:B.body,imgUrl:B.imgBodyUrl,post:B,videoUrl:null===B||void 0===B?void 0:B.videoBodyUrl}),T&&(0,c.jsx)(v.o,{isShowCreatePost:T,onAddPost:function(e){var o=(0,t.Z)((0,t.Z)({},e),{},{userId:D._id,position:w});n((0,f.TJ)(o)).then((function(){return z()}))},toggleShowCreatePost:z,loggedInUser:D})]})}},1672:function(n,e,o){o.d(e,{T:function(){return t},u:function(){return i}});var t=function(n){var e="https://api.cloudinary.com/v1_1/".concat("duajg3ah1","/image/upload"),o=new FormData;return o.append("file",n.target.files[0]),o.append("upload_preset","social_n_shlomi"),fetch(e,{method:"POST",body:o}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){console.error(n)}))},i=function(n){var e="https://api.cloudinary.com/v1_1/".concat("duajg3ah1","/video/upload"),o=new FormData;return o.append("file",n.target.files[0]),o.append("upload_preset","social_n_shlomi"),fetch(e,{method:"POST",body:o}).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){return console.error(n)}))}}}]);
//# sourceMappingURL=433.a684f0e8.chunk.js.map