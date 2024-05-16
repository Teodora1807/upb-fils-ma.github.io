"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4264],{14900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>h,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=r(17624),n=r(4552);const s={},h="Breathalyzer",a={id:"project/2024/tudor.arhir/index",title:"Breathalyzer",description:"A breathalyzer which detects the alcohol in the blown air.",source:"@site/docs/project/2024/tudor.arhir/index.md",sourceDirName:"project/2024/tudor.arhir",slug:"/project/2024/tudor.arhir/",permalink:"/docs/project/2024/tudor.arhir/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/tudor.arhir/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wifi Robot Car",permalink:"/docs/project/2024/teodora.dumitru1807/"},next:{title:"Line Follower",permalink:"/docs/project/2024/victor.istudor/"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function d(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"breathalyzer",children:"Breathalyzer"}),"\n",(0,i.jsx)(t.p,{children:"A breathalyzer which detects the alcohol in the blown air."}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Author"}),": Tudor-Cristian Arhir ",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"GitHub Project Link"}),": ",(0,i.jsx)(t.a,{href:"https://github.com/UPB-FILS-MA/project-TudorArhir",children:"https://github.com/UPB-FILS-MA/project-TudorArhir"})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:'My project is a breathalyzer with a LCD (which shows the precentage of alchohol in the air(and some other stuff)), a buzzer, an alcohol sensor, 2 LED\'s  and a button which resets the number so we can have another reading.( the "no idea" price tag on the components is there because they come from an arduino kit which i bought 1 year ago and i cannot remember the price). It has a 3D-printed case which makes it look more practical than just wires and components on a breadboard . I want this project to be something useful and at the same time something fun which anybody can use.'}),"\n",(0,i.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:"I chose this project based on two important factors:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"on my 20th birthday my friends got me a real breathalyzer which is very usefull for me because i love to drive"}),"\n",(0,i.jsx)(t.li,{children:"I wanted to make it more practical and easy to use for anybody at any time(we use it at gatherings and parties)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"I want to put in use everything that i learned until now and to learn new things that will make this passion of mine to grown on a larger scale."}),"\n",(0,i.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(t.p,{children:"Add here the schematics with the architecture of your project. Make sure to include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"what are the main components (architecture components, not hardware components)"}),"\n",(0,i.jsx)(t.li,{children:"how they connect with each other"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,i.jsx)(t.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,i.jsx)(t.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,i.jsx)(t.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,i.jsx)(t.h2,{id:"hardware",children:"Hardware"}),"\n",(0,i.jsx)(t.p,{children:"The idea is simple : someone who drinks alcohol(a beer for example) blows into the MQ-3 sensor and then 3 thing will happen :"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The LCD will show some data which shows the precentage of alcohol in the air that was blown into the sensor"}),"\n",(0,i.jsx)(t.li,{children:"The buzzer will make a sound to signal that the upper limit of detected alcohol in the air has been passed"}),"\n",(0,i.jsx)(t.li,{children:"The LED's will be one red and one blue, which resembles the lights on a police car ( this is just for looks )"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"schematics",children:"Schematics"}),"\n",(0,i.jsx)(t.p,{children:"Place your KiCAD schematics here."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Block diagram",src:r(79540).c+"",width:"1650",height:"1170"})}),"\n",(0,i.jsx)(t.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Device"}),(0,i.jsx)(t.th,{children:"Usage"}),(0,i.jsx)(t.th,{children:"Price"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico W"})}),(0,i.jsx)(t.td,{children:"The microcontroller"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LCD1602 Module"}),(0,i.jsx)(t.td,{children:"The display"}),(0,i.jsx)(t.td,{children:"from an arduino kit"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MQ-3"}),(0,i.jsx)(t.td,{children:"The alcohol sensor"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/gas-sensors/1125-modul-senzor-de-gaz-mq-3.html",children:"15 lei"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Buzzer"}),(0,i.jsx)(t.td,{children:"Emits sound if you pass the alcohol limit"}),(0,i.jsx)(t.td,{children:"from an arduino kid"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Jumper cables"}),(0,i.jsx)(t.td,{children:"To cable things"}),(0,i.jsx)(t.td,{children:"from an arduino kit"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Button"}),(0,i.jsx)(t.td,{children:"To reset the breathalyzer"}),(0,i.jsx)(t.td,{children:"from an arduino kit"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2 LED's"}),(0,i.jsx)(t.td,{children:"Used for signaling when the limit was passed"}),(0,i.jsx)(t.td,{children:"from an arduino kit"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3D Printed case"}),(0,i.jsx)(t.td,{children:"To make it more practical"}),(0,i.jsx)(t.td,{children:"tbd"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"software",children:"Software"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Library"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Usage"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/embassy-rs/embassy/tree/main/embassy-rp",children:"embassy-rp"})}),(0,i.jsx)(t.td,{children:"RP2040 peripherals"}),(0,i.jsx)(t.td,{children:"Used for accessing the peripherals of the Pico W"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Work in progress"}),(0,i.jsx)(t.td,{children:"To be updated"}),(0,i.jsx)(t.td,{children:"TBA"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.medicalnewstoday.com/articles/breathalyzer-test",children:"How does a breathalyzer work"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://forums.raspberrypi.com/viewtopic.php?t=226459",children:"Breathalyzer with pico w"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://help.sinric.pro/pages/tutorials/custom-device-types/alcohol-sensor/MQ-3",children:"How does an MQ-3 work"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79540:(e,t,r)=>{r.d(t,{c:()=>i});const i=r.p+"assets/images/image-1-67dba6730f9750b84b0c7755eb9cfc67.png"},4552:(e,t,r)=>{r.d(t,{I:()=>a,M:()=>h});var i=r(11504);const n={},s=i.createContext(n);function h(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:h(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);