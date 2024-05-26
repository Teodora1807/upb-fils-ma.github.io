"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1148],{65072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var s=r(17624),i=r(4552);const n={},a="Blackjack Game",c={id:"project/2024/cristian.iacobescu/index",title:"Blackjack Game",description:"Using the Raspberry Pi Pico W to automate the logic for a Blackjack game",source:"@site/docs/project/2024/cristian.iacobescu/index.md",sourceDirName:"project/2024/cristian.iacobescu",slug:"/project/2024/cristian.iacobescu/",permalink:"/docs/project/2024/cristian.iacobescu/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/cristian.iacobescu/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Drawbridge/Ramp",permalink:"/docs/project/2024/costin.ciuraru/"},next:{title:"Radar Secure System",permalink:"/docs/project/2024/cristiana.precup/"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"blackjack-game",children:"Blackjack Game"}),"\n",(0,s.jsx)(t.p,{children:"Using the Raspberry Pi Pico W to automate the logic for a Blackjack game"}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Author"}),": Iacobescu Cristian Mario ",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"GitHub Project Link"}),": ",(0,s.jsx)(t.a,{href:"https://github.com/UPB-FILS-MA/project-MarioMario7.git",children:"https://github.com/UPB-FILS-MA/project-MarioMario7.git"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This project facilitates a Blackjack game that allows the 'dealer' to use a barcode scanner to input the cards. The project will involve programming the Raspberry Pi Pico W to manage the game logic, display the game interface, and interact with the barcode scanner to read the cards. There are also different behaviors that correspond to different events and game states."}),"\n",(0,s.jsx)(t.p,{children:"The choices for the players will be made using a simple web interface, and communication between the server and the Pico-side logic will be established via socket communication, utilizing the Pico's integrated Wi-Fi module."}),"\n",(0,s.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(t.p,{children:"What pushed me to choose this project was that, while observing a similar approach bring used to facilitate online Blackjack games, I was struck by the innate simplicity of the setup and the use of relatively inexpensive parts being used by multi-million-dollar companies worldwide on a day-to-day basis."}),"\n",(0,s.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Raspberry Pi Pico:"})," Used for handling the game logic, controlling the scanner, LEDs, LCD and buzzer. Also for communicating with the server trough the sockets."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Passive Buzzer"})," : Reacts to varying game events."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"RGB LEDs"})," : Reacts to game events / Used to show where the next card should be placed (Player/Dealer)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Barcode Scanner Module(+ RS232 -> TTL Adaptor)"})," : Barcodes are scanned from the cards and are then used for the game logic, if the serial sent matches one of the ones stored in the dictionary and if it wasn't previously scanned in the current round (if any of the conditions are false, it will create a placeholder card object and suspend the game until a rescan is done successfully). The adaptor is needed as the Raspberry Pi Pico W doesn't support RS232 communication. We will use Transistor-To-Transistor Logic communication through the Pico's pins that support UART communication."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Linear Potentiometer + Push Button"}),": The potentiometer is used for choosing the bet for the new round, and the push button is used to confirm the bet and start the round."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"16x02 LCD"}),": Used to display relevant information for pre/current/post game states."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Website Interface"})," : Allows the user to select the choices for the game (Insurance, Hit, Stand, Double Down, Split). Communicating with the Pico trough the sockets of the web server to send/recieve information relevant to the current round. The server will run on a local machine, no connections other than the Pico are inteded."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Archictecture Diagram",src:r(56456).c+"",width:"570",height:"467"})}),"\n",(0,s.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,s.jsx)(t.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,s.jsx)(t.p,{children:"This period marks the start of the project, where the task at hand was to define a clear outline and path going forward. The LCD was the first major component to be tested."}),"\n",(0,s.jsx)(t.p,{children:"After thoroughly reading the datasheet, I figured out what commands to send for each instruction using the I2C module. However, as I would soon find out, the commands after turning the display on, making the cursor appear on the screen, and making the cursor blink were not doing anything. This led me to try to send the commands 4 bits at a time instead of 8, but after that did not work, I pinned the problem down to a timing issue for the commands. After a lengthy process of trial and error, I still could not determine the correct timing needed for the commands that wrote characters to the screen. This, of course, led to using a Rust library to operate the LCD, which massively simplified the process for anything related to the display."}),"\n",(0,s.jsx)(t.p,{children:"Next on the list was choosing the structure of the Blackjack game logic. The paradigm that made the most sense for this project was Object-Oriented Programming, as its rules and fundamental concepts fit a Blackjack game perfectly. A deck is comprised of cards that have a suit and a rank, which are used to add to the player\u2019s or dealer's score, then, this score is then used to determine the winner of a round, etc."}),"\n",(0,s.jsx)(t.p,{children:"With this objective in mind, I set out to create the mold for the Pico-side Blackjack logic. This was done quite quickly and allowed me to move on to the next part of the project, and the most important: the scanner, which will be taken care of in the next week or so."}),"\n",(0,s.jsx)(t.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,s.jsxs)(t.p,{children:["Up until this point, I had completed the basic structure of the blackjack game on the software side and tested the LCD. During this period, my main goal was setting up the scanner module and writing the code needed to operate it. At first, the setup seemed to be more difficult than expected: the ",(0,s.jsx)(t.code,{children:"blocking_read"})," function was returning a BREAK error."]}),"\n",(0,s.jsx)(t.p,{children:"After some research, I quickly found out that this error signifies that the line stays in a low state for longer than expected, which led me to find out that the baud rate in the default UART config did not match that of my scanner. Embassy uses the default baud rate of 115200 and the scanner uses 9600. This issue was solved relatively quickly and the setup was ready to go since the scanner uses 8 data bits, one stop bit, and no parity (same as the default config in Embassy)."}),"\n",(0,s.jsx)(t.p,{children:"After this, a lot more information was revealed about the scanner (which unfortunately was not available in the datasheet as the datasheet itself doesn't exist): it turns itself off automatically after approximately 4 seconds as a form of protection, as it heats up very quickly, it uses UTF-8 encoding, the stop bit is 13 (which in ASCII is CARRIAGE_RETURN - represents the action of moving the cursor or print head back to the beginning of a line). This all led to a successful integration of the scanner into the project and after finishing the rest of the small hardware setup, only the blackjack logic and the socket communication + website are left for the upcoming weeks."}),"\n",(0,s.jsx)(t.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,s.jsx)(t.h2,{id:"hardware",children:"Hardware"}),"\n",(0,s.jsx)(t.p,{children:"We will use a Raspberry Pi Pico W as the microcontroller. A potentiometer is used for getting the player's 'bet', and a push button used to confirm the bet (an RC Filter will be used to ensure no switch bounce happens)."}),"\n",(0,s.jsx)(t.p,{children:"The main piece of hardware for this project is the barcode scanner, which scans the barcodes from the playing cards and facilitates a way to connect the real-life events to the microcontroller for handling the logic behind the game. It sends the barcodes encoded using the UTF-8 encoding standard."}),"\n",(0,s.jsx)(t.p,{children:"An adaptor (RS232 -> TTL) is needed for the scanner since it uses RS232 communication, which is not supported by the Pico. We also use an LCD to display relevant information, and the RGB LEDs and buzzer to react to game events."}),"\n",(0,s.jsx)(t.p,{children:"Bird's Eye View"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"BEV Project",src:r(48852).c+"",width:"1600",height:"1200"})}),"\n",(0,s.jsx)(t.p,{children:"Scanner"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Scanner",src:r(53292).c+"",width:"1600",height:"1200"})}),"\n",(0,s.jsx)(t.p,{children:"LCD"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"LCD",src:r(12912).c+"",width:"1200",height:"1600"})}),"\n",(0,s.jsx)(t.p,{children:"Buzzer"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Buzzer",src:r(4132).c+"",width:"1200",height:"1600"})}),"\n",(0,s.jsx)(t.p,{children:"Potentiometer"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Potentiometer",src:r(4144).c+"",width:"1600",height:"1200"})}),"\n",(0,s.jsx)(t.p,{children:"Push Button with physical pull-down resistor"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Push Button",src:r(35800).c+"",width:"1600",height:"1200"})}),"\n",(0,s.jsx)(t.p,{children:"Resistive Capacitive Filter"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"RC",src:r(80476).c+"",width:"1600",height:"1200"})}),"\n",(0,s.jsx)(t.p,{children:"RGB LEDs"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"rgb",src:r(41764).c+"",width:"1600",height:"1200"})}),"\n",(0,s.jsx)(t.p,{children:"Pico Close-Up"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Pico",src:r(46260).c+"",width:"1200",height:"1600"})}),"\n",(0,s.jsx)(t.h3,{id:"schematics",children:"Schematics"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"KiCAD Schematic",src:r(10380).c+"",width:"1607",height:"864"})}),"\n",(0,s.jsx)(t.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Device"}),(0,s.jsx)(t.th,{children:"Usage"}),(0,s.jsx)(t.th,{children:"Price"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Raspberry Pi Pico W"})}),(0,s.jsx)(t.td,{children:"The microcontroller"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Breadboard830"}),(0,s.jsx)(t.td,{children:"The main breadboard"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/163-kit-breadboard830-65xfire-jumper-sursa-alimentare-335v.html",children:"10 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Linear Potentiometer"}),(0,s.jsx)(t.td,{children:"Set the bet"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/193-potentiometru-10k.html#/96-valoare_rezistenta-10k",children:"2.5 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Push Button"}),(0,s.jsx)(t.td,{children:"Confirm Bet"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/home/97-buton-mic-push-button-trough-hole.html?search_query=push+button&results=30",children:"0.50 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/index.php?controller=attachment&id_attachment=235",children:"RGB LED"})}),(0,s.jsx)(t.td,{children:"Display player turn and game state"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/271-led-tricolor-cu-catod-comun.html",children:"2.50 x 4 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Barcode Scanner"}),(0,s.jsx)(t.td,{children:"Scan the QR Codes on the cards"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/home/2815-modul-scanner-coduri-de-bare-e2100-rs232.html",children:"80 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/index.php?controller=attachment&id_attachment=379",children:"RS232 -> TTL Adaptor"})}),(0,s.jsx)(t.td,{children:"Connect the scanner module to the pico"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/1852-modul-fpc-groundstudio.html#/431-numar_pini-12",children:"6 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Buzzer Module (Passive)"}),(0,s.jsx)(t.td,{children:"React to game events"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/home/89-modul-buzzer.html#/63-tip-pasiv",children:"4 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mini Breadboard"}),(0,s.jsx)(t.td,{children:"Breadboard for the LEDs"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/35-breadboard-170-puncte.html#/8-culoare-alb",children:"3 x 4 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/index.php?controller=attachment&id_attachment=53",children:"1602 LCD Screen with I2C Interface"})}),(0,s.jsx)(t.td,{children:"Display game details"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/lcds/62-1602-lcd-with-i2c-interface-and-yellow-green-backlight.html",children:"15 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Capacitor (0.1 uF)"}),(0,s.jsx)(t.td,{children:"Debounce button to avoid unwanted input"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/home/2708-condensator-electrolitic-alege-valoarea.html?gad_source=1&gclid=CjwKCAjw57exBhAsEiwAaIxaZpg3s-VVKIPilWtcM-0Po90QrGbxYJy50oCzWjlC8kihEiA7bCG7GBoCudMQAvD_BwE",children:"0.25 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Jumper wires"}),(0,s.jsx)(t.td,{children:"Connect components"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/28-65-x-jumper-wires.html?gad_source=1&gclid=Cj0KCQjwgJyyBhCGARIsAK8LVLPhrybjljA9A3xgsd4vbqVUmO--VsbFIENcQA4Tjibbs8TRelUL_48aAqHuEALw_wcB",children:"20 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Male-Female Cables"}),(0,s.jsx)(t.td,{children:"Connect components"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/home/226-10-x-fire-dupont-mama-tata-20cm.html?gad_source=1&gclid=Cj0KCQjwgJyyBhCGARIsAK8LVLNSME8SlCdnLyn600SAGHKZJEvZYQEyryAc1VL_2S_HwYl7dAun4FYaArNrEALw_wcB",children:"5 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Female-Female Cables"}),(0,s.jsx)(t.td,{children:"Connect components"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.tme.eu/ro/details/mikroe-511-kpl/accesorii-pentru-kituri-de-dezvoltare/mikroe/wire-jumper-female-to-female-10pcs/?brutto=1&currency=RON&gad_source=1&gclid=Cj0KCQjwgJyyBhCGARIsAK8LVLOw0Q8iHwvKr86T1EtKf0cCaMHjvixeEiZcaa4Qs0aYY1qpzcNQTgIaAl5bEALw_wcB",children:"15 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resistors"}),(0,s.jsx)(t.td,{children:"Regulates voltage for components"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.sigmanortec.ro/kit-rezistori-30-valori-20-bucati?gad_source=1&gclid=Cj0KCQjwgJyyBhCGARIsAK8LVLN9VAEYdEySVc1yxKakLE6hFED_pJPGWr9zKog2hp0IfI0_-HhANn0aAoP5EALw_wcB",children:"22 RON"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"software",children:"Software"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Library"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Usage"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.rs/heapless/0.8.0/heapless/",children:"heapless"})}),(0,s.jsx)(t.td,{children:"Data structure library"}),(0,s.jsx)(t.td,{children:"Used for String vectors"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.embassy.dev/embassy-rp/git/rp2040/index.html",children:"embassy_rp"})}),(0,s.jsx)(t.td,{children:"Embassy Hardware Abstraction Layer (HAL) for the Raspberry Pi RP2040 microcontroller"}),(0,s.jsx)(t.td,{children:"Used to program the Pico"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.embassy.dev/embassy-sync/git/default/index.html",children:"embassy_sync"})}),(0,s.jsx)(t.td,{children:"Synchronization primitives and data structures with async support"}),(0,s.jsx)(t.td,{children:"Used for communicating through different tasks"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://crates.io/crates/embassy-executor",children:"embassy-executor"})}),(0,s.jsx)(t.td,{children:"An async/await executor designed for embedded usage"}),(0,s.jsx)(t.td,{children:"Used for task execution"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.rs/ag-lcd/0.2.0/ag_lcd//",children:"ag_lcd"})}),(0,s.jsx)(t.td,{children:"Library that allows developers to control a HITACHI HD44780 LCD screen with one or two 16-character lines"}),(0,s.jsx)(t.td,{children:"Used to operate the LCD"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.rs/port-expander/0.6.1/port_expander/",children:"port_expander"})}),(0,s.jsx)(t.td,{children:"Abstraction for I2C port-expanders"}),(0,s.jsx)(t.td,{children:"Used for handling the Pcf8574 I/O Expander"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://meliorgames.com/gambling/live-dealer-online-casinos-recognize-cards/",children:"How do online BJ games work ?"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://how2electronics.com/barcode-qr-code-reader-using-arduino-qr-scanner-module/",children:"Barcode Scanner Project"}),"\r\n..."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},10380:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/FINAL_KICAD-d33a84251dc19fca1f8539f6b85d765e.PNG"},56456:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/architecture-236bb1e9bc001587fb1f77c3061d8482.png"},80476:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/RC-15ce0a920f0edb1049ec96e025a5d5e9.jpg"},48852:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/bev-210f350fd2fb302b6661471087dfcfbb.jpg"},4132:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/buzzer-2c38eb07879ab6bd405d5719ec82190e.jpg"},12912:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/lcd-1b2b5610f0af9fbb2f63dd82134ea8a3.jpg"},41764:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/leds-1958f76885361f8faa8a5e1344734ccf.jpg"},46260:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/pico-7611b147df757157647f6740f06cfc11.jpg"},4144:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/pot-f13e045f488fdc0b063d421146a31e18.jpg"},35800:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/push_pull_down-55039f375cac09b95fb6534c3acb4f51.jpg"},53292:(e,t,r)=>{r.d(t,{c:()=>s});const s=r.p+"assets/images/scanner-03565db9addbeb5219c6c72208091ed2.jpg"},4552:(e,t,r)=>{r.d(t,{I:()=>c,M:()=>a});var s=r(11504);const i={},n=s.createContext(i);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);