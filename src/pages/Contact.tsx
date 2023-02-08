import styled from 'styled-components';
import { ani } from '../components/GlobalStyle';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { Layout } from './Home';

const ContactLayout = styled(Layout)`
  display: flex;
  background-color: var(--color-bg);
`;
const ContactBox = styled.div`
  display: flex;
  width: 100%;
`;
const ContactRow = styled.div`
  width: 25%;
  border-left: 1px solid var(--color-grey-light);
  &:first-child {
    border-left: none;
  }
`;
const ContactTextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: var(--container-padding);
`;
const ContactBottomText = styled.span`
  font-size: 0.875rem;
  font-weight: 100;
`;
const ContactParagraph = styled.p`
  padding-bottom: 2em;
  font-size: 4vw;
  font-weight: 700;
`;
const ContactSmallText = styled.span`
  display: block;
  padding: 0.2em 0;
  font-size: 2.5vw;
  font-weight: 100;
`;
const ContactIcon = styled.div`
  visibility: hidden;
  margin: 0 auto;
  font-size: 17vw;
  opacity: 0;
  transition: opacity 0.3s;
  svg {
    display: block;
    fill: url(#blueYellowGradient);
    filter: url(#noise);
  }
  path {
    stroke: url(#blueYellowGradient);
  }
`;
const ContactLink = styled(ContactTextBox).attrs({ target: '_blank' })`
  position: relative;
  transition: all 0.3s;
  &::after {
    position: absolute;
    inset: 0 0 0 0;
    display: block;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png');
    opacity: 0;
    content: '';
  }
  &:hover {
    background-color: var(--color-black);
    color: var(--color-bg);
    &::after {
      opacity: 0.15;
    }
    ${ContactIcon} {
      visibility: visible;
      opacity: 1;
      animation: ${ani(`to{transform: translate(40px, -40px)}`)} 0.5s alternate infinite;
    }
  }
`;

export default function Contact() {
  return (
    <ContactLayout>
      <ContactBox>
        <ContactRow>
          <ContactLink as='a' href='https://github.com/InnSeonn'>
            <ContactIcon>
              <svg width='0' height='0'>
                <linearGradient id='blueYellowGradient'>
                  <stop offset='35%' stopColor='#baecff' />
                  <stop offset='100%' stopColor='#e4e586' />
                </linearGradient>
                <filter id='noise'>
                  {/* https://www.magicpattern.design/tools/blob-generator */}
                  {/* https://stackoverflow.com/questions/64946883/apply-noise-to-image-with-transparency-by-use-of-svg-filters */}
                  <feFlood floodColor='#ffffff' result='neutral-gray' />
                  <feTurbulence in='neutral-gray' type='fractalNoise' baseFrequency='2.5' numOctaves='100' stitchTiles='stitch' result='noise' />
                  <feColorMatrix in='noise' type='saturate' values='0' result='destaturatedNoise'></feColorMatrix>
                  <feComposite operator='in' in2='SourceGraphic' result='theNoise' />
                  <feBlend in='SourceGraphic' in2='theNoise' mode='soft-light' result='noisy-image' />
                </filter>
              </svg>
              <RiArrowRightUpLine />
            </ContactIcon>
            <ContactParagraph>
              <ContactSmallText>go to</ContactSmallText> Github
            </ContactParagraph>
            <ContactBottomText>Github</ContactBottomText>
          </ContactLink>
        </ContactRow>
        <ContactRow>
          <ContactTextBox>
            <ContactParagraph>
              innseonn<ContactSmallText>@gmail.com</ContactSmallText>
            </ContactParagraph>
            <ContactBottomText>Email</ContactBottomText>
          </ContactTextBox>
        </ContactRow>
        <ContactRow>
          <ContactLink as='a' href='https://innseonn.notion.site/8bddbf58e5a34d4c99c1a1ff4c2e71c5'>
            <ContactIcon>
              <RiArrowRightUpLine />
            </ContactIcon>
            <ContactParagraph>
              <ContactSmallText>go to</ContactSmallText> Notion Resume
            </ContactParagraph>
            <ContactBottomText>Resume</ContactBottomText>
          </ContactLink>
        </ContactRow>
        <ContactRow>
          <ContactTextBox>
            <ContactParagraph>
              <ContactSmallText>010</ContactSmallText> 99455984
            </ContactParagraph>
            <ContactBottomText>Phone</ContactBottomText>
          </ContactTextBox>
        </ContactRow>
      </ContactBox>
    </ContactLayout>
  );
}
