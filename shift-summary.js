// ----------------- DAY 4 :TEMPLATE LITERALS & STRING METHODS---------------

let totalActiveAgents = 100;
let totalTickets = 50;
let resolvedTickets = 30;
let isTargetMet = false;

let agentStat = `Agent Dashboard View
- Agent profile - 
Agent ID : ${agentID}
Agent Name : ${agentName}

- Overall agents -
Total active agents : ${totalActiveAgents}
Total unresolved tickets : ${totalTickets}
Total resolved tickets : ${resolvedTickets}
Current Target Status : ${resolvedTickets >= totalTickets ? "Achieved✅" : "Not met❌"}
`;
