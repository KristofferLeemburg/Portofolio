(this["webpackJsonpreact-gsap"]=this["webpackJsonpreact-gsap"]||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/test.372bda02.mp4"},40:function(e,t,a){e.exports=a(70)},45:function(e,t,a){},46:function(e,t,a){},68:function(e,t,a){e.exports=a.p+"static/media/profiel.468e489b.jpeg"},70:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(14),r=a.n(c),o=(a(45),a(46),a(27)),i=a(9),m=a(5),s=a(11),u=function(e){s.a.from(e,{xPercent:50,opacity:0,stagger:.2,duration:3,scale:1,ease:"ease"})},d=function(e){s.a.to(e.target,{duration:.4,y:3,skewX:4,ease:"power2.inOut"})},f=function(e){s.a.to(e.target,{duration:.4,y:-3,skewX:0,ease:"power2.inOut"})},E=function(e){var t=e.state,a=Object(n.useRef)(null),c=Object(n.useRef)(null),r=Object(n.useRef)(null),o=Object(n.useRef)(null),m=Object(n.useRef)(null),E=Object(n.useRef)(null),p=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e,n;!1===t.clicked?(e=r,n=c,s.a.to([e,n],{duration:.8,height:0,ease:"power4.inOut",stagger:{amount:3}}),s.b.to(a,{duration:1,css:{display:"none"}})):(!0===t.clicked||!0===t.clicked&&null===t.initial)&&(s.b.to(a,{duration:0,css:{display:"block"}}),s.b.to([c,r],{duration:0,opacity:1,height:"100%"}),function(e,t){s.a.from([e,t],{duration:.8,height:0,transformOrigin:"right top",skewY:4,ease:"power4.inOut",stagger:{amount:.2}})}(c,r),u(o),function(e,t,a){s.a.from([e,t,a],{duration:.8,y:100,delay:.1,ease:"power4.inOut",stagger:{amount:.3}})}(m,E,p))}),[t]),l.a.createElement("div",{ref:function(e){return a=e},className:"hamburger-menu"},l.a.createElement("div",{ref:function(e){return c=e},className:"menu-secondary-background-color"}),l.a.createElement("div",{ref:function(e){return r=e},className:"menu-layer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"menu-links"},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.b,{onMouseEnter:function(e){return d(e)},onMouseOut:function(e){return f(e)},ref:function(e){return m=e},to:"/about-me"},"About")),l.a.createElement("li",null,l.a.createElement(i.b,{onMouseEnter:function(e){return d(e)},onMouseOut:function(e){return f(e)},ref:function(e){return E=e},to:"/portofolio"},"Portofolio")),l.a.createElement("li",null,l.a.createElement(i.b,{onMouseEnter:function(e){return d(e)},onMouseOut:function(e){return d(e)},ref:function(e){return p=e},to:"/contact-me"},"Contact me")))),l.a.createElement("div",{ref:function(e){return o=e},className:"info"}))))))},p=Object(m.f)((function(e){var t=e.history,a=Object(n.useRef)(null),c=Object(n.useState)({initial:!1,clicked:null,menuName:"Menu"}),r=Object(o.a)(c,2),m=r[0],u=r[1],d=Object(n.useState)(!1),f=Object(o.a)(d,2),p=f[0],b=f[1];Object(n.useEffect)((function(){var e;e=a,s.a.from(e,{xPercent:-150,opacity:0,stagger:.2,duration:3,scale:1,ease:"ease"}),t.listen((function(){u({clicked:!1,menuName:"Menu"})}))}),[t]);var g=function(){b(!p),setTimeout((function(){b(!1)}),1200)};return l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"inner-header"},l.a.createElement("div",{className:"logo",ref:function(e){return a=e}},l.a.createElement(i.b,{to:"/"},"Main.")),l.a.createElement("div",{className:"menu"},l.a.createElement("button",{disabled:p,onClick:function(){g(),!1===m.initial?u({initial:null,clicked:!0,menuName:"Close"}):!0===m.clicked?u({clicked:!m.clicked,menuName:"Menu"}):!1===m.clicked&&u({clicked:!m.clicked,menuName:"Close"})}},m.menuName))))),l.a.createElement(E,{state:m}))})),b=a(35),g=a.n(b),N=a(6),v=a(18),h=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"A web developer with a love for clean, functional code, relentless work ethic and an exceptional eye for detail. Excellent knowledge of HTML, CSS (SASS). Basic knowledge of JavaScript, React.js, Python, and PHP. Comfortable working in the command line. Basic understanding how to use databases like mySQL. Prior experience as a Video artist. Proficient use of Adobe Photoshop and Adobe Illustrator. Intermediate knowledge of design principles. Functional knowledge of Git. Ability to apply feedback efficiently. Familiarity with project planning software (e.g. Github). Strong analytical problem-solving skills. Ability to communicate ideas clearly and professionally."),l.a.createElement("img",{src:a(68),alt:"random1",className:"profile"}))},w=function(){return l.a.createElement("div",{className:"contactform"},l.a.createElement(N.d,null,l.a.createElement("p",{className:"text-center w-responsive mx-auto pb-5"},"Feel free to reach me."),l.a.createElement(N.j,null,l.a.createElement(N.c,{md:"12",className:"md-0 mb-5"},l.a.createElement("form",{action:"./insert.php",method:"POST",enctype:"multipart/form-data",name:"EmailForm"},l.a.createElement(N.j,null,l.a.createElement(N.c,{md:"6"},l.a.createElement("div",{className:"md-form mb-0"},l.a.createElement(N.g,{type:"text",id:"contact-name",label:"Your name",name:"username",required:!0}))),l.a.createElement(N.c,{md:"6"},l.a.createElement("div",{className:"md-form mb-0"},l.a.createElement(N.g,{type:"text",id:"contact-email",label:"Your email",name:"email",required:!0})))),l.a.createElement(N.j,null,l.a.createElement(N.c,{md:"12"},l.a.createElement("div",{className:"md-form mb-0"},l.a.createElement(N.g,{type:"text",id:"contact-subject",label:"Subject",name:"subjec",required:!0})))),l.a.createElement(N.j,null,l.a.createElement(N.c,{md:"12"},l.a.createElement("div",{className:"md-form mb-0"},l.a.createElement(N.g,{type:"textarea",id:"contact-message",label:"Your message",name:"messag",required:!0})))),l.a.createElement("div",{className:"text-center text-md-left"},l.a.createElement(N.b,{color:"primary",size:"md",type:"submit",value:"Submit"},"Send")))),l.a.createElement(N.j,{md:"1",className:"text-center w-responsive mx-auto pb-12"},l.a.createElement("ul",{className:"list-unstyled mb-0"},l.a.createElement("li",null,l.a.createElement(N.e,{icon:"map-marker-alt",size:"2x",className:"blue-text"}),l.a.createElement("p",null,"Middenweg 103A 1462 HG Middenbeemster The Netherlands")),l.a.createElement("li",null,l.a.createElement(N.e,{icon:"phone",size:"2x",className:"blue-text mt-4"}),l.a.createElement("p",null,"+31 631947351 ")),l.a.createElement("li",null,l.a.createElement(N.e,{icon:"envelope",size:"2x",className:"blue-text mt-6"}),l.a.createElement("p",null,"kristofferleemburg@gmail.com")),l.a.createElement("li",null,l.a.createElement(v.b,{className:"icon"}),l.a.createElement(v.a,{className:"icon"}),l.a.createElement(v.c,{className:"icon"})))))))},k=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"portofolio-header"},"Random website generator."),l.a.createElement("p",{className:"portofolio-p"},"A website created as a reaction to the small bubble created by big tech companies"))},y=function(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){u(e)}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("video",{className:"video",src:g.a,autoPlay:!0,muted:!0,loop:!0}),l.a.createElement("div",{className:"wrapper"},l.a.createElement("h5",{className:"intro",ref:function(t){return e=t}},l.a.createElement("b",null,"Front End Developer"),l.a.createElement("b",{className:"intro2"},"Problem Solving Skills"),l.a.createElement("b",{className:"intro3"},"JavaScript"),l.a.createElement("b",{className:"intro4"},"HTML-CSS"),l.a.createElement("b",{className:"intro5"},"Responsive and Mobile Design"),l.a.createElement("b",{className:"intro6"},"Experience with CSS Preprocessors"),l.a.createElement("b",{className:"intro7"},"Front End Frameworks"))))},x=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"home"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:y}),l.a.createElement(m.a,{exact:!0,path:"/about-me",component:h}),l.a.createElement(m.a,{exact:!0,path:"/contact-me",component:w}),l.a.createElement(m.a,{exact:!0,path:"/portofolio",component:k})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(69);r.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.7d19f244.chunk.js.map