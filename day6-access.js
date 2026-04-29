let clearanceLevel = 2;
isShiftActive = true;
ticketsResolved = 85;

let canAccessAdmin =
  (clearanceLevel === 3 || clearanceLevel === 2) && isShiftActive;
let isOverAchiever = ticketsResolved > 50 && !!isShiftActive;

let adminAccessReport = `--- ACCESS CONTROL ---
Admin Access: ${canAccessAdmin}
Overachiever Status: ${isOverAchiever}
`;

console.log(adminAccessReport);
