/**
 * ═══════════════════════════════════════════════════════
 *  COURSES DATA — Single Source of Truth
 *  Used by: index.html (carousel) & courses.html (grid)
 *
 *  To add a new course, just add an object below.
 *  Both pages will update automatically.
 * ═══════════════════════════════════════════════════════
 */

const COURSES = [
  {
    id: "ai-ml",
    title: "AI & ML Specialization",
    duration: "2–3 Months",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=300&fit=crop",
    imageSmall: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=220&fit=crop",
    description: "Deep dive into machine learning, neural networks and real-world AI applications with hands-on Python projects.",
    topics: [
      "Python & NumPy / Pandas",
      "Machine Learning Algorithms",
      "Deep Learning & NLP",
      "Capstone Project"
    ]
  },
  {
    id: "data-science",
    title: "Data Science",
    duration: "2–3 Months",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
    imageSmall: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop",
    description: "Master data science fundamentals — from Python programming to building predictive ML models on real-world datasets.",
    topics: [
      "Python for Data Science",
      "Statistics & Probability",
      "Machine Learning & AI Basics",
      "Model Building & Evaluation"
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    duration: "2–3 Months",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=300&fit=crop",
    imageSmall: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=220&fit=crop",
    description: "Turn raw data into actionable insights using SQL, Excel, Power BI and Tableau. Work on real datasets from Day 1.",
    topics: [
      "SQL & Advanced Excel",
      "Data Visualization",
      "Power BI & Tableau",
      "Business Analytics Project"
    ]
  },
  {
    id: "full-stack",
    title: "Full Stack Engineer",
    duration: "2–3 Months",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
    imageSmall: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=220&fit=crop",
    description: "Build complete web applications from front to back with React, Node.js and MongoDB. Deploy real projects.",
    topics: [
      "HTML, CSS, JavaScript",
      "React.js",
      "Node.js & Express",
      "MongoDB & Deployment"
    ]
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Architect",
    duration: "2–3 Months",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop",
    imageSmall: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=220&fit=crop",
    description: "Architect, deploy and manage scalable cloud solutions on AWS. Prepare for the AWS Solutions Architect exam.",
    topics: [
      "EC2, S3, VPC & IAM",
      "RDS & DynamoDB",
      "Lambda & Serverless",
      "Certification Prep"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Essentials",
    duration: "2–3 Months",
    image: "https://img.magnific.com/free-photo/cyber-security-concept-digital-art_23-2151637760.jpg?t=st=1777454801~exp=1777458401~hmac=7f648f0c09d90eff83ee9456c364040eb41ba3bd2fecc49d4356a339cd3083dc&w=1480?w=600&h=300&fit=crop",
    imageSmall: "https://img.magnific.com/free-photo/cyber-security-concept-digital-art_23-2151637760.jpg?t=st=1777454801~exp=1777458401~hmac=7f648f0c09d90eff83ee9456c364040eb41ba3bd2fecc49d4356a339cd3083dc&w=1480?w=400&h=220&fit=crop",
    description: "Master ethical hacking, network security, and vulnerability assessment with hands-on lab sessions.",
    topics: [
      "Network Security",
      "Ethical Hacking",
      "VAPT Techniques",
      "Security Compliance"
    ]
  },
  {
    id: "python",
    title: "Python Development",
    duration: "2–3 Months",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=300&fit=crop",
    imageSmall: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=220&fit=crop",
    description: "From fundamentals to advanced Python programming with real-world automation and scripting projects.",
    topics: [
      "Python Fundamentals",
      "OOP & File Handling",
      "Django Basics",
      "Automation Projects"
    ]
  },
  {
    id: "automation-testing",
    title: "Automation Testing",
    duration: "2–3 Months",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=300&fit=crop",
    imageSmall: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=220&fit=crop",
    description: "Learn to automate software testing using Selenium, TestNG and CI/CD pipelines. Build robust test frameworks from scratch.",
    topics: [
      "Selenium WebDriver & Java",
      "TestNG & Page Object Model",
      "API Testing with Postman",
      "CI/CD Integration (Jenkins)"
    ]
  },
  {
    id: "manual-testing",
    title: "Manual Testing",
    duration: "2–3 Months",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop",
    imageSmall: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=220&fit=crop",
    description: "Master the fundamentals of software quality assurance — test planning, test cases, bug reporting and SDLC/STLC processes.",
    topics: [
      "SDLC & STLC Concepts",
      "Test Case Design & Execution",
      "Bug Reporting & Tracking (Jira)",
      "Agile & Scrum Methodology"
    ]
  }
];

/**
 * ═══════════════════════════════════════════════════════
 *  SERVICES DATA — Single Source of Truth
 *  Used by: enquiry form dropdowns (index.html & contact.html)
 *
 *  To add a new service, just add an object below.
 *  Both form dropdowns will update automatically.
 * ═══════════════════════════════════════════════════════
 */

const SERVICES = [
  { id: "internship-programs",   title: "Internship Programs" },
  { id: "final-year-projects",   title: "Final Year Projects" },
  { id: "placement-support",     title: "Placement Support" },
  { id: "corporate-training",    title: "Corporate Training" },
  { id: "web-development",       title: "Web Development" },
  { id: "digital-marketing",     title: "Digital Marketing" }
];
