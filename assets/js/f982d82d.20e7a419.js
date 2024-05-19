"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1320],{9476:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=i(17624),n=i(4552);const r={},o="Pico Wand",d={id:"project/2024/rebeca.chiorean/index",title:"Pico Wand",description:"A useful device for physically impaired people",source:"@site/docs/project/2024/rebeca.chiorean/index.md",sourceDirName:"project/2024/rebeca.chiorean",slug:"/project/2024/rebeca.chiorean/",permalink:"/docs/project/2024/rebeca.chiorean/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/rebeca.chiorean/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MeloLED",permalink:"/docs/project/2024/raul_anton.jac/"},next:{title:"Controller",permalink:"/docs/project/2024/robert.leonte/"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Example of usage",id:"example-of-usage",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Pictures of hardware",id:"pictures-of-hardware",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pico-wand",children:"Pico Wand"}),"\n",(0,s.jsx)(t.p,{children:"A useful device for physically impaired people"}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Author"}),": Chiorean Rebeca ",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"My GitHub Project Link"}),": ",(0,s.jsx)(t.a,{href:"https://github.com/UPB-FILS-MA/project-ChioreanRebeca",children:"Chiorean Rebeca"}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.strong,{children:"Coleague GitHub Link"}),": ",(0,s.jsx)(t.a,{href:"https://github.com/UPB-FILS-MA/project-nimintz",children:"Naomi Lita"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Pico wand is useful device for physically impaired people. It uses a gyroscope that detects hand movements and interacts with objects around the house. ",(0,s.jsx)("br",{}),"\nWhen pressing a push button it starts collecting the movement of your wand.",(0,s.jsx)("br",{}),"\nIt collects movements such as:",(0,s.jsx)("br",{}),"\n\u2022\tUp and down",(0,s.jsx)("br",{}),"\n\u2022\tBack and fourth",(0,s.jsx)("br",{}),"\n\u2022\tLeft to right",(0,s.jsx)("br",{}),"\n\u2022\tCircular motion",(0,s.jsx)("br",{}),"\nAll this information is then shown on a OLED display.",(0,s.jsx)("br",{}),"\nThis device could be used in relation to smart objects. This idea is further expanded upon by my coleague ",(0,s.jsx)(t.a,{href:"https://github.com/UPB-FILS-MA/project-nimintz",children:"Naomi Lita"}),".",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.h2,{id:"example-of-usage",children:"Example of usage"}),"\n",(0,s.jsxs)(t.p,{children:["Let\u2019s imagine someone that is bed bound and needs to adjust their smart curtains. They will pick up the Pico Wand, press the button and do a left to right motion. Our curtain will pick up the signal and adjust accordingly.",(0,s.jsx)("br",{}),"\nFor adjusting the intensity of a lightbulb we could implement our Pico Wand to collect circular movement.\nIf they make a circular movement to the left the light will dim and if it is to the right we could raise the intensity.",(0,s.jsx)("br",{}),"\nThis sort of implementation could be done on other objects as well: a door, the room temperature and so on."]}),"\n",(0,s.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(t.p,{children:"This project aims to help people with disabilities gain some of their autonomy by being able to interact with objects around them. It ensures that they have the same opportunities to perform everyday tasks as those that aren't faced with the same challenges. Engaging in efforts that make a tangible difference in people\u2019s lives can be incredibly rewarding. My motivation comes from knowing that my work has directly improved someone\u2019s ability to live independently."}),"\n",(0,s.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"architecture",src:i(5268).c+"",width:"2894",height:"3435"})}),"\n",(0,s.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,s.jsx)(t.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,s.jsx)(t.p,{children:"I created the documentation of the project. I prototyped the hardware and the software and I experimented with the MPU6050 sensor module. I also looked for any additional components that were needed."}),"\n",(0,s.jsx)(t.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,s.jsx)(t.p,{children:"I completed the hardware connections and the KiCad schematic. In addition, I revised the project documentation (the architecture schematic and its content). I trained an Edge Impulse model for the MPU6050 and exported it as a C++ library and tested it in C++ code."}),"\n",(0,s.jsx)(t.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,s.jsx)(t.h2,{id:"hardware",children:"Hardware"}),"\n",(0,s.jsxs)(t.p,{children:["The MPU6050 Accelerometer and Gyroscope sensor takes the wand movement input. When the pushbutton is pressed, our PicoW takes the provided input and understands the nature of the movement. The direction of the movement is then sent to the SSD1360 display that prints it. The PicoW also sends the movement information to another PicoW connected to it by wifi. The second PicoW is the one connected to smart devices and will interact with them.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"pushbutton"})," signals the start of the data reading process from the MPU6050 sensor. It uses a simple GPIO connection, as follows:",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"not pressed"})," -> GP20 is HIGH"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"pressed"})," -> GP20 is LOW ",(0,s.jsx)("br",{}),"\nIt is connected using a pull-up resistor(of 10k\u03a9) between the input pin and Vcc to keep the voltage HIGH when the button is not pressed.",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"MPU6050"})," sends data to the first PicoW. It uses a I2C connection as follows:",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"SDA"})," -> GP0"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"SCL"})," -> GP1 ",(0,s.jsx)("br",{}),"\nThe data sent is then interpretetd by our PicoW with the help of our ML Edge Impulse model. ",(0,s.jsx)(t.a,{href:"https://studio.edgeimpulse.com/studio/395280",children:"Edge Impulse Model"}),".",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"SSD1306"})," shows the direction of our movement after it has been interpreted by our PicoW. It uses I2C connection as follows:",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"SDA"})," -> GP2"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"SCL"})," -> GP3",(0,s.jsx)("br",{}),"\nThe information is then sent through WiFi connection to a second PicoW (Naomi's project)."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"schematics",children:"Schematics"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"KiCad schematic",src:i(16995).c+"",width:"1123",height:"794"})}),"\n",(0,s.jsx)(t.h3,{id:"pictures-of-hardware",children:"Pictures of hardware"}),"\n",(0,s.jsxs)(t.p,{children:['This shows the hardware until now. The display shows "IDLE" when the Pico Wand is not moving. It can also sense "left-right" movement and "up-down".',(0,s.jsx)("br",{}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.img,{alt:"PicoWand hardware picture idle",src:i(24972).c+"",width:"4000",height:"1840"}),"\n",(0,s.jsx)(t.img,{alt:"PicoWand hardware picture left right",src:i(41484).c+"",width:"4000",height:"1840"}),"\n",(0,s.jsx)(t.img,{alt:"PicoWand hardware picture up down",src:i(22492).c+"",width:"4000",height:"1840"}),'\nNote that in the picture, the positions for "up-down" and "left-right" look inverted, that is because PicoWand is supposed to be held as a remote.']}),"\n",(0,s.jsx)(t.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Device"}),(0,s.jsx)(t.th,{children:"Usage"}),(0,s.jsx)(t.th,{children:"Price"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico W"})}),(0,s.jsx)(t.td,{children:"The microcontroller"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf",children:"MPU6050 Accelerometer and Gyroscope Module"})}),(0,s.jsx)(t.td,{children:"Accelerometer sensor"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/inertial-sensors/96-mpu6050-accelerometer-and-gyroscope-module.html",children:"15,49 lei"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://components101.com/sites/default/files/component_datasheet/SSD1306-OLED-Display-Datasheet.pdf",children:"0.96'' OLED Module"})}),(0,s.jsx)(t.td,{children:"Display"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/lcds/194-yellow-and-blue-096-oled-module-128x64-px.html?search_query=OLED+Display+&results=73",children:"23,79 lei"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Breadboard"}),(0,s.jsx)(t.td,{children:"Prototyping"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/breadboards/8-breadboard-hq-830-points.html?search_query=bread+board&results=420",children:"9,98 lei"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Jumper Wires"}),(0,s.jsx)(t.td,{children:"Connecting components"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/wires-with-connectors/889-set-fire-tata-tata-10p-20-cm.html?search_query=jumper+wires&results=101",children:"4,99 lei"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Pushbutton switch 12mm"}),(0,s.jsx)(t.td,{children:"Signals the begining of the data collecting process"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/others/1118-blue-round-button-with-cover.html?search_query=button&results=510",children:"1,99 lei"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"software",children:"Software"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Library"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Usage"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/jamwaffles/ssd1306",children:"ssd1306"})}),(0,s.jsx)(t.td,{children:"Display driver for SSSD1306"}),(0,s.jsx)(t.td,{children:"Used for the display"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/embedded-graphics/embedded-graphics",children:"embedded-graphics"})}),(0,s.jsx)(t.td,{children:"2D graphics library"}),(0,s.jsx)(t.td,{children:"Used for drawing to the display"})]})]})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Other Software Tools"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Usage"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://edgeimpulse.com",children:"Edge Impulse"})}),(0,s.jsx)(t.td,{children:"Edge Impulse website"}),(0,s.jsx)(t.td,{children:"Used to build datasets the will be imported as C library and interfaced by the use of FFI"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://medium.com/@subirmaity/hand-gesture-recognition-for-numbers-using-tinyml-323d2a524c3e",children:"Hand Gesture Recognition for Numbers using TinyML"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://mjrobot.org/2021/03/12/tinyml-motion-recognition-using-raspberry-pi-pico/",children:"Motion Recognition Using Raspberry Pi Pico"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.hackster.io/shahizat/gesture-recognition-using-raspberry-pi-pico-and-edge-impulse-7a63b6",children:"Raspberry Pi Pico and Edge Impulse"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.hackster.io/shubhamsantosh99/gesture-recognition-on-pico-using-edge-impulse-fd962e#overview",children:"Using a screen display to output the movement"})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},16995:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/ChioreanRebeca_PicoWand-f95ed431cfd1d6b5ec8e755256c8c0de.svg"},5268:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/architecture_ChioreanRebeca_LitaNaomi-976937b5e48d2ab7f9f67748c04ee4b3.png"},24972:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/picture_of_hardware-772a1f91a14a65aaf12101a4a5414abd.png"},41484:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/picture_of_hardware_leftright-5c848f4895339936690f8d4f7c7ccdaf.png"},22492:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/picture_of_hardware_updown-b4a80ecb32bbcf36b16a7b373f360457.png"},4552:(e,t,i)=>{i.d(t,{I:()=>d,M:()=>o});var s=i(11504);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);