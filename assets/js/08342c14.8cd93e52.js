"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1488],{38644:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var o=r(17624),i=r(4552);const n={},a="Wifi Robot Car",s={id:"project/2024/teodora.dumitru1807/index",title:"Wifi Robot Car",description:"A robot car that can be controlled through a website accessed from the mobile phone or a computer",source:"@site/docs/project/2024/teodora.dumitru1807/index.md",sourceDirName:"project/2024/teodora.dumitru1807",slug:"/project/2024/teodora.dumitru1807/",permalink:"/docs/project/2024/teodora.dumitru1807/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/teodora.dumitru1807/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Air piano",permalink:"/docs/project/2024/teodora.chirila/"},next:{title:"Breathalyzer",permalink:"/docs/project/2024/tudor.arhir/"}},c={},h=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Block diagram",id:"block-diagram",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function d(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"wifi-robot-car",children:"Wifi Robot Car"}),"\n",(0,o.jsx)(t.p,{children:"A robot car that can be controlled through a website accessed from the mobile phone or a computer"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Author"}),": Dumitru Teodora-Iulia ",(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.strong,{children:"GitHub Project Link"}),": ",(0,o.jsx)(t.a,{href:"https://github.com/UPB-FILS-MA/project-Teodora1807.git",children:"https://github.com/UPB-FILS-MA/project-Teodora1807.git"})]})}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Welcome to the documentation for a Wi-Fi robot car, powered by the Pico W microcontroller and programmed using the Rust programming language. This comprehensive guide will present, at the final deadline, the assembly, setup, and programming of a Wi-Fi-enabled robot car. In this project, I aim to build a Wi-Fi robot car. The robot car will be capable of wireless communication over a Wi-Fi network, enabling remote control and autonomous operation. This project, if everything works at the end, can be stilized with specific components(like a proper car kit) for a more stylished look."}),"\n",(0,o.jsx)(t.p,{children:"I am going to create a website using html, css and phython. The web page will have a controller for direction which is going to action the car by using the microcontroller and respecting the pins used to connect the pico_w to the driver. The pico is going to be connected to my wifi using the knowledge from the last lab. Also i hope that i succeed to control the speed by using a slider ."}),"\n",(0,o.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,o.jsx)(t.p,{children:"When I was little, besides dolls and legos , i liked remote controlled cars or even helicopters so this is more like an ambition for me."}),"\n",(0,o.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,o.jsx)(t.p,{children:"This is my block diagram:"}),"\n",(0,o.jsx)(t.p,{children:"UPDATE:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"BLOCK DIAGRAM",src:r(16560).c+"",width:"1416",height:"518"})}),"\n",(0,o.jsx)(t.p,{children:"I will attach here photos of my project, i intend to style it more before the final presentation."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"Below",src:r(74356).c+"",width:"1152",height:"1653"}),"\n",(0,o.jsx)(t.img,{alt:"Above",src:r(96568).c+"",width:"1536",height:"2048"}),"\n",(0,o.jsx)(t.img,{alt:"Circ",src:r(32852).c+"",width:"1536",height:"2048"}),"\n",(0,o.jsx)(t.img,{alt:"Driver",src:r(14220).c+"",width:"1536",height:"2048"}),"\n",(0,o.jsx)(t.img,{alt:"Driver",src:r(39068).c+"",width:"1536",height:"2048"}),"\n",(0,o.jsx)(t.img,{alt:"Buzzer",src:r(61020).c+"",width:"1536",height:"2048"})]}),"\n",(0,o.jsx)(t.p,{children:"I am going to connect the 2 motors to the 2 big wheels.\nThe motor driver module is going to be connected to the pico_w microcontroller and the module is going to be powered by the 2 batteries.\nIn addition, i intend to add a buzzer to the whole robot to copy the sound of a honk.\nAll of the components will be attached to the skeleton which is a piece of wood with round corners with space for the wheels the hard components and equipped with an on/off button if desired."}),"\n",(0,o.jsx)(t.p,{children:"Update: I have connected the motors in this way :"}),"\n",(0,o.jsx)(t.p,{children:"M1 OUT1 and OUT2;\nM2 OUT3 and OUT4;"}),"\n",(0,o.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,o.jsx)(t.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,o.jsx)(t.p,{children:"I have started to work on the car. I made a kicad schematic to visualize everything. I have done some research to find out one of the most important things from the hardware part : the type of voltage pin i should connect the Vcc. I found out that Vsys is the right one for the battery power supply type of circuits."}),"\n",(0,o.jsx)(t.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,o.jsx)(t.p,{children:"I have connected the motors as said above, glued the battery holder and the buzzer to the car and screw the driver module. I have soldered the OUTs for the motors to the driver, the wires to the buzzer and also the minus and plus pins of the on/off SPST switch to the driver and the battery holder as shown in the kicad scheme."}),"\n",(0,o.jsx)(t.p,{children:"I finished the kicad scheme, PCB without errors and screenshot the 3D viewer."}),"\n",(0,o.jsx)(t.p,{children:"I have done all the connections from driver to pico."}),"\n",(0,o.jsx)(t.p,{children:"I studied the ways of conntrolling the motors and their logical inputs."}),"\n",(0,o.jsx)(t.p,{children:"In conclusion: I have added a on/off switch to preserve the life of the batteries."}),"\n",(0,o.jsx)(t.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,o.jsx)(t.p,{children:"I created a website for controlling the car by creating a socket website file which contains the css, html and js files with the client interface and also the connections with the web server. I didnt managed to make it work. On the rust part i managed to connect the pico to wifi and create a server with port 5500, the website with 5501 and pico 5502 but i could not tie them corectly, so i put aside the part with server and wifi and decide to make the car work on a loop."}),"\n",(0,o.jsx)(t.p,{children:"As a second plan, i programmed the car to move forward, right, left, backwards and stop, wait 2 seconds and then start again. In the waiting time after a second the buzzer starts for a half a second and then after half a second the loop starts again."}),"\n",(0,o.jsx)(t.p,{children:"I did a case for the car to look prettier."}),"\n",(0,o.jsx)(t.h2,{id:"hardware",children:"Hardware"}),"\n",(0,o.jsx)(t.p,{children:"The robot will have a microcontroller board like Pico w which support Wi-Fi and is connected to a Wi-Fi module or module with the Wi-Fi function integrated, that allows the car to connect to a Wi-Fi network and receive data from a smartphone. I am going to use the pico w microcontroller, a motor driver module, 2 motors, 4 rechargeable batteries but only 2 used simutaneous,a battery charger and a battery holder, the skelet of the car(2 big wheels + a small one for the front,the platform) , jumper wires and also a switch so that the battery can last longer. I will also design a web interface to make possible the automatic movement of the car. For the assembly part i will use screws for the skeleton of the care and fludor for the components that need to be glued."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Pico W Microcontroller\nThe Pico W microcontroller is the central processing unit of the robot car, responsible for executing the program logic, controlling the motors and sensors, and managing the Wi-Fi connectivity."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"2.The kit\nThe kit consists in 2 wheels,1 small wheel, 2 motors and platform. The platform is the base for the other components, keeping them togheter. The 2 big wheels works with the 2 motors, only front + back directions and also with the Driver Motor which i will describe on the next point. The small wheel has the role to move the car on the horizontal axis. Motor speed and direction control are essential for maneuvering the robot car."}),"\n",(0,o.jsx)(t.p,{children:"3.Motors\nThe motors consists of many winding of copper wire inside a magnetic field. These motors require more power than a microcontroller can supply so you cannot drive or control motors using a microcontroller directly. This is because the microcontroller boards work on low voltage and consumes less power and their Input/Output pins cannot supply enough current to drive your motors. If you try to connect a motor directly to a microcontroller board input/output pin, your microcontroller board may stop working. To get rid of this problem you must use a proper motor driver to control the direction as well as the speed of rotation."}),"\n",(0,o.jsx)(t.p,{children:"4.L298N Motor Driver Module\nThis dual bidirectional motor driver, is based on the very popular L298 Dual H-Bridge Motor Driver Integrated Circuit. The circuit will allow you to easily and independently control two motors of up to 2A each in both directions. It is ideal for robotic applications and well suited for connection to a microcontroller requiring just a couple of control lines per motor."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"L298N",src:r(91884).c+"",width:"674",height:"555"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"L298N",src:r(91568).c+"",width:"750",height:"500"})}),"\n",(0,o.jsx)(t.p,{children:"There are two types of control pins found at the bottom right side of the module. One type controls the speed and the other type controls the direction of the motor.\nThe speed control pins labelled ENA and ENB on the module, control the speed of the dc motor and turn it ON and OFF. If ENA is in a HIGH state, the motor is enabled and if it is in a LOW state then the motor is off.\nThe direction control pins are the four input pins (IN1, IN2, IN3, IN4) on the module. Whenever one of the inputs is in a HIGH state (5V) then the motor will spin. Otherwise, when both the inputs are LOW (ground) state or both are in HIGH state then the motor stops. In order for motor A to spin forward, IN1 should be LOW and IN2 should be HIGH. For backwards motion, IN1 should be HIGH and IN2 should be LOW. Motor B is also controlled in a similar way."}),"\n",(0,o.jsx)(t.p,{children:"5.Battery holder for 2\nUsing a battery holder in a robot car helps with: Securing a Power Source: A battery holder ensures that the power source, typically a battery, is securely mounted within the robot car. This prevents the battery from moving around or disconnecting during movement, which could lead to power interruptions and unexpected behavior; Protection: It provides a protective enclosure for the battery, shielding it from damage due to impact or environmental factors such as moisture or dust; this helps to prolong the life of the battery and ensures reliable power delivery to the robot car's components; Convenience: A battery holder simplifies the process of installing and replacing the battery in the robot car; it typically features slots or clips designed to securely hold the battery in place, making it easy to insert and remove as needed; Organization: It helps to organize the wiring and components within the robot car, keeping everything neat and tidy; This can make it easier to troubleshoot and perform maintenance on the robot car's electrical system. Overall, using a battery holder in a robot car helps to ensure reliable power supply, protect the battery from damage, and simplify maintenance and installation tasks."}),"\n",(0,o.jsx)(t.p,{children:"6.Battery Charger for 2\nPutting a battery charger on a robot car is essential for several reasons: Battery Maintenance: A battery charger ensures that the battery in the robot car remains charged and ready for use. Regular charging helps maintain the battery's capacity and prolong its overall lifespan; Convenience: Having a battery charger allows you to easily recharge the battery whenever necessary, without the need to replace it with a fresh one. This convenience saves time and effort, especially during testing and development phases where the robot car may be used frequently; Optimal Performance: A fully charged battery ensures optimal performance of the robot car's motors and other electronic components. Low battery levels can lead to reduced motor power, slower response times, and inaccurate sensor readings, affecting the overall performance and reliability of the robot car; Safety: Properly charging the battery using a dedicated charger helps prevent overcharging, which can damage the battery and pose safety risks such as overheating or even fire hazards. Choosing to power the circuit with rechargable batteries is safer than powering with a charging circuit to prevent overheating the components. In summary, using a battery charger ensures the reliable operation, optimal performance, and safety of the battery-powered robot car, making it an essential component of the overall system."}),"\n",(0,o.jsx)(t.p,{children:"7.Battery"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Batteries",src:r(34156).c+"",width:"739",height:"221"})}),"\n",(0,o.jsx)(t.h3,{id:"schematics",children:"Schematics"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"Kicadscheme",src:r(1480).c+"",width:"835",height:"594"}),"\n",(0,o.jsx)(t.img,{alt:"PCB",src:r(74516).c+"",width:"890",height:"563"}),"\n",(0,o.jsx)(t.img,{alt:"3D VIEW",src:r(11492).c+"",width:"1920",height:"979"}),"\n",(0,o.jsx)(t.img,{alt:"3D VIEW",src:r(10048).c+"",width:"1920",height:"1008"})]}),"\n",(0,o.jsx)(t.h3,{id:"block-diagram",children:"Block diagram"}),"\n",(0,o.jsx)(t.p,{children:"UPDATE:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Block_diagram",src:r(16560).c+"",width:"1416",height:"518"})}),"\n",(0,o.jsx)(t.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Device"}),(0,o.jsx)(t.th,{children:"Usage"}),(0,o.jsx)(t.th,{children:"Price"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico W"})}),(0,o.jsx)(t.td,{children:"The microcontroller"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"2 wheels,1 small wheel, 2 motors, platform"}),(0,o.jsx)(t.td,{children:"The kit ; is second hand i dont have a link"}),(0,o.jsx)(t.td,{children:"15 RON"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Battery Charger for 2"}),(0,o.jsx)(t.td,{children:"To recharge the used batteries"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/incarcatoare-de-baterii/11021-incarcator-1865026650-dublu-cu-cablu-usb-pentru-baterii-cu-litiu-ion.html",children:"24,99 RON"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"4 x Batteries"}),(0,o.jsx)(t.td,{children:"The power source of the whole project"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"https://www.dedeman.ro/ro/acumulator-li-ion-well-18650-3-7v-2200-mah/p/1050265",children:"68 RON"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Battery holder for 2"}),(0,o.jsx)(t.td,{children:"ensure reliable power supply"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/suporturi-de-baterii/941-suport-de-baterii-2-x-18650.html",children:"4.99 RON"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"L298N Motor Driver Module"}),(0,o.jsx)(t.td,{children:"directions controlling"}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/drivere-de-motoare-cu-perii/145-driver-de-motoare-dual-l298n.html",children:"20 RON"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Jumper wires"}),(0,o.jsx)(t.td,{children:"To ensure the connections between components"}),(0,o.jsx)(t.td,{children:"already have"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"software",children:"Software"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Library"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Usage"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"https://github.com/embassy-rs/embassy",children:"Embassy-rs"})}),(0,o.jsx)(t.td,{children:"Motor driver implementation"}),(0,o.jsx)(t.td,{children:"Modern embedded framework, using Rust and async."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"https://docs.rs/l298n/latest/l298n/struct.L298N.html",children:"L298N"})}),(0,o.jsx)(t.td,{children:"Motor driver implementation"}),(0,o.jsx)(t.td,{children:"Used for speed and direction control"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"https://docs.embassy.dev/embassy-nrf/git/nrf52840/pwm/index.html",children:"PWM"})}),(0,o.jsx)(t.td,{children:"PWM"}),(0,o.jsx)(t.td,{children:"Used to control the intensity of the sound of the buzzer"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"https://docs.embassy.dev/cyw43/git/default/index.html",children:"cyw43"})}),(0,o.jsx)(t.td,{children:"Rust driver for the CYW43439 wifi chip"}),(0,o.jsx)(t.td,{children:"Used for the connection to an existing network and create a server"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.instructables.com/Wifi-Controlled-Robot-Using-Raspberry-Pi/",children:"Robot car1"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://diyprojectslab.com/raspberry-pi-pico-w-remote-controlled-car/",children:"Robot car2"})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},96568:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/Above_car-f8b95a3fe878fb47ed646e11606f4ffa.jpg"},16560:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/BLOCK_DIAGRAM-ed41775f33f6fa24695bd5293a2161b0.png"},61020:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/BUZZER-b2f8f8c8be71536ce22ba7728c1925fa.jpg"},74356:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/Below-0e13472bdf5c514f07a1c5cc1ed78257.jpg"},32852:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/Circ1-a823f29aab3397d92011767ec8fbfd03.jpg"},14220:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/Driver-24e878a523efae66a3e23e60437820bd.jpg"},39068:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/Driver1-cc1f6ac3d12970beaaadda85604fbbd5.jpg"},1480:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/Kicad-scheme-7dfc2729f838dcf64dcd0021473e409f.png"},74516:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/PCB-99420aa89e64eeedf067dcb5ea4ad591.png"},11492:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/PCB1-6814be3fdc29ddaf09e206a9f1bfd978.png"},10048:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/PCB2-dfbce86ac550485fb495c2e19f885298.png"},34156:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/SS-AM-9f9729f7ae469ab1c21af7fc604444e1.png"},91884:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/image-1-8e7f51d2c3a9af2a806feeae55a66baa.png"},91568:(e,t,r)=>{r.d(t,{c:()=>o});const o=r.p+"assets/images/image-2-a16026bcc2480978b70ba4923d861b61.png"},4552:(e,t,r)=>{r.d(t,{I:()=>s,M:()=>a});var o=r(11504);const i={},n=o.createContext(i);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);