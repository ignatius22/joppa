import React, { useState } from "react";
import styled from "styled-components";
import { rem } from "../utils/responsiveHelpers";
import {
  BackArrowIcon,
  BinoIcon,
  BinoIconXs,
  BookIcon,
  GlobeIcon,
  GlobeIconXs,
  MailIcon,
  PanIcon,
  PizzaIcon,
  StatIcon,
  StatIconXs,
} from "../assets/svg";
import { responsive } from "../utils/responsive";
import { Illustration, Illustration2 } from "../assets/images";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  ${responsive(
    "xs",
    `
    flex-direction: column;
     margin-top: 10%;
     margin-bottom: 0%;
    `
  )}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  ${responsive(
    "xs",
    `
  
    `
  )}
`;

const TagsContainer = styled.div`
  position: absolute;
  margin-bottom: -30px;
  display: block;
  bottom: 91.8%;

  ${responsive(
    "xl",
    `
      // bottom: 91.8%;
      
    `
  )}
  ${responsive(
    "md",
    `
     bottom: 91.8%;
      
    `
  )}
  ${responsive(
    "xs",
    `
     display:none;
  `
  )}
`;

const Tag = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  font-size: 16px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  padding: 13px 10px;
  border-radius: 8px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.rotation});
`;

const TagXs = styled.div`
  position: absolute;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  font-size: 9px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  padding: 9px 10px;
  border-radius: 8px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.rotation});
`;

const MainText = styled.span`
  font-family: "ClashDisplay-Semibold", serif;
  font-size: ${rem(128)};
  color: #44242d;
  line-height: ${rem(102)};

  ${responsive(
    "xs",
    `
     font-size: ${rem(77)};
     width: 100%;
     line-height: ${rem(61.51)};
    `
  )}
`;

const SubText = styled.span`
  font-size: ${rem(21)};
  color: #4d2a17;
  font-family: "ClashDisplay-Medium", serif;
  line-height: ${rem(23)};
  ${responsive(
    "xs",
    `
     font-size: ${rem(20)};
     width: 100%;
     line-height: ${rem(21)};
    `
  )}
`;

const Emoji = styled.span`
  font-size: 128px;
  font-weight: 600;
  text-align: center;
  ${responsive(
    "xs",
    `
     font-size: ${rem(77.2)};
     width: 100%;
     line-height: ${rem(86.24)};
    `
  )}
`;

const Button = styled.a`
  background-color: #4b3528;
  color: #fffbf7;
  font-size: ${rem(21)};
  font-weight: 600;
  font-family: "Inter", sans-serif;
  width: ${rem(311)};
  height: ${rem(54)};
  border: none;
  border-radius: 30px;
  margin-top: ${rem(45)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  box-shadow: 0px 5px 0px #27180f; /* Add shadow here */

  ${responsive(
    "xs",
    `
     width: ${rem(219.48)};
     height: ${rem(44.63)};
     font-size: ${rem(13)};
     font-weight: 600;
     line-height: ${rem(15.8)}
    `
  )}
`;

const ArrowIcon = styled.img``;
const WrapperUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${rem(71.7)};
  width: ${rem(568)};
  height: ${rem(324)};
  z-index: 1;
  ${responsive(
    "xs",
    `
    width: ${rem(345.1)};
    height: ${rem(195.4)};
    padding-top: ${rem(70)};
    `
  )}
`;

const WrapperDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${rem(24)};
  width: ${rem(424)};

  ${responsive(
    "sm",
    `
     width: 90%;
    //  padding-left: ${rem(60)};
    //  padding-right: ${rem(60)};
    `
  )}

  ${responsive(
    "xs",
    `
     width: 90%;
    //  padding-left: ${rem(60)};
    //  padding-right: ${rem(60)};
    `
  )}
    ${responsive(
    "custom375",
    `
     width: 95%;
    //  padding-left: ${rem(60)};
    //  padding-right: ${rem(60)};
    `
  )}
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(68, 36, 45, 0.1);
  border-radius: ${rem(40)};
  padding: 5px;
  width: ${rem(356)};
  height: ${rem(57)};
  margin-top: ${rem(165)};
  ${responsive(
    "xs",
    `
    width: ${rem(297.72)};
    height: ${rem(47.47)};
    margin-top: ${rem(57)};
    `
  )}
`;

const ToggleButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "ClashDisplay-Bold", serif;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => (props.active ? "#461F0A" : "#96867D")};
  background-color: ${(props) => (props.active ? "#C1F52F" : "transparent")};
  box-shadow: ${(props) =>
    props.active ? "0px 4px 0px #94C901" : "transparent"};
  border-radius: 30px;
  cursor: pointer;
  height: 90%;
  transition: all 0.3s ease;
  ${responsive(
    "xs",
    `
    font-size: 16px;
    line-height: ${rem(16.65)}
    `
  )}
