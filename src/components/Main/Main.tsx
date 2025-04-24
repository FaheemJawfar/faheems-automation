import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

// Platforms
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import airtableIcon from "../../assets/tech-stack/airtable.svg";
import calendlyTriggerIcon from "../../assets/tech-stack/calendly-trigger.svg";
import clickupIcon from "../../assets/tech-stack/clickup.svg";
import codeIcon from "../../assets/tech-stack/code.svg";
import deepseekChatIcon from "../../assets/tech-stack/deepseek-chat.svg";
import dropboxIcon from "../../assets/tech-stack/dropbox.svg";
import gmailIcon from "../../assets/tech-stack/gmail.svg";
import googleCalendarIcon from "../../assets/tech-stack/google-calendar.svg";
import googleDocsIcon from "../../assets/tech-stack/google-docs.svg";
import googleDriveIcon from "../../assets/tech-stack/google-drive.svg";
import googleSheetsIcon from "../../assets/tech-stack/google-sheets.svg";
import highlevelIcon from "../../assets/tech-stack/highlevel.svg";
import httpRequestIcon from "../../assets/tech-stack/http-request.svg";
import hubspotIcon from "../../assets/tech-stack/hubspot.svg";
import mailchimpIcon from "../../assets/tech-stack/mailchimp.svg";
import mailgunIcon from "../../assets/tech-stack/mailgun.svg";
import microsoftExcelIcon from "../../assets/tech-stack/microsoft-excel.svg";
import microsoftOutlookIcon from "../../assets/tech-stack/microsoft-outlook.svg";
import mongodbIcon from "../../assets/tech-stack/mongodb.svg";
import notionTriggerIcon from "../../assets/tech-stack/notion-trigger-beta.svg";
import odooIcon from "../../assets/tech-stack/odoo.svg";
import openaiIcon from "../../assets/tech-stack/openai.svg";
import pipedriveIcon from "../../assets/tech-stack/pipedrive.svg";
import slackIcon from "../../assets/tech-stack/slack.svg";
import supabaseIcon from "../../assets/tech-stack/supabase.svg";
import telegramIcon from "../../assets/tech-stack/telegram.svg";
import trelloTriggerIcon from "../../assets/tech-stack/trello-trigger.svg";
import twilioIcon from "../../assets/tech-stack/twilio.svg";
import twitterIcon from "../../assets/tech-stack/twitter.svg";
import webhookIcon from "../../assets/tech-stack/webhook.svg";
import woocommerceTriggerIcon from "../../assets/tech-stack/woocommerce-trigger.svg";
import zoomIcon from "../../assets/tech-stack/zoom.svg";

export function Main() {
  const images = [
    wordpress,
    shopify,
    airtableIcon,
    calendlyTriggerIcon,
    clickupIcon,
    codeIcon,
    deepseekChatIcon,
    dropboxIcon,
    gmailIcon,
    googleCalendarIcon,
    googleDocsIcon,
    googleDriveIcon,
    googleSheetsIcon,
    highlevelIcon,
    httpRequestIcon,
    hubspotIcon,
    mailchimpIcon,
    mailgunIcon,
    microsoftExcelIcon,
    microsoftOutlookIcon,
    mongodbIcon,
    notionTriggerIcon,
    odooIcon,
    openaiIcon,
    pipedriveIcon,
    slackIcon,
    supabaseIcon,
    telegramIcon,
    trelloTriggerIcon,
    twilioIcon,
    twitterIcon,
    webhookIcon,
    woocommerceTriggerIcon,
    zoomIcon
  ];

  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": 1
          },
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 2,
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 2
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 2,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 20,
              "value": 15,
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 1
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "image": images.map(src => ({ src, width: 20, height: 20 })),
              "polygon": {
                "sides": 5
              },
              "stroke": {
                "color": "#000000",
                "width": 0
              },
              "type": "image"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": false,
              "value": 16
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
            },
            "move": {
              "radius": 10
            },
            "scale": 1,
            "url": ""
          },
          "background": {
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}