import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import whatsappIcon from "../../assets/whatsapp.svg";

export function Contact() {
  return (
    <Container
      id="contact"
      itemScope
      itemType="http://schema.org/LocalBusiness"
    >
      <header>
        <h2>Contact Me</h2>
        <p>Ready to get started on your project?</p>
        <p>Contact me now for a Free consultation on your automation needs.</p>
      </header>

      <div
        className="contacts"
        itemScope
        itemType="http://schema.org/ContactPoint"
      >
        <div>
          <a href="mailto:faheemjd1@gmail.com" itemProp="email">
            <img
              src={emailIcon}
              alt="Email icon - Contact Faheem J. via email"
            />
          </a>
          <a href="mailto:faheemjd1@gmail.com" itemProp="email">
            faheemjd1@gmail.com
          </a>
        </div>
        <div>
          <a
            href="https://wa.me/94771011001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp icon - Chat with Faheem J. on WhatsApp"
            />
          </a>
          <a
            href="https://wa.me/94771011001"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <br></br>

      <header className="schedule-header">
        <h2>Schedule a Meeting</h2>
        <p className="description">
          Book a 30-minute consultation at your convenience
        </p>
      </header>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/faheemjd1/30min"
        style={{ minWidth: "320px", height: "700px" }}
        itemScope
        itemType="http://schema.org/ScheduleAction"
      ></div>
    </Container>
  );
}
