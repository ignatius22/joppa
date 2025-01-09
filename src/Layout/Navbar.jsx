import React, { useState } from "react";
import _ from "lodash";
import styled from "styled-components";
import Logo from "../assets/svg/logo.svg";

import VideoIcon from "../assets/svg/Vector.svg";

import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { responsive } from "../utils/responsive";
import { rem } from "../utils/responsiveHelpers";



const NavBar = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  height: 61px;
  border-radius: 40px;
  background-color: #eeece1;
  border: ${({ showBorder }) => (showBorder ? "1px solid white" : "none")};
  color: white;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
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
    justify-content: space-evenly; /* Ensure content stays centered */
    width:50%;
    margin:2% 22%;
    padding: 0 3.5%;
  `
  )}

  ${responsive(
    "xs",
    `
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    margin-left: 2.5%;
    border: none;
    width: 90%;
    background-image: none;
  `
  )}
`;

const NavLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;

  cursor: pointer;
`;

const ListIem = styled.li`
  display: flex;
  padding: ${rem(20)};

  ${responsive(
    "md",
    `


  `
  )}
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: ${({ active }) =>
    active ? "600" : "400"}; /* Active link is bold */
  transition: color 0.3s;

  &:hover {
    color: #c986fd;
  }
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
  `
  )}
`;

// const HamburgerLogo = styled.img`
//   width: ${rem(24)};
//   height: ${rem(24)};
// `;

const NavLinksDesktop = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  /* gap: ${rem(15)}; */
  padding-left: 10px;
  padding-right: 10px;
 

  ${responsive(
    "md",
    `
    gap: 20px;
  `
  )}

  ${responsive(
    "sm",
    `
    gap: 12px;
  `
  )}

  ${responsive(
    "xs",
    `
    display: none; /* Hide on mobile */
  `
  )}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 120vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); // Dark overlay background
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 999;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  /* img {
    height: 30px;
  } */

  .close-icon {
    font-size: 20px;
    cursor: pointer;
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 300px;
  background: white;
  border-radius: 16px;
  padding: 20px;
  z-index: 1000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

const NavLinkMob = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #000000;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: background 0.3s ease;
  font-size: 16px;
  line-height: 19px;
  font-family: "Inter", sans-serif;
  font-weight: ${({ active }) =>
    active ? "600" : "400"}; /* Active link is bold */
  transition: color 0.3s;

  &:hover {
    background: #ad52f7;
    color: white;
  }

  &.active {
    background: #d4b2ff;
    font-weight: 700;
    color: white;
  }
`;

// const NotifyLink = styled(Link)`
//   display: ${({ hideNotify }) => (hideNotify ? "none" : "flex")};

//   position: fixed;
//   top: 4.3%;
//   left: 77%;
//   display: flex;
//   align-items: center;
//   height: ${rem(50)};
//   width: ${rem(50)};
//   justify-content: center;
//   border-radius: ${rem(40)};
//   cursor: pointer;
//   background-image: ${({ backgroundColor }) =>
//     backgroundColor || "linear-gradient(360deg, #b65cff, #bf6bff)"};
//   border: ${({ showBorder }) =>
//     showBorder ? "1px solid white" : "none"}; /* Conditional border */

//   ${responsive(
//     "xs",
//     `
//     display:none;
    
//   `
//   )}
// `;
// Styled container for Language Dropdown
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* width: 90%; */
  /* margin-left: 10%; */
  align-items: center;
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
`;
const VideoImg = styled.img`
  width: ${rem(27)};
  height: ${rem(27)};
`

const TabContainer = styled.div`

`;

const TabButton = styled.button`
  flex: 1;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => (props.isActive ? '#FFFFFF' : '#44242D')}; /* Dark brown text */
  background-color: ${(props) => (props.isActive ? '#461F0A' : 'transparent')}; /* Dark brown for active */
  border: none;
  border-radius: 20px; /* Rounded edges */
  font-family: "Inter", serif;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(0.9);
  }
