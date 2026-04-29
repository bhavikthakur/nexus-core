ticketsResolved = 120;
shiftHours = 9;
qualityScore = 89.4;

let rawTPH = Math.round(ticketsResolved / shiftHours);
let finalQuality = Math.floor(qualityScore);

let hasTickets = ticketsResolved === 120;

let ticketDashboard = `
====== TICKET DASHBOARD=======
Total resolved tickets: ${ticketsResolved}
Total hours in the shift : ${shiftHours}
Quality score: ${finalQuality}
Tickets are in the queue: ${hasTickets}
======
`;
