(function(){"use strict";var e={8992:function(e,t,o){var a=o(3751),n=o(641),l=o(33),r=o(953),i=o(5245),s=o(129),u=o(5518),c=o(6861),d=o(8517),p=o(5365),f=o(3644),m=o(6152),b=o(3971);const h={key:0},v={key:1};var g={__name:"Navbar",emits:["navigate"],setup(e,{emit:t}){const o=t,a=(0,r.KR)(!1),g=["home","about","projects","contact"];function k(e){o("navigate",e),a.value=!1}return(e,t)=>{const o=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(i.z,{height:"100",elevation:"0"},{append:(0,n.k6)((()=>[e.$vuetify.display.smAndDown?((0,n.uX)(),(0,n.CE)("div",h,[(0,n.bF)(u.D,{variant:"plain",size:"large",ripple:!1,onClick:t[2]||(t[2]=e=>a.value=!a.value),class:"me-2"},{default:(0,n.k6)((()=>[(0,n.bF)(c.w,{size:"x-large"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(a.value?"mdi-close":"mdi-menu"),1)])),_:1})])),_:1})])):((0,n.uX)(),(0,n.CE)("div",v,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(g,(t=>(0,n.bF)(u.D,{variant:"plain",key:t,size:"large",onClick:o=>e.$emit("navigate",t),ripple:!1,class:"me-2"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(t),1)])),_:2},1032,["onClick"]))),64))]))])),default:(0,n.k6)((()=>[(0,n.bF)(b.s,null,{default:(0,n.k6)((()=>[(0,n.bF)(p.g,null,{prepend:(0,n.k6)((()=>[e.$vuetify.display.width>400?((0,n.uX)(),(0,n.Wv)(s.y,{key:0,size:"50",onClick:t[0]||(t[0]=t=>e.$emit("navigate","home"))},{default:(0,n.k6)((()=>[(0,n.bF)(d.y,{src:"/portfolio/me.jpg"})])),_:1})):(0,n.Q3)("",!0)])),default:(0,n.k6)((()=>[(0,n.Lk)("p",{class:"font-weight-bold text-h5",onClick:t[1]||(t[1]=t=>e.$emit("navigate","home"))},"Joren Sumagang")])),_:1})])),_:1})])),_:1}),(0,n.bF)(m.e,{modelValue:a.value,"onUpdate:modelValue":t[3]||(t[3]=e=>a.value=e),location:"top",temporary:""},{default:(0,n.k6)((()=>[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(g,(e=>(0,n.bF)(p.g,{onClick:t=>k(e),key:e},{default:(0,n.k6)((()=>[(0,n.bF)(f.U,{class:"py-4 text-uppercase text-end"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e),1)])),_:2},1024)])),_:2},1032,["onClick"]))),64))])),_:1},8,["modelValue"]),(0,n.bF)(o)],64)}}},k=o(6262);const y=(0,k.A)(g,[["__scopeId","data-v-604c5452"]]);var _=y,w=o(4492),F=o(4261),j=o(1743);const x=e=>((0,n.Qi)("data-v-1741abf1"),e=e(),(0,n.jt)(),e),P=x((()=>(0,n.Lk)("div",{id:"free-up-space"},null,-1))),N=x((()=>(0,n.Lk)("p",null," Just a silly boy who takes on the cruel challenges presented by contemporary society. ",-1))),C={key:0,class:"d-flex justify-center align-center"},G={class:"d-flex flex-column btns pa-1 bg-white"};function L(e,t){return(0,n.uX)(),(0,n.Wv)(w.I,{fluid:"",class:"text-center",style:{height:"80vh"}},{default:(0,n.k6)((()=>[P,(0,n.Lk)("p",{id:"name",class:(0,l.C4)(["font-weight-bold","name",e.$vuetify.display.smAndDown?"text-h4":"text-h2"])},"Hey, I'm Joren Sumagang",2),(0,n.bF)(F.L,{justify:"center"},{default:(0,n.k6)((()=>[(0,n.bF)(j.B,{cols:"12",sm:"12",md:"10",class:"subname font-weight-regular"},{default:(0,n.k6)((()=>[N])),_:1})])),_:1}),(0,n.bF)(u.D,{variant:"flat",size:"x-large",class:"project-btn font-weight-bold",onClick:t[0]||(t[0]=t=>e.$emit("navigate","projects")),color:"green"},{default:(0,n.k6)((()=>[(0,n.eW)("PROJECTS")])),_:1}),e.$vuetify.display.mdAndUp?((0,n.uX)(),(0,n.CE)("div",C,[(0,n.Lk)("div",G,[(0,n.bF)(u.D,{href:"https://github.com/joren97x",target:"_blank",size:"60",variant:"flat",rounded:"0",density:"compact"},{default:(0,n.k6)((()=>[(0,n.bF)(c.w,{size:"35"},{default:(0,n.k6)((()=>[(0,n.eW)("mdi-github")])),_:1})])),_:1}),(0,n.bF)(u.D,{href:"https://www.facebook.com/joren97x",target:"_blank",size:"60",variant:"flat",rounded:"0",density:"compact"},{default:(0,n.k6)((()=>[(0,n.bF)(c.w,{size:"35"},{default:(0,n.k6)((()=>[(0,n.eW)("mdi-facebook")])),_:1})])),_:1}),(0,n.bF)(u.D,{href:"https://www.instagram.com/joren97x",target:"_blank",size:"60",variant:"flat",rounded:"0",density:"compact"},{default:(0,n.k6)((()=>[(0,n.bF)(c.w,{size:"35"},{default:(0,n.k6)((()=>[(0,n.eW)("mdi-instagram")])),_:1})])),_:1}),(0,n.bF)(u.D,{href:"https://open.spotify.com/user/31j7mhgyggfkatw6s75x7zawlgbi",target:"_blank",size:"60",variant:"flat",rounded:"0",density:"compact"},{default:(0,n.k6)((()=>[(0,n.bF)(c.w,{size:"35"},{default:(0,n.k6)((()=>[(0,n.eW)("mdi-spotify")])),_:1})])),_:1})])])):(0,n.Q3)("",!0)])),_:1})}const I={},W=(0,k.A)(I,[["render",L],["__scopeId","data-v-1741abf1"]]);var z=W,E=o(9219);const S=e=>((0,n.Qi)("data-v-46fc31f5"),e=e(),(0,n.jt)(),e),K=S((()=>(0,n.Lk)("div",{id:"free-up-space"},null,-1))),O=S((()=>(0,n.Lk)("p",{class:"text-h3 text-center font-weight-bold"},"About me",-1))),A=S((()=>(0,n.Lk)("p",{class:"text-center mt-10"},"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology",-1))),D=S((()=>(0,n.Lk)("p",{class:"text-h5 font-weight-bold title"},"Get to know me",-1))),X=S((()=>(0,n.Lk)("p",{class:"text-body-1"}," Yoo, I'm Joren. I like to learn stuff that helps me reach my goals. I love watching Kdrama heheh. ",-1))),V=S((()=>(0,n.Lk)("p",{class:"text-h5 font-weight-bold title"},"My skills",-1)));var T={__name:"About",setup(e){const t=["HTML","CSS","PHP","MySQL","Vue.js","Quasar","Javascript","Firebase","Express","Vuetify","Laravel","REST API"];return(e,o)=>((0,n.uX)(),(0,n.Wv)(w.I,{fluid:"",class:"outer"},{default:(0,n.k6)((()=>[(0,n.bF)(w.I,null,{default:(0,n.k6)((()=>[K,O,A,(0,n.bF)(F.L,null,{default:(0,n.k6)((()=>[(0,n.bF)(j.B,{md:"6",cols:"12"},{default:(0,n.k6)((()=>[D,X,(0,n.bF)(u.D,{variant:"flat",size:"x-large",class:"project-btn font-weight-bold contact",color:"green",onClick:o[0]||(o[0]=t=>e.$emit("navigate","contact"))},{default:(0,n.k6)((()=>[(0,n.eW)("Contact")])),_:1})])),_:1}),(0,n.bF)(j.B,{md:"6",cols:"12"},{default:(0,n.k6)((()=>[V,((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(t,(e=>(0,n.bF)(E.x,{label:"",class:"mx-2 mb-2 pa-5",key:e},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e),1)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1})])),_:1}))}};const R=(0,k.A)(T,[["__scopeId","data-v-46fc31f5"]]);var J=R,M=o(4475),U=o(5572),q=o(9311),B=o(2082),H=o(1332),Q=o(9728),$=o(1705),Y=o(5112),Z=o(2939),ee=o(7209),te=o(3899),oe=o(8671);const ae={class:"d-flex align-center justify-center fill-height"},ne={class:"font-weight-bold text-h5"},le={class:"my-6"};var re={__name:"ProjectCard",props:{project:Object},setup(e){const t=(0,r.KR)(!1),o=(0,r.KR)(!1);return(r,i)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(M.J,{elevation:"0",color:"",class:"my-10"},{default:(0,n.k6)((()=>[(0,n.bF)(F.L,null,{default:(0,n.k6)((()=>[(0,n.bF)(j.B,{cols:"12",md:"7",sm:"12"},{default:(0,n.k6)((()=>[(0,n.bF)(te.y,{text:"Click me to see screenshots",location:"top"},{activator:(0,n.k6)((({props:o})=>[(0,n.bF)(d.y,(0,n.v6)({height:"400"},o,{src:e.project.image[0],onClick:i[0]||(i[0]=e=>t.value=!0)}),{placeholder:(0,n.k6)((()=>[(0,n.Lk)("div",ae,[(0,n.bF)(ee.x,{color:"grey-lighten-4",indeterminate:""})])])),_:2},1040,["src"])])),_:1})])),_:1}),(0,n.bF)(j.B,{cols:"12",md:"5",sm:"12"},{default:(0,n.k6)((()=>[(0,n.bF)(U.m,null,{default:(0,n.k6)((()=>[(0,n.Lk)("p",ne,(0,l.v_)(e.project.name),1),(0,n.Lk)("p",le,(0,l.v_)(e.project.description),1),(0,n.bF)(u.D,{size:"x-large",class:"mt-6",color:"green",onClick:i[1]||(i[1]=e=>o.value=!o.value),"append-icon":o.value?"mdi-chevron-up":"mdi-chevron-down"},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(o.value?"Show less":"Show more"),1)])),_:1},8,["append-icon"])])),_:1})])),_:1})])),_:1}),(0,n.bF)(oe.Qo,null,{default:(0,n.k6)((()=>[(0,n.bo)((0,n.Lk)("div",null,[(0,n.bF)(q.r,null,{default:(0,n.k6)((()=>[(0,n.eW)("Project overview")])),_:1}),(0,n.bF)(B.O,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e.project.overview),1)])),_:1}),(0,n.bF)(q.r,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tools used")])),_:1}),(0,n.bF)(B.O,null,{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.project.tools_used,(e=>((0,n.uX)(),(0,n.Wv)(E.x,{label:"",class:"mx-2 mb-2 pa-5",size:"large",key:e},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(e),1)])),_:2},1024)))),128))])),_:1}),(0,n.bF)(H.S,null,{default:(0,n.k6)((()=>[(0,n.bF)(Z.h),(0,n.bF)(u.D,{size:"large",color:"green",variant:"outlined",onClick:i[2]||(i[2]=e=>o.value=!1),"append-icon":"mdi-chevron-up"},{default:(0,n.k6)((()=>[(0,n.eW)("Show less")])),_:1}),(0,n.bF)(u.D,{size:"large",color:"green",variant:"flat",href:e.project.link,target:"_blank"},{default:(0,n.k6)((()=>[(0,n.eW)("Link")])),_:1},8,["href"])])),_:1})],512),[[a.aG,o.value]])])),_:1})])),_:1}),(0,n.bF)(Y.p,{modelValue:t.value,"onUpdate:modelValue":i[4]||(i[4]=e=>t.value=e)},{default:(0,n.k6)((()=>[(0,n.bF)(F.L,null,{default:(0,n.k6)((()=>[(0,n.bF)(Z.h),(0,n.bF)(u.D,{icon:"mdi-close",onClick:i[3]||(i[3]=e=>t.value=!1)})])),_:1}),(0,n.bF)(Q.n,{"show-arrows":"hover","hide-delimiter-background":""},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.project.image,(e=>((0,n.uX)(),(0,n.Wv)($.q,{key:e,src:e},null,8,["src"])))),128))])),_:1})])),_:1},8,["modelValue"])],64))}};const ie=(0,k.A)(re,[["__scopeId","data-v-779803c4"]]);var se=ie;const ue=e=>((0,n.Qi)("data-v-d2ff7d50"),e=e(),(0,n.jt)(),e),ce=ue((()=>(0,n.Lk)("div",{id:"free-up-space"},null,-1))),de=ue((()=>(0,n.Lk)("p",{class:"text-h3 text-center font-weight-bold"},"Projects",-1))),pe=ue((()=>(0,n.Lk)("p",{class:"text-center mt-10"},"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology",-1)));var fe={__name:"Projects",setup(e){const t=[{name:"Standard calculator",description:"just a calculator, nothing special",image:["/portfolio/calcu.png"],overview:"\n                a school project \n            ",tools_used:["java","my insanity"],link:"https://google.com"},{name:"Weight tracker",description:"a simple project i made to track my weight (i only made 1 kg ahahha)",image:["/portfolio/weight-tracker-5.PNG","/portfolio/weight-tracker-2.PNG","/portfolio/weight-tracker-1.PNG","/portfolio/weight-tracker-4.PNG","/portfolio/weight-tracker-3.PNG"],overview:"\n                simple weight tracker, made this to learn firebase \n            ",tools_used:["firebase","chart.js","vue.js","vuetify"],link:"https://github.com/joren97x/weight-tracker"},{name:"Todo plus",description:"enhanced or upgraded version of a to-do app",image:["/portfolio/taskplus.PNG","/portfolio/taskplus-1-.PNG","/portfolio/taskplus-2-PNG.PNG","/portfolio/taskplus-3-.PNG"],overview:"\n            made this project to learn express, pinia, sequelize and jsonwebtoken\n            ",tools_used:["axios","pinia","vuejs","vuetify","jsonwebtoken","sequelize","express","mysql"],link:"https://github.com/joren97x/task-management-system"},{name:"Recipe Hub",description:"a website where you can share your recipes.",image:["/portfolio/recipe-hub-1.PNG","/portfolio/recipe-hub-2.PNG","/portfolio/recipe-hub-3.PNG","/portfolio/recipe-hub-4.PNG","/portfolio/recipe-hub-5.PNG","/portfolio/recipe-hub-6.PNG","/portfolio/recipe-hub-7.PNG","/portfolio/recipe-hub-8.PNG"],overview:"\n            This the final project of one of my subjects. The project requires us to do laravel sanctum authentication tokens, CRUD operations.\n                Laravel for backend and vuejs for frontend and api to connect these two mfs.\n            ",tools_used:["axios","pinia","vuejs","vuetify","laravel"],link:"https://github.com/joren97x/recipe-hub"},{name:"Cordova Municipality Update Hub",description:"a school project",image:["/portfolio/cmuh-1.PNG","/portfolio/cmuh-6-.PNG","/portfolio/cmuh-7-.PNG","/portfolio/cmuh-2.PNG","/portfolio/cmuh-3-.PNG","/portfolio/cmuh-4-.PNG","/portfolio/cmuh-5-.PNG","/portfolio/cmuh-8-.PNG","/portfolio/cmuh-9-.PNG"],overview:"\n            i really dont know whats the purpose of this website tbh, \n            but this is a website where each barangay can post about what's happening in their barangay or some\n            ",tools_used:["axios","pinia","vuejs","vuetify","laravel"],link:"https://github.com/joren97x/recipe-hub"},{name:"Attendance management system",description:"\n                school project\n            ",image:["/portfolio/asm-6-.png","/portfolio/asm-1-.png","/portfolio/asm-2-.png","/portfolio/asm-3-.png","/portfolio/asm-4-.png","/portfolio/asm-5-.png","/portfolio/asm-7-.png","/portfolio/asm-8-.png"],overview:'\n            "Attendance Management System is a web-based application designed to streamline attendance \n            tracking for educational institutions. The system caters to two primary user roles: \n            students and teachers." - chatgpt\n            ',tools_used:["axios","vuejs","vuetify","php","mysql"],link:"https://github.com/joren97x/attendance-management-system"},{name:"Announcement system",description:"\n                a school project again\n            ",image:["/portfolio/account-management-3-.PNG","/portfolio/account-management-1.PNG","/portfolio/account-management-2-.PNG","/portfolio/account-management-4-.PNG","/portfolio/account-management-5-.PNG","/portfolio/account-management-6-.PNG","/portfolio/account-management-7-.PNG","/portfolio/account-management-8-.PNG","/portfolio/account-management-9-.PNG"],overview:'\n            "Announcement System is a web-based platform designed to facilitate communication between \n            students and administrators within educational institutions. The system supports two primary\n            user roles: students and administrators (admin)." - chatgpt\n            ',tools_used:["axios","vuejs","vuetify","php","mysql"],link:"https://github.com/joren97x/account-management-system"}];return(e,o)=>((0,n.uX)(),(0,n.Wv)(w.I,{fluid:"",class:"bg-grey-lighten-4"},{default:(0,n.k6)((()=>[(0,n.bF)(w.I,null,{default:(0,n.k6)((()=>[ce,de,pe,((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(t,(e=>(0,n.bF)(se,{project:e,key:e.name},null,8,["project"]))),64))])),_:1})])),_:1}))}};const me=(0,k.A)(fe,[["__scopeId","data-v-d2ff7d50"]]);var be=me,he=o(223),ve=o(7922),ge=o(6430);const ke={apiKey:"AIzaSyDKnjsmABwvNU9UbThxquIdTzt2Gi1FpXA",authDomain:"portfolio-b307e.firebaseapp.com",projectId:"portfolio-b307e",storageBucket:"portfolio-b307e.appspot.com",messagingSenderId:"543518048343",appId:"1:543518048343:web:ae2566f338d7443147e312",measurementId:"G-ZEZDYZHCLH"},ye=(0,he.Wp)(ke),_e=((0,ve.P5)(ye),(0,ge.aU)(ye));var we=o(7027),Fe=o(7784),je=o(3091),xe=o(5267);const Pe=e=>((0,n.Qi)("data-v-3a5be592"),e=e(),(0,n.jt)(),e),Ne=Pe((()=>(0,n.Lk)("div",{id:"free-up-space"},null,-1))),Ce=Pe((()=>(0,n.Lk)("p",{class:"text-h3 text-center font-weight-bold"},"Contact",-1))),Ge=Pe((()=>(0,n.Lk)("p",{class:"text-center mt-10"},"Feel free to Contact me by submitting the form below and I will get back to you as soon as possible",-1)));var Le={__name:"Contact",setup(e){const t=(0,r.KR)(!1),o=(0,r.KR)(!1),a=(0,r.KR)(""),i=(0,r.KR)(),s=(0,r.KR)(""),c=(0,r.KR)(""),d=(0,r.KR)("");async function p(){const{valid:e}=await i.value.validate();if(e)try{t.value=!0;await(0,ge.gS)((0,ge.rJ)(_e,"contacts"),{name:s.value,email:c.value,message:d.value});t.value=!1,a.value="Message sent. Thanks for contacting me!",o.value=!0}catch(n){t.value=!1,a.value="Sorry, something went wrong..",o.value=!0}}const f=(0,r.KR)([e=>!!e||"Name is required",e=>e&&e.length<=10||"Name must be less than 10 characters"]),m=(0,r.KR)([e=>!!e||"Message is required",e=>e&&e.length>=10||"Message must be more than 10 characters"]),b=(0,r.KR)([e=>!!e||"E-mail is requred.",e=>!!/.+@.+\..+/.test(e)||"E-mail must be valid."]);return(e,r)=>((0,n.uX)(),(0,n.Wv)(w.I,{fluid:"",class:"outer"},{default:(0,n.k6)((()=>[(0,n.bF)(w.I,null,{default:(0,n.k6)((()=>[Ne,Ce,Ge,(0,n.bF)(we.n,{ref_key:"form",ref:i},{default:(0,n.k6)((()=>[(0,n.bF)(M.J,{elevation:"15",width:"auto"},{default:(0,n.k6)((()=>[(0,n.bF)(U.m,null,{default:(0,n.k6)((()=>[(0,n.bF)(je.W,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=e=>s.value=e),rules:f.value,variant:"solo-filled",placeholder:"Enter your name",label:"Name"},null,8,["modelValue","rules"]),(0,n.bF)(je.W,{modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=e=>c.value=e),rules:b.value,variant:"solo-filled",placeholder:"Enter your email",label:"Email"},null,8,["modelValue","rules"]),(0,n.bF)(xe.J,{modelValue:d.value,"onUpdate:modelValue":r[2]||(r[2]=e=>d.value=e),rules:m.value,variant:"solo-filled",placeholder:"Enter your message",label:"Message"},null,8,["modelValue","rules"])])),_:1}),(0,n.bF)(H.S,null,{default:(0,n.k6)((()=>[(0,n.bF)(Z.h),(0,n.bF)(u.D,{size:"x-large",variant:"flat",loading:t.value,disabled:t.value,color:"green",onClick:r[3]||(r[3]=e=>p())},{default:(0,n.k6)((()=>[(0,n.eW)("Submit")])),_:1},8,["loading","disabled"])])),_:1})])),_:1})])),_:1},512)])),_:1}),(0,n.bF)(Fe.K,{modelValue:o.value,"onUpdate:modelValue":r[4]||(r[4]=e=>o.value=e)},{default:(0,n.k6)((()=>[(0,n.eW)((0,l.v_)(a.value),1)])),_:1},8,["modelValue"])])),_:1}))}};const Ie=(0,k.A)(Le,[["__scopeId","data-v-3a5be592"]]);var We=Ie,ze=o(8507),Ee=o(8502);const Se=e=>((0,n.Qi)("data-v-20ab0277"),e=e(),(0,n.jt)(),e),Ke=Se((()=>(0,n.Lk)("p",{class:"font-weight-bold text-h6 my-6"},"Joren Sumagang",-1))),Oe=Se((()=>(0,n.Lk)("p",null," Just a silly boy who takes on the cruel challenges presented by contemporary society. ",-1))),Ae=Se((()=>(0,n.Lk)("p",{class:"font-weight-bold text-h6 my-6"},"Social",-1))),De=Se((()=>(0,n.Lk)("p",{class:"text-center text-caption"},"© Copyright 2024 . Made by Joren Sumagang",-1)));function Xe(e,t){return(0,n.uX)(),(0,n.Wv)(w.I,{fluid:"",class:"bg-black"},{default:(0,n.k6)((()=>[(0,n.bF)(w.I,null,{default:(0,n.k6)((()=>[(0,n.bF)(F.L,null,{default:(0,n.k6)((()=>[(0,n.bF)(j.B,{cols:"12",sm:"8",md:"9"},{default:(0,n.k6)((()=>[Ke,Oe,(0,n.bF)(Ee.i,{class:"rounded-pill mt-5",color:"grey-lighten-5",width:"300"},{default:(0,n.k6)((()=>[(0,n.bF)(p.g,{title:"Superpowers",subtitle:"On repeat",href:"https://open.spotify.com/track/736PP5LTtREkDgktNmX3Gu",target:"_blank"},{prepend:(0,n.k6)((()=>[(0,n.bF)(c.w,{size:"50",style:{color:"#1FDF64"}},{default:(0,n.k6)((()=>[(0,n.eW)("mdi-spotify")])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.bF)(j.B,{cols:"12",sm:"4",md:"3",class:"mb-6"},{default:(0,n.k6)((()=>[Ae,(0,n.Lk)("div",null,[(0,n.bF)(u.D,{size:"50",href:"https://github.com/joren97x",target:"_blank",color:"black",density:"compact"},{default:(0,n.k6)((()=>[(0,n.bF)(c.w,{size:"30"},{default:(0,n.k6)((()=>[(0,n.eW)("mdi-github")])),_:1})])),_:1}),(0,n.bF)(u.D,{size:"50",href:"https://www.facebook.com/joren97x",target:"_blank",color:"black",density:"compact"},{default:(0,n.k6)((()=>[(0,n.bF)(c.w,{size:"30"},{default:(0,n.k6)((()=>[(0,n.eW)("mdi-facebook")])),_:1})])),_:1}),(0,n.bF)(u.D,{size:"50",href:"https://www.instagram.com/joren97x",target:"_blank",color:"black",density:"compact"},{default:(0,n.k6)((()=>[(0,n.bF)(c.w,{size:"30"},{default:(0,n.k6)((()=>[(0,n.eW)("mdi-instagram")])),_:1})])),_:1}),(0,n.bF)(u.D,{size:"50",href:"https://open.spotify.com/user/31j7mhgyggfkatw6s75x7zawlgbi",target:"_blank",color:"black",density:"compact"},{default:(0,n.k6)((()=>[(0,n.bF)(c.w,{size:"30"},{default:(0,n.k6)((()=>[(0,n.eW)("mdi-spotify")])),_:1})])),_:1})])])),_:1})])),_:1}),(0,n.bF)(ze.G,{class:"my-6"}),De])),_:1})])),_:1})}const Ve={},Te=(0,k.A)(Ve,[["render",Xe],["__scopeId","data-v-20ab0277"]]);var Re=Te,Je={__name:"Index",setup(e){function t(e){document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"})}return(e,o)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(_,{onNavigate:t}),(0,n.bF)(z,{id:"home",onNavigate:t}),(0,n.bF)(ze.G),(0,n.bF)(J,{id:"about",onNavigate:t}),(0,n.bF)(be,{id:"projects"}),(0,n.bF)(We,{id:"contact"}),(0,n.bF)(Re,{onNavigate:t})],64))}};const Me=Je;var Ue=Me,qe=o(3599),Be=o(5774),He={__name:"App",setup(e){return(e,t)=>{const o=(0,n.g2)("Head");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(o,{title:"Joren Sumagang"}),(0,n.bF)(qe.E,null,{default:(0,n.k6)((()=>[(0,n.bF)(Be.Y,null,{default:(0,n.k6)((()=>[(0,n.bF)(Ue)])),_:1})])),_:1})],64)}}};const Qe=He;var $e=Qe,Ye=(o(5524),o(6102)),Ze=(0,Ye.$N)();async function et(){const e=await o.e(53).then(o.t.bind(o,5371,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}et(),(0,a.Ef)($e).use(Ze).mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,l){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],l=e[c][2];for(var i=!0,s=0;s<a.length;s++)(!1&l||r>=l)&&Object.keys(o.O).every((function(e){return o.O[e](a[s])}))?a.splice(s--,1):(i=!1,l<r&&(r=l));if(i){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,n,l]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(a,n){if(1&n&&(a=this(a)),8&n)return a;if("object"===typeof a&&a){if(4&n&&a.__esModule)return a;if(16&n&&"function"===typeof a.then)return a}var l=Object.create(null);o.r(l);var r={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&a;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){r[e]=function(){return a[e]}}));return r["default"]=function(){return a},o.d(l,r),l}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,a){return o.f[a](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/webfontloader.4d85067c.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portfolio:";o.l=function(a,n,l,r){if(e[a])e[a].push(n);else{var i,s;if(void 0!==l)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+l){i=d;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+l),i.src=a),e[a]=[n];var p=function(t,o){i.onerror=i.onload=null,clearTimeout(f);var n=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/portfolio/"}(),function(){var e={524:0};o.f.j=function(t,a){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var l=new Promise((function(o,a){n=e[t]=[o,a]}));a.push(n[2]=l);var r=o.p+o.u(t),i=new Error,s=function(a){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var l=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+r+")",i.name="ChunkLoadError",i.type=l,i.request=r,n[1](i)}};o.l(r,s,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,l,r=a[0],i=a[1],s=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(s)var c=s(o)}for(t&&t(a);u<r.length;u++)l=r[u],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(c)},a=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(8992)}));a=o.O(a)})();
//# sourceMappingURL=app.502a103a.js.map