`;

const FeatureRoot = styled.div`
  background-color: ${(props) => props.color};
  border-radius: ${rem(40.5)};
  /* margin-left: 64px;
  margin-right: 64px; */
  width: 95%;
  margin-top: 112px;
  height: ${rem(560)};

  ${responsive(
    "xl",
    `
    // height: 75vh;

  `
  )}
  ${responsive(
    "md",
    `
    display: block;
    width:90%;


  `
  )}
  ${responsive(
    "xs",
    `
    height: auto; /* Adjust for content-based height */

    margin-top: ${rem(20)};
    display: flex; /* Ensure it displays properly on mobile */
    flex-direction: column; /* Stack children vertically */
    align-items: center; /* Center children horizontally */
    justify-content: center; /* Center children vertically */
    background-color: transparent; /* Remove background color on mobile */
    `
  )}
`;

const FeatureWrapper = styled.div`
  display: flex;
  margin-bottom: 10%;
  gap: ${rem(68)};
  ${responsive(
    "md",
    `
    gap: ${rem(30)};
  `
  )}

  ${responsive(
    "xs",
    `
    flex-direction:column;
    width: 100%;
    margin-right: 0%;
    align-items: center;
    margin-left: 0%;
    
  `
  )}
`;

const TextContainer = styled.div`
  /* width: 672px; */
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 100px;
  gap: 13px;

  ${responsive(
    "md",
    `
    padding-right:50px;
  `
  )}
  ${responsive(
    "xs",
    `
    padding-right:0px;
  `
  )}
`;

const Text = styled.span`
  font-family: "ClashDisplay-Light", serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: ${(props) => props.color};
  padding-right: ${rem(58)};
  ${responsive(
    "md",
    `
    width: 100%;
    font-size: 14px;
    padding-right: 20px;
  
  `
  )}

  ${responsive(
    "xs",
    `
    width: 100%;
    color: #461F0A;
    padding-right: 0px;
  
  `
  )}
`;

const Title = styled.span`
  font-family: "ClashDisplay-Bold", serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  color: ${(props) => props.color};
  ${responsive(
    "md",
    `
    width: 100%;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  
  `
  )}
  ${responsive(
    "xs",
    `
    width: 100%;
    color: #461F0A;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  `
  )}
`;

const IconWithTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(26)};
  align-items: flex-start;
`;

const RightWrapper = styled.div`
  padding-top: 54px;
  display: flex;
  flex-direction: column;
  /* padding-bottom: 56px; */
  gap: ${rem(26)};
  ${responsive(
    "md",
    `
    gap: ${rem(10)};
    padding-top: 24px;
  
  `
  )}
  ${responsive(
    "xs",
    `
     width: 100%;
  
  `
  )}
`;
const LeftWrapper = styled.div`
  background-color: ${(props) => props.color};
  width: ${rem(519.4)};
  border-radius: ${rem(55.5)};
  height: ${rem(690)};
  margin-top: 22.75px;
  margin-left: 25px;

  ${responsive(
    "md",
    `
    width: 50%;
    border-radius: 40px;
    opacity: 0px;

  `
  )}
  ${responsive(
    "sm",
    `
    width: 100%;
    height: 497.51px;
    gap: 0px;
    border-radius: 40px;
    opacity: 0px;
    margin-top: 0%;

  `
  )}
  ${responsive(
    "xs",
    `
    width: 100%;
    height: 497.51px;
    gap: 0px;
    border-radius: 40px;
    opacity: 0px;
    margin-top: 0%;
     margin-left: 0px;
    

  `
  )}
`;

const Image = styled.img`
  border-radius: ${rem(55.5)};
  width: 100%;
  height: 100%;

  ${responsive(
    "xs",
    `
    display:block;
  `
  )}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${rem(42)};
  justify-content: center;

  ${responsive(
    "md",
    `
    gap: ${rem(20)};
`
  )}
`;
const IconMain = styled.img`
  /* padding-top: ${rem(15)}; */
`;

const IconMobile = styled.img`
  display: none;

  ${responsive(
    "xs",
    `
    display: block; // Show this for mobile
    gap: ${rem(20)};
`
  )}
`;
const Icon = styled.img`
  /* padding-top: ${rem(15)}; */
  ${responsive(
    "xs",
    `
    display: none; // Hide this for mobile
  `
  )}
`;

const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const IconTextTitle = styled.span`
  font-family: "ClashDisplay-SemiBold", serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
  color: ${(props) => props.color};
  ${responsive(
    "xs",
    `
    width: 100%;
    color: #461F0A;
  `
  )}
`;

