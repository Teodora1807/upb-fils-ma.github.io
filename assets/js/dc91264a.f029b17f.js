"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2672],{23092:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var i=t(17624),s=t(4552);const n={},a="Electronic Car",o={id:"project/2024/adrian.bontas/index",title:"Electronic Car",description:"Remote-controlled car built and operated via smartphone.",source:"@site/docs/project/2024/adrian.bontas/index.md",sourceDirName:"project/2024/adrian.bontas",slug:"/project/2024/adrian.bontas/",permalink:"/docs/project/2024/adrian.bontas/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/adrian.bontas/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Object Detection and Alert System",permalink:"/docs/project/2024/abdul.mirghani/"},next:{title:"Weather Station",permalink:"/docs/project/2024/alberto.udrea0412/"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function l(e){const r={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"electronic-car",children:"Electronic Car"}),"\n",(0,i.jsx)(r.p,{children:"Remote-controlled car built and operated via smartphone."}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Author"}),": Bontas Adrian-Cosmin ",(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.strong,{children:"GitHub Project Link"}),": ",(0,i.jsx)(r.a,{href:"https://github.com/UPB-FILS-MA/project-adriancosm1n",children:"https://github.com/UPB-FILS-MA/project-adriancosm1n"})]})}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Picture this: a car you can drive using your phone. That's exactly what I'm making! It's a cool little car you can control with an app on your personal phone. You can make it go forward or backwards, left or right, only by tapping on your screen. It is super fun to play with and it's an interesting way to learn about how things work in electronic applications!"}),"\n",(0,i.jsx)(r.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(r.p,{children:"I picked this project simply because I love cars. They're exciting and fun, and I can't get enough of them! Building a remote-controlled car that I can control with my phone lets me combine my passion for cars with learning about technology. It's like bringing two awesome things together into one cool project. Plus, working on something I'm so passionate about makes the whole experience even more enjoyable. So, that's why I decided to go for it!"}),"\n",(0,i.jsx)(r.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Architecture",src:t(83224).c+"",width:"727",height:"770"})}),"\n",(0,i.jsx)(r.p,{children:"This project diagram illustrates the connectivity of the system utilizing a Raspberry Pi Pico W as the main controller. The Raspberry Pi Pico W is connected to various components including two LEDs which act as headlights, a buzzer acting as a horn, an ultrasonic sensor, and four DC motors with wheels through an L298N motor driver module."}),"\n",(0,i.jsx)(r.h2,{id:"log",children:"Log"}),"\n",(0,i.jsx)(r.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,i.jsx)(r.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,i.jsx)(r.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,i.jsx)(r.h2,{id:"hardware",children:"Hardware"}),"\n",(0,i.jsx)(r.p,{children:"1x Raspberry Pi Pico W: acts as the primary processing unit, equipped with Wi-Fi capabilities."}),"\n",(0,i.jsx)(r.p,{children:"1x HC-SR04 Ultrasonic Sensor: utilized for measuring distances to detect nearby objects."}),"\n",(0,i.jsx)(r.p,{children:"1x L298N Motor Driver Module: Provides the ability to control the four wheels."}),"\n",(0,i.jsx)(r.p,{children:"4x Wheels with motors"}),"\n",(0,i.jsx)(r.p,{children:"2x LEDs"}),"\n",(0,i.jsx)(r.p,{children:"1x Buzzer"}),"\n",(0,i.jsx)(r.p,{children:"1x Power Supply"}),"\n",(0,i.jsx)(r.h3,{id:"schematics",children:"Schematics"}),"\n",(0,i.jsx)(r.p,{children:"Place your KiCAD schematics here."}),"\n",(0,i.jsx)(r.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Device"}),(0,i.jsx)(r.th,{children:"Usage"}),(0,i.jsx)(r.th,{children:"Price"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico W"})}),(0,i.jsx)(r.td,{children:"The microcontroller"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://cdn.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf",children:"HC-SR04 Ultrasonic Sensor"})}),(0,i.jsx)(r.td,{children:"The ultrasonic sensor"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://ardushop.ro/ro/electronica/47-modul-senzor-ultrasonic-detector-distanta.html?gad_source=1&gclid=Cj0KCQjwudexBhDKARIsAI-GWYUu-UY1IrO9avytw3Yu07_lr7Z0ibjTY1eSM-3cM0lNivtstNKAoE0aAiA-EALw_wcB",children:"9.72 RON"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.handsontec.com/dataspecs/L298N%20Motor%20Driver.pdf",children:"L298N Motor Driver Module"})}),(0,i.jsx)(r.td,{children:"The motor driver module"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.emag.ro/driver-de-motor-l298-robofun-red-board-2-canale-00003257/pd/D3L6FYYBM/?cmpid=93116&utm_source=google&utm_medium=cpc&utm_campaign=(RO:eMAG!)_3P_NO_SALES_%3e_Jucarii_hobby&utm_content=111476631565&gad_source=1&gclid=Cj0KCQjwudexBhDKARIsAI-GWYUdVnmVS6SXbXK6EvgRCm6S-AAUBhii2pH_ITyzJ63sTfea7Bj7hT4aAk0qEALw_wcB",children:"14.11 RON"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.farnell.com/datasheets/1498852.pdf",children:"LED"})}),(0,i.jsx)(r.td,{children:"The LEDs"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://ardushop.ro/ro/electronica/299-led-5mm.html?search_query=Led&results=242#/10-culoare-rou",children:"0.45 RON x 2"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.farnell.com/datasheets/2171929.pdf",children:"Buzzer"})}),(0,i.jsx)(r.td,{children:"The Buzzer"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://ardushop.ro/ro/electronica/194-buzzer.html?search_query=passive+buzzer&results=18",children:"3.97 RON"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/fire-fire-mufate/888-set-fire-tata-tata-40p-20-cm.html?search_query=fire+tata+tata&results=80",children:"Male to male jumper wires"})}),(0,i.jsx)(r.td,{children:"The Wires"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/fire-fire-mufate/888-set-fire-tata-tata-40p-20-cm.html?search_query=fire+tata+tata&results=80",children:"6.98 RON"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/fire-fire-mufate/880-fire-colorate-mama-mama-10p-10-cm.html?search_query=fire+mama+mama&results=63",children:"Female to female jumper wires"})}),(0,i.jsx)(r.td,{children:"The Wires"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/fire-fire-mufate/880-fire-colorate-mama-mama-10p-10-cm.html?search_query=fire+mama+mama&results=63",children:"6.98 RON"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.farnell.com/datasheets/1842389.pdf",children:"Power Supply"})}),(0,i.jsx)(r.td,{children:"The Power Supply"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.f64.ro/duracell-baterie-9v-1-buc/p?gad_source=1&gclid=Cj0KCQjwudexBhDKARIsAI-GWYXymIXBAeaveT-qoPVnhzXQIKkjNwq0sgL0yQ5AoXXIh_sc-7csLOQaAjr9EALw_wcB",children:"14.90 RON"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.bitmi.ro/set-motor-dc-3v-6v-cu-reductor-si-roata-11227.html?2pau=a7c80ffd2&2ptt=quicklink&2ptu=989f060e9&2pdlst=Cj0KCQjwudexBhDKARIsAI-GWYXmymOCVySPbqVyF6R0s9eNqnQNxxivZnSe-VKmTbVn7LHFsRvpjr4aAoEZEALw_wcB&gad_source=1&2pau=a7c80ffd2&2ptt=quicklink&2ptu=989f060e9&2prp=8BAwO04dPx17FdUGVKRQ-_VE7fv-poFhx7OPkUhESDVdX0kJlCOs-0BCWVmoXnyVSebtiBXcYbPKxn3JczKtNzCyIZ8rVY--HGmrp6jBgAClJeoL11Oa5NSpJ19VnW2hCIOg4_QfGCEfTxtz_mEaOKSF4ugOnatpglB5aVsIjcOjZ8X8Aw49sYjrABloOWJYO5F14dubQ-_uxD1MffLaotxIpZmbXGowqxl0Prn-7_4&2pdlst=",children:"Wheels with motors"})}),(0,i.jsx)(r.td,{children:"The wheels and motors"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.bitmi.ro/set-motor-dc-3v-6v-cu-reductor-si-roata-11227.html?2pau=a7c80ffd2&2ptt=quicklink&2ptu=989f060e9&2pdlst=Cj0KCQjwudexBhDKARIsAI-GWYXmymOCVySPbqVyF6R0s9eNqnQNxxivZnSe-VKmTbVn7LHFsRvpjr4aAoEZEALw_wcB&gad_source=1&2pau=a7c80ffd2&2ptt=quicklink&2ptu=989f060e9&2prp=8BAwO04dPx17FdUGVKRQ-_VE7fv-poFhx7OPkUhESDVdX0kJlCOs-0BCWVmoXnyVSebtiBXcYbPKxn3JczKtNzCyIZ8rVY--HGmrp6jBgAClJeoL11Oa5NSpJ19VnW2hCIOg4_QfGCEfTxtz_mEaOKSF4ugOnatpglB5aVsIjcOjZ8X8Aw49sYjrABloOWJYO5F14dubQ-_uxD1MffLaotxIpZmbXGowqxl0Prn-7_4&2pdlst=",children:"8.99 RON x 4"})})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"software",children:"Software"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Library"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Usage"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/embassy-rs/embassy",children:"embassy"})}),(0,i.jsx)(r.td,{children:"Embassy"}),(0,i.jsx)(r.td,{children:"An asynchronous executor and Hardware Abstraction Layer (HAL) designed for constructing embedded applications in Rust."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/embassy-rs/embassy-network",children:"embassy-network"})}),(0,i.jsx)(r.td,{children:"Embassy Network"}),(0,i.jsx)(r.td,{children:"A networking library designed for use with the Embassy asynchronous executor, facilitating network communication within embedded Rust applications."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://docs.embassy.dev/embassy-nrf/git/nrf52840/pwm/index.html",children:"PWM"})}),(0,i.jsx)(r.td,{children:"Pulse-width modulation"}),(0,i.jsx)(r.td,{children:"Used for controlling the buzzer's sound intensity"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://github.com/Benehiko/pico-ultrasonic-rs.git",children:"HC-SR04"})}),(0,i.jsx)(r.td,{children:"HC-SR04 manipulation"}),(0,i.jsx)(r.td,{children:"Used for controlling the ultrasonic sensor"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://www.youtube.com/watch?v=JimfJCyrK44",children:"Freenove 4WD Car Kit for Raspberry Pi Pico"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://www.youtube.com/watch?v=U4unGGNjFBg",children:"Raspberry Pi Pico - Bluetooth Controlled Car Project"})}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://nerdcave.xyz/",children:"NerdCave"}),"\r\n..."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},83224:(e,r,t)=>{t.d(r,{c:()=>i});const i=t.p+"assets/images/Architecture-afdee7c707e87e453592c3183970f963.jpg"},4552:(e,r,t)=>{t.d(r,{I:()=>o,M:()=>a});var i=t(11504);const s={},n=i.createContext(s);function a(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);