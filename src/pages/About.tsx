import styled, { css } from 'styled-components';
import { BsTools, BsArrowRight, BsLink45Deg } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';
import { GrCertificate } from 'react-icons/gr';

const AboutLayout = styled.section`
  overflow: hidden;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-bg);
`;
const AboutCol = styled.div<{ col: number }>`
  margin: calc(var(--container-padding) * 3) 0;
  padding: 0 var(--container-padding);
  ${(props) =>
    (props.col === 1 &&
      css`
        width: 55%;
        border-right: 1px solid var(--color-grey-light);
      `) ||
    (props.col === 2 &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
      `)}
`;
const AboutTitleParagraph = styled.p`
  color: transparent;
  font-size: 5rem;
  font-weight: 900;
  -webkit-text-stroke: 1px var(--color-black);
  line-height: 1.3;
`;
const AboutDescParagraph = styled.p`
  padding: 2em 0 4em;
  color: var(--color-grey);
  font-size: 1.25rem;
  font-weight: 200;
  line-height: 1.5;
`;
const AboutLinkBox = styled.span`
  display: flex;
  align-items: center;
`;
const AboutIconBox = styled.div`
  overflow: hidden;
  margin-left: 0.5em;
`;
const AboutIconCircleBox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin-right: 0.5em;
  border-radius: 50%;
  background: var(--color-black);
  color: #fff;
  font-size: 1.5rem;
`;
const AboutArrowSvg = styled(BsArrowRight)`
  display: block;
  transform: translateX(-100%);
  transition: all 0.5s;
`;
const AboutLink = styled.a`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 900;
  font-size: 1rem;
  &:hover {
    ${AboutArrowSvg} {
      transform: translateX(0);
    }
  }
`;
const AboutRow = styled.div`
  padding-top: 1em;
  margin-top: 3em;
  border-top: 1px solid;
`;
const AboutTextBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 2em;
`;
const AboutTextParagraph = styled.p`
  margin-left: 0.5em;
`;
const AboutSmallText = styled.span`
  color: var(--color-grey);
  font-size: 0.7em;
`;
export const AboutSkillSpan = styled.span`
  display: inline-block;
  padding: 1em;
  margin-right: 1em;
  margin-bottom: 1em;
  border-radius: 2em;
  border: 1px solid;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export default function About() {
  return (
    <AboutLayout>
      <AboutCol col={1}>
        <AboutTitleParagraph>
          끈질기게
          <br />
          문제를 해결하는
        </AboutTitleParagraph>
        <AboutDescParagraph>
          작성한 코드가 화면으로 실현되는 즐거움에 빠져 프론트엔드 분야를 공부하고 있으며
          <br />
          오랜 시간이 걸리더라도 포기하지 않고 문제를 해결하려는 집념을 가지고 있습니다.
          <br />
          보기 좋은, 사용하기 편한 화면은 다시 찾는 서비스를 만드는 중요한 요소이기 때문에
          <br />
          UI/UX를 깊이 고민하는 프론트엔드 개발자가 되고 싶습니다.
        </AboutDescParagraph>
        <AboutLink href='https://innseonn.notion.site/8bddbf58e5a34d4c99c1a1ff4c2e71c5' target='_blank'>
          <AboutLinkBox>
            <AboutIconCircleBox>
              <BsLink45Deg />
            </AboutIconCircleBox>
            <span>이력서 확인하기</span>
          </AboutLinkBox>
          <AboutIconBox>
            <AboutArrowSvg />
          </AboutIconBox>
        </AboutLink>
      </AboutCol>
      <AboutCol col={2}>
        <div>
          <p>
            <AboutSkillSpan>Javascript</AboutSkillSpan>
            <AboutSkillSpan>Typescript</AboutSkillSpan>
            <AboutSkillSpan>React</AboutSkillSpan>
          </p>
          <p>
            <AboutSkillSpan>HTML</AboutSkillSpan>
            <AboutSkillSpan>CSS</AboutSkillSpan>
            <AboutSkillSpan>SCSS</AboutSkillSpan>
            <AboutSkillSpan>Styled-Components</AboutSkillSpan>
          </p>
          <p>
            <AboutSkillSpan>Git</AboutSkillSpan>
            <AboutSkillSpan>Github</AboutSkillSpan>
          </p>
        </div>
        <AboutRow>
          <AboutTextBox>
            <MdSchool />
            <AboutTextParagraph>
              <span>
                덕성여자대학교 IT미디어공학과 졸업 <AboutSmallText>2014.02.28 ~ 2019.02.19</AboutSmallText>
              </span>
            </AboutTextParagraph>
          </AboutTextBox>
          <AboutTextBox>
            <GrCertificate />
            <AboutTextParagraph>
              <span>
                정보처리기사 <AboutSmallText>2017.08.04</AboutSmallText>
              </span>
            </AboutTextParagraph>
          </AboutTextBox>
        </AboutRow>
      </AboutCol>
    </AboutLayout>
  );
}
