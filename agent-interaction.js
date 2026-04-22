// ----------------- DAY 3 : Dialogue box --------------------
// **The Task:** Create `agent-interaction.js` in your `nexus-core` repository.
// **Requirements:** This is the "Manual Override" module for Team Leads. You must use the Browser Object Model (BOM) to capture and display data.

// 1. **Capture Name:** Use `prompt()` to ask: *"Enter Agent Name for Override:"*. Store it in a `const`.
// 2. **Verify Presence:** Use `confirm()` to ask: *"Is Agent [Name] present for the shift?"*. Store this in a `let` called `isPresent`.
// 3. **The Logic Gate:** Use your newly mastered `if` logic. If the agent is present:
//     - Change a variable `shiftStatus` to `"Active"`.
//     - Show an `alert()` saying: *"Authentication Successful for [Name]."*
// 4. **The "Blocking" Test:** Open your console while the `prompt` is on the screen. Try to type `2 + 2`. Notice that the console won't even give you an answer. **This proves the Main Thread is blocked.**

// **Commit Message:** `feat: implement interactive manual override using BOM dialogs`

// const agentName = prompt("Enter the agent name");
// const isPresent = confirm("If " + agentName + " is present for the shift?");
// let shiftStatus = "Offline";

// if (isPresent) {
//   shiftStatus = "Active";
//   alert("Authentication Successful for " + agentName + "!");
// } else {
//   alert(
//     "Authentication unsuccessful for " +
//       agentName +
//       ". Be available at desk and try again!",
//   );
// }
