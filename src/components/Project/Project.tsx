import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import vapiAppointment from "../../assets/screenshots/vapi-appointment-booking-ai-agent.jpg";
import woocommerceOrder from "../../assets/screenshots/woocommerce-order-management-system.jpg";
import aiAvatar from "../../assets/screenshots/ai-avatar-email-outreach.jpg";
import facelessVideos from "../../assets/screenshots/automated-faceless-videos.jpg";
import smsOutreach from "../../assets/screenshots/automated-sms-outreach.jpg";
import aiVideoGen from "../../assets/screenshots/generate-ai-video-from-video-or-script.jpg";
import googleMapstoArticle from "../../assets/screenshots/google-maps-places-to-article-content.jpg";
import postToSocialMedia from "../../assets/screenshots/post-to-social-media.jpg";
import socialMediaLeads from "../../assets/screenshots/social-media-lead-generator.jpg";
import facelessPOVVideo from "../../assets/screenshots/faceless-pov-video-ai-agent.jpg";
import top10Videos from "../../assets/screenshots/automated-top10-videos-youtube.jpg";

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
      title: "Vapi Appointment Booking AI Agent",
      description: "Automated appointment scheduling using Vapi's conversational AI with ChatGPT for natural language processing and Google Calendar API for real-time availability checks and bookings.",
      githubUrl: "https://github.com/faheemj/vapi-appointment-agent",
      imageSrc: vapiAppointment,
      imageAlt: "Vapi AI agent conversation interface",
      techStack: ["Vapi", "ChatGPT", "Google Calendar API"]
    },
    {
      title: "WooCommerce Order Management System",
      description: "Automated WooCommerce order fulfillment pipeline with custom API integrations for inventory management, shipping label generation, and customer notifications.",
      githubUrl: "https://github.com/faheemj/woocommerce-automation",
      imageSrc: woocommerceOrder,
      imageAlt: "WooCommerce order management dashboard",
      techStack: ["WooCommerce", "Custom API"]
    },
    {
      title: "AI Avatar Email Outreach",
      description: "Automated personalized email campaigns using HeyGen AI avatars with dynamic content from Airtable, ChatGPT for message generation, and Gmail API for delivery tracking.",
      githubUrl: "https://github.com/faheemj/ai-avatar-automation",
      imageSrc: aiAvatar,
      imageAlt: "AI Avatar Email Outreach dashboard",
      techStack: ["HeyGen AI","Airtable", "ChatGPT", "Gmail API", "Cloudinary"]
    },
    {
      title: "Automated Faceless Videos",
      description: "Automated YouTube video production pipeline using ElevenLabs for AI narration, Leanardo AI for visuals, and Google Drive integration for asset management via Airtable triggers.",
      githubUrl: "https://github.com/faheemj/faceless-video-automation",
      imageSrc: facelessVideos,
      imageAlt: "Automated video creation interface",
      techStack: ["Aitable","ElevenLabs", "Google Drive", "Leanardo AI"]
    },
    {
      title: "Automated SMS Outreach",
      description: "Automated SMS campaign management with Google Sheets for contact lists and message templates, integrated with RingCentral API for message delivery and response tracking.",
      githubUrl: "https://github.com/faheemj/sms-automation",
      imageSrc: smsOutreach,
      imageAlt: "SMS campaign management dashboard",
      techStack: ["Google Sheets", "RingCentral API"]
    },
    {
      title: "AI Video Generator",
      description: "Automated video production workflow using HeyGen AI for avatar generation, ChatGPT for script writing, and Airtable for content management with RapidAPI integrations.",
      githubUrl: "https://github.com/faheemj/ai-video-generator",
      imageSrc: aiVideoGen,
      imageAlt: "AI video generation interface",
      techStack: ["HeyGen AI", "RapidAPI", "ChatGPT", "Airtable"]
    },
    {
      title: "Google Maps to Article Content",
      description: "Automated content creation pipeline extracting business data via Google Maps API, processing with DeepSeek AI, and storing outputs in Box.com.",
      githubUrl: "https://github.com/faheemj/maps-to-article",
      imageSrc: googleMapstoArticle,
      imageAlt: "Google Maps content automation workflow",
      techStack: ["Google Maps API", "RapidAPI", "Box.com API", "DeepSeek AI"]
    },
    {
      title: "Social Media Post Automation",
      description: "Automated cross-platform social media management system with unified API integrations for Facebook, Twitter, Instagram, and LinkedIn post scheduling and analytics.",
      githubUrl: "https://github.com/faheemj/social-media-automation",
      imageSrc: postToSocialMedia,
      imageAlt: "Social media posting dashboard",
      techStack: ["Facebook API", "Twitter API", "Instagram API", "LinkedIn API"]
    },
    {
      title: "Social Media Lead Generator",
      description: "Automated lead identification system using Google Search API for discovery, OpenRouter for API management, with Gemini AI and DeepSeek AI for lead qualification.",
      githubUrl: "https://github.com/faheemj/social-lead-generator",
      imageSrc: socialMediaLeads,
      imageAlt: "Lead generation analytics dashboard",
      techStack: ["Google Search API", "OpenRouter API", "Gemini AI", "DeepSeek AI"]
    },
    {
      title: "Faceless POV Video AI Agent",
      description: "Automated first-person perspective video creation using ChatGPT for script generation, Flux AI for scene composition, KlingAI for image to video conversion, with YouTube API for publishing and Google Drive for asset storage.",
      githubUrl: "https://github.com/faheemj/faceless-pov-agent",
      imageSrc: facelessPOVVideo,
      imageAlt: "Faceless POV video creation interface",
      techStack: ["ChatGPT", "Flux AI", "Youtube API", "KlingAI", "Google Drive"]
    },
    {
      title: "Automated Top 10 Videos to YouTube",
      description: "Automated production of 'Top 10' style videos using ChatGPT for research and scripting, JSON2Video API for video assembly, with YouTube API for scheduling uploads and Google Sheets for content management.",
      githubUrl: "https://github.com/faheemj/top10-video-automation",
      imageSrc: top10Videos,
      imageAlt: "Top 10 video automation dashboard",
      techStack: ["ChatGPT", "JSON2Video API", "Youtube API", "Google Sheets"]
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