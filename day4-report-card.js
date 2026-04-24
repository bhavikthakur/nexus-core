const agentReportCard = `
=== NEXUS AGENT REPORT ===
Agent: ${agentName} and ID: ${agentId}
Base Rate: ${baseHourlyRate}/hr
Gross Pay : ${shiftHours * baseHourlyRate}
==========================
`;
console.log(agentReportCard);
