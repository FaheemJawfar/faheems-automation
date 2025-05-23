import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/intro.png";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Waving hand emoji" width="20px" />, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Faheem J.</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h2>Top Rated Automation Engineer</h2>
          <h3>Make.com & N8N Specialist</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">8+ Years Experience | 100+ Automated Workflows</p>
          <p className="small-resume">Helping businesses save 1000+ work hours</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/faheem-j/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn Profile" />
            </a>
            <a href="https://github.com/FaheemJawfar" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub Profile" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B94771011001&text=Hello+Faheem+I+found+your+contact+through+portfolio+site.%0A%0A"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp Contact" />
            </a>
            {/* <a href="https://t.me/CodeFaheemtest" target="_blank" rel="noreferrer">
              <img src={telegram} alt="Telegram Contact" />
            </a> */}
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Automation workflow illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
