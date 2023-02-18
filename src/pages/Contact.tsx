import styled from 'styled-components';
import { ani } from '../components/GlobalStyle';
import { BsLink45Deg } from 'react-icons/bs';
import { Layout } from './Home';

const ContactLayout = styled(Layout)`
  display: flex;
  padding: calc(var(--container-padding) * 2) 0 0;
`;
const ContactBox = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const ContactRow = styled.div`
  width: 25%;
  border-style: none none none solid;
  border-width: 1px;
  border-color: var(--color-grey-light);
  &:first-child {
    border-left: none;
  }
  @media screen and (max-width: 992px) {
    flex-shrink: 0;
    width: 100%;
    min-height: 25%;
    border-style: none none solid;
    &:first-child {
      border-style: solid none solid;
    }
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
  position: relative;
  padding-bottom: 2em;
  font-size: 4vw;
  font-weight: 700;
  z-index: 1;
  @media screen and (max-width: 992px) {
    padding-bottom: 0.5em;
    font-size: 10vw;
  }
`;
const ContactSmallText = styled.span`
  display: block;
  padding: 0.2em 0;
  font-size: 0.625em;
  font-weight: 100;
`;
const ContactIcon = styled.div`
  font-size: 5vw;
  svg {
    display: block;
  }
`;
const ContactLink = styled(ContactTextBox).attrs({ target: '_blank' })`
  position: relative;
  transition: all 0.3s;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: var(--color-black);
      color: var(--color-bg);
      ${ContactIcon} {
        animation: ${ani(`to{transform: translate(10%, -10%)}`)} 0.5s alternate infinite;
      }
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
              <BsLink45Deg />
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
              <BsLink45Deg />
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
