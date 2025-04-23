import { Container } from "./styles";
import FaheemJ from "../../assets/a1.jpg";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about" itemScope itemType="http://schema.org/Person">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About <span itemProp="name">Faheem J.</span></h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p itemProp="description">
            Hi there! I'm a <span itemProp="jobTitle">Top Rated Automation Expert</span> on Upwork specializing in
            Make.com and N8N platforms. I help businesses automate workflows and
            integrate systems for maximum efficiency.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I've designed and implemented over 100+ automation workflows that collectively save businesses 10,000+ work hours annually. My solutions connect disparate systems and eliminate manual processes.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            With over 8 years as a Top Rated freelancer on Upwork, I've delivered
            automation solutions for 50+ clients worldwide with 100% satisfaction.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education" itemScope itemType="http://schema.org/EducationalOccupationalCredential">
            <h3>Education:</h3>
            <h4 itemProp="name">Bachelor of Software Engineering (BSE)</h4>
            <p itemProp="educationalLevel">
              Open University of Sri Lanka (2023 - Present)
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience" itemScope itemType="http://schema.org/Occupation">
            <h3>Experience:</h3>
            <h4 itemProp="name">Top Rated Automation Expert</h4>
            <p>Upwork.com | 2015 - Present</p>
            <p>Specializations:</p>
            <ul>
              <li itemProp="skills">Make.com (Integromat) workflow automation</li>
              <li itemProp="skills">N8N workflow orchestration</li>
              <li itemProp="skills">API integrations</li>
              <li itemProp="skills">Business process automation</li>
            </ul>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>My Automation & Development Stack:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={python} alt="Python programming language" itemProp="knowsAbout" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="Java programming language" itemProp="knowsAbout" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript programming language" itemProp="knowsAbout" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React JavaScript framework" itemProp="knowsAbout" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="TypeScript programming language" itemProp="knowsAbout" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue.js JavaScript framework" itemProp="knowsAbout" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={wordpress} alt="WordPress CMS platform" itemProp="knowsAbout" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={shopify} alt="Shopify e-commerce platform" itemProp="knowsAbout" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="HTML markup language" itemProp="knowsAbout" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="CSS styling language" itemProp="knowsAbout" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={boostrapIcon} alt="Bootstrap CSS framework" itemProp="knowsAbout" />
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <h4>Automation Platforms:</h4>
          <ul>
            <li itemProp="knowsAbout">Make.com (Integromat)</li>
            <li itemProp="knowsAbout">N8N</li>
            <li itemProp="knowsAbout">Zapier</li>
          </ul>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={FaheemJ} alt="Faheem J., Automation Expert" itemProp="image" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
