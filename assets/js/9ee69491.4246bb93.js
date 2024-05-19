"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7400],{90584:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(17624),n=i(4552);const s={},a="Project Name",o={id:"project/2024/luca.rosoiu/index",title:"Project Name",description:"Parking sensor with barrier control",source:"@site/docs/project/2024/luca.rosoiu/index.md",sourceDirName:"project/2024/luca.rosoiu",slug:"/project/2024/luca.rosoiu/",permalink:"/docs/project/2024/luca.rosoiu/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/luca.rosoiu/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Smart Summer Hat",permalink:"/docs/project/2024/kaan.ugur/"},next:{title:"Proximity Sensor",permalink:"/docs/project/2024/mara.iubitu/"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function h(e){const r={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"project-name",children:"Project Name"}),"\n",(0,t.jsx)(r.p,{children:"Parking sensor with barrier control"}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsx)(r.mdxAdmonitionTitle,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Author"}),": Rosoiu Luca ",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.strong,{children:"GitHub Project Link"}),": ",(0,t.jsx)(r.a,{href:"https://github.com/UPB-FILS-MA/project-LucaRosoiu",children:"https://github.com/UPB-FILS-MA/project-LucaRosoiu"})]})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"The project consists of a smart parking sensor which will detect the presence of other objects and will emmit sound and light signals when the distance is within a certain range. The signals will grow in intensity and be more frequent the closer the said object is, until it reaches the climax, at which point the emmited light is at maximum intensity and the sound is static."}),"\n",(0,t.jsx)(r.p,{children:"Moreover, the project includes a barrier control system, which will consist of a barrier with an attached sensor that will be lifted once it detects an object get within its range. When that happens, a countdown timer will start until the barrier goes back down, just like a real life parking barrier."}),"\n",(0,t.jsx)(r.h2,{id:"motivation",children:"Motivation"}),"\n",(0,t.jsx)(r.p,{children:"I have been interested in cars for as long as I can remember, so I have been thinking about a way to make this project be related to a component of a real car. Therefore, I took this as an opportunity to learn how parking sensors and parking barriers work in real life."}),"\n",(0,t.jsx)(r.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"architecture",src:i(16048).c+"",width:"1125",height:"728"})}),"\n",(0,t.jsx)(r.h2,{id:"log",children:"Log"}),"\n",(0,t.jsx)(r.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,t.jsx)(r.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,t.jsx)(r.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,t.jsx)(r.h2,{id:"hardware",children:"Hardware"}),"\n",(0,t.jsx)(r.p,{children:'A doppler sensor will represent the base of both the parking sensor and the barrier control sensor. For the parking sensor, it will light up an LED that will gradually increase in intensity and will trigger a buzzer that will emmit sounds that will increase in frequency up until the "climax", when it emmits a static sound. As for the barrier control sensor, it will lift the barrier up and start a countdown until the barrier goes back down.'}),"\n",(0,t.jsx)(r.h3,{id:"schematics",children:"Schematics"}),"\n",(0,t.jsx)(r.p,{children:"Place your KiCAD schematics here."}),"\n",(0,t.jsx)(r.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Device"}),(0,t.jsx)(r.th,{children:"Usage"}),(0,t.jsx)(r.th,{children:"Price"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico W"})}),(0,t.jsx)(r.td,{children:"The microcontroller"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.nivetec.com.br/arquivos/Manual_Nivus_Sensor_KDA_us_Nivetec.pdf",children:"Doppler Sensor"})}),(0,t.jsx)(r.td,{children:"This will be at the base of both the parking sensor and the parking barrier sensor"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/senzori-senzori-de-distanta/2039-senzor-de-proximitate-cu-microunde.html",children:"8 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Barrier"}),(0,t.jsx)(r.td,{children:"This will be the trigger of the doppler sensor (might need 3d printing)"}),(0,t.jsx)(r.td,{children:"RON"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.diodeled.com/technical-documents/",children:"LED"})}),(0,t.jsx)(r.td,{children:"The LED"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://componenteonline.ro/led-5mm-3v-galben-rotund-141002?product_id=147244",children:"1 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.arduino.cc/reference/en/libraries/buzzer/",children:"Buzzer"})}),(0,t.jsx)(r.td,{children:"The Buzzer"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/audio-buzzere/635-buzzer-activ-de-3-v.html",children:"2 RON"})})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"software",children:"Software"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Library"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Usage"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/almindor/st7789",children:"st7789"})}),(0,t.jsx)(r.td,{children:"Display driver for ST7789"}),(0,t.jsx)(r.td,{children:"Used for the display for the Pico Explorer Base"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/embedded-graphics/embedded-graphics",children:"embedded-graphics"})}),(0,t.jsx)(r.td,{children:"2D graphics library"}),(0,t.jsx)(r.td,{children:"Used for drawing to the display"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.youtube.com/watch?v=rDsevkPFaKI&ab_channel=AkaSoggyBunz",children:"link"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.instructables.com/Raspberry-Pi-Park-Sensor/",children:"link"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.youtube.com/watch?v=Ko_pbHlJ1mE&ab_channel=SaiAnirudhG",children:"link"})}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,n.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},16048:(e,r,i)=>{i.d(r,{c:()=>t});const t=i.p+"assets/images/architectureLuca-c71457f852d6623be8a82561b7c16c2d.png"},4552:(e,r,i)=>{i.d(r,{I:()=>o,M:()=>a});var t=i(11504);const n={},s=t.createContext(n);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);