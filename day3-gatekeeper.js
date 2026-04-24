console.log("Gatekeeper: Initializing Security Check...");
alert(`System ${SYSTEM_ID} is now active.`);

const isAuthorized = confirm("Are you authorized to access this terminal?");
const providedCode = prompt("Enter your Access Code:");

console.log(
  "Authorized:",
  isAuthorized,
  "isAuthorized type:",
  typeof isAuthorized,
);
console.log(
  "Provided Code:",
  providedCode,
  "providedCode type:",
  typeof providedCode,
);
