"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6692],{48764:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var t=r(17624),i=r(4552);const n={},a="Radar Secure System",o={id:"project/2024/cristiana.precup/index",title:"Radar Secure System",description:"A Raspberry Pi Pico W-based radar-like security system.",source:"@site/docs/project/2024/cristiana.precup/index.md",sourceDirName:"project/2024/cristiana.precup",slug:"/project/2024/cristiana.precup/",permalink:"/docs/project/2024/cristiana.precup/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/cristiana.precup/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blackjack Game",permalink:"/docs/project/2024/cristian.iacobescu/"},next:{title:"SecureStash",permalink:"/docs/project/2024/denis_andrei.rapa/"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function l(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"radar-secure-system",children:"Radar Secure System"}),"\n",(0,t.jsx)(s.p,{children:"A Raspberry Pi Pico W-based radar-like security system."}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.mdxAdmonitionTitle,{}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Author"}),": Cristiana-Florentina Precup ",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"GitHub Project Link"}),": ",(0,t.jsx)(s.a,{href:"https://github.com/UPB-FILS-MA/project-cristianaprecup",children:"https://github.com/UPB-FILS-MA/project-cristianaprecup"})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"This project aims to develop a radar-like security system using a Raspberry Pi Pico W as its core. Designed to monitor and track the presence of objects within a specified perimeter, the system utilizes ultrasonic sensing technology to detect movements or intrusions. Objects within the sensor's range will be displayed on a computer through a graphical interface similar to naval radars, and there will be a visual and acoustic notification system. It will also provide data about the detected objects, including their distance and speed."}),"\n",(0,t.jsx)(s.h2,{id:"motivation",children:"Motivation"}),"\n",(0,t.jsx)(s.p,{children:"I chose this radar security system project because it combines practical engineering with advanced technology to address significant security issues, including military needs. Using a Raspberry Pi Pico W and ultrasonic sensors, this system mimics the radar used in submarines and aircraft for everyday safety and military surveillance. Additionally, I am implementing this system using the Rust programming language, which offers enhanced safety and performance features ideal for such critical applications. This project not only challenges my technical skills but also allows me to develop a tool that enhances safety in various environments, such as homes, warehouses, and military zones. It offers a valuable chance to deepen my understanding of hardware-software integration and contribute to creating safer, more secure areas with innovative technology."}),"\n",(0,t.jsx)(s.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsxs)(s.p,{children:["Main Components:",(0,t.jsx)(s.br,{}),"\n","Sensor Module: This includes the Ultrasonic Distance Sensor, which measures the proximity of objects. It is mounted on the Micro Servo Motor, allowing the sensor to pivot and scan a wider area.",(0,t.jsx)(s.br,{}),"\n","Control Unit: The Raspberry Pi Pico W acts as the brain of the system. It controls the Sensor Module, processes the distance data, operates the Servo Motor, and manages user interactions through buttons."]}),"\n",(0,t.jsxs)(s.p,{children:["Feedback Mechanisms:",(0,t.jsx)(s.br,{}),"\n","Visual Feedback: Delivered by the RGB LED, which changes color to indicate different system statuses or alerts.",(0,t.jsx)(s.br,{}),"\n","Auditory Feedback: The Passive Buzzer produces sound alerts when movement is detected or under specific conditions."]}),"\n",(0,t.jsxs)(s.p,{children:["User Interface: Consists of Tactile Push Button Switches that allow users to manually operate the system.",(0,t.jsx)(s.br,{}),"\n","Display Interface: A laptop connected to the Raspberry Pi Pico W via Wi-Fi. It displays the radar data graphically, mimicking naval radar systems, and provides a user-friendly interface for monitoring."]}),"\n",(0,t.jsxs)(s.p,{children:["Connections Between Components:",(0,t.jsx)(s.br,{}),"\n","Sensor to Controller: The Ultrasonic Sensor is connected to the Raspberry Pi Pico W through GPIO pins, sending back data to the microcontroller for analysis.",(0,t.jsx)(s.br,{}),"\n","Servo Motor to Controller: The Servo Motor is connected to the Raspberry Pi Pico W, receiving commands to adjust the sensor\u2019s orientation for comprehensive scanning.",(0,t.jsx)(s.br,{}),"\n","Feedback to Controller: Both the RGB LED and the Passive Buzzer are linked to the Pico W, which activates these elements based on the processed data to provide alerts.",(0,t.jsx)(s.br,{}),"\n","User Interface to Controller: The push buttons are wired to GPIO pins on the Pico W, enabling direct user control and configuration changes."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Architecture photo",src:r(23440).c+"",width:"1608",height:"897"})}),"\n",(0,t.jsx)(s.h2,{id:"log",children:"Log"}),"\n",(0,t.jsx)(s.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,t.jsxs)(s.p,{children:["Assembled hardware components temporarily on a breadboard for testing. ",(0,t.jsx)(s.br,{}),"\n","I started to test code on each component\xa0one\xa0by\xa0one to be sure that they worked as expected."]}),"\n",(0,t.jsx)(s.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,t.jsxs)(s.p,{children:["Created the KiCad schematic for the project. ",(0,t.jsx)(s.br,{}),"\n","Final assembled the components on the breadboard. ",(0,t.jsx)(s.br,{}),"\n","Assembled the box structure, ensuring stability and correct dimensions."]}),"\n",(0,t.jsx)(s.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,t.jsx)(s.h2,{id:"hardware",children:"Hardware"}),"\n",(0,t.jsxs)(s.p,{children:["Raspberry Pi Pico W: Microcontroller with Wi-Fi, serves as the main processing unit.",(0,t.jsx)(s.br,{}),"\n","HC-SR04 Ultrasonic Distance Sensor: Measures distances to detect objects.",(0,t.jsx)(s.br,{}),"\n","SG90 Micro Servo Motor: Rotates the ultrasonic sensor for a wider scanning area.",(0,t.jsx)(s.br,{}),"\n","RGB LED: Provides visual feedback through color changes.",(0,t.jsx)(s.br,{}),"\n","Passive Buzzer Module: Emits audible alerts.",(0,t.jsx)(s.br,{}),"\n","Tactile Push Button Switches: Allows manual control and system adjustments.",(0,t.jsx)(s.br,{}),"\n","Resistors: 10K\u03a9 for the buttons and 220\u03a9 for the RGB LED.",(0,t.jsx)(s.br,{}),"\n","Breadboard: Used for assembling the prototype.",(0,t.jsx)(s.br,{}),"\n","Wires: Female-to-Male, Female-to-Female, and Male-to-Male for connections.",(0,t.jsx)(s.br,{}),"\n","Micro USB Cable: Powers the Raspberry Pi Pico W.",(0,t.jsx)(s.br,{}),"\n","Laptop: Displays the radar data graphically."]}),"\n",(0,t.jsx)(s.p,{children:"This is what the wiring looks like:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Wiring Overview"}),(0,t.jsx)(s.th,{children:"Closer look"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.img,{alt:"Hardware 1",src:r(50500).c+"",width:"1536",height:"2048"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.img,{alt:"Hardware 2",src:r(7268).c+"",width:"1536",height:"2048"})})]})})]}),"\n",(0,t.jsx)(s.p,{children:"This is the final product as of yet:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Hardware3",src:r(95040).c+"",width:"1536",height:"2048"})}),"\n",(0,t.jsx)(s.h3,{id:"schematics",children:"Schematics"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"KiCad Schematics",src:r(10524).c+"",width:"3507",height:"2480"})}),"\n",(0,t.jsxs)(s.p,{children:["Connected to the Rasperry Pi Pico W, there is a RGB LED connected to ",(0,t.jsx)(s.code,{children:"GPIO 0"}),", ",(0,t.jsx)(s.code,{children:"GPIO 1"})," and ",(0,t.jsx)(s.code,{children:"GPIO 2"}),", two push buttons connected to ",(0,t.jsx)(s.code,{children:"GPIO 3"})," and ",(0,t.jsx)(s.code,{children:"GPIO 4"}),". The buzzer is connected to ",(0,t.jsx)(s.code,{children:"GPIO 5"}),". The HC-SR04 ultrasonic sensor is connected through ",(0,t.jsx)(s.code,{children:"I2C"})," to the Raspberry Pi Pico using ",(0,t.jsx)(s.code,{children:"GPIO 18"})," as SDA and ",(0,t.jsx)(s.code,{children:"GPIO 19"})," as SCL, and to PIN 36 (",(0,t.jsx)(s.code,{children:"3V3_OUT"}),") for the power. The Servomotor is connected to ",(0,t.jsx)(s.code,{children:"GPIO 16"})," in order to be used with ",(0,t.jsx)(s.code,{children:"PWM"}),", and connected to PIN 39 (",(0,t.jsx)(s.code,{children:"VSYS"}),", used to power system, can be in range 1.8V-5.5V)."]}),"\n",(0,t.jsx)(s.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Device"}),(0,t.jsx)(s.th,{children:"Usage"}),(0,t.jsx)(s.th,{children:"Price"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/ro/placi-raspberry-pi/12394-raspberry-pi-pico-w.html",children:"Raspberry Pi Pico W"})}),(0,t.jsx)(s.td,{children:"The microcontroller with Wi-Fi for phone notification"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/ro/placi-raspberry-pi/12394-raspberry-pi-pico-w.html",children:"34.5 lei"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/electronica/47-modul-senzor-ultrasonic-detector-distanta.html",children:"HC-SR04 Ultrasonic Distance Sensor"})}),(0,t.jsx)(s.td,{children:"For measuring distances to objects"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/electronica/47-modul-senzor-ultrasonic-detector-distanta.html",children:"20 lei"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/en/servomotors/26-sg90-micro-servo-motor.html",children:"SG90 Micro Servo Motor"})}),(0,t.jsx)(s.td,{children:"To rotate the ultrasonic sensor for a wider scan area"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/en/servomotors/26-sg90-micro-servo-motor.html",children:"14 lei"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/en/electronic-components/12598-passive-buzzer-module.html?search_query=Buzzer&results=87",children:"Passive Buzzer Module"})}),(0,t.jsx)(s.td,{children:"For audible alerts"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/en/electronic-components/12598-passive-buzzer-module.html?search_query=Buzzer&results=87",children:"1 lei"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/home/97-buton-mic-push-button-trough-hole.html?search_query=push+button&results=30",children:"Tactile Push Button Switch"})}),(0,t.jsx)(s.td,{children:"For manual controls"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/home/97-buton-mic-push-button-trough-hole.html?search_query=push+button&results=30",children:"2 lei for 2"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/electronica/211-rezistenta-14w-1-buc.html#/96-valoare_rezistenta-10k",children:"10K\u03a9 Resistors"})}),(0,t.jsx)(s.td,{children:"For the buttons"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/electronica/211-rezistenta-14w-1-buc.html#/96-valoare_rezistenta-10k",children:"0.5 lei for 2"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/electronica/211-rezistenta-14w-1-buc.html#/83-valoare_rezistenta-220r",children:"220\u03a9 Resistors"})}),(0,t.jsx)(s.td,{children:"For the RGB LED"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/electronica/211-rezistenta-14w-1-buc.html#/83-valoare_rezistenta-220r",children:"1 lei for 3"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.bitmi.ro/breadboard-830-puncte-mb-102-10500.html?gad_source=1",children:"Breadboard"})}),(0,t.jsx)(s.td,{children:"For assembling the prototype"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.bitmi.ro/breadboard-830-puncte-mb-102-10500.html?gad_source=1",children:"10 lei"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/electronica/23-40-x-dupont-cables-female-male-10cm.html?search_query=fire&results=203",children:"Female-to-Male Wires"})}),(0,t.jsx)(s.td,{children:"For connections"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/electronica/23-40-x-dupont-cables-female-male-10cm.html?search_query=fire&results=203",children:"5 lei per pack"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/en/wires-with-connectors/880-fire-colorate-mama-mama-10p-10-cm.html?search_query=wires&results=565",children:"Female-to-Female Wires"})}),(0,t.jsx)(s.td,{children:"For connections"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/en/wires-with-connectors/880-fire-colorate-mama-mama-10p-10-cm.html?search_query=wires&results=565",children:"3 lei per pack"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/en/wires-with-connectors/885-wires-male-male-10p-10cm.html?search_query=wires&results=565",children:"Male-to-Male Wires"})}),(0,t.jsx)(s.td,{children:"For connections"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/en/wires-with-connectors/885-wires-male-male-10p-10cm.html?search_query=wires&results=565",children:"9 lei for 3 packs"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/en/usb-cables/4576-cablu-albastru-micro-usb.html?search_query=usb+to+micro+usb&results=516",children:"Micro USB Cable"})}),(0,t.jsx)(s.td,{children:"To power the Raspberry Pi Pico W"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://www.optimusdigital.ro/en/usb-cables/4576-cablu-albastru-micro-usb.html?search_query=usb+to+micro+usb&results=516",children:"3 lei"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/electronica/271-led-tricolor-cu-catod-comun.html",children:"RGB LED"})}),(0,t.jsx)(s.td,{children:"For visual feedback"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://ardushop.ro/ro/electronica/271-led-tricolor-cu-catod-comun.html",children:"2 lei"})})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"software",children:"Software"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Library"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Usage"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.rs/embassy/latest/embassy/",children:"embassy"})}),(0,t.jsx)(s.td,{children:"Async runtime for embedded systems"}),(0,t.jsx)(s.td,{children:"Manages tasks and system operations"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.rs/embassy-hal/latest/embassy_hal/",children:"embassy-hal"})}),(0,t.jsx)(s.td,{children:"Hardware Abstraction Layer"}),(0,t.jsx)(s.td,{children:"Interfaces with Raspberry Pi Pico W hardware"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.rs/embassy-executor/latest/embassy_executor/",children:"embassy-executor"})}),(0,t.jsx)(s.td,{children:"Task executor"}),(0,t.jsx)(s.td,{children:"Handles asynchronous tasks and data processing"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.rs/embassy-time/latest/embassy_time/",children:"embassy-time"})}),(0,t.jsx)(s.td,{children:"Timing module"}),(0,t.jsx)(s.td,{children:"Provides timing functions for operations"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.rs/embassy-net/latest/embassy_net/",children:"embassy-net"})}),(0,t.jsx)(s.td,{children:"Networking library"}),(0,t.jsx)(s.td,{children:"Manages Wi-Fi communications"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.rs/embassy-gpio/latest/embassy_gpio/",children:"embassy-gpio"})}),(0,t.jsx)(s.td,{children:"GPIO management"}),(0,t.jsx)(s.td,{children:"Controls GPIO pins for devices and inputs"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.youtube.com/watch?v=kQRYIH2HwfY&ab_channel=HowToMechatronics",children:"YouTube Video"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},23440:(e,s,r)=>{r.d(s,{c:()=>t});const t=r.p+"assets/images/Architecture-18b8b343799110bba31511444325c38d.png"},50500:(e,s,r)=>{r.d(s,{c:()=>t});const t=r.p+"assets/images/Hardware1-7a2dedc997c0dadd3d92075cb07787ba.jpg"},7268:(e,s,r)=>{r.d(s,{c:()=>t});const t=r.p+"assets/images/Hardware2-fa4d126cb5eaab7551c86c120e5908bc.jpg"},95040:(e,s,r)=>{r.d(s,{c:()=>t});const t=r.p+"assets/images/Hardware3-f2db36625ab089bfe19f65a2a86950a0.jpg"},10524:(e,s,r)=>{r.d(s,{c:()=>t});const t=r.p+"assets/images/KiCadSchematics-88b1fa6adedbdd397cfb2d9ce0d00835.png"},4552:(e,s,r)=>{r.d(s,{I:()=>o,M:()=>a});var t=r(11504);const i={},n=t.createContext(i);function a(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);