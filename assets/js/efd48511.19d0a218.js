"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7960],{22480:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=r(17624),n=r(4552);const t={},c="RustPlayer",l={id:"project/2024/Ruxandra.popa/index",title:"RustPlayer",description:"This project rekindles the nostalgic charm of physically selecting music with buttons, delivering a classic audio experience through an intuitive MP3 player.",source:"@site/docs/project/2024/Ruxandra.popa/index.md",sourceDirName:"project/2024/Ruxandra.popa",slug:"/project/2024/Ruxandra.popa/",permalink:"/docs/project/2024/Ruxandra.popa/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/Ruxandra.popa/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Automated Parking System",permalink:"/docs/project/2024/Layla.el/"},next:{title:"Object Detection and Alert System",permalink:"/docs/project/2024/abdul.mirghani/"}},d={},a=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Schematic Diagram",id:"schematic-diagram",level:3},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function o(e){const i={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"rustplayer",children:"RustPlayer"}),"\n",(0,s.jsx)(i.p,{children:"This project rekindles the nostalgic charm of physically selecting music with buttons, delivering a classic audio experience through an intuitive MP3 player."}),"\n",(0,s.jsxs)(i.admonition,{type:"info",children:[(0,s.jsx)(i.mdxAdmonitionTitle,{}),(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Author"}),": Popa Ruxandra-Georgiana ",(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.strong,{children:"GitHub Project Link"}),": (",(0,s.jsx)(i.a,{href:"https://github.com/ruxi22/RustPlayer",children:"https://github.com/ruxi22/RustPlayer"}),")"]})]}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"RustPlayer is a custom-built MP3 player utilizing a Raspberry Pi Pico W to allow users to play music directly from a microSD card, controlled through a simple interface of buttons and an OLED display. Some laboratories I found relevent for the project I am implementing, are:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Lab 3: Interfacing SPI devices"}),"\n",(0,s.jsx)(i.li,{children:"Lab 5: I2S Audio"}),"\n",(0,s.jsx)(i.li,{children:"Lab 7: Advanced I/O Interfaces"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(i.p,{children:"My passion for music and technology inspired me to want to create the RustPlayer. This project is a perfect opportunity to apply my technical skills in a meaningful way, combining my love for tunes with the challenge of programming and hardware design. I'm excited to develop a device that not only plays music but also reconnects people with the tactile joy of manually choosing songs\u2014something that's lost in today\u2019s streaming era. Building the RustPlayer is also an excellent opportunity to deepen my understanding of embedded systems and user interface design, which are crucial in my studies and future career in technology."}),"\n",(0,s.jsx)(i.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(i.h3,{id:"schematic-diagram",children:"Schematic Diagram"}),"\n",(0,s.jsx)(i.p,{children:"A schematic diagram is provided to illustrate the connections and layout of the components."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Schematic diagram",src:r(56156).c+"",width:"1728",height:"1080"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Raspberry Pi Pico W"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Role"}),": Acts as the central controller for all functions."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Connections"}),":","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Interfaces with the OLED Display, MicroSD Card Module, Audio Amplifier, LEDs and Buttons."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"OLED Display"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Interface"}),": I2C"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Connections"}),":","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"SDA"})," (Serial Data Line) to GPIO4 of Raspberry Pi Pico W"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"SCL"})," (Serial Clock Line) to GPIO5 of Raspberry Pi Pico W"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Role"}),": Displays user interface, track information, and playback status."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Buttons"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Interface"}),": GPIO (with interrupts)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Connections"}),":","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Connected to various GPIO pins for different controls (e.g., play/pause, next, previous)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Role"}),": Allow user input for controlling playback and settings."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"LEDs"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Interface"}),": PWM capable for brightness control"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Role"}),": Provide visual feedback during operation."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Audio Amplifier"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Interface"}),": I2S"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Role"}),": Amplifies the audio signal for output to the speaker."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Speaker"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Role"}),": Outputs audio signal received from the Audio Amplifier."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"MicroSD Card Module"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Interface"}),": SPI"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Connections"}),":","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"SCK"})," (Serial Clock) to GPIO24 of Raspberry Pi Pico W"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"MOSI"})," (Master Out Slave In) to GPIO25 of Raspberry Pi Pico W"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"MISO"})," (Master In Slave Out) to GPIO21 of Raspberry Pi Pico W"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"CS"})," (Chip Select) to GPIO22 of Raspberry Pi Pico W"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"log",children:"Log"}),"\n",(0,s.jsx)(i.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,s.jsx)(i.p,{children:"The schematic for the project has been successfully created using KiCad. This schematic includes all necessary components and connections for the electronic circuit."}),"\n",(0,s.jsx)(i.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,s.jsx)(i.p,{children:"A 3D model of the project enclosure has been designed using Tinkercad. The box is tailored to fit all components securely and includes cutouts for the buttons, display, RGB led and speaker."}),"\n",(0,s.jsx)(i.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,s.jsx)(i.h2,{id:"hardware",children:"Hardware"}),"\n",(0,s.jsx)(i.p,{children:"The Raspberry Pi Pico W serves as the central microcontroller for the RustPlayer project. It provides the processing power and interfaces necessary to control various components of the music player. With its dual-core ARM Cortex-M0+ processor and ample GPIO pins, the Pico W can handle tasks such as reading input from buttons, interfacing with the MicroSD card module for storing and accessing MP3 files, driving the OLED display for the user interface, and controlling the audio output via the MAX98357A amplifier."}),"\n",(0,s.jsx)(i.p,{children:"This is the current progress of the RustPlayer project. So far, the essential components have been assembled. The next step involves making the music player more compact by integrating all components into a custom-designed box with a lid. This enclosure will be created using Tinkercad to ensure a perfect fit."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:r(56631).c+"",width:"1536",height:"2048"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:r(51332).c+"",width:"1536",height:"2048"})}),"\n",(0,s.jsx)(i.h3,{id:"schematics",children:"Schematics"}),"\n",(0,s.jsx)(i.p,{children:"This schematic, created with KiCad, illustrates the electronic design of the RustPlayer project. It provides a detailed layout of the connections and components, ensuring accurate assembly and functionality."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"The kicad schematic",src:r(83896).c+"",width:"1802",height:"1222"})}),"\n",(0,s.jsx)(i.p,{children:"In the second picture I have used net labels to represent connections, for a cleaner and more organized layout."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"The kicad schematic",src:r(36068).c+"",width:"1803",height:"1229"})}),"\n",(0,s.jsx)(i.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Device"}),(0,s.jsx)(i.th,{children:"Usage"}),(0,s.jsx)(i.th,{children:"Price"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Raspberry Pi Pico W"})}),(0,s.jsx)(i.td,{children:"The microcontroller"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.robofun.ro/modul-cititor-card-microsd",children:"MicroSD Card Module"})}),(0,s.jsx)(i.td,{children:"Storage for MP3 files"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.robofun.ro/modul-cititor-card-microsd",children:"66 RON"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.robofun.ro/amplificator-3w-i2s-max98357a.html?gad_source=1&gclid=EAIaIQobChMIuMLW1uvuhQMVtTgGAB2bvw6eEAQYASABEgL-DfD_BwE",children:"Amplificator 3W I2S - MAX98357A"})}),(0,s.jsx)(i.td,{children:"Audio output"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.robofun.ro/amplificator-3w-i2s-max98357a.html?gad_source=1&gclid=EAIaIQobChMIuMLW1uvuhQMVtTgGAB2bvw6eEAQYASABEgL-DfD_BwE",children:"53 RON"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.sigmanortec.ro/Display-OLED-0-96-I2C-IIC-Albastru-p135055705?gad_source=1&gclid=EAIaIQobChMI87uZ2uzuhQMVXAUGAB0WEwaqEAQYASABEgIC8vD_BwE",children:"0.96'' I2C IIC OLED Display"})}),(0,s.jsx)(i.td,{children:"User interface display"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.sigmanortec.ro/Display-OLED-0-96-I2C-IIC-Albastru-p135055705?gad_source=1&gclid=EAIaIQobChMI87uZ2uzuhQMVXAUGAB0WEwaqEAQYASABEgIC8vD_BwE",children:"20 RON"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://ro.farnell.com/visaton/2916/speaker-k-50-wp-50-ohms/dp/1683896?gross_price=true&CMP=KNC-GRO-GEN-SHOPPING-PMax_Test_840_HighMargin&mckv=_dc%7Cpcrid%7C%7Cplid%7C%7Ckword%7C%7Cmatch%7C%7Cslid%7C%7Cproduct%7C1683896%7Cpgrid%7C%7Cptaid%7C%7C&gad_source=1&gclid=EAIaIQobChMIqpmFqOzuhQMVdkJBAh25UwYvEAQYASABEgJ7jPD_BwE",children:"VISATON 2916"})}),(0,s.jsx)(i.td,{children:"Audio output device"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://ro.farnell.com/visaton/2916/speaker-k-50-wp-50-ohms/dp/1683896?gross_price=true&CMP=KNC-GRO-GEN-SHOPPING-PMax_Test_840_HighMargin&mckv=_dc%7Cpcrid%7C%7Cplid%7C%7Ckword%7C%7Cmatch%7C%7Cslid%7C%7Cproduct%7C1683896%7Cpgrid%7C%7Cptaid%7C%7C&gad_source=1&gclid=EAIaIQobChMIqpmFqOzuhQMVdkJBAh25UwYvEAQYASABEgJ7jPD_BwE",children:"50 RON"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.emag.ro/card-de-memorie-microsd-kingston-canvas-select-plus-32gb-100mb-s-cu-adaptor-sdcs2-32gb/pd/D63FBGBBM/?ref=fam#32-GB",children:"Card MicroSD"})}),(0,s.jsx)(i.td,{children:"Memory Card MicroSD"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.emag.ro/card-de-memorie-microsd-kingston-canvas-select-plus-32gb-100mb-s-cu-adaptor-sdcs2-32gb/pd/D63FBGBBM/?ref=fam#32-GB",children:"30-40 RON"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.optimusdigital.ro/en/?gad_source=1&gclid=EAIaIQobChMIt8fHl_DuhQMVoj8GAB2CHwcJEAAYASAAEgLBrvD_BwE",children:"Electronic components: LEDs, buttons, wires resistors and Breadboard"})}),(0,s.jsx)(i.td,{children:"Electronic Components"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://www.optimusdigital.ro/en/?gad_source=1&gclid=EAIaIQobChMIt8fHl_DuhQMVoj8GAB2CHwcJEAAYASAAEgLBrvD_BwE",children:"15-20 RON"})})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"software",children:"Software"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Library"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Usage"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/almindor/st7789",children:"st7789"})}),(0,s.jsx)(i.td,{children:"Display driver for ST7789"}),(0,s.jsx)(i.td,{children:"Used for the display for the Pico Explorer Base"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/embedded-graphics/embedded-graphics",children:"embedded-graphics"})}),(0,s.jsx)(i.td,{children:"2D graphics library"}),(0,s.jsx)(i.td,{children:"Used for drawing to the display"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/nviennot/tinyusb-sys-rs",children:"TinyUSB"})}),(0,s.jsx)(i.td,{children:"An open-source USB library for embedded systems that handles USB device and host functionality"}),(0,s.jsx)(i.td,{children:"Provides USB communication capabilities for the RustPlayer, enabling potential future expansions such as connecting USB-based audio devices"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"https://github.com/rafalh/rust-fatfs",children:"FatFs"})}),(0,s.jsx)(i.td,{children:"A lightweight file system library for embedded systems, compatible with FAT32, FAT16, and FAT12"}),(0,s.jsx)(i.td,{children:"Handles reading and writing audio files to and from the microSD card efficiently"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.youtube.com/watch?v=1--GBKYXRyY",children:"Music Player using Raspberry Pi Pico and DFPlayer"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.youtube.com/watch?v=aSga6w89VpI",children:"World's Cheapest Internet Radio Player! - Powered by Raspberry Pi"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.youtube.com/watch?v=SWiPIBWvgIU",children:"Revolutionize Your Spotify Experience for less than $15"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,n.M)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},83896:(e,i,r)=>{r.d(i,{c:()=>s});const s=r.p+"assets/images/KiCad1-e943946e0d85a403cbb7461d7f7d41a4.png"},36068:(e,i,r)=>{r.d(i,{c:()=>s});const s=r.p+"assets/images/KiCad2-0e418ab1cdff85bdf113bd411dac7905.png"},56156:(e,i,r)=>{r.d(i,{c:()=>s});const s=r.p+"assets/images/Schematic-945816e1311ca0fcd9dc6585ca87b5d1.png"},56631:(e,i,r)=>{r.d(i,{c:()=>s});const s=r.p+"assets/images/project_picture_1-72d0dbafc2e98df378217e58fd28f657.png"},51332:(e,i,r)=>{r.d(i,{c:()=>s});const s=r.p+"assets/images/project_picture_2-36305abf8675add3c5e4bf9f2a66d92a.png"},4552:(e,i,r)=>{r.d(i,{I:()=>l,M:()=>c});var s=r(11504);const n={},t=s.createContext(n);function c(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);