const MailContainer = styled.a`
  width: ${rem(150)};
  height: ${rem(150)};
  background: #461f0a4d;
  backdrop-filter: blur(34px);
  -webkit-backdrop-filter: blur(34px);
  border-radius: 50%;
  position: fixed;
  bottom: 15%;
  right: 3%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${responsive(
    "md",
    `
    display:none;
  
  `
  )}
  ${responsive(
    "xs",
    `
    display: flex;
    width: ${rem(70)};
    height: ${rem(70)};
    right: 3%;
    align-items: center;
    justify-content: center;
  
  `
  )}
    ${responsive(
    "custom375",
    `
    display: flex;
    width: ${rem(70)};
    height: ${rem(70)};
    bottom: 13%;
    right: 3%;
    align-items: center;
    justify-content: center;
  
  `
  )}
`;

const MailImage = styled.img`
  ${responsive(
    "xs",
    `
    width: ${rem(30)};
    height: ${rem(30)};
  
  `
  )}
  ${responsive(
    "custom375",
    `
    width: ${rem(30)};
    height: ${rem(30)};
  
  `
  )}
`;

const Label = styled.div`
  display: none;

  ${responsive(
    "xs",
    `
    display:flex;
    background-color: #c1f52f;
    width: ${rem(229)};
    height: ${rem(29.78)};
    border-radius: ${rem(15)};
    justify-content:center;
    align-items: center;
    margin-top: ${rem(29)};
  
  `
  )}
`;

const LabelText = styled.p`
  font-family: "ClashDisplay-Bold", serif;
  color: #461f0a;
  font-size: 13px;
  font-weight: 700;
  line-height: 13.98px;
`;

const TagsContainerXs = styled.div`
  display: none;

  /* ${responsive(
    "md",
    `
    display: block;
    position: absolute;
    margin-bottom: -30px;
    bottom: 50.8%;
  `
  )} */

  ${responsive(
    "md",
    `

    position: absolute;
    margin-bottom: -30px;
    bottom: 83.8%;
  `
  )}

  ${responsive(
    "sm",
    `
    display: block;
    position: absolute;
    margin-bottom: -30px;
    bottom: 83.8%;
  `
  )}
    ${responsive(
    "xs",
    `
    display: block;
    position: absolute;
    margin-bottom: -30px;
    bottom: 95.5%;
  `
  )}
`;

const CombineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgba(193, 245, 47, 0.2) 30%,
    transparent 90%,
    rgba(255, 251, 247, 0) 100%
  );
  backdrop-filter: blur(10px);
  width: 100%; /* Ensure it covers the container width */
  height: 100%; /* Ensure it covers the container height */
  /* background-attachment: fixed; */
  /* padding: 45px; */
  /* z-index: -1; */
