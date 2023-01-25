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
  font-family: 'Noto Sans KR';
`;
const AboutCol = styled.div<{ col: number }>`
  margin: calc(var(--container-padding) * 3) 0;
  padding: 0 var(--container-padding);
  ${(props) =>
    (props.col === 1 &&
      css`
        width: 45%;
        border-right: 1px solid var(--color-grey-light);
      `) ||
    (props.col === 2 &&
      css`
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        width: 55%;
        color: #333;
      `)}
`;
const AboutTitleParagraph = styled.p`
  font-size: 5rem;
  font-weight: 100;
  line-height: 1.3;
`;
const AboutDescParagraph = styled.p`
  padding: 2em 0 4em;
  color: var(--color-grey);
  font-size: 1.25rem;
  font-weight: 100;
  line-height: 1.5;
`;
const AboutTextSpan = styled.span`
  padding: 0.5em 0;
  border-bottom: 1px solid var(--color-blue);
`;
const AboutTextBox = styled.span`
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5em;
`;
const AboutArrowSvg = styled(BsArrowRight)`
  transform: translateX(-100%);
  transition: all 0.5s;
`;
const AboutLink = styled.a`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  font-size: 1rem;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    transition: all 0.5s;
    svg {
      transform: translateX(0);
    }
  }
`;
const AboutRow = styled.div`
  display: flex;
  margin-top: 2em;
  background-color: transparent;
  background-size: 2em 2em;
  background-image: repeating-linear-gradient(0deg, var(--color-blue), var(--color-blue) 1px, var(--color-bg) 1px, var(--color-bg));
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 2em;
  svg {
    transform: translateY(50%);
  }
`;
const AboutRowParagraph = styled.p`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
`;
const AboutSmallText = styled.span`
  color: var(--color-grey);
  font-size: 0.7em;
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
          <AboutTextSpan>
            <BsLink45Deg /> 이력서 확인하기
          </AboutTextSpan>
          <AboutTextBox>
            <AboutArrowSvg />
          </AboutTextBox>
        </AboutLink>
      </AboutCol>
      <AboutCol col={2}>
        <div>
          <AboutRow>
            <BsTools />
            <AboutRowParagraph>
              <span>Javascript Typescript</span>
              <span>React</span>
              <span>HTML CSS SCSS Styled-Components</span>
              <span>Git Github</span>
            </AboutRowParagraph>
          </AboutRow>
          <AboutRow>
            <MdSchool />
            <AboutRowParagraph>
              <span>
                덕성여자대학교 IT미디어공학과 졸업 <AboutSmallText>2014.02.28 ~ 2019.02.19</AboutSmallText>
              </span>
            </AboutRowParagraph>
          </AboutRow>
          <AboutRow>
            <GrCertificate />
            <AboutRowParagraph>
              <span>
                정보처리기사 <AboutSmallText>2017.08.04</AboutSmallText>
              </span>
            </AboutRowParagraph>
          </AboutRow>
        </div>
      </AboutCol>
    </AboutLayout>
  );
}
