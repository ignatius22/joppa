import React, { useState } from "react";
import styled from "styled-components";
// import Telegram from "../../Assets/images/telegram.svg";
// import Instagram from "../../Assets/images/instagram.svg";
// import Facebook from "../../Assets/images/facebook.svg";
// import TikTok from "../../Assets/images/tiktok.svg";
// import Logo from "../../Assets/images/logo.svg";

import { Link } from "react-router-dom";


import { SocialLink } from "./component/SocialLink";
import { responsive } from "../utils/responsive";
import { rem } from "../utils/responsiveHelpers";

// Language Dropdown Options
// const languageOptions = [
//   { value: "en", label: "EN" },
//   { value: "fr", label: "FR" },
//   { value: "es", label: "ES" },
//   { value: "de", label: "DE" },
// ];

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, rgba(251, 140, 36, 0) 30.82%, rgba(251, 140, 36, 0.17) 100%);
  color: #461F0A;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  padding: 7.5%;

  ${responsive("xl", ``)}
  ${responsive(
    "sm",
    `
    flex-direction: column;
    align-items: flex-start;
    `
  )}
  ${responsive(
    "xs",
    `
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    padding: 10%;
    `
  )}
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem(20)};

  ${responsive(
    "xs",
    `
    align-items: flex-start;
    `
  )}
`;

const FooterLogo = styled.div``;

const BrandIcon = styled(Link)`
  text-decoration: none;
`;

const FooterLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;

  ${responsive(
    "xs",
    `
    flex-direction: column;
    align-items: start;
    padding-top: 5%;
    `
  )}
`;

const CopyRight = styled.div`
  color: inherit;

  p {
    font-family: "ClashDisplay-Regular", serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 29.16px;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: "Inter", serif;
  font-weight: 400;
  font-size: 16px;

  &:hover {
    color: #f39c12;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${rem(15)};

  a {
    color: white;
    font-size: ${rem(24)};
    transition: color 0.3s ease;

    &:hover {
      color: #f39c12;
    }
  }
`;

// Styled container for Language Dropdown
const LanguageDropdownContainer = styled.div`
  margin-top: ${rem(20)};
  width: 100px;
  ${responsive(
    "xs",
    `
   display:none;
    `
  )}
`;

const Footer = () => {
  // const [selectedOption, setSelectedOption] = useState(languageOptions[0]);
  // const { t } = useTranslation();

  // Handle language change


  return (
    <FooterContainer id="footer">
      <FooterSection>
        <LogoContainer>
          <FooterLogo>
            <BrandIcon to="/">
              {/* <img src={Logo} alt="This is a logo" /> */}
            </BrandIcon>
            <CopyRight>
              <p>© 2025 Joppa Creative Network Limited</p>
            </CopyRight>
          </FooterLogo>

          {/* <SocialIcons>
            <SocialLink
              href="#"
              iconSrc={Telegram}
              altText="Telegram icon"
              aria-label="Visit our Telegram page"
            />

            <SocialLink
              href="#"
              iconSrc={Instagram}
              altText="Instagram icon"
              aria-label="Visit our Instagram page"
            />

            <SocialLink
              href="#"
              iconSrc={TikTok}
              altText="TikTok icon"
              aria-label="Visit our TikTok page"
            />
            <SocialLink
              href="#"
              iconSrc={Facebook}
              altText="Facebook icon"
              aria-label="Visit our Facebook page"
            />
          </SocialIcons> */}
        </LogoContainer>
      </FooterSection>


    </FooterContainer>
  );
};

export default Footer;
