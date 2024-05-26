"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2258],{9708:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var i=t(17624),s=t(4552);const n={},o="Smart Door Lock System",a={id:"project/2024/maria.nistorescu/index",title:"Smart Door Lock System",description:"Smart door lock: Keyless security for your space.",source:"@site/docs/project/2024/maria.nistorescu/index.md",sourceDirName:"project/2024/maria.nistorescu",slug:"/project/2024/maria.nistorescu/",permalink:"/docs/project/2024/maria.nistorescu/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/maria.nistorescu/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ferrari Line Follower and Obstacle Avoider Car",permalink:"/docs/project/2024/maria.ionescu/"},next:{title:"Snakes and Apples",permalink:"/docs/project/2024/matei.radu2105/"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function h(e){const r={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"smart-door-lock-system",children:"Smart Door Lock System"}),"\n",(0,i.jsx)(r.p,{children:"Smart door lock: Keyless security for your space."}),"\n",(0,i.jsxs)(r.p,{children:["Author: Nistorescu Maria-Lorena\nGitHub Project Link*: (",(0,i.jsx)(r.a,{href:"https://github.com/LolitaMary/SmartDoorLockSystem",children:"https://github.com/LolitaMary/SmartDoorLockSystem"}),")"]}),"\n",(0,i.jsx)(r.p,{children:":::"}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"The project is about a smart door lock system using Raspberry Pi Pico W.\nThe door can be unlocked in 3 ways: RFID MODULE, SENSORS( knock knock_ knock knock ), WEB APPLICATION ( turn on/ off).\nI intend to make a function that sends me back an e-mail which says how many times the door was unlocked in a day. Incredible, right?"}),"\n",(0,i.jsx)(r.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(r.p,{children:"Why did I choose this project?"}),"\n",(0,i.jsx)(r.p,{children:"Well, I went in a trip to Italy 2 months ago and I stayed to an airbnb that had a smart door lock system with password."}),"\n",(0,i.jsx)(r.p,{children:"I knew about the project at school, and at that moment seemed very interesting to me the idea of a digital lock.\nSo I wanted to implement it and, maybe use it every day life."}),"\n",(0,i.jsx)(r.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/assets/120091173/9e9a5397-384d-43d5-ad6c-95f6c4b8de39",alt:"SDOOR"})}),"\n",(0,i.jsx)(r.h2,{id:"log",children:"Log"}),"\n",(0,i.jsx)(r.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,i.jsx)(r.p,{children:"In this week, I tried to find more resources regarding to the mobile application I intend to make in order to unlock the door."}),"\n",(0,i.jsx)(r.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,i.jsx)(r.p,{children:"In this week, I finally finished the hardware part, including the kicad schematics."}),"\n",(0,i.jsx)(r.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,i.jsx)(r.h2,{id:"hardware",children:"Hardware"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"Raspberry Pi Pico W (microcontroller):"})," The main control unit for the smart door lock system, responsible for processing data, running the necessary functions, and communicating with other components."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"RFID MODULE (for unlocking the door):"})," Reads RFID tags/cards to allow authorized access through the smart door lock system."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"TTP223:"})," Capacitive touch sensor used for touch-based inputs, such as entering a code to unlock the door."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"2N2222:"})," NPN transistor that may be used for switching purposes in the circuit, such as controlling the relay module or other components."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"BUZZER 5V:"})," Emits an audible alert, like a beep or chime, to provide feedback when the door is unlocked or in case of an error."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"RELAY MODULE:"})," Controls the electronic door lock mechanism, allowing the microcontroller to trigger the locking or unlocking of the door."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"ELECTRONIC DOOR LOCK:"})," The physical locking mechanism that secures the door, controlled by the relay module based on input from the microcontroller."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"Power Supply 12V:"})," Supplies the necessary power to the components in the system, ensuring they function properly."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"Module DC-DC Step Down LM2596S  (connected to power supply):"})," Regulates the 12V power supply to provide lower voltage levels required by certain components in the system, such as the Raspberry Pi Pico W."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"schematics",children:"Schematics"}),"\n",(0,i.jsx)(r.p,{children:"Shortly, I am going to admit that the KICAD schematics took me with all the coffee breaks included, somewehere around 16-20h :) ;\nAlso, I tried to make the schematics clearer and maybe, help me to notice, if u notice some other mistakes."}),"\n",(0,i.jsx)(r.p,{children:"Legend of the KICAD schematics:\nU1  represents the RFID;\nU2  represents the SENSOR TOUCH;\nU4  represents the LM5296S;\nU6  represents the POWER SUPPLY;\nU7  represents the LOCK;\nU8  represents the RELAY MODULE;"}),"\n",(0,i.jsx)(r.p,{children:"Q1 is NPN transistor 2N2222."}),"\n",(0,i.jsx)(r.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,i.jsx)(r.table,{children:(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Device"}),(0,i.jsx)(r.th,{children:"Usage"}),(0,i.jsx)(r.th,{children:"Price"})]})})}),"\n",(0,i.jsxs)(r.p,{children:["| ",(0,i.jsx)(r.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico W"})," | The microcontroller | ",(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})," |\n| ",(0,i.jsx)(r.a,{href:"https://cleste.ro/incuietoare-electrica-12v.html",children:"Electronic Door Lock 12V"})," | [30,74 RON]\n| ",(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/cautare?controller=search&orderby=position&orderway=desc&search_query=Modul+RFID+RC522+%28similar+cu+MFRC522%29&submit_search=",children:"Module RFID RC522,similary with MFRC522"}),"| [  9.99 RON ] |\n| ",(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/audio-buzzere/634-buzzer-pasiv-de-5-v.html?search_query=Buzzer+Pasiv+de+5+V%09+%09&results=15",children:"Buzzer Pasive 5 V"}),"| [ 1,40 RON ] |\n| ",(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/fire-fire-mufate/881-set-fire-mama-mama-40p-15-cm.html?search_query=%09Fire+Colorate+Mama-Mama+%2840p%2C+30+cm%29+%09&results=10",children:"Coloured wires mom-mom (40p, 30 cm)"})," | [ 6.98RON ] |\n| ",(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/fire-fire-mufate/884-set-fire-tata-tata-40p-10-cm.html?search_query=%09Fire+Colorate+Tata-Tata+%2840p%2C+15+cm%29&results=10",children:"Coloured wires father-father (40p, 15 cm)"})," | [ 6.99 RON  ] |\n| ",(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/componente-electronice-rezistoare/858-rezistor-025w-18k.html?search_query=rezistor&results=120",children:"Resistor 0.25W 22K\u03a9"})," | [  0,10 RON ] |\n| ",(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/componente-electronice-tranzistoare/935-tranzistor-s9013-npn-50-pcs-set.html?search_query=Tranzistor+NPN+2n2222+TO-92&results=9",children:"Transistor NPN 2n2222 TO-92"})," | [ 0,34 RON]\n| ",(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/electronica-de-putere-module-cu-releu/478-modul-releu-cu-4-canale-albastru.html?search_query=Modul+cu+4+Relee%2C+Albastru&results=3",children:"Module with 4 Relays, Blue"})," | [ 13,88RON]\n| ",(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/prototipare-breadboard-uri/8-breadboard-830-points.html?search_query=Breadboard+HQ+%28830+Puncte%29&results=12",children:"Breadboard HQ (830 Puncte)"}),"|  [ 9.98 RON ] |\n| ",(0,i.jsx)(r.a,{href:"https://www.optimusdigital.ro/ro/cautare?controller=search&orderby=position&orderway=desc&search_query=Cablaj+de+test+50+x+70+mm&submit_search=",children:"Cablaj de test 50 x 70 mm"})," | [ 2,49 RON  ]|\n| ",(0,i.jsx)(r.a,{href:"https://www.emag.ro/buton-cu-o-singura-atingere-ttp223-cu-pini-3-v-multicolor-ttp223-mod-1ch/pd/DC6798MBM/",children:"Button with one touch, TTP223, with pins, 3 V, MulticoloR"}),"| IT IS USED FOR UNLOCKING THE DOOR| [18,33 RON] shipping more expensive than the component |\n| [Module DC-DC Step Down LM2596S]|[13 RON]\n| [Power Supply]|[16RON]"]}),"\n",(0,i.jsx)(r.h2,{id:"software",children:"Software"}),"\n",(0,i.jsx)(r.table,{children:(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Library"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Usage"})]})})}),"\n",(0,i.jsx)(r.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://www.youtube.com/watch?v=LfptYHFc6xU",children:"link"}),"| The main idea source|"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://youtube.com/shorts/94idGywsd70?si=_esn9RnLSelw9FPq",children:"link"}),"| RFID DOOR LOCK|"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://www.youtube.com/watch?v=VP0qLUOdvuU",children:"link"}),"| DOOR LOCK USING BLYNK APP TUTORIAL|"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://youtu.be/RAbTdeLU2JQ?si=CxUgyN9DnoZCcLRv",children:"link"}),"| LM2596S tutorial building|"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"..."})]})}function d(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4552:(e,r,t)=>{t.d(r,{I:()=>a,M:()=>o});var i=t(11504);const s={},n=i.createContext(s);function o(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);