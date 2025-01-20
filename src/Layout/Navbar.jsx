import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/svg/logo.svg";

import VideoIcon from "../assets/svg/Vector.svg";

import { Link } from "react-router-dom"; // Import useLocation
import { responsive } from "../utils/responsive";
import { rem } from "../utils/responsiveHelpers";
import {
  BackArrowIconXs,
  CloseIcon,
  InstaIconXs,
  LargeLogo,
  LinkedinIconXs,
  MenuXs,
  TikTokIconXs,
  XIconXs,
  YTIconXs,
} from "../assets/svg";
import { SocialLink } from "./component/SocialLink";

const NavBar = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  width: ${rem(443)};
  height: ${rem(57)};
  border-radius: 40px;
  background-color: rgba(68, 36, 45, 0.1);
  border: ${({ showBorder }) => (showBorder ? "1px solid white" : "none")};
  color: white;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  padding-left: 6px;
  padding-right: 6px;
  z-index: 1000;
  transition: all 0.3s ease;

  ${responsive(
    "xl",
    `

    `
  )}
  ${responsive(
    "lg",
    `
    justify-content: space-evenly; /* Override to maintain center alignment */
   
    `
  )}

  ${responsive(
    "md",
    `
 
   


  `
  )}

  ${responsive(
    "sm",
    `
    // justify-content: space-evenly; /* Ensure content stays centered */
    // width:50%;
    // margin:2% 22%;
    // padding: 0 3.5%;
  `
  )}

  ${responsive(
    "xs",
    `
    display:none;
    align-items: center;
  `
  )}
`;

const NavLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;

  cursor: pointer;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: ${rem(24)};
  cursor: pointer;

  ${responsive(
    "xs",
    `
    display: flex;
    align-items:center;
  `
  )}
`;

const HamburgerLogo = styled.img`
  width: ${rem(24)};
  height: ${rem(24)};
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  color: white;
  z-index: 9999;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${rem(15)};
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
`;

const Container = styled.div`
  display: flex;
  /* justify-content: space-around; */
  justify-content: space-between;
  margin-left: 10%;
  width: 80%;
  align-items: center;

  ${responsive(
    "md",
    `
     justify-content: space-between;
     width: 95%;
     margin: 2.5%;
  `
  )}
  ${responsive(
    "xs",
    `
     justify-content: space-between;
     width: 95%;
     margin: 2.5%;
     background-color: transparent;
  `
  )}
`;

const RightContainer = styled.button`
  border-radius: ${rem(20)};
  background-color: #461f0a;
  width: ${rem(223)};
  height: ${rem(47)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${rem(15)};
  cursor: pointer;
  ${responsive(
    "xs",
    `
     display:none;
  `
  )}
`;
const VideoImg = styled.img`
  width: ${rem(27)};
  height: ${rem(27)};
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TabButton = styled.a`
  flex: 1;
  font-size: 16px;
  padding: 12px;
  width: 100%;
  font-weight: 400;
  color: ${(props) =>
    props.isActive ? "#FFFFFF" : "#44242D"}; /* Dark brown text */
  background-color: ${(props) =>
    props.isActive ? "#461F0A" : "transparent"}; /* Dark brown for active */
  border: none;
  border-radius: ${rem(30)}; /* Rounded edges */
  font-family: "Inter", serif;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(0.9);
  }
  ${responsive(
    "xs",
    `
     display:none;
  `
  )}
`;

const LOGOxs = styled.img`
  width: ${rem(72)};
  cursor: pointer;
`;

// const Dismiss = styled.img`
//   cursor: pointer;
// `;

const Text = styled.p`
  color: #ffffff;
  text-align: center;
  font-family: "Inter", serif;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  font-weight: 700;
`;

const TextXs = styled.a`
  color: #ffffff;
  text-align: center;
  font-family: "ClashDisplay-Regular", serif;
  font-size: ${rem(16)};
  line-height: ${rem(23)};
  font-weight: 500;
`;


const CloseButton = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  align-self: self-end;
  padding: 20px;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: ${rem(30)};
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const FooterLogo = styled.div``;

