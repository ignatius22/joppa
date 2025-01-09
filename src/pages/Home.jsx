import React, { useState } from "react";
import styled from "styled-components";
import { rem } from "../utils/responsiveHelpers";
import {
  BackArrowIcon,
  BinoIcon,
  BookIcon,
  GlobeIcon,
  MailIcon,
  PanIcon,
  PizzaIcon,
  StatIcon,
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
  margin-bottom: 10%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TagsContainer = styled.div`
  position: absolute;
  margin-bottom: -30px;
  bottom: 84.8%;
  ${responsive(
    "xl",
    `
      bottom: 83.8%;
      
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

const MainText = styled.h1`
  font-family: "ClashDisplay-Semibold", serif;
  font-size: ${rem(128)};
  color: #44242d;
  line-height: ${rem(102)};
  width: 80%;
`;

const SubText = styled.p`
  font-size: ${rem(21)};
  color: #4d2a17;
  font-family: "ClashDisplay-Regular", serif;
  line-height: ${rem(23)};
`;

const Emoji = styled.span`
  font-size: 128px;
  font-weight: 600;
  text-align: center;
`;

const Button = styled.button`
  background-color: #4b3528;
  color: #fffbf7;
  font-size: ${rem(21)};
  font-weight: 600;
  font-family: "Inter", sans-serif;
  padding: 12px 20px;
  width: ${rem(311)};
  height: ${rem(54)};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    filter: brightness(0.9);
  }
`;

const ArrowIcon = styled.img``;
const WrapperUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #EEECE1;
  border-radius: ${rem(40)};
  padding: 5px;
  width: ${rem(356)};
  height: ${rem(57)};
  margin-top: 20%;
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
  border-radius: 30px;
  cursor: pointer;
  height: 90%;
  transition: all 0.3s ease;
`;

const FeatureRoot = styled.div`
  background-color: ${(props) => props.color};
  border-radius: ${rem(40.5)};
  height: 65vh;
  /* padding-left: 5%;
  padding-right: 5%; */
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10%;
  ${responsive(
    "xl",
    `
    height: 75vh;
  `
  )}
`;

const FeatureWrapper = styled.div`
  display: flex;
  margin-bottom: 10%;
  gap: ${rem(55)};
  /* justify-content: space-between; */
  align-items: center;
  position: relative;
  ${responsive(
    "xl",
    `
    width: 90%;
    margin-left: 5%;
    margin-right: 10%;
  `
  )}
`;

const TextContainer = styled.div``;

const Text = styled.p`
  font-family: "ClashDisplay-Light", serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: ${(props) => props.color};
`;

const Title = styled.p`
  font-family: "ClashDisplay-Bold", serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  color: ${(props) => props.color};

`;

const IconWithTextContainer = styled.div``;

const RightWrapper = styled.div`
  width: 48%;
  padding-bottom: 7%;
`;
const LeftWrapper = styled.div`
  background-color: ${(props) => props.color};
  width: ${rem(519)};
  border-radius: ${rem(55.5)};
  height: ${rem(689.85)};
  margin-top: 3%;
`;
const Image = styled.img`
  border-radius: ${rem(55.5)};
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: ${rem(20)};
`;
const IconMain = styled.img`
  padding-top: ${rem(15)};
`;
const Icon = styled.img`
  padding-top: ${rem(15)};
`;

const IconTextWrapper = styled.div``;
const IconTextTitle = styled.p`
  font-family: "ClashDisplay-SemiBold", serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
  color: ${(props) => props.color};
  
`;

const MailContainer = styled.div`
  width: ${rem(150)};
  height: ${rem(150)};
  background: #461f0a4d;
  backdrop-filter: blur(34px);
  -webkit-backdrop-filter: blur(34px);
  border-radius: 50%;
  position: absolute;
  bottom: -10px;
  left: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MailImage = styled.img``;

const Home = () => {
  const [activeTab, setActiveTab] = useState("Creators");
  return (
    <Container>
      <TagsContainer>
        <Tag
          bgColor="#D2ACE7"
          top="100px"
          left="-250px"
          rotation="-14.81deg"
          textColor="#44242D"
        >
          content
        </Tag>
        <Tag
          bgColor="#2f69ff"
          // top="140%"
          left="5px"
          rotation="17.34deg"
          textColor="#FFFFFF"
        >
          Reach
        </Tag>
        <Tag
          bgColor="#C1F52F"
          top="102px"
          left="135px"
          rotation="9.75deg"
          textColor="#44242D"
        >
          Brands
        </Tag>
      </TagsContainer>

      <Content>
        <WrapperUp>
          <MainText>Hey creator</MainText>
          <Emoji>👋🏼</Emoji>
        </WrapperUp>
        <WrapperDown>
          <SubText>Join the team and work with your favourite brands</SubText>
          <Button>
            Join Joppa <ArrowIcon src={BackArrowIcon} alt="arrow out" />
          </Button>
        </WrapperDown>
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
        <FeatureRoot color="#D2ACE7">
          <FeatureWrapper>
            <LeftWrapper color="#461f0a">
              <Image src={Illustration} alt="illustrations" />
            </LeftWrapper>
            <RightWrapper>
              <TextContainer>
                <Title color="#461F0A" >Work with brands you love</Title>
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
                    <IconTextTitle color="#461F0A">Creator support </IconTextTitle>
                    <Text color="#461F0A">
                      Access to best practice, resource, and insight to improve
                      your content quality and professional appeal.
                    </Text>
                  </IconTextWrapper>
                </IconWrapper>
                <IconWrapper>
                  <IconMain src={PanIcon} alt="pan icon" />
                  <IconTextWrapper>
                    <IconTextTitle color="#461F0A">Content monetization</IconTextTitle>
                    <Text color="#461F0A">
                      Monetize your skill, and earn consistently without the
                      need foe any upfront subscription.
                    </Text>
                  </IconTextWrapper>
                </IconWrapper>
              </IconWithTextContainer>
            </RightWrapper>
            <MailContainer>
              <MailImage src={MailIcon} alt="Mail icon" />
            </MailContainer>
          </FeatureWrapper>
        </FeatureRoot>
      ) : (
        <FeatureRoot color="#461F0A">
          <FeatureWrapper>
            <LeftWrapper color="#D2ACE7">
              <Image src={Illustration2} alt="illustrations" />
            </LeftWrapper>
            <RightWrapper>
              <TextContainer>
                <Title color="#ffffff">Work with creators to amplify your brands voice</Title>
                <Text color="#ffffff">
                  Effortlessly connect with skilled creators who understand your
                  vision and help you tell your brand story and impact!
                </Text>
              </TextContainer>
              <IconWithTextContainer>
                <IconWrapper>
                  <Icon src={BinoIcon} alt="bino icon" />
                  <IconTextWrapper>
                    <IconTextTitle color="#ffffff" >
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
                  <IconTextWrapper>
                    <IconTextTitle color="#ffffff">Tailored creator match making</IconTextTitle>
                    <Text color="#ffffff">
                      Access a curated pool of creators that align with your
                      brand’s vision, style, and goals, making collaboration
                      effortless.
                    </Text>
                  </IconTextWrapper>
                </IconWrapper>
              </IconWithTextContainer>
            </RightWrapper>
            <MailContainer>
              <MailImage src={MailIcon} alt="Mail icon" />
            </MailContainer>
          </FeatureWrapper>
        </FeatureRoot>
      )}
    </Container>
  );
};

export default Home;
