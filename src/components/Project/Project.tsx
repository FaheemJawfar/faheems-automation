import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import makeProject1 from "../../assets/screenshots/Vapi Appointment Booking AI Agent.jpg";
import makeProject2 from "../../assets/screenshots/WooCommerce Order Management System.jpg";
import makeProject3 from "../../assets/screenshots/AI Avatar Automation.jpg";
import makeProject4 from "../../assets/screenshots/Automated Faceless Videos.jpg";
import makeProject5 from "../../assets/screenshots/Generate AI Video from Video or Script.jpg";
import makeProject6 from "../../assets/screenshots/Post to Social Media.jpg";
import makeProject7 from "../../assets/screenshots/Google Maps Places to Article Content.jpg";
import makeProject8 from "../../assets/screenshots/Social Media Lead Generator.jpg";
import makeProject9 from "../../assets/screenshots/Automated SMS Outreach.jpg";



interface ProjectItemProps {
  title: string;
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  imageSrc: string;
  imageAlt: string;
  techStack: string[];
  icon?: React.ReactNode;
}

function ProjectItem({
  title,
  description,
  githubUrl,
  demoUrl,
  imageSrc,
  imageAlt,
  techStack,
  icon = (
    <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <title>Folder</title>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  )
}: ProjectItemProps) {
  return (
    <ScrollAnimation animateIn="flipInX">
      <div className="project" itemScope itemType="http://schema.org/CreativeWork">
        <header>
          {icon}
          <div className="project-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <img src={githubIcon} alt={`View ${title} on GitHub`} />
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer">
                <img src={externalLink} alt={`View ${title} Demo`} />
              </a>
            )}
          </div>
        </header>
        <div className="image-preview">
          <img src={imageSrc} alt={imageAlt} itemProp="image" />
        </div>
        <div className="body">
          <h3 itemProp="name">{title}</h3>
          <p itemProp="description">{description}</p>
        </div>
        <footer>
          <ul className="tech-list" itemProp="keywords">
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </footer>
      </div>
    </ScrollAnimation>
  );
}

export function Project() {
  const projects = [
    {
      title: "End-to-End Test Automation Framework",
      description: "Developed a comprehensive test automation framework supporting web, API and mobile testing with parallel execution and CI/CD integration. Reduced testing time by 85% and increased test coverage by 60%.",
      githubUrl: "https://github.com/faheemj/TestAutomationFramework",
      imageSrc: makeProject1,
      imageAlt: "Test Automation Framework architecture diagram",
      techStack: ["Selenium", "Playwright", "Jenkins"]
    },
    {
      title: "Enterprise CI/CD Pipeline",
      description: "Developed an end-to-end CI/CD pipeline with automated testing, security scanning, and deployment to multiple environments. Reduced release cycles from weeks to hours and deployment failures by 90%.",
      githubUrl: "https://github.com/faheemj/CI-Pipeline",
      imageSrc: makeProject2,
      imageAlt: "CI/CD Pipeline workflow diagram",
      techStack: ["Jenkins", "Docker", "Kubernetes"]
    },
    {
      title: "Enterprise RPA Framework",
      description: "Built a scalable RPA framework using UiPath and Python to automate business processes across finance, HR and operations. Saved 5000+ manual hours annually with 99.9% accuracy.",
      githubUrl: "https://github.com/faheemj/RPA-Framework",
      imageSrc: makeProject3,
      imageAlt: "RPA Framework architecture diagram",
      techStack: ["UiPath", "Python", "Power Automate"]
    },
    {
      title: "Automated Test Data Generator",
      description: "Developed a test data generation tool that creates realistic synthetic data for testing automation frameworks. Reduced test data preparation time by 95% while ensuring data privacy compliance.",
      githubUrl: "https://github.com/faheemj/TestDataGenerator",
      imageSrc: makeProject4,
      imageAlt: "Test Data Generator interface screenshot",
      techStack: ["Python", "Faker", "Pandas"]
    },
    {
      title: "Performance Testing Framework",
      description: "Built a distributed performance testing framework using Locust and Kubernetes that can simulate 10,000+ concurrent users. Identified and resolved 15+ critical performance bottlenecks.",
      githubUrl: "https://github.com/faheemj/PerformanceTesting",
      imageSrc: makeProject5,
      imageAlt: "Performance testing results dashboard",
      techStack: ["Locust", "Kubernetes", "Grafana"]
    },
    {
      title: "Enterprise CI/CD Pipeline",
      description: "Developed an end-to-end CI/CD pipeline with automated testing, security scanning, and deployment to multiple environments. Reduced release cycles from weeks to hours and deployment failures by 90%.",
      githubUrl: "https://github.com/faheemj/CI-Pipeline",
      imageSrc: makeProject6,
      imageAlt: "CI/CD Pipeline workflow diagram",
      techStack: ["Jenkins", "Docker", "Kubernetes"]
    },
    {
      title: "Enterprise RPA Framework",
      description: "Built a scalable RPA framework using UiPath and Python to automate business processes across finance, HR and operations. Saved 5000+ manual hours annually with 99.9% accuracy.",
      githubUrl: "https://github.com/faheemj/RPA-Framework",
      imageSrc: makeProject7,
      imageAlt: "RPA Framework architecture diagram",
      techStack: ["UiPath", "Python", "Power Automate"]
    },
    {
      title: "Automated Test Data Generator",
      description: "Developed a test data generation tool that creates realistic synthetic data for testing automation frameworks. Reduced test data preparation time by 95% while ensuring data privacy compliance.",
      githubUrl: "https://github.com/faheemj/TestDataGenerator",
      imageSrc: makeProject8,
      imageAlt: "Test Data Generator interface screenshot",
      techStack: ["Python", "Faker", "Pandas"]
    },
    {
      title: "Performance Testing Framework",
      description: "Built a distributed performance testing framework using Locust and Kubernetes that can simulate 10,000+ concurrent users. Identified and resolved 15+ critical performance bottlenecks.",
      githubUrl: "https://github.com/faheemj/PerformanceTesting",
      imageSrc: makeProject9,
      imageAlt: "Performance testing results dashboard",
      techStack: ["Locust", "Kubernetes", "Grafana"]
    }
  ];

  return (
    <Container id="project" itemScope itemType="http://schema.org/ItemList">
      <h2>Automation Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </Container>
  );
}