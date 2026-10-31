// ─── Portfolio Data ────────────────────────────────────────────────────────────

export const groups = ["Client", "API", "Data", "Integrations"];

export const nodes = [
  { id: "react",    g: 0, n: "React.js and Redux",      t: "Built scalable, responsive frontends with reusable components so they stay easy to maintain.",                                                                                              u: "Attendance Management System, and the screens for ERP, HRMS and ESS modules" },
  { id: "api",      g: 1, n: "ASP.NET Core Web API",    t: "Developed secure ASP.NET Core and .NET Web APIs and REST integrations. I test endpoints in Postman and write unit tests to keep the application stable.",                                    u: "ERP, HRMS and ESS, Attendance, Custom Forms" },
  { id: "jwt",      g: 1, n: "JWT authentication",      t: "Delivered token-based login with JWT, plus OTP-based password recovery for secure account access.",                                                                                          u: "Authentication and Security" },
  { id: "signalr",  g: 1, n: "SignalR",                 t: "Added real-time communication features to the applications.",                                                                                                                                u: "Real-time features across the application suite" },
  { id: "dapper",   g: 2, n: "Dapper",                  t: "Used Dapper for data access, keeping queries direct and fast.",                                                                                                                              u: "Data layer behind the API modules" },
  { id: "sql",      g: 2, n: "SQL Server and T-SQL",    t: "Optimized SQL Server queries, T-SQL stored procedures and database operations.",                                                                                                             u: "ERP, HRMS and ESS, Attendance, Custom Forms" },
  { id: "smtp",     g: 3, n: "SMTP email",              t: "Sends the OTP emails used in the password recovery flow.",                                                                                                                                   u: "Authentication and Security" },
  { id: "easebuzz", g: 3, n: "Easebuzz payments",       t: "Integrated Easebuzz payment APIs and tested the endpoints with Postman.",                                                                                                                    u: "Payment integration" },
  { id: "zatca",    g: 3, n: "ZATCA e-invoicing",       t: "Built the e-invoicing integration for tax compliance and automated invoicing workflows.",                                                                                                    u: "ZATCA and E-Invoicing" },
];

export const projects = [
  { n: "ERP System",                   d: "Enterprise resource planning modules for business operations and reporting.",                         s: ["api", "sql", "react"] },
  { n: "HRMS and ESS",                 d: "Human resource management and employee self-service modules with API integrations.",                   s: ["api", "sql", "react"] },
  { n: "Attendance Management System", d: "Attendance tracking and reporting, built with React.js and .NET APIs.",                               s: ["react", "api", "sql"] },
  { n: "Custom Forms",                 d: "Dynamic, customizable forms for enterprise workflows and internal operations.",                        s: ["api", "sql"] },
  { n: "ZATCA and E-Invoicing",        d: "Tax compliance and automated invoicing integrations.",                                                 s: ["zatca", "api"] },
  { n: "Authentication and Security",  d: "Token-based login with JWT and an email OTP recovery flow.",                                          s: ["jwt", "smtp"] },
];

export const duties = [
  ["Lead",     "Direct a development team, coordinating requirements and delivery of enterprise features and enhancements on schedule."],
  ["Lead",     "Collaborate with cross-functional teams to analyze business requirements and troubleshoot complex production issues."],
  ["Lead",     "Contribute to modernization, security, scalability and user experience improvements."],
  ["Build",    "Build scalable, responsive React.js and Redux frontends with reusable components."],
  ["Build",    "Develop secure ASP.NET Core and .NET Web APIs, plus REST integrations, for ERP, HRMS, ESS, attendance and custom form modules."],
  ["Build",    "Deliver JWT authentication and OTP-based password recovery through SMTP email."],
  ["Build",    "Add real-time communication features using SignalR."],
  ["Build",    "Integrate Easebuzz payment APIs and test endpoints with Postman."],
  ["Build",    "Build ZATCA e-invoicing integration for tax compliance and automated invoicing workflows."],
  ["Maintain", "Optimize SQL Server queries, T-SQL stored procedures and database operations, using Dapper for data access."],
  ["Maintain", "Write unit tests to improve application stability and overall quality."],
  ["Maintain", "Manage deployments, production support and issue resolution for live applications."],
  ["Maintain", "Handle bug fixing, maintenance and performance optimization across enterprise systems."],
  ["Tools",    "Accelerate development with Claude Code, Antigravity and ChatGPT."],
];

export const skills = {
  "Frontend":               ["React.js", "Redux", "JavaScript", "HTML", "CSS"],
  "Backend":                ["ASP.NET Core", "Web API", "REST API", "Dapper", "SignalR"],
  "Database":               ["SQL Server", "T-SQL", "Stored procedures"],
  "Security":               ["JWT authentication", "OTP-based recovery"],
  "Testing and integration":["Unit testing", "Postman", "Easebuzz payment API"],
  "Generative AI tools":    ["Claude Code", "Antigravity", "ChatGPT"],
};

export const skillMap = {
  "React.js": "react", "Redux": "react",
  "ASP.NET Core": "api", "Web API": "api", "REST API": "api",
  "Dapper": "dapper", "SignalR": "signalr",
  "SQL Server": "sql", "T-SQL": "sql", "Stored procedures": "sql",
  "JWT authentication": "jwt", "OTP-based recovery": "jwt",
  "Postman": "api", "Unit testing": "api", "Easebuzz payment API": "easebuzz",
};

export const byId = (id) => nodes.find(n => n.id === id);

