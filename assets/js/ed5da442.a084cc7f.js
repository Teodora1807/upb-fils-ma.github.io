"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8128],{51204:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=r(17624),i=r(4552);const s={},o="SmartBot Navigator",a={id:"project/2024/mihaela_raluca.dorobantu/index",title:"SmartBot Navigator",description:"An autonomous indoor robot equipped with a 180-degree rotating ultrasonic sensor, powered by a Raspberry Pi Pico, and transmitting real-time data via Bluetooth.",source:"@site/docs/project/2024/mihaela_raluca.dorobantu/index.md",sourceDirName:"project/2024/mihaela_raluca.dorobantu",slug:"/project/2024/mihaela_raluca.dorobantu/",permalink:"/docs/project/2024/mihaela_raluca.dorobantu/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/mihaela_raluca.dorobantu/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RUST TICTACTOE (+Wireless Control)",permalink:"/docs/project/2024/matei_teodor.petrec/"},next:{title:"RC Car",permalink:"/docs/project/2024/mihai.georgescu2508/"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function c(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"smartbot-navigator",children:"SmartBot Navigator"}),"\n",(0,n.jsx)(t.p,{children:"An autonomous indoor robot equipped with a 180-degree rotating ultrasonic sensor, powered by a Raspberry Pi Pico, and transmitting real-time data via Bluetooth."}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Author"}),": Mihaela-Raluca Doroban\u021bu ",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"GitHub Project Link"}),": ",(0,n.jsx)(t.a,{href:"https://github.com/Raluca3012/upb-fils-ma.github.io",children:"https://github.com/Raluca3012/upb-fils-ma.github.io"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"The SmartBot Navigator is an innovative autonomous robot designed to navigate indoor environments without physical contact, ensuring efficient and precise movement throughout the area. It leverages sensors such as the HC-SR04 ultrasonic sensor to measure distances and navigate around obstacles efficiently. The sensor, mounted on an MG995 servo motor, provides a sweeping 180-degree view, enabling comprehensive spatial analysis. Here are the core features of the SmartBot Navigator based on environmental conditions it detects:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Obstacle Detected"}),": When the robot encounters an obstacle, signaling the need to reroute."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Path Clear"}),": When there are no obstructions in its path, indicating safe passage."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Narrow Passage"}),": When the robot navigates through tight spaces."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Recharge Needed"}),": When the battery level is low, indicating the need to return to its charging station."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This autonomous robot includes a Bluetooth module for real-time data transmission to a PC, allowing users to monitor and control the robot remotely. The design prioritizes efficiency, activating sensors and navigation systems only when necessary to conserve power and extend operational periods."}),"\n",(0,n.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,n.jsx)(t.p,{children:"The motivation behind the SmartBot Navigator is to advance the capability of autonomous robots in accurately understanding and navigating indoor spaces. This robot serves as a valuable tool in fields requiring detailed spatial awareness, such as robotics research and advanced automation."}),"\n",(0,n.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Architecture photo",src:r(12540).c+"",width:"1409",height:"496"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"SmartBot Navigator Unit:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The core of the system, this unit houses all operational components. It\u2019s designed to navigate indoor spaces autonomously using various sensors and actuators."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"HC-SR04 Ultrasonic Sensor:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Mounted on top of the unit, this sensor measures distances using ultrasonic waves. It\u2019s crucial for detecting obstacles."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"MG995 Servo Motor:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This servo motor controls the rotation of the HC-SR04 sensor, allowing it to cover a 180-degree field. This wide range enhances the robot\u2019s ability to detect and navigate around obstacles efficiently."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"HW-094 Motor Controller:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Manages the two motors that drive the robot\u2019s wheels. This controller adjusts the speed and direction based on the navigation algorithm\u2019s outputs, ensuring smooth and efficient movement."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Bluetooth Module:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Enables wireless communication between the SmartBot Navigator and a PC. This module facilitates real-time transmission of operational data, allowing for remote monitoring and control of the robot."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Raspberry Pi Pico:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Serves as the brain of the operation. This microcontroller integrates data from sensors, manages the execution of navigation algorithms, and oversees Bluetooth communications."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Power Supply:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Two separate battery blocks power the system:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"One battery pack powers the Raspberry Pi Pico, ensuring that the central computing resources are maintained."}),"\n",(0,n.jsx)(t.li,{children:"The second battery pack supplies power to the motor controller and servo, which require higher current for operation."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Chassis with 3 Wheels and 2 Motors:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Provides the physical structure and mobility for the SmartBot. The chassis is designed with three wheels, two for propulsion and one for stability, allowing agile and precise movements within complex indoor environments."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The architecture of the SmartBot Navigator is designed to ensure robust operation, efficient power management, and precise navigation, making it highly effective for autonomous indoor movement."}),"\n",(0,n.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,n.jsx)(t.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,n.jsx)(t.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,n.jsx)(t.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,n.jsx)(t.h2,{id:"hardware",children:"Hardware"}),"\n",(0,n.jsx)(t.p,{children:"Detail in a few words the hardware used."}),"\n",(0,n.jsx)(t.h3,{id:"schematics",children:"Schematics"}),"\n",(0,n.jsx)(t.p,{children:"Place your KiCAD schematics here."}),"\n",(0,n.jsx)(t.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Device"}),(0,n.jsx)(t.th,{children:"Usage"}),(0,n.jsx)(t.th,{children:"Price"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico"})}),(0,n.jsx)(t.td,{children:"The microcontroller"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.emag.ro/microcontroller-raspberry-pi-rp2040-pico/pd/DKQQWNMBM/",children:"33 RON"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://cdn.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf",children:"HC-SR04 Ultrasonic Sensor"})}),(0,n.jsx)(t.td,{children:"Measures distances"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.emag.ro/senzor-ultrasonic-hc-sr04-cl09/pd/DS0C5JBBM/",children:"18 RON"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://components101.com/motors/mg995-servo-motor",children:"MG995 Servo"})}),(0,n.jsx)(t.td,{children:"Allows the sensor to rotate 180-degree for full-range scanning"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.emag.ro/motor-servo-mg995-11kg-180grade-cl845/pd/DZSHBRBBM/",children:"39 RON"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.gotronic.fr/pj2-35233-eng-1776.pdf",children:"HW-094 Motor Controller"})}),(0,n.jsx)(t.td,{children:"Manages the operation of the robot's motors"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.emag.ro/modul-l298n-cu-punte-h-dubla-cl26/pd/D2ZZ5JBBM/",children:"27 RON"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://components101.com/wireless/hc-05-bluetooth-module",children:"Bluetooth Module"})}),(0,n.jsx)(t.td,{children:"Facilitates data transfer to PC"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.emag.ro/modul-bluetooth-hc-05-cl263/pd/D0966JBBM/?utm_campaign=share_product&utm_source=mobile_dynamic_share&utm_medium=android",children:"29 RON"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://",children:"Battery Pack (for Motor Controller)"})}),(0,n.jsx)(t.td,{children:"Supplies energy to the motors and servo"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.emag.ro/suport-cu-fire-pentru-baterii-9v-oky0252-1/pd/D6R726MBM/",children:"3 RON"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://",children:"Source (for Raspberry Pi Pico) + Breadbord + Wires"})}),(0,n.jsx)(t.td,{children:"Provides power to the microcontroller"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.emag.ro/kit-breadboard-830-gauri-65-fire-modul-tensiune-alimentare-mb102-tri273/pd/DY1YP6BBM/",children:"35 RON"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"software",children:"Software"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Library"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Usage"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/rp-rs/rp-hal",children:"rp2040-hal"})}),(0,n.jsx)(t.td,{children:"RP2040 microcontroller support"}),(0,n.jsx)(t.td,{children:"Enables control of GPIOs and PWM, essential for interfacing with sensors and motors"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/rust-embedded/embedded-hal",children:"embedded-hal"})}),(0,n.jsx)(t.td,{children:"A Hardware Abstraction Layer (HAL) for embedded systems"}),(0,n.jsx)(t.td,{children:"Offers interfaces for digital input and output, useful for managing sensor signals"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/knurling-rs/defmt",children:"defmt"})}),(0,n.jsx)(t.td,{children:"Efficient logging for embedded systems"}),(0,n.jsx)(t.td,{children:"Enables detailed logging for system diagnostics and debugging during development"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/embassy-rs/embassy",children:"embassy"})}),(0,n.jsx)(t.td,{children:"Asynchronous runtime for embedded systems"}),(0,n.jsx)(t.td,{children:"Supports non-blocking tasks, improving efficiency in managing multiple operations like sensor reading and motor control"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.instructables.com/Build-Your-Own-Desktop-Pet-Robot-With-Arduino/",children:"Pet Robot"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://ocw.cs.pub.ro/courses/pm/prj2023/abirlica/bogdan-toma",children:"Distance Sensor Detector"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://ocw.cs.pub.ro/courses/pm/prj2014/amusat/bluetooth-car",children:"Bluetooth Car"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},12540:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/architecture-6bec89d7313a78cb07553fa0df35cb8e.png"},4552:(e,t,r)=>{r.d(t,{I:()=>a,M:()=>o});var n=r(11504);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);