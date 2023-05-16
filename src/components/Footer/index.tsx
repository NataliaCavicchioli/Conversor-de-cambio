import { FiSun } from "react-icons/fi";
import { FooterBox } from "./styles";

const Footer = () => (
  <FooterBox>
    <span className="container_footer_span">Designed by </span>
    <span className="container_footer_name">
      Natalia Cavicchioli <FiSun />
    </span>
  </FooterBox>
);

export default Footer;