`;

const Home = () => {
  const [activeTab, setActiveTab] = useState("Creators");
  return (
    <Container className="center-gradient">
      <Content>
        <CombineWrapper>
          <WrapperUp>
            <MainText>Hey creator</MainText>
            <Emoji>👋🏼</Emoji>
          </WrapperUp>
          <WrapperDown>
            <SubText>Join the team and work with your favourite brands</SubText>
          </WrapperDown>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRy-4gSx1XbTb61uWZB_aHZcHGTiXMiMeOxrAnu9F6eDLeLg/viewform?usp=preview"
            target="_blank"
          >
            Join Joppa <ArrowIcon src={BackArrowIcon} alt="arrow out" />
          </Button>
          <TagsContainer>
            <Tag
              bgColor="#D2ACE7"
              top="85px"
              left="-250px"
              rotation="-14.81deg"
              textColor="#44242D"
            >
              content
            </Tag>
            <Tag
              bgColor="#2f69ff"
              top="-10px"
              left="2px"
              rotation="17.34deg"
              textColor="#FFFFFF"
            >
              Reach
            </Tag>
            <Tag
              bgColor="#C1F52F"
              top="88px"
              left="135px"
              rotation="9.75deg"
              textColor="#44242D"
            >
              Brands
            </Tag>
          </TagsContainer>
          <TagsContainerXs>
            <TagXs
              bgColor="#D2ACE7"
              top="70px"
              left="-150px"
              rotation="-14.81deg"
              textColor="#44242D"
            >
              content
            </TagXs>
            <TagXs
              bgColor="#2f69ff"
              top="10px"
              left="-12px"
              rotation="17.34deg"
              textColor="#FFFFFF"
            >
              Reach
            </TagXs>
            <TagXs
              bgColor="#C1F52F"
              top="75px"
              left="75px"
              rotation="9.75deg"
              textColor="#44242D"
            >
              Brands
            </TagXs>
          </TagsContainerXs>
        </CombineWrapper>

        <ToggleContainer>
          <ToggleButton
            active={activeTab === "Creators"}
            onClick={() => setActiveTab("Creators")}
          >
            Creators
          </ToggleButton>
          <ToggleButton
            active={activeTab === "Businesses"}
            onClick={() => setActiveTab("Businesses")}
          >
            Businesses
          </ToggleButton>
        </ToggleContainer>
      </Content>
      {activeTab === "Creators" ? (
        <FeatureRoot color="#D2ACE7" id="creator">
          <FeatureWrapper>
            <LeftWrapper color="#461f0a">
              <Image src={Illustration} alt="illustrations" />
            </LeftWrapper>
            <RightWrapper>
              <TextContainer>
                <Title color="#461F0A">Work with brands you love</Title>
                <Text color="#461F0A">
                  Joppa makes it easy for you to find businesses that are in
                  need of your creative genius to amplify their brands voice
                </Text>
              </TextContainer>
              <IconWithTextContainer>
                <IconWrapper>
                  <IconMain src={BookIcon} alt="book icon" />
                  <IconTextWrapper>
                    <IconTextTitle color="#461F0A">
                      Direct access to job opportunities
                    </IconTextTitle>
                    <Text color="#461F0A">
                      Browse and bid for jobs directly posted by businesses,
                      eliminating the struggle of finding clients.
                    </Text>
                  </IconTextWrapper>
                </IconWrapper>
                <IconWrapper>
                  <IconMain src={PizzaIcon} alt="pizza icon" />
                  <IconTextWrapper>
                    <IconTextTitle color="#461F0A">
                      Creator support
                    </IconTextTitle>
                    <Text color="#461F0A">
                      Access to best practice, resource, and insight to improve
                      your content quality and professional appeal.
                    </Text>
                  </IconTextWrapper>
                </IconWrapper>
                <IconWrapper>
                  <IconMain src={PanIcon} alt="pan icon" />
                  <IconTextWrapper>
                    <IconTextTitle color="#461F0A">
                      Content monetization
                    </IconTextTitle>
                    <Text color="#461F0A">
                      Monetize your skill, and earn consistently without the
                      need foe any upfront subscription.
                    </Text>
                  </IconTextWrapper>
                </IconWrapper>
              </IconWithTextContainer>
            </RightWrapper>
          </FeatureWrapper>
        </FeatureRoot>
      ) : (
        <FeatureRoot color="#461F0A" id="#businesses">
          <FeatureWrapper>
            <LeftWrapper color="#D2ACE7">
              <Image src={Illustration2} alt="illustrations" />
            </LeftWrapper>
            <RightWrapper>
              <TextContainer>
                <Title color="#ffffff">
                  Work with creators to amplify your brands voice
                </Title>
                <Text color="#ffffff">
                  Effortlessly connect with skilled creators who understand your
                  vision and help you tell your brand story and impact!
                </Text>
              </TextContainer>
              <IconWithTextContainer>
                <IconWrapper>
                  <Icon src={BinoIcon} alt="bino icon" />
                  <IconMobile src={BinoIconXs} alt="book icon" />
                  <IconTextWrapper>
                    <IconTextTitle color="#ffffff">
                      Find creators to amplify your brands voice
                    </IconTextTitle>
                    <Text color="#ffffff">
                      Access a curated pool of creators that align with your
                      brands vision, style and goal, making collaboration
                      effortless.
                    </Text>
                  </IconTextWrapper>
                </IconWrapper>
                <IconWrapper>
                  <Icon src={StatIcon} alt="stat icon" />
                  <IconMobile src={StatIconXs} alt="book icon" />
                  <IconTextWrapper>
                    <IconTextTitle color="#ffffff">
                      Streamlined campaign management{" "}
                    </IconTextTitle>
                    <Text color="#ffffff">
                      Post jobs, receve bids, and select the perfect creator
                      with just a few clicks-no more hassle to finding the right
                      fit
                    </Text>
                  </IconTextWrapper>
                </IconWrapper>
                <IconWrapper>
                  <Icon src={GlobeIcon} alt="globe icon" />
                  <IconMobile src={GlobeIconXs} alt="book icon" />
                  <IconTextWrapper>
                    <IconTextTitle color="#ffffff">
                      Tailored creator match making
                    </IconTextTitle>
                    <Text color="#ffffff">
                      Access a curated pool of creators that align with your
                      brand’s vision, style, and goals, making collaboration
                      effortless.
                    </Text>
                  </IconTextWrapper>
                </IconWrapper>
                <Label>
                  <LabelText>See whats in it for businesses</LabelText>
                </Label>
              </IconWithTextContainer>
            </RightWrapper>
          </FeatureWrapper>
        </FeatureRoot>
      )}
      <MailContainer href="mailto:Joppacreative@gmail.com" target="_self">
        <MailImage src={MailIcon} alt="Mail icon" />
      </MailContainer>
    </Container>
  );
};

export default Home;