const CopyRight = styled.div`
  color: inherit;

  p {
    font-family: "ClashDisplay-Regular", serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 29.16px;
    color: #fff;
  }
`;
const LogoImage = styled.img`
  width: 192px;
  height: 150px;
`;



const JoinButton = styled.a`
  background-color: #c1f52f;
  color: #461f0a;
  font-weight: 600;
  font-family: "Inter", sans-serif;

  width: ${rem(219.48)};
  height: ${rem(44.63)};
  font-size: ${rem(16)};
  font-weight: 600;
  line-height: ${rem(15.8)};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-decoration: none;
`;

const GroupNav = styled.div`
  display: flex;
  gap: ${rem(81.13)};
`;

const GoupText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(30)};
`;

const ArrowIcon = styled.img``;

const FixedNavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal initially closed
  const [activeTab, setActiveTab] = useState("About us");

  const tabs = ["About us", "For Businesses", "For Creators"];

  const [logoSrc] = useState(Logo);
  const [logoxSrc] = useState(logoSrc);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <NavLogo to="/">
        <LOGOxs src={logoxSrc} alt="Logo" />
      </NavLogo>
      <GroupNav>
        <NavBar>
          <TabContainer>
            {tabs.map((tab) => (
              <TabButton
                key={tab}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                href="#"
              >
                {tab}
              </TabButton>
            ))}
          </TabContainer>
        </NavBar>
        {isOpen && (
          <MenuContainer isOpen={isOpen}>
            <ModalWrapper>
              <CloseButton src={CloseIcon} alt="Close" onClick={toggleMenu} />

              <div>
                <LogoContainer>
                  <LogoImage src={LargeLogo} alt="Logo" />
                  <GoupText>
                    <TextXs>Contact us</TextXs>
                    <TextXs>See how it works</TextXs>
                  </GoupText>

                  <JoinButton
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfRy-4gSx1XbTb61uWZB_aHZcHGTiXMiMeOxrAnu9F6eDLeLg/viewform?usp=preview"
                    target="_blank"
                  >
                    Join Joppa
                    <ArrowIcon src={BackArrowIconXs} alt="arrow out" />
                  </JoinButton>
                </LogoContainer>
              </div>
              <FooterContainer id="footer">
                <FooterLogo>
                  <CopyRight>
                    <p>© 2025 Joppa Creative Network Limited</p>
                  </CopyRight>
                </FooterLogo>

                <SocialIcons>
                  <SocialLink
                    href="#"
                    iconSrc={XIconXs}
                    altText="X icon"
                    aria-label="Visit our X page"
                  />

                  <SocialLink
                    href="#"
                    iconSrc={YTIconXs}
                    altText="Youtube icon"
                    aria-label="Visit our youtube page"
                  />

                  <SocialLink
                    href="https://www.tiktok.com/@bejoppa?_t=ZM-8tDuU3nuVTJ&_r=1"
                    iconSrc={TikTokIconXs}
                    altText="Tiktok icon"
                    aria-label="Visit our tiktok page"
                  />

                  <SocialLink
                    href="https://www.instagram.com/bejoppa?igsh=anpmYWc4Mm5nNThy"
                    iconSrc={InstaIconXs}
                    altText="Insta icon"
                    aria-label="visit our Insta page"
                  />
                  <SocialLink
                    href="https://www.linkedin.com/company/bejoppa/"
                    iconSrc={LinkedinIconXs}
                    altText="LinkedIn icon"
                    aria-label="Visit our Linkedin page"
                  />
                </SocialIcons>
              </FooterContainer>
            </ModalWrapper>
          </MenuContainer>
        )}
        <RightContainer>
          <Text>See how it works</Text>
          <VideoImg src={VideoIcon} alt="video icon" />
        </RightContainer>
      </GroupNav>

      <Hamburger onClick={toggleMenu}>
        <HamburgerLogo src={MenuXs} alt="Menu" />
      </Hamburger>
    </Container>
  );
};

export default FixedNavBar;
