import styled, { css } from 'styled-components';

const ProjectStoryHeading = styled.h2`
  font-size: 1rem;
  font-weight: 700;
`;
const ProjectStoryParagraph = styled.p`
  padding: 1em 0;
  color: var(--color-grey);
  font-size: 1rem;
`;
const ProjectStoryDescBox = styled.div`
  visibility: hidden;
  padding-top: 2em;
  clip-path: inset(0 0 100% 0);
  font-size: 1.125rem;
  font-weight: 400;
  text-align: justify;
  line-height: 1.6;
  word-break: break-all;
  transition: all 0.5s;
`;
const AccentText = styled.span`
  padding: 0 0.6em;
  border-radius: 1em;
  background-color: #e4e58685;
  font-weight: 600;
`;
const ProjectStoryButton = styled.button`
  position: absolute;
  top: 50%;
  right: 50%;
  width: 7vw;
  height: 7vw;
  border-radius: 50%;
  opacity: 1;
  transform: translate(50%, -50%);
  transition: all 0.5s;
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    right: 50%;
    background-color: #121212;
    transform: translate(50%, -50%);
    transition: all 0.5s;
    content: '';
  }
  &::before {
    width: 100%;
    height: 2px;
  }
  &::after {
    width: 2px;
    height: 100%;
  }
  &:hover {
    transform: translate(50%, -50%) scale(1.1);
    &::before,
    &::after {
      transform: translate(50%, -50%) rotate(90deg);
    }
  }
`;
const ProjectStoryRow = styled.div<{ active: boolean }>`
  position: relative;
  padding: var(--container-padding);
  border-bottom: 1px solid var(--color-grey-light);
  ${(props) =>
    props.active &&
    css`
      ${ProjectStoryButton} {
        top: var(--container-padding);
        right: var(--container-padding);
        width: 2vw;
        height: 1rem;
        transform: none;
        &::after {
          visibility: hidden;
          width: 0;
          height: 0;
        }
        &:hover {
          &::before {
            transform: none;
          }
        }
      }
      ${ProjectStoryDescBox} {
        visibility: visible;
        clip-path: inset(0 0 0 0);
      }
    `}
`;

type ActiveType = {
  active: number[];
  setActive: React.Dispatch<React.SetStateAction<number[]>>;
};

type Props = ActiveType & {
  name: string | undefined;
};

