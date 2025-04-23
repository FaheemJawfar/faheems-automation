import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import automationProject1 from "../../assets/a1.jpg";
import automationProject2 from "../../assets/a2.jpg";
import automationProject3 from "../../assets/a3.jpg";

export function Project() {
  return (
    <Container id="project" itemScope itemType="http://schema.org/ItemList">
      <h2>Automation Engineering Portfolio</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project" itemScope itemType="http://schema.org/CreativeWork">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/faheemj/TestAutomationFramework" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="View Test Automation Framework on GitHub" />
                </a>
              </div>
            </header>
            <div className="image-preview">
              <img src={automationProject1} alt="Test Automation Framework architecture diagram" itemProp="image" />
            </div>
            <div className="body">
              <h3 itemProp="name">End-to-End Test Automation Framework</h3>
              <p itemProp="description">
                Developed a comprehensive test automation framework supporting web, API and mobile testing with parallel execution and CI/CD integration. Reduced testing time by 85% and increased test coverage by 60%.
              </p>
            </div>
            <footer>
              <ul className="tech-list" itemProp="keywords">
                <li>Selenium</li>
                <li>Playwright</li>
                <li>Jenkins</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project" itemScope itemType="http://schema.org/CreativeWork">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/faheemj/CI-Pipeline" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="View CI/CD Pipeline on GitHub" />
                </a>
                <a href="https://ci-pipeline.example.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="View CI/CD Pipeline Demo" />
                </a>
              </div>
            </header>
            <div className="image-preview">
              <img src={automationProject2} alt="CI/CD Pipeline workflow diagram" itemProp="image" />
            </div>
            <div className="body">
              <h3 itemProp="name">Enterprise CI/CD Pipeline</h3>
              <p itemProp="description">
                Developed an end-to-end CI/CD pipeline with automated testing, security scanning, and deployment to multiple environments. Reduced release cycles from weeks to hours and deployment failures by 90%.
              </p>
            </div>
            <footer>
              <ul className="tech-list" itemProp="keywords">
                <li>Jenkins</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project" itemScope itemType="http://schema.org/CreativeWork">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/faheemj/RPA-Framework" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="View RPA Framework on GitHub" />
                </a>
                <a href="https://rpa-framework.example.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="View RPA Framework Demo" />
                </a>
              </div>
            </header>
            <div className="image-preview">
              <img src={automationProject3} alt="RPA Framework architecture diagram" itemProp="image" />
            </div>
            <div className="body">
              <h3 itemProp="name">Enterprise RPA Framework</h3>
              <p itemProp="description">
                Built a scalable RPA framework using UiPath and Python to automate business processes across finance, HR and operations. Saved 5000+ manual hours annually with 99.9% accuracy.
              </p>
            </div>
            <footer>
              <ul className="tech-list" itemProp="keywords">
                <li>UiPath</li>
                <li>Python</li>
                <li>Power Automate</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project" itemScope itemType="http://schema.org/CreativeWork">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/faheemj/TestDataGenerator" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="View Test Data Generator on GitHub" />
                </a>
                <a href="https://testdata.example.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="View Test Data Generator Demo" />
                </a>
              </div>
            </header>
            <div className="image-preview">
              <img src={automationProject1} alt="Test Data Generator interface screenshot" itemProp="image" />
            </div>
            <div className="body">
              <h3 itemProp="name">Automated Test Data Generator</h3>
              <p itemProp="description">
                Developed a test data generation tool that creates realistic synthetic data for testing automation frameworks. Reduced test data preparation time by 95% while ensuring data privacy compliance.
              </p>
            </div>
            <footer>
              <ul className="tech-list" itemProp="keywords">
                <li>Python</li>
                <li>Faker</li>
                <li>Pandas</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project" itemScope itemType="http://schema.org/CreativeWork">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/faheemj/PerformanceTesting" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="View Performance Testing Framework on GitHub" />
                </a>
                <a href="https://perftest.example.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="View Performance Testing Demo" />
                </a>
              </div>
            </header>
            <div className="image-preview">
              <img src={automationProject3} alt="Performance testing results dashboard" itemProp="image" />
            </div>
            <div className="body">
              <h3 itemProp="name">Performance Testing Framework</h3>
              <p itemProp="description">
                Built a distributed performance testing framework using Locust and Kubernetes that can simulate 10,000+ concurrent users. Identified and resolved 15+ critical performance bottlenecks.
              </p>
            </div>
            <footer>
              <ul className="tech-list" itemProp="keywords">
                <li>Locust</li>
                <li>Kubernetes</li>
                <li>Grafana</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}