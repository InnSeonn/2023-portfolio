export type ProjectStoryType = {
  id: number;
  title: string;
  lang?: string[];
  desc: string;
};
export type ProjectType = {
  id: number;
  name: string;
  text: string;
  github: string;
  website: string;
  video: string;
  story: ProjectStoryType[];
};

const projectData: ProjectType[] = [
  {
    id: 0,
    name: 'portfolio',
    text: '개인 프로젝트와 본인 소개를 담은 반응형 포트폴리오 웹사이트',
    github: 'https://github.com/InnSeonn/2023_portfolio',
    website: 'https://inn-portfolio.vercel.app/',
    video: `/videos/portfolio.mp4`,
    story: [
      {
        id: 0,
        title: '프로젝트 소개',
        lang: ['React', 'Typescript', 'HTML5', 'Styled-Components'],
        desc: `그동안 학습했던 리액트, 타입스크립트, 스타일 컴포넌트를 사용하여 개인 프로젝트와 저를 소개하는 페이지를 담은 포트폴리오 웹사이트를 제작했습니다. 라우팅을 구현하여 총 5개의 페이지로 구성했으며, 미디어쿼리를 사용하여 반응형으로 제작했습니다.
        `,
      },
      {
        id: 1,
        title: '구성 및 UI',
        desc: `<home>에는 타이틀을 강조하기 위해 텍스트가 나타나고 색상이 채워지는 애니메이션을 구현했습니다. 타이틀 옆에 페이지 링크 텍스트를 배치하여 페이지 구성을 크게 확인할 수 있도록 했습니다. <about>에는 저에 대한 소개와 역량을 간단히 기술했으며 더 자세한 사항은 이력서 페이지 링크를 통해 확인할 수 있습니다. <projects>에는 개인 프로젝트를 담았습니다. 슬라이드 형식으로 프로젝트 목록을 표시했으며 드래그하여 모든 프로젝트를 확인 할 수 있습니다. 페이지 버튼을 클릭하거나 프로젝트를 클릭하면 이미지 전체가 표시되고 버튼을 클릭하면 자세한 설명 페이지로 이동합니다. <projects/detail>에는 해당 프로젝트에 대한 소개와 새롭게 배운 점들을 담았습니다. 텍스트 양이 많아 가독성이 떨어질 것을 고려하여 주제별로 단락을 나누었고, 버튼을 통해 내용 표시/미표시 할 수 있도록 구성했습니다. <contact>에서 연락처, 이력서, 깃허브 주소를 확인 할 수 있으며 링크 요소는 마우스 오버 효과로 표시했습니다. 전체적으로 깔끔하지만 단조로운 느낌을 줄이기 위해 글꼴 색상, 굵기, 크기, 테두리 선 등 다양한 텍스트 속성을 활용했습니다. 또한 자연스러운 페이지 전환을 위해 라이브러리(react-transition-group)를 사용하여 애니메이션을 구현했습니다.
        `,
      },
      {
        id: 2,
        title: '새롭게 배우고 활용한 부분',
        desc: `<projects>와 <projects/detail> 페이지는 서로 연관된 내용을 가졌고, <projects> 페이지를 통해서만 <projects/detail> 페이지에 접근할 수 있기 때문에 이런 연관성을 나타낼 수 있는 페이지 전환 애니메이션을 구현하고 싶었습니다. 하지만 라우트를 통해 페이지를 이동하다보니 일반 CSS 속성만으로 마운트/언마운트 되는 컴포넌트 사이를 연결하기 어려워 라우트 간의 자연스러운 전환 애니메이션을 가능하게 하는 라이브러리(react-transition-group)를 사용하게 되었습니다. 라우트들을 <CSSTransition>으로 묶어 classNames를 지정해주면 해당 컴포넌트의 마운트/언마운트 상태에 따라 값을 붙여 클래스명을 설정해주기 때문에 이 클래스명을 통해 애니메이션을 적용할 수 있었습니다. <projects> 페이지는 언마운트 될 때까지 애니메이션을 적용하지 않고 위치를 유지하도록 하고, <projects/detail> 페이지는 마운트 되면 하단에서 겹쳐지며 슬라이드하며 올라오도록 구현했습니다. 연관성이 없는 독립적인 페이지들은 transform과 opacity를 활용하여 컨텐츠가 튀어오르듯 나타남과 동시에 자연스럽게 겹쳐지면서 페이지가 전환되는 효과를 주었습니다. 또한 라우트가 아닌 <FullNav> 컴포넌트에는 <Transition>을 사용하여 따로 슬라이드 효과를 적용했습니다. <Transition>은 <TransitionGroup>으로 관리하지 않았기 때문에 따로 상태값을 만들어 렌더링이 되면 'entering -> entered'로, 닫으면 'exiting -> exited'로 상태가 변경될 수 있도록 'in' 속성 값을 설정해주었습니다.
        `,
      },
      {
        id: 3,
        title: '어려웠던 점',
        desc: `복잡한 기능 구현은 없었으나 디자인 및 UI/UX를 혼자 구상하고 결정해야 하는 점이 어려웠습니다. 기능 구현은 '목적에 맞게 동작한다'는 명확한 결과를 얻기 위한 노력이었다면 디자인적인 부분은 '어떤게 더 나은 선택'인지를 결정하는 문제였습니다. 가독성을 고려한 배치 및 정렬, 자연스러운 페이지 전환, 컨텐츠 사이의 충분한 여백, 버튼의 위치, 디자인 통일성 등을 고민하여 여백 1px, 폰트 크기 1px까지도 여러번 비교했습니다. 구현하면서 많은 수정 사항이 있었지만 처음부터 끝까지 웹사이트를 디자인하고 더 나은 사용자 경험을 위해 고민해보는 좋은 경험이었습니다.
        `,
      },
    ],
  },
  {
    id: 1,
    name: 'todolist',
    text: '할 일을 추가하고 관리할 수 있는 반응형 투두리스트 웹사이트',
    github: 'https://github.com/InnSeonn/todolist-Projects',
    website: 'https://inn-todolist.vercel.app/',
    video: `/videos/todolist.mp4`,
    story: [
      {
        id: 0,
        title: '프로젝트 소개',
        lang: ['React', 'Typescript', 'HTML5', 'Styled-Components'],
        desc: `리액트의 렌더링 과정을 이해하면서 component와 react Hooks을 중점적으로 활용할 수 있는 프로젝트를 고민했습니다. '할 일'이라는 컴포넌트를 반복적으로 사용하고, useEffect, useRef, useState, useMemo 등 React Hooks을 활용하여 할 일이 추가, 수정, 삭제되면 리렌더링을 통해 관련 요소에 동시적으로 UI 업데이트가 이루어지도록 했습니다. 해당 프로젝트는 깔끔하고 단순한 디자인으로 복잡한 스타일링이 필요하지 않았기 때문에 JSX를 사용하는 리액트의 특성을 살려 CSS-in-JS 방식의 styled-components를 사용하여 컴포넌트의 구조, 기능, 디자인을 하나의 파일로 파악할 수 있도록 했으며 미디어쿼리를 사용하여 반응형으로 제작했습니다.`,
      },
      {
        id: 1,
        title: '기능 및 UI',
        desc: `로컬스토로지에 할 일을 추가하고 수정, 삭제할 수 있습니다. 쉽게 할 일을 관리하기 위해서 최대한 적은 클릭으로 기능이 이루어지도록 했습니다. 캘린더로 직관적인 날짜 선택이 가능하고 일주일 전후의 가까운 날짜는 상대적으로, 올해 날짜는 월일만 표시하여 데드라인을 쉽게 파악할 수 있습니다. 날짜에 따라 오늘, 지난, 다음 할 일로 구분하거나 완료 여부에 따라 해야할 일, 완료된 할 일로 구분할 수 있습니다. 색상, 투명도, 중앙선 등을 활용하여 할 일의 상태를 직관적으로 표현했습니다. 자신만의 투두리스트 제목을 설정할 수 있습니다. 목표를 적어도 좋고, 공백으로 비워둘 수도 있습니다.`,
      },
      {
        id: 2,
        title: '새롭게 배우고 활용한 부분',
        desc: `투두리스트는 할 일 아이템, 추가 버튼, 정렬 버튼 등 여러 컴포넌트로 구성됩니다. 대부분의 컴포넌트에서 할 일 상태 데이터에 접근하고 업데이트 해야 하기 때문에 반복적인 props 전달을 피하고 효율적으로 전역 데이터를 다루기 위한 방법이 필요했습니다. createContext()로 전역 데이터를 만들고, 데이터가 변경되면 동시에 UI 업데이트를 위한 리렌더링이 발생할 수 있도록 provider를 통해 state와 dispatch를 컴포넌트로 전달해주었습니다. 컴포넌트 내에서 context를 간편하게 사용할 수 있도록 useContext() 값을 리턴하는 커스텀 훅을 작성했으며 Reducer를 사용하여 상태 업데이트 로직을 분리했습니다. props를 사용하지 않고 컴포넌트 간 할 일 상태를 공유하고 업데이트 할 수 있어 유용한 작업이었습니다.`,
      },
      {
        id: 3,
        title: '새롭게 알게 된 내용',
        desc: `- 배포 후 모바일 웹에서 할 일 추가 버튼이 하단 url바에 가려지는 것을 보고 화면 전체를 사용하기 위해 height를 100vh로 설정했으나 url바는 고려되지 않는다는 걸 알게 되었습니다. 이를 해결하기 위해 초기 렌더링과 창 크기 변경 시에 'window.innerHeight * 0.01'을 계산하여 1vh 값을 구하고 루트 변수를 통해 사용할 수 있도록 수정했습니다.

        - 텍스트 입력창의 크기가 할 일 내용의 글자수에 따라 달라지기 때문에 초기 렌더링에 입력창의 scrollHeight 값을 높이값으로 지정해주었습니다. 하지만 높이값이 정확하지 않았고 원인은 글꼴이 적용되기 전에 높이값이 계산되었기 때문이었습니다. 브라우저의 기본 글꼴과 프로젝트에서 사용한 글꼴의 차이가 있어 같은 글자수에서도 길이가 차이가 났던 것입니다. 이를 해결하기 위해 document.fonts.ready.then(()=>{})으로 글꼴이 로드 된 후 높이값을 구하도록 수정했습니다.`,
      },
    ],
  },
  {
    id: 2,
    name: 'clone',
    text: 'UI와 기능을 참고하여 제작한 반응형 클론 웹사이트',
    github: 'https://github.com/InnSeonn/westy-clone-Projects',
    website: 'https://inn-clone-web.vercel.app/',
    video: `/videos/clone.mp4`,
    story: [
      {
        id: 0,
        title: '프로젝트 소개',
        lang: ['Javascript', 'HTML5', 'SCSS'],
        desc: `vanillaJS를 최대한 사용하여 구현한 클론 웹사이트입니다. 실제 서비스하는 웹사이트의 구조를 파악하고 스스로 구현해보면서 Javascript를 학습하는 것에 목적을 두었고, 다양한 종류의 슬라이드와 애니메이션 효과, 아이콘 활용, 데이터 필터링 등 구현해 볼 요소가 많다고 생각되어 해당 사이트를 참고하게 되었습니다. 참고 사이트는 여러 페이지로 구성되어 있었으나 index 페이지의 구현 내용과 거의 중복될 것이라 판단하여 스크롤 이벤트를 적용한 원페이지 사이트로 수정하여 구현했습니다. <header>, <footer>, <nav>, <section> 등 HTML5의 시맨틱 태그를 사용하여 의미있는 문서 구조를 만들기 위해 노력했습니다. 레이아웃, 아이콘, 슬라이드 등 작성할 스타일이 많을 것이라 생각되었고 효율적인 스타일 작성을 위해 SCSS를 사용하여 변수, nesting, mixin 등을 활용했습니다.`,
      },
      {
        id: 1,
        title: '기능 및 UI',
        desc: `타이머를 이용한 자동 슬라이드, 슬라이드 스와이프 기능, 무한 슬라이드 등 다양한 슬라이드를 구현했습니다. 또한 작업물을 카테고리별로 필터링하여 보여주고 선택된 카테고리의 작업물을 정해진 개수만큼 표시하며 버튼을 클릭하여 표시되지 않은 작업물을 로드할 수 있습니다. 마우스 방향에 따라 박스 요소가 들어오고 나가면서 작업물의 설명을 인터랙티브하게 보여줍니다. 터치 디바이스에서는 설명을 확인하기 위해 터치하는 과정이 번거롭다고 생각되어 정적인 디자인으로 수정했습니다. 네비게이션 메뉴를 클릭하면 해당하는 컨텐츠 영역으로 스크롤 되고, TOP 버튼을 클릭하면 맨 위로 스크롤 됩니다.`,
      },
      {
        id: 2,
        title: '새롭게 배우고 활용한 부분',
        desc: `해당 사이트에서는 슬라이드를 통해 클라이언트, 작업물, 리뷰, 소식 등의 데이터를 보여줍니다. 클라이언트가 추가되었을 때, 새로운 작업물이 완성되었을 때 등 데이터가 추가되거나 변경되면 슬라이드가 자동으로 업데이트 될 수 있도록 데이터를 요청할 수 있는 서버를 구축하고자 했습니다. 처음에는 express를 사용하여 로컬 서버를 구축하고 get 요청에 따라 전송할 json 데이터를 작성했습니다. 이후 vercel에 express 서버를 배포하려했으나 동작하지 않았습니다. 당시에는 원인을 찾지 못해 결국 vercel에 json-server를 배포하는 깃허브 템플릿이 있어 이를 복제한 뒤 db.json 파일을 수정하여 사용했습니다. 하지만 웹사이트 에러가 발생했고, 알고보니 인덱스 파일의 이름을 'home.html'로 지정한 것이 문제였습니다. 'index.html'로 파일명을 변경하고 나니 정상적으로 배포할 수 있었습니다. 배포 후 express를 사용한 경우와 비교해보니 express 서버와 클라이언트를 같은 페이지에 배포했다는 것을 깨달았습니다. 로컬 서버만 사용하다보니 실제 서버와 클라이언트를 분리해야한다는 것을 미처 생각하지 못해 매우 허탈했지만 이를 계기로 express와 json-server에 데이터를 요청하고 전송해 볼 수 있었고, vercel을 사용해보는 새로운 경험이 되었습니다.`,
      },
      {
        id: 3,
        title: '어려웠던 점',
        desc: `버튼으로 컨트롤하는 무한 슬라이드는 구현해 본 적이 있으나 스와이프가 가능한 경우는 처음이었습니다. 처음에는 복제 슬라이드를 만들어 양끝에서 스와이프 되면 복제 슬라이드를 표시하다가 스와이프가 끝나는 시점에 타이머를 이용해 원본 지점으로 이동시켰습니다. 하지만 슬라이드가 페이지마다 전환되는 것이 아니라 아이템 하나씩 넘어가도록 동작했고, 만약 사용자가 복제 슬라이드의 아이템이 1개 보이는 상황에서 슬라이드 길이만큼 스와이프를 한다면 1개만큼의 공백이 생기는 문제가 발생했습니다. 그렇다면 복제 슬라이드를 하나 더 만들면 어떨까 고민했지만 효율적이지 않은 방법이라 생각했고, 고민끝에 스와이프 도중에 복제 슬라이드의 처음과 끝 지점을 만나면 원본 슬라이드의 지점으로 이동시키는 방법을 생각했습니다. 이렇게 구현하니 어느 지점에서 스와이프하더라도 무한루프가 가능했습니다. 또한 브레이크 포인트에 따라 달라지는 요소들, 뉴스 슬라이드의 경우 활성화 아이템이 가운데에 표시되고 양 옆으로 이전과 다음 슬라이드가 표시되는 디자인으로 복제 슬라이드를 하나 더 생성해야 되는 점 등 생각보다 다르게 고려되어야 할 요소들이 많았습니다. 슬라이드 클래스를 생성하고 재사용하여 한번에 관리하고 싶었기 때문에 많은 점을 고려하여 최대한 동일한 로직으로 모든 슬라이드가 동작할 수 있도록 노력했습니다.`,
      },
    ],
  },
];

export default projectData;
