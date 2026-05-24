
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiFiverr, SiLinux, SiDocker } from "react-icons/si";

// export default function App() {
// src/App.js

export default function App() {
  const skills = [
  "Classic AUTOSAR",
  "Adaptive AUTOSAR",
  "Embedded C",
  "C++",
  "Python",
  "ROS2",
  "Linux Shell Scripting",
  "Data Structures",
  "VxWorks",
  "Embedded Linux",
  "QNX",
  "POSIX",
  "Device Driver Development",
  "CAN",
  "CAN FD",
  "SPI",
  "I2C",
  "UART",
  "TCP/IP",
  "Ethernet",
  "Polarion",
  "CANoe",
  "CANalyzer",
  "VectorCAST",
  "Yocto",
  "MISRA",
  "ASPICE",
  "Coverity",
  "DDS",
  "Ara::COM",
  "Simics",
  "Git",
  "Gerrit",
  "SVN",
  "Bitbucket",
  "VCast",
  "Enterprise Architect",
  "Axivion",
  "QNX Momentics",
  "Eclipse",
  "VS Code",
  "PyCharm",
  "Linux Kernel",
  "Microcontroller Programming",
  "Raspberry Pi",
  "NXP",
  "TI TDA4",
];

  const services = [
    {
      title: "AUTOSAR Development",
      description:
        "Classic & Adaptive AUTOSAR software development and integration support.",
    },

    {
      title: "Embedded C/C++ Development",
      description:
        "Embedded software development for Linux, VxWorks, and RTOS platforms.",
    },

    {
      title: "Device Driver Development",
      description:
        "Kernel-space and user-space driver development and debugging.",
    },

    {
      title: "Validation & Testing",
      description:
        "SWIT, HIL, validation testing, debugging, and issue analysis support.",
    },

    {
      title: "CAN & Diagnostics",
      description:
        "CAN communication analysis, diagnostics, and automotive middleware support.",
    },

    {
      title: "Yocto & BSP Support",
      description:
        "Yocto image customization and embedded Linux BSP support.",
    },
  ];

  const projects = [
    {
      title: "CAN Bus Monitor & Signal Decoder",
      description:
        "Developed CAN monitoring and signal decoding utilities using Raspberry Pi and MCP2515 CAN controller.",
    },

    {
      title: "ROS2 Sensor Fusion Obstacle Detection",
      description:
        "Implemented ROS2-based obstacle detection pipeline using IMU and ultrasonic sensor fusion.",
    },

    {
      title: "VxWorks Driver Validation",
      description:
        "Performed validation and debugging for INTA, UDMA, and Pinmux kernel-space drivers on TI TDA4 platform.",
    },

    {
      title: "Adaptive AUTOSAR FVM",
      description:
        "Worked on Freshness Value Manager validation and MISRA compliance activities.",
    },
  ];

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Tata Elxsi (Client: WindRiver)",
      duration: "Aug 2025 – Present",
      details: [
        "Developed VxWorks kernel-space device drivers for INTA, UDMA, and Pinmux modules targeting TI TDA4 automotive SoC.",
        "Implemented Device Tree Source configurations and interrupt routing.",
        "Performed debugging on Simics virtual platform and physical hardware.",
        "Created SWIT validation test plans and reports.",
        "Worked on CI/CD integration and branch merge activities.",
      ],
    },

    {
      role: "Senior Software Engineer",
      company: "Tata Elxsi (Client: Aptiv)",
      duration: "Feb 2025 – Jul 2025",
      details: [
        "Developed CPU load profiling framework for Cortex-A72 cores.",
        "Implemented performance monitoring utilities using TI Processor SDK APIs.",
        "Validated CPU profiling measurements against hardware counters.",
      ],
    },

    {
      role: "Senior Software Engineer",
      company: "Tata Elxsi (Client: Aptiv)",
      duration: "Jul 2023 – Dec 2024",
      details: [
        "Worked on ADAS parking software stack development.",
        "Executed HIL testing across Linux, QNX, and VxWorks.",
        "Integrated ROS and perception pipeline modules.",
        "Built Yocto images for TI TDA4 platforms.",
        "Validated unit testing for modules and fixed Coverity issues based on MISRA guidelines.",
"Implemented ROS and surround vision parser components.",
      ],
    },

    {
      role: "Software Engineer",
      company: "Tata Elxsi (Client: Jaguar Land Rover)",
      duration: "Nov 2023 – Feb 2024",
      details: [
        "Worked on Adaptive AUTOSAR Freshness Value Manager module.",
        "Created functional test cases and validation activities.",
        "Resolved MISRA compliance violations.",
        "Executed unit testing using VCAST in Windows and Linux environments.",
        
      ],
    },

    {
      role: "Software Engineer",
      company: "Avin Systems (Client: ZF Friedrichshafen)",
      duration: "Jul 2021 – May 2023",
      details: [
        "Developed diagnostic architecture and Unit Design documents for designed software components.",
"Validated unit testing using Azure pipeline.",
"Performed AUTOSAR and MISRA validation for embedded source code.",
"Worked on middleware communication modules using CAN, SPI, and I2C.",
      ],
    },
  ];

  const navStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "15px",
  transition: "0.3s",
};

  return (
    <motion.div
    
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
    
<nav
  style={{
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "rgba(15, 23, 42, 0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #1e293b",
    padding: "14px 40px",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    }}
  >
    {/* LOGO / NAME */}
    <h2
      style={{
        color: "#38bdf8",
        fontSize: "clamp(16px, 4vw, 22px)",
        margin: 0,
        fontWeight: "700",
      }}
    >
      Jocund Missier
      <span
        style={{
          color: "#cbd5e1",
          fontSize: "16px",
          marginLeft: "10px",
          fontWeight: "400",
        }}
      >
        | Embedded & AUTOSAR Portfolio
      </span>
    </h2>

    {/* NAV LINKS */}
    <div
  style={{
    display: "flex",
    gap: "14px",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    fontSize: "14px",
    marginTop: "10px",
  }}
>
      <a href="#about" style={navStyle}>About</a>
      <a href="#skills" style={navStyle}>Skills</a>
      <a href="#experience" style={navStyle}>Experience</a>
      <a href="#projects" style={navStyle}>Projects</a>
    </div>
  </div>
</nav>
      {/* HERO SECTION */}
      <section
        style={{
          padding: "clamp(40px, 8vw, 80px) 20px",
          textAlign: "center",
        }}
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          style={{
            width: "clamp(120px, 35vw, 180px)",
            height: "clamp(120px, 35vw, 180px)",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "25px",
            border: "4px solid #38bdf8",
          }}
        />

        <h3 style={{ color: "#38bdf8", letterSpacing: "2px" }}>
          SENIOR EMBEDDED SOFTWARE ENGINEER
        </h3>

        <h2
  style={{
    color: "#38bdf8",
    fontSize: "clamp(24px, 7vw, 52px)",
    margin: 0,
    fontWeight: "700",
    letterSpacing: "1px",
  }}
>
  Jocund Missier
</h2>

        <p
          style={{
            mmaxWidth: "700px",
padding: "0 10px",
            margin: "0 auto",
            color: "#cbd5e1",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Experienced embedded software engineer specializing in Classic &
          Adaptive AUTOSAR, VxWorks RTOS, Embedded Linux, ADAS platforms,
          automotive middleware, device drivers, validation engineering, and
          communication protocols across TI TDA4 and NXP platforms.
        </p>

        <motion.div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            rowGap: "15px",
          }}
        >
          <a
            href="/resume.pdf"
            download
            style={{
              backgroundColor: "#38bdf8",
              color: "black",
              padding: "14px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Download Resume
          </a>

          <a
            href="https://github.com/jocund7"
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid #38bdf8",
              color: "#38bdf8",
              padding: "14px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            GitHub
          </a>

          <a
  href="https://www.fiverr.com/jocundmissier"
  target="_blank"
  rel="noreferrer"
  style={{
    backgroundColor: "#1dbf73",
    color: "white",
    padding: "14px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  Fiverr
</a>
 
<a
  href="https://linkedin.com/in/jocund-misser-1b799017a/"
  target="_blank"
  rel="noreferrer"
  style={{
    backgroundColor: "#38bdf8",
    color: "white",
    padding: "14px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  Linkedin
</a>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about"
        style={{
          backgroundColor: "#1e293b",
          padding: "clamp(40px, 6vw, 60px) 20px",
        }}
      >
        <motion.div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", marginBottom: "20px" }}>
            About Me
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
fontSize: "clamp(15px, 3vw, 17px)",
            }}
          >
            I am a Senior Software Engineer with hands-on experience in
            automotive embedded systems, AUTOSAR architecture, Linux
            kernel-space and user-space development, RTOS integration,
            automotive middleware, and software validation.
            <br />
            <br />
            My expertise includes Classic & Adaptive AUTOSAR, VxWorks RTOS,
            Embedded Linux, device driver development, CAN/SPI/I2C
            communication, ADAS software integration, ASPICE compliance, Yocto
            BSP, and validation engineering.
            <br />
            <br />
            I have worked with leading automotive clients including WindRiver,
            Aptiv, Jaguar Land Rover, and ZF Friedrichshafen.
          </p>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" style={{ padding: "clamp(40px, 6vw, 60px) 20px" }}>
        <motion.div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 36px)",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Technical Skills
          </h2>

          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                style={{
                  backgroundColor: "#1e293b",
                  padding: "18px",
                  borderRadius: "12px",
                  textAlign: "center",
                  borderLeft: "5px solid #38bdf8",
border: "1px solid #334155",
                  fontWeight: "bold",
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* TECH STACK LOGOS */}
<section
  style={{
    padding: "50px 20px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "clamp(28px, 5vw, 36px)",
      marginBottom: "40px",
    }}
  >
    Platforms & Technologies
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >
    <SiLinux size={60} color="#38bdf8" />
    <SiDocker size={60} color="#38bdf8" />
    <FaGithub size={60} color="#38bdf8" />
  </div>
</section>

      {/* EXPERIENCE SECTION */}
      <section id="experience"
        style={{
          backgroundColor: "#1e293b",
          padding: "clamp(40px, 6vw, 60px) 20px",
        }}
      >
        <motion.div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 36px)",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Work Experience
          </h2>

          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
                style={{
                  backgroundColor: "#0f172a",
                  padding: "30px",
                  borderRadius: "16px",
                  borderLeft: "5px solid #38bdf8",
border: "1px solid #334155",
                }}
              >
                <h3
                  style={{
                    color: "#38bdf8",
                    fontSize: "28px",
                    marginBottom: "10px",
                  }}
                >
                  {exp.role}
                </h3>

                <h4
                  style={{
                    color: "#e2e8f0",
                    marginBottom: "10px",
                  }}
                >
                  {exp.company}
                </h4>

                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "20px",
                  }}
                >
                  {exp.duration}
                </p>

                <ul
                  style={{
                    lineHeight: "2",
                    color: "#cbd5e1",
                  }}
                >
                  {exp.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section  id="projects" style={{ padding: "clamp(40px, 6vw, 60px) 20px" }}>
        <motion.div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 36px)",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Projects
          </h2>

          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                style={{
                  backgroundColor: "#1e293b",
                  padding: "25px",
                  borderRadius: "16px",
                  borderLeft: "5px solid #38bdf8",
border: "1px solid #334155",
                }}
              >
                <h3
                  style={{
                    color: "#38bdf8",
                    marginBottom: "15px",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.8",
                  }}
                >
                  {project.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CERTIFICATIONS SECTION */}
<section
  style={{
    backgroundColor: "#1e293b",
    padding: "clamp(40px, 6vw, 60px) 20px",
  }}
>
  <motion.div style={{ maxWidth: "1000px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "clamp(28px, 5vw, 36px)",
        marginBottom: "40px",
        textAlign: "center",
      }}
    >
      Certifications & Education
    </h2>

    <motion.div
      style={{
        backgroundColor: "#0f172a",
        padding: "30px",
        borderRadius: "16px",
        borderLeft: "5px solid #38bdf8",
border: "1px solid #334155",
        lineHeight: "2",
        color: "#cbd5e1",
      }}
    >
      <h3 style={{ color: "#38bdf8" }}>
        Education
      </h3>

      <p>
        B.E Computer Science and Engineering  - Dr. Sivanthi Aditanar College of Engineering
      </p>

  
      <br />

      <h3 style={{ color: "#38bdf8" }}>
        Certifications
      </h3>

      <ul>
        <li>CCNA 200-301 Certification – Udemy</li>
        <li>Image Processing Computing Programming – GUVI</li>
        <li>IoT and Data Science Training – Cranes Varsity</li>
      </ul>
    </motion.div>
  </motion.div>
</section>

{/* CERTIFICATIONS & ACHIEVEMENTS SECTION */}
<section
  style={{
    backgroundColor: "#0f172a",
    padding: "clamp(40px, 8vw, 60px) 20px",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "clamp(28px, 5vw, 36px)",
        marginBottom: "40px",
        textAlign: "center",
      }}
    >
      Certifications & Achievements
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "25px",
      }}
    >
      {/* CERTIFICATE CARD */}
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "25px",
          borderRadius: "16px",
          border: "1px solid #334155",
        }}
      >
        <h3 style={{ color: "#38bdf8" }}>
          PRIME BADGES
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            marginTop: "15px",
            lineHeight: "1.8",
          }}
        >
          TATA ELXSI CERTIFICATIONS
        </p>

        <a
          href="/certificates/tel_badges.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            color: "#38bdf8",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View Certificate
        </a>
      </div>

    </div>
  </div>
</section>

      {/* SERVICES SECTION */}
      <section
        style={{
          backgroundColor: "#1e293b",
          padding: "clamp(40px, 6vw, 60px) 20px",
        }}
      >
        <motion.div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 36px)",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Services
          </h2>

          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                style={{
                  backgroundColor: "#0f172a",
                  padding: "25px",
                  borderRadius: "16px",
                  borderLeft: "5px solid #38bdf8",
border: "1px solid #334155",
                }}
              >
                <h3
                  style={{
                    color: "#38bdf8",
                    marginBottom: "15px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.8",
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      
{/* SOCIAL ICONS */}
<section
  style={{
    padding: "40px 20px",
    textAlign: "center",
  }}
>
  <motion.div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
    }}
  >
    
   
  </motion.div>



      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          borderTop: "1px solid #334155",
          color: "#94a3b8",
        }}
      >
        © 2026 Embedded & AUTOSAR Portfolio
      </footer>
    </motion.div>
  );
}