`;

const LinkImg = styled.img`
  height: ${rem(17)};
  width: ${rem(17)};
  border-radius: 30px;
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
const FixedNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Keep track of the active link
  const location = useLocation(); // Get current location (path)
  const [activeTab, setActiveTab] = useState('About us');

  const tabs = ['About us', 'For Businesses', 'For Creators'];

  const [logoSrc] = useState(Logo);
  const [logoxSrc] = useState(logoSrc);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close menu on link click
  };

  // Function to handle scroll events
  // Function to handle scroll events

  // Define a function to set background color based on the route
  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/support":
        return "linear-gradient(360deg, #161616, #161616)"; // Example gradient for About page
      case "/merchant":
        return "linear-gradient(360deg, #161616, #161616)"; // Example gradient for About page
      case "/policy":
        return "linear-gradient(360deg, #161616, #161616)"; // Example gradient for About page
      default:
        return "linear-gradient(360deg, #b65cff, #bf6bff)"; // Default gradient
    }
  };

  // Define a function to decide whether to show a white border
  const shouldShowBorder = () => {
    switch (location.pathname) {
      case "/merchant":
      case "/support":
      case "/policy":
        return true; // Show border on these pages
      default:
        return false; // No border on other pages
    }
  };

  return (
    <Container>
      <NavLogo to="/">
        <LOGOxs src={logoxSrc} alt="Logo" />
      </NavLogo>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width:'55%',
        }}
      >
        <NavBar
          backgroundColor={getBackgroundColor()}
          showBorder={shouldShowBorder()}
          // hideNavbar={hideNavbar}
        >
          <Hamburger onClick={toggleMenu}>
            {/* <HamburgerLogo src={hamburgerIcon} alt="Menu" /> */}
          </Hamburger>
          <NavLinksDesktop>
          <TabContainer>
              {tabs.map((tab) => (
                <TabButton
                  key={tab}
                  isActive={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </TabButton>
              ))}
            </TabContainer>
          </NavLinksDesktop>

          {isOpen && (
            <>
              <Overlay isOpen={isOpen} onClick={toggleMenu} />
              <MenuContainer>
                <LogoWrapper>
                  {/* <LOGOxs src={LogoXSB} alt="Logo" />
                <Dismiss src={Close} onClick={toggleMenu} alt="close icon" /> */}
                </LogoWrapper>
                <NavLinkMob to="/" onClick={() => handleLinkClick("/")}>
                  Home
                  {/* <LinkImg
                  src={ArrowForward}
                  onClick={toggleMenu}
                  alt="ArrowForward icon"
                /> */}
                </NavLinkMob>
                <NavLinkMob
                  to="/about"
                  onClick={() => handleLinkClick("/about")}
                >
                  About
                  {/* <LinkImg
                  src={ArrowForward}
                  onClick={toggleMenu}
                  alt="ArrowForward icon"
                /> */}
                </NavLinkMob>
                <NavLinkMob
                  to="/support"
                  onClick={() => handleLinkClick("/support")}
                >
                  Support
                  {/* <LinkImg
                  src={ArrowForward}
                  onClick={toggleMenu}
                  alt="ArrowForward icon"
                /> */}
                </NavLinkMob>
                <NavLinkMob
                  to="/merchant"
                  onClick={() => handleLinkClick("/merchant")}
                >
                  Merchant
                  {/* <LinkImg
                  src={ArrowForward}
                  onClick={toggleMenu}
                  alt="close icon"
                /> */}
                </NavLinkMob>
                <NavLinkMob
                  to="/safety"
                  onClick={() => handleLinkClick("/safety")}
                >
                  Safety
                  {/* <LinkImg
                  src={ArrowForward}
                  onClick={toggleMenu}
                  alt="close icon"
                /> */}
                </NavLinkMob>
                <NavLinkMob to="/blog" onClick={() => handleLinkClick("/blog")}>
                  Updates
                  {/* <LinkImg
                  src={ArrowForward}
                  onClick={toggleMenu}
                  alt="close icon"
                /> */}
                </NavLinkMob>
              </MenuContainer>
            </>
          )}
        </NavBar>
        <RightContainer>
          <Text>See how it works</Text>
          <VideoImg src={VideoIcon} alt="video icon" />
        </RightContainer>
      </div>
    </Container>
  );
};

export default FixedNavBar;
