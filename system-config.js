// ----------------- DAY 2 : VARIABLES --------------------
// ### **The Solo Build: Nexus (Lego Piece #2)**

// **The Task:** Create `system-config.js` in `nexus-core`.
// **Requirements:** You are setting the "Immutable Laws" and "Mutable States" of the Nexus ERP. You must use `const`, `let`, and `var` exactly once according to these professional rules:

// 1. **`BASE_URL`**: (String) The core endpoint for Nexus. This must be impossible to change.
// 2. **`activeAgentCount`**: (Number) This will change every time someone logs in. Initialize it at `0`.
// 3. **`isMaintenanceMode`**: (Boolean) A flag that changes based on server status.
// 4. **`legacyDepartmentCode`**: (Number) Use `var` here. **Requirement:** Try to redeclare this same variable on the next line (e.g., `var legacyDepartmentCode = 101; var legacyDepartmentCode = 102;`). Observe why this is a massive risk in a large codebase.

// **Commit Message:** `feat: define system configuration and stability rules`

const BASE_URL = "https://api.nexus-wfm.com";
let activeAgentCount = 0;

let isMaintenanceMode = false;
var legacyDepartmentCode = 101;
legacyDepartmentCode = 102;

let systemStatus =
  "NEXUS CONFIG: " + BASE_URL + " | Status: " + isMaintenanceMode;
