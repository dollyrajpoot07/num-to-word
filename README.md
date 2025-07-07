# 🔢 Number ↔ Words Converter Utility

This React utility provides two-way conversion between numeric values and their equivalent English phrases. It accurately handles large numbers using a 
left-to-right processing strategy and covers magnitudes like thousand, million, billion, up to quintillion.

---

## 🚀 Features

- ✅ Convert large English phrases like “five billion ninety four thousand” to numeric form.
- ✅ Convert numbers like `3982734982` to words: “three billion nine hundred eighty two million...”.
- ✅ Supports magnitudes: thousand, million, billion, trillion, quadrillion, quintillion.
- ✅ Handles grouped logic: “two hundred thirty four thousand”.
- ✅ Formatted output with commas for readability.
- ✅ React-based clean, user-friendly interface.

---

## 🧠 Core Logic Overview

### Words to Number (`wordToNumberLogic`)
- Parses a string of English number words.
- Processes them **left to right**.
- Multiplies groups by appropriate scale words (e.g., thousand, million).
- Adds final accumulated group to total.

### Number to Words (`numberToWords`)
- Recursively converts a number into human-readable format.
- Handles grouped digits and appends correct magnitude.

---
<img width="859" alt="Screenshot 2025-07-08 at 1 25 23 AM" src="https://github.com/user-attachments/assets/ea735f78-c4f7-4275-a2e8-a3a51be7431a" />
<img width="790" alt="Screenshot 2025-07-08 at 1 27 32 AM" src="https://github.com/user-attachments/assets/bb6bc559-fe91-4a3d-bef1-3eb7779751c2" />
