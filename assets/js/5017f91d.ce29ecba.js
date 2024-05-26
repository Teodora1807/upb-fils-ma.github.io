"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5796],{16052:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var t=i(17624),s=i(4552);const n={},o="RC Car",l={id:"project/2024/mihai.georgescu2508/index",title:"RC Car",description:"A RC Car controlled by a Web Application",source:"@site/docs/project/2024/mihai.georgescu2508/index.md",sourceDirName:"project/2024/mihai.georgescu2508",slug:"/project/2024/mihai.georgescu2508/",permalink:"/docs/project/2024/mihai.georgescu2508/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/mihai.georgescu2508/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/docs/project/2024/mihai.buga/"},next:{title:"Music Player",permalink:"/docs/project/2024/mihai.pasaroiu/"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function d(e){const r={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"rc-car",children:"RC Car"}),"\n",(0,t.jsx)(r.p,{children:"A RC Car controlled by a Web Application"}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsx)(r.mdxAdmonitionTitle,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Author"}),": Mihai-Antonio GEORGESCU ",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.strong,{children:"GitHub Project Link"}),": ",(0,t.jsx)(r.a,{href:"https://github.com/UPB-FILS-MA/project-sadtoni/",children:"https://github.com/UPB-FILS-MA/project-sadtoni/"})]})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Using the Raspberry Pi Pico W microcontroller, I built a remote-controlled car, operated via a web application."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"The connection is realized with Pico\u2019s integrated Wi-Fi capabilities, since it is ten times faster than using Bluetooth and is easier to control via a web browser on an iPhone."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"On the bonnet, an ultrasonic sensor is placed to provide distance information to the user, allowing them to control the car even if it is out of sight."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"motivation",children:"Motivation"}),"\n",(0,t.jsx)(r.p,{children:"The motivation behind my RC Car project comes from my desire to play, create and explore, and building the project gives me the opportunity to learn by building and coding everything from scratch."}),"\n",(0,t.jsx)(r.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"image",src:i(17832).c+"",width:"1182",height:"717"})}),"\n",(0,t.jsx)(r.h2,{id:"log",children:"Log"}),"\n",(0,t.jsx)(r.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"I placed the orders for the components, and I started to plan on how the car will look and function."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Started to assembly the car components."}),"\n",(0,t.jsx)(r.li,{children:"Did the KiCad schematic for the car."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,t.jsx)(r.h2,{id:"hardware",children:"Hardware"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Raspberry Pi Pico W:"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Description: A microcontroller board based on the Raspberry Pi RP2040 chip, featuring Wi-Fi connectivity.\nFunction: Serves as the central control unit for the RC car, processing inputs and controlling outputs to various components."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"L298N Motor Driver:"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Description: A dual H-bridge motor driver module capable of controlling the speed and direction of two DC motors.\nFunction: Interfaces between the Raspberry Pi Pico W and the motors, allowing for control of motor operations through GPIO pins."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Servomotors:"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Description: Rotary actuators that allow for precise control of angular position, typically used for steering and other precise movements.\nFunction: Used for controlling the direction of the RC car."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Ultrasonic Sensor:"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Description: A sensor that uses ultrasonic waves to measure the distance to an object.\nFunction: Mounted on a servo motor to scan the environment and detect obstacles, providing data for obstacle avoidance."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"LEDs:"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Description: Light-emitting diodes used as headlights.\nFunction: Provide illumination and visual feedback, connected to GPIO pins GP7 and GP8."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Buzzer:"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Description: An electronic device that produces sound.\nFunction: Used for auditory signals or alerts."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Aluminum Chassis:"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Description: The structural frame of the RC car made from aluminum.\nFunction: Provides a sturdy and lightweight structure to mount all the components."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Shopping Cart Wheel:"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Description: A free-spinning wheel similar to those found on shopping carts.\nFunction: Provides stability and support to the rear of the RC car."}),"\n",(0,t.jsx)(r.h3,{id:"schematics",children:"Schematics"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"image",src:i(46336).c+"",width:"3507",height:"2480"})}),"\n",(0,t.jsx)(r.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Device"}),(0,t.jsx)(r.th,{children:"Usage"}),(0,t.jsx)(r.th,{children:"Price"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["1 x ",(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/robot-kits/3161-mini-aluminum-premium-twin-robot-mini-kit.html?search_query=0104110000027986%09&results=1",children:"Mini Aluminum Premium Twin Robot Mini Kit"})]}),(0,t.jsx)(r.td,{children:"The kit contains the chassis, two servomotors and a wheel"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/robot-kits/3161-mini-aluminum-premium-twin-robot-mini-kit.html?search_query=0104110000027986%09&results=1",children:"69 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["1 x ",(0,t.jsx)(r.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico W"})]}),(0,t.jsx)(r.td,{children:"The microcontroller"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["1 x ",(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/brushed-motor-drivers/145-l298n-dual-motor-driver.html?search_query=L298N&results=4",children:"L298N Motor Driver"})]}),(0,t.jsx)(r.td,{children:"Control motor motion"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/brushed-motor-drivers/145-l298n-dual-motor-driver.html?search_query=L298N&results=4",children:"9 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["1 x ",(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/chargers/7340-dc-dc-boost-module-with-microusb-input-charging-function-for-li-ion-batteries-and-usb-outputs.html?search_query=baterie&results=1",children:"DC-DC Boost Module "})]}),(0,t.jsx)(r.td,{children:"Connecting the batteries to the board"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/chargers/7340-dc-dc-boost-module-with-microusb-input-charging-function-for-li-ion-batteries-and-usb-outputs.html?search_query=baterie&results=1",children:"13 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["2 x ",(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/9-v-pp3-batteries/3151-9v-alkaline-battery-varta-6lr61-4922-4008496559862.html",children:"9V Alkaline Battery Varta 6LR61 4922"})]}),(0,t.jsx)(r.td,{children:"The juice supplying the car"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/9-v-pp3-batteries/3151-9v-alkaline-battery-varta-6lr61-4922-4008496559862.html",children:"13 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["1 x ",(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/holders-and-mounting-accessories/7104-mounting-bracked-for-hc-sr04-ultrasonic-sensor-red.html?search_query=0104210000045369%09&results=1",children:"Mounting Bracket for HC-SR04 Ultrasonic Sensor (Red)"})]}),(0,t.jsx)(r.td,{children:"Holds the ultrasonic sensor"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/holders-and-mounting-accessories/7104-mounting-bracked-for-hc-sr04-ultrasonic-sensor-red.html?search_query=0104210000045369%09&results=1",children:"2 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["1 x ",(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/ultrasonic-sensors/9-hc-sr04-ultrasonic-sensor.html?search_query=ultrasonic&results=87",children:"HC-SR04 Ultrasonic Sensor"})]}),(0,t.jsx)(r.td,{children:"Radar for the car"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/ultrasonic-sensors/9-hc-sr04-ultrasonic-sensor.html?search_query=ultrasonic&results=87",children:"7 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["2 x ",(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/breadboards/44-400p-hq-breadboard.html?search_query=breadboard&results=415",children:"400p HQ Breadboard"})]}),(0,t.jsx)(r.td,{children:"Accomodate hardware devices"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/breadboards/44-400p-hq-breadboard.html?search_query=breadboard&results=415",children:"10 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["1 x ",(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/wires-with-connectors/884-set-fire-tata-tata-40p-10-cm.html",children:"Male-Male Wires"})]}),(0,t.jsx)(r.td,{children:"Do the connection"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/wires-with-connectors/884-set-fire-tata-tata-40p-10-cm.html",children:"7 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["1 x ",(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/servomotors/3165-fs90-micro-servomotor-with-plastic-reducing.html?search_query=servomotor&results=111",children:"FS90 Micro Servomotor with Plastic Reducer"})]}),(0,t.jsx)(r.td,{children:"Rotates the ultrasonic sensor"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/servomotors/3165-fs90-micro-servomotor-with-plastic-reducing.html?search_query=servomotor&results=111",children:"27 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["1 x ",(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/buzzers/634-5v-passive-buzzer.html?search_query=buzzer&results=87",children:"5 V Passive Buzzer"})]}),(0,t.jsx)(r.td,{children:"Honk"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/buzzers/634-5v-passive-buzzer.html?search_query=buzzer&results=87",children:"2 RON"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["1 x ",(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/screws-and-nuts/5756-m6x10-mm-hexagonal-head-screw.html?search_query=screw&results=746",children:"10 mm Hexagonal Head Screw"})]}),(0,t.jsx)(r.td,{children:"Fixing the components in place"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/screws-and-nuts/5756-m6x10-mm-hexagonal-head-screw.html?search_query=screw&results=746",children:"1 RON"})})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"software",children:"Software"}),"\n",(0,t.jsx)(r.h2,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.instructables.com/Arduino-RC-Car-Project/",children:"Instructables | Arduino RC Car Project"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://ocw.cs.pub.ro/courses/pm/prj2017/ddragomir/bogdan_adrian.ene",children:"OCW CS PUB | Grave Digger (Monster Car)"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://youtu.be/xngpwyQKnRw?si=VdglGKJKZDccrtuA",children:"YouTube | How to make an ultrasonic Radar"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://youtu.be/RFEyYCotwzM?si=uECjVORqA3PXx5x8",children:"YouTube | Create an RC Robot Car Using Pi Pico W and Robo Pico | Control it with a Webpage"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://youtu.be/CkjBdgiNRfc?si=QGZxqSq4LfnAQ8TG",children:"YouTube | Rust on ESP32 - Building an RC car in ESP-RS: The controller"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://youtu.be/-kRTRKL39pE?si=Uimh3aOyvrsSkAzS",children:"YouTube | Rust on ESP32 - Servo intro & deep dive"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://ctipub.sharepoint.com/:f:/s/12filsla2s2ame/Eq7HAUGk41BDkWn9AriDgooBL-SkHCnE4o_WfwC7Dex1eA?e=tUY1hP",children:"Joseph Yiu, The De nitive Guide to ARM\xae Cortex\xae-M0 and Cortex-M0+ Processors, 2nd Edition"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},46336:(e,r,i)=>{i.d(r,{c:()=>t});const t=i.p+"assets/images/kicad-c16c0a1de84fdb00c54439271aafc509.png"},17832:(e,r,i)=>{i.d(r,{c:()=>t});const t=i.p+"assets/images/schematic-0013f393bc13e5dc7e8a227a6a6fe0f5.jpg"},4552:(e,r,i)=>{i.d(r,{I:()=>l,M:()=>o});var t=i(11504);const s={},n=t.createContext(s);function o(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);