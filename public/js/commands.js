var linkedin = "https://www.linkedin.com/in/griffotech254";
var github = "https://github.com/TechGriffo254";
var sudo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
var email = "mailto:griffotech254@gmail.com";

let banner = [
  `<div id="banner-section" class="banner">
 Welcome to my portfolio! — Type <span class="command">help</span> for a list of supported commands.
  </div>`,
];

let aboutme = [
  "<br>",
  `<div id="aboutme-section">`,
  `<span class='underline'>Hey, I'm Mudenyo Griffins! 👋</span>`,
  "<br>",
  `<li>🔐 I'm a Service Operations & Cybersecurity Specialist passionate about system security and operational excellence.</li>`,
  `<li>🎓 I have completed my B.Sc. Computer Science studies at Kibabii University and am currently awaiting graduation.</li>`,
  `<li>🏆 Completed ALX Africa | Holberton School Software Engineering (Backend) and Cybersecurity tracks.</li>`,
  `<li>🚀 Completed the ALX ProDev Backend Engineering program.</li>`,
  `<li>💻 Experienced in Python, C/C++, Java, JavaScript, and various cybersecurity tools.</li>`,
  `<li>🛡️ Skilled in penetration testing, vulnerability assessment, and security audits.</li>`,
  `<li>📊 Proficient in system monitoring, log analysis, and performance optimization.</li>`,
  `<li>🔧 Expert in Linux systems (Debian, Kali, Arch, Parrot OS) and Windows administration.</li>`,
  `<li>📂 Use the <span class="command">education</span>, <span class="command">experience</span>, <span class="command">skills</span>, and <span class="command">projects</span> commands to explore my background!</li>`,
  `<li>📫 Contact: <a href="mailto:griffotech254@gmail.com">griffotech254@gmail.com</a></li>`,
  "</div>",
  "<br>",
];

let social = [
  "<br>",
  'linkedin       <a href="' +
    linkedin +
    '" target="_blank">linkedin/griffotech254</a>',
  'github         <a href="' +
    github +
    '" target="_blank">github/TechGriffo254</a>',
  'email          <a href="' +
    email +
    '" target="_blank">griffotech254@gmail.com</a>',
  "<br>",
];

let help = [
  `<br><div id="help-section"><pre class="whitespace-pre-wrap">
<span class="command">aboutme</span>
↳ Displays who I am?
<span class="command">social</span>
↳ Lists social networks.
<span class="command">education</span>
↳ View educational background & certifications.
<span class="command">experience</span>
↳ View work experience & projects.
<span class="command">skills</span>
↳ View technical skills & expertise.
<span class="command">projects</span>
↳ View cybersecurity projects.
<span class="command">email</span>
↳ To send me an email.
<span class="command">history</span>
↳ View command history.
<span class="command">help</span>
↳ Displays this help message.
<span class="command">sudo</span>
↳ Try it out for yourself.
<span class="command">snake</span>
↳ Run Snake Game.
<span class="command">clear</span>
↳ Clear the terminal.
</pre></div><br>`,
];

let projects = [
  "<br>",
  `<div id="projects-section">`,
  `<span class='underline'>Cybersecurity Projects & Labs</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
🛡️ Network Security Assessment
• Conducted penetration testing on corporate networks
• Identified and documented security vulnerabilities
• Provided remediation strategies and security recommendations

🔍 Log Analysis & Incident Response
• Developed automated log parsing scripts for security monitoring
• Analyzed system logs to detect anomalous patterns
• Created incident response documentation and procedures

🚨 Vulnerability Assessment Tools
• Built custom vulnerability scanning automation scripts
• Integrated multiple security tools (Nmap, Nessus, Burp Suite)
• Generated comprehensive security assessment reports

🔎 Incident Response & Traffic Analysis
• Analyzed packet captures and network flows for suspicious activity
• Documented incident response steps and containment actions
• Applied deep packet sniffing and protocol inspection techniques
</pre>`,

  `<span class='underline'>Software Development Projects</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
🌾 AgriAI - Smart Farming Decision Support System
• Built a Laravel and Livewire platform for farm management and decision support
• Integrated AI chat, pest diagnosis, weather insights, and market price tracking
• Added farm, crop cycle, task, inventory, and finance modules with testing coverage

⚙️ ALX ProDev Backend Engineering Projects
• Designed secure backend services and RESTful APIs
• Worked on database optimization, validation, and production-ready architecture
• Focused on enterprise-grade backend patterns and maintainability

🧠 ALX Cybersecurity Track Projects
• Practiced UNIX/Linux administration and shell scripting workflows
• Explored network security architectures and core cryptography foundations
• Built familiarity with threat modeling and defensive system analysis

💻 Backend Development
• RESTful API development using Python and JavaScript
• Database optimization and query performance tuning
• Implementation of secure authentication and authorization systems

📊 Data Analysis & Visualization
• Real-time monitoring dashboards for system metrics
• Automated reporting tools for operational insights
• Statistical analysis scripts for performance optimization

🔧 System Administration Tools
• Bash automation scripts for routine maintenance tasks
• Configuration management and deployment automation
• Performance monitoring and alerting systems
</pre>`,
  "</div>",
  "<br>",
];

