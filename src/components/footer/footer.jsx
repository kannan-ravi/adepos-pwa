import {
  Facebook,
  Instagram,
  Mail,
  SupportAgent,
  X,
  YouTube,
} from "@mui/icons-material";
import "./footer.scss";
import { Link } from "react-router-dom";

import { Container } from "@mui/material";
import FooterForm from "./footerForm/footerForm";
import FooterBottom from "./footerBottom/footerBottom";
import PlayStore from "../../images/footer/play-store.png";
import AppStore from "../../images/footer/app-store.png";

export default function Footer() {
  return (
    <footer className="footer-container-main">
      <Container>
        <div className="footer-container">
          <div>
            <h2>ADEPOS</h2>
            <div className="footer-form-container">
              <p className="footer-small-text">
                Subscribe to our newletter to get latest updates
              </p>
              <FooterForm />
            </div>
            <div>
              <p className="footer-small-text">Follow Us On</p>
              <div className="flex-start-center footer-icons">
                <Facebook />
                <X />
                <Instagram />
                <YouTube />
              </div>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Useful Links</h3>
            <ul className="footer-links flex-col-center-start">
              <li>
                <Link to="/cookie-policy">Cookies Policy</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Download Our Apps</h3>
            <div className="flex-start-center footer-app-image">
              <img src={PlayStore} alt="Google Play Store" />
              <img src={AppStore} alt="Google Play Store" />
            </div>
            <ul className="footer-links flex-col-center-start">
              <li>
                <Link to="/" className="flex-start-center">
                  <Mail /> info@adepos.com
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="flex-start-center">
                  <SupportAgent />
                  +9876543210
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <FooterBottom />
    </footer>
  );
}
