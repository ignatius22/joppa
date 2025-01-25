import React from "react";
import styled from "styled-components";
import { SocialLink } from "./component/SocialLink";
import { responsive } from "../utils/responsive";
import { rem } from "../utils/responsiveHelpers";
import {
  InstaIcon,
  LinkedinIcon,
  TikTokIcon,
  XIcon,
  YTIcon,
} from "../assets/svg";

const FooterContainer = styled.footer`
  background: linear-gradient(
    180deg,
    rgba(251, 140, 36, 0) 30.82%,
    rgba(251, 140, 36, 0.17) 100%
  );
  color: #461f0a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 5%;
  margin-top: 10%;

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
     display:flex;
     padding-bottom:240px;
    `
  )}
`;

const FooterLogo = styled.div``;

const CopyRight = styled.div`
  color: inherit;

  p {
    font-family: "ClashDisplay-Regular", serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 29.16px;
  }
  ${responsive(
    "xs",
    `
    display:none;
    `
  )}
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${rem(45)};
  align-items: center;
  justify-content: center;

  a {
    color: white;
    font-size: ${rem(24)};
    transition: color 0.3s ease;

    &:hover {
      color: #f39c12;
    }
  }
  ${responsive(
    "xs",
    `
    display:none;
    `
  )}
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterLogo>
        <CopyRight>
          <p>© 2025 Joppa Creative Network Limited</p>
        </CopyRight>
      </FooterLogo>

      <SocialIcons>
        <SocialLink
          href="https://x.com/usejoppa?s=21"
          iconSrc={XIcon}
          altText="X icon"
          aria-label="Visit our X page"
        />

        <SocialLink
          href="https://youtube.com/@joppacreative?si=-KNGpA5kq8NsHx_I"
          iconSrc={YTIcon}
          altText="Youtube icon"
          aria-label="Visit our youtube page"
        />

        <SocialLink
          href="https://www.tiktok.com/@bejoppa?_t=ZM-8tDuU3nuVTJ&_r=1"
          iconSrc={TikTokIcon}
          altText="Tiktok icon"
          aria-label="Visit our tiktok page"
          
        />

        <SocialLink
          href="https://www.instagram.com/bejoppa?igsh=anpmYWc4Mm5nNThy"
          iconSrc={InstaIcon}
          altText="Insta icon"
          aria-label="visit our Insta page"
        />
        <SocialLink
          href="https://www.linkedin.com/company/bejoppa/"
          iconSrc={LinkedinIcon}
          altText="LinkedIn icon"
          aria-label="Visit our Linkedin page"
        />
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
