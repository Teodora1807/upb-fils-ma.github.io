---
sidebar_position: 3
---

---
sidebar_position: 3
---

# Project

The purpose of the project is to build a hardware device that runs software written in Rust.

## Deliverables
- documentation - we will provide a template `README.md` file in the template repository
  - short description of functionality
  - requirements (hardware and software)
  - hardware design - use fritzing, tinkercad (if the board exists) or an EDA to design it
  - software design
    - detail design
    - functional diagram
- software
- hardware

## Hardware Rules

1. It is not allowed to use processors/microprocessors (eg Broadcom BCM2711, Broadcom BCM2712), you can only use microcontrollers. Examples of microcontrollers: RP2040, nRF52, STM32 or ESP32 (RISC-V)
2. The hardware part may be designed either using a breadboard and jumper wires, a protoboard(solder breadboard) or a PCBs.

## Software Rules
It has to run software written in Rust. Students can you:
- [embassy-rs](https://embassy.dev/)
- [RTIC](https://rtic.rs/2/book/en/)
- [bare metal](https://crates.io/crates/cortex-r) - the cortex-r-rt crate
- [Tock](https://www.tockos.org)
- any other software framework that is written in Rust


## Project Rules

1. It is not allowed to copy the code or the electronic schemes from the internet.
2. Help from external sources is not allowed, the student can be asked by the coordinator about implementation details during the development period.
3. Students are strongly encouraged to ask the lab assistant questions about the project.
4. Presentation of milestones is mandatory.

## Requirements
1. Block diagram - how the components communicate with each other
2. Electrical schematic - Kicad
3. Complexity: use knowledge of at least 3 laboratories excluding Tour of Rust and Hardware Introduction Depending on the situation, there might be complex projects that don't use 3 laboratories and simple project that use 4-5 laboratories. The assistant role is to make sure the project is suited and to give ideas to make it more complex if needed, but the rule of 3 laboratories should guide them to a suited project.
4. Hardware totally functional.

## Example Projects

**Examples of projects from past years:**
1. https://ocw.cs.pub.ro/courses/pm/prj2022
2. https://ocw.cs.pub.ro/courses/pm/prj2023

**Outstanding Projects:**
1. [POV - DAVIC picTronics](https://ocw.cs.pub.ro/courses/pm/prj2023/gpatru/376)
2. [Ryobo - Computer Vision & Object Following](https://ocw.cs.pub.ro/courses/pm/prj2023/gpatru/483)
3. [Plug & Play ChatGPT](https://ocw.cs.pub.ro/courses/pm/prj2023/ncaroi/plug)
4. [VENDING MACHINE](https://ocw.cs.pub.ro/courses/pm/prj2023/drtranca/vending.machine)

## F.A.Q
**Q:** Can I use another programming language, not Rust?

**A:** No, the main focus of the project is to learn to work with microcontrollers using Rust.

**Q:** What if the PCB comes after the hardware milestone?

**A:** You will only present the diagram for the hardware part and if there is a prototype using breadboard, but at the end of the project you must necessarily have the PCB printed and functional.