let skills = [
  "<br>",
  `<div id="skills-section">`,
  `<span class='underline'>Programming & Scripting</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Languages: Python, C/C++, Java, JavaScript, Bash Shell Scripting
Frameworks: RESTful API Design, Secure Backend Architecture, API Integration
Version Control: Git, Advanced Workflow Management
</pre>`,

  `<span class='underline'>Service Operations & Monitoring</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
System Monitoring: Wireshark, Nmap, Network Traffic Analysis
Log Analysis: Advanced log parsing and pattern recognition
Process Automation: Python scripting, Bash automation
Performance Optimization: System bottleneck identification
</pre>`,

  `<span class='underline'>Cybersecurity & Compliance</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Security Tools: Wireshark, Burp Suite, Nmap, Nessus, Metasploit, SQLmap, John the Ripper
Frameworks: ITIL understanding, Security compliance, Core cryptography foundations
Risk Assessment: Vulnerability analysis, Threat modeling, Deep packet sniffing
Incident Response: Investigation, Documentation, Remediation
</pre>`,

  `<span class='underline'>Database & Analytics</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Database Systems: MySQL, NoSQL (MongoDB), Firebase Realtime Database, Data Modeling
Data Analysis: Statistical analysis, Trend identification
Reporting: Dashboard creation, Real-time monitoring
</pre>`,

  `<span class='underline'>Operating Systems</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Linux: Advanced Kali Linux, Debian, Arch, Parrot OS
Windows: Advanced troubleshooting and administration
UNIX Environment: Command-line proficiency
</pre>`,
  "</div>",
  "<br>",
];

let education = [
  "<br>",
  `<div id="education-section">`,
  `<span class='underline'>Education</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
KIBABII UNIVERSITY | 2022 - 2026
• B.Sc. Computer Science (Completed, awaiting graduation)
• Registration Number: COM/0065/21
• Status: Successfully completed all coursework and final examination requirements (Certified June 2026)
• Core Technical Curriculum: Network Security, Advanced Wireless, Machine Learning, Data Structures & Algorithms (DSA), System Design & Logic, Object-Oriented Programming (Java, C++), and Relational Databases (MySQL)

ALX AFRICA | HOLBERTON SCHOOL | 2023 - 2024
• Advanced Software Engineering Program (Backend Specialization) & Cybersecurity Track
• Core Focus: UNIX/Linux system administration, shell scripting, advanced C systems programming, network security architectures, and core cryptography foundations

ALX PRODEV | BACKEND ENGINEERING PROGRAM
• Backend Engineering Program
• Core Focus: Enterprise-level API design, secure backend architectures, production database optimization, and secure data validation frameworks
</pre>`,
  
  `<span class='underline'>Certifications & Honors</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
IBM Honors:
• Security Analyst Fundamentals
• Cybersecurity Fundamentals

ALX Honors:
• Software Engineering Fundamentals
• Backend Development Excellence

Coursera Specialization:
• Security Analyst Fundamentals (With Honors)
</pre>`,
  "</div>",
  "<br>",
];

let experience = [
  "<br>",
  `<div id="experience-section">`,
  `<span class='underline'>AgriAI Capstone Project</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
• Built a smart farming decision support system powered by AI
• Developed modules for farms, crop cycles, tasks, inventory, finances, weather, and market prices
• Implemented AI assistant and pest diagnosis workflows with fallback handling
• Wrote feature and unit tests to improve reliability and regression coverage
</pre>`,

  `<span class='underline'>ALX ProDev Backend Engineering</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
• Designed secure backend architectures and production-ready APIs
• Improved database design, validation, and error handling workflows
• Applied enterprise-level backend patterns and maintainability practices
</pre>`,

  `<span class='underline'>Cybersecurity Training & Projects</span>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
• Practiced incident response, vulnerability assessment, and traffic analysis
• Worked with network security tools and UNIX/Linux administration workflows
• Built foundational skill in cryptography, shell scripting, and defensive analysis
</pre>`,
  "</div>",
  "<br>",
];