export default function ProjectStory({ name, active, setActive }: Props) {
  const handleActiveItem = (e: React.MouseEvent) => {
    if (e.currentTarget instanceof HTMLButtonElement) {
      const index = Number(e.currentTarget.dataset.id);
      if (active.indexOf(index) >= 0) {
        //제거
        setActive(active.filter((num) => num !== index));
      } else {
        //추가
        setActive([...active, index]);
      }
    }
  };

  return (
    <>
      {name === 'porfolio' && <></>}
      {name === 'todolist' && (
        <>
          <ProjectStoryRow active={active.indexOf(0) >= 0}>
            <ProjectStoryHeading as='h4'>프로젝트 소개</ProjectStoryHeading>
            <ProjectStoryParagraph>개인 프로젝트 - React, Typescript, HTML5, Styled-Components</ProjectStoryParagraph>
            <ProjectStoryDescBox>
              <AccentText>리액트</AccentText>의 렌더링 과정을 이해하면서 component와 react Hooks을 중점적으로 활용할 수 있는 프로젝트를 고민했습니다. 투두리스트는 '할 일'이라는 컴포넌트를 반복적으로
              사용하고, 할 일이 추가, 수정, 삭제되면 리렌더링을 통해 관련 요소에 동시적으로 UI 업데이트가 이루어집니다. 해당 프로젝트는 깔끔하고 단순한 디자인으로 복잡한 스타일링이 필요하지 않았기
              때문에 JSX를 사용하는 리액트의 특성을 살려 CSS-in-JS 방식의 <AccentText>styled-components</AccentText>를 사용하여 컴포넌트의 구조, 기능, 디자인을 하나의 파일로 파악할 수 있도록 했습니다.
              또한 <AccentText>반응형</AccentText>으로 제작하여 다양한 디바이스에서 동일한 기능을 경험할 수 있습니다.
            </ProjectStoryDescBox>
            <ProjectStoryButton data-id='0' onClick={handleActiveItem} />
          </ProjectStoryRow>
          <ProjectStoryRow active={active.indexOf(1) >= 0}>
            <ProjectStoryHeading as='h4'>기능 및 UI</ProjectStoryHeading>
            <ProjectStoryDescBox>
              <AccentText>로컬스토로지에 할 일을 추가하고 수정, 삭제</AccentText>할 수 있습니다. 쉽게 할 일을 관리하기 위해서 최대한 적은 클릭으로 기능이 이루어지도록 했습니다.
              <AccentText>캘린더로 직관적인 날짜 선택</AccentText>이 가능하고 일주일 전후의 가까운 날짜는 상대적으로, 올해 날짜는 월일만 표시하여 데드라인을 쉽게 파악할 수 있습니다. 날짜에 따라{' '}
              <AccentText>오늘, 지난, 다음 할 일로 구분</AccentText>하거나 완료 여부에 따라 <AccentText>해야할 일, 완료된 할 일로 구분</AccentText>할 수 있습니다. 색상, 투명도, 중앙선 등을 활용하여 할
              일의 상태를 직관적으로 표현했습니다. 자신만의 <AccentText>투두리스트 제목을 설정</AccentText>할 수 있습니다. 목표를 적어도 좋고, 공백으로 비워둘 수도 있습니다.
            </ProjectStoryDescBox>
            <ProjectStoryButton data-id='1' onClick={handleActiveItem} />
          </ProjectStoryRow>
          <ProjectStoryRow active={active.indexOf(2) >= 0}>
            <ProjectStoryHeading as='h4'>새롭게 배우고 활용한 부분</ProjectStoryHeading>
            <ProjectStoryDescBox>
              투두리스트는 할 일 아이템, 추가 버튼, 정렬 버튼 등 여러 컴포넌트로 구성되고 대부분의 컴포넌트에서 할 일 상태 데이터에 접근하고 업데이트 합니다. '할 일 상태' 라는 전역 데이터를 효과적으로
              다루기 위해 <AccentText>context API</AccentText>를 사용했습니다. reducer로 상태 업데이트 로직을 분리하고 컴포넌트 내에서 context를 간편하게 사용할 수 있도록 커스텀 훅을 작성했습니다. UI
              수정이 쉬운 <AccentText>react-datepicker</AccentText>
              라이브러리를 사용하여 직관적이고 간편하게 날짜를 선택할 수 있게 했습니다. 더불어 <AccentText>Intl API</AccentText>로 날짜를 포맷팅하여 일주일 전후의 가까운 날짜는 상대적으로
              표시했습니다.
              <AccentText>react-icons</AccentText>
              라이브러리에서 다양한 아이콘을 활용해 버튼을 구현했습니다.
            </ProjectStoryDescBox>
            <ProjectStoryButton data-id='2' onClick={handleActiveItem} />
          </ProjectStoryRow>
          <ProjectStoryRow active={active.indexOf(3) >= 0}>
            <ProjectStoryHeading as='h4'>새롭게 알게 된 내용</ProjectStoryHeading>
            <ProjectStoryDescBox>
              <AccentText>1</AccentText> 배포 후 모바일 웹에서 할 일 추가 버튼이 하단 url바에 가려지는 것을 확인했습니다. 화면 전체를 사용하기 위해 height를 100vh로 설정했으나 url바는 고려되지
              않는다는 걸 알게 되었고, 초기 렌더링과 창 크기 변경 시 window.innerHeight로 1vh 값을 계산하여 화면 전체를 사용할 수 있도록 수정했습니다.
              <br /> <AccentText>2</AccentText> 할 일 내용의 글자수에 따라 텍스트 입력창의 크기가 달라지기 때문에 초기 렌더링에 입력창의 scrollHeight 값을 높이값으로 지정해주었습니다. 하지만 높이값이
              정확하지 않았고 원인은 글꼴이 적용되기 전에 높이값이 계산되었기 때문이었습니다. 브라우저의 기본 글꼴과 프로젝트에서 사용한 글꼴의 차이가 있어 같은 글자수에서도 길이가 차이가 났던
              것입니다. 이를 해결하기 위해 {`document.fonts.ready.then(()=>{})`}으로 글꼴이 로드 된 후 높이값을 구하도록 수정했습니다.
            </ProjectStoryDescBox>
            <ProjectStoryButton data-id='3' onClick={handleActiveItem} />
          </ProjectStoryRow>
        </>
      )}
      {name === 'clone' && <></>}
    </>
  );
}
