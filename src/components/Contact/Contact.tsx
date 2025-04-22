import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import whatsappIcon from "../../assets/whatsapp.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:faheemjd1@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:faheemjd1@gmail.com">faheemjd1@gmail.com</a>
        </div>
        <div>
          <a href="https://wa.me/94771011001" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="https://wa.me/94771011001" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
      </div>
      <br></br>
      <header className="schedule-header">
        <h2>Schedule a Meeting</h2>
        <p className="description">Book a 30-minute consultation at your convenience</p>
      </header>
      <div className="calendly-inline-widget" data-url="https://calendly.com/faheemjd1/30min" style={{ minWidth: '320px', height: '700px' }}></div>
    </Container>
  );
}
