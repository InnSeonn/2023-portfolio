![project_900_0](https://user-images.githubusercontent.com/117163085/221346759-21cad515-ee8e-49b2-8663-399dbe587e3c.png)

# 2023-portfolio
개인 프로젝트와 본인 소개를 담은 포트폴리오 웹사이트

<br/>

## 💻 프로젝트 소개
React로 제작한 **포트폴리오 웹사이트**입니다. 학습하면서 제작한 개인 프로젝트와 저에 대한 간략한 소개와 정보, 연락처 및 깃허브 주소 등을 웹사이트에 한번에 담았습니다.

미디어쿼리를 사용하여 **반응형**으로 제작했습니다.

<br/>

## ✨ 배포사이트
https://inn-portfolio.vercel.app/

<br/>

## ⏱ 개발 기간
23년 1월 23일 - 23년 2월 25일

<br/>

## ⚙ 기술 스택
<img src="https://img.shields.io/badge/REACT-000000?style=for-the-badge&logo=React&logoColor=61DAFB"> <img src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/STYLEDCOMPONENTS-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=GitHub&logoColor=white">

- **`React`** : useEffect, useRef, useState 등 React Hooks을 활용하여 돔 요소를 조작하고, 렌더링(리렌더링) 시 필요한 작업을 구현했습니다. `react-router-dom`을 사용하여 여러 페이지로 구성했으며 페이지 이동 및 경로 파악, URL을 통한 값 전달을 위해 useLocation, useNavigate, useParams 등을 활용했습니다.
- **`Typescript`** : 타입을 명시하여 코드 작성 단계에서 버그를 예방하고 변수나 함수 등의 목적을 명확하게 하여 안전한 코드를 작성할 수 있도록 했습니다.
- **`Styled-Components`**, **`HTML5`** : JSX를 사용하는 리액트의 특성을 살려 CSS-in-JS 방식의 styled-components를 사용하여 컴포넌트의 구조, 기능, 디자인을 하나의 파일로 파악할 수 있도록 했습니다.
- **`React-Transition-Group`** : 페이지 전환 애니메이션을 위해 라이브러리를 활용했습니다.
- **`React-Icons`** : 버튼, 링크에 필요한 아이콘을 사용했습니다.
- **`Git`**, **`Github`**, **`SourceTree`** : Git을 통해 소스코드를 관리했습니다. 주로 SourceTree를 통해 commit할 파일 또는 라인을 add 하고, CLI로 commit, push 하여 작업했습니다.
- **`Vercel`** : Vercel에 Git Repository를 연동하여 웹사이트를 배포했습니다.

<br/>
  
## 📌 페이지 구성

### 1. / (Home) - [Home.tsx](src/pages/Home.tsx)
- 타이틀 강조를 위한 애니메이션 구현
- 페이지 이동 네비게이션

### 2. /about - [About.tsx](src/pages/About.tsx)
- 본인 소개와 역량 기술
- 이력서 페이지 링크

### 3. /projects - [ProjectPage.tsx](src/pages/ProjectPage.tsx)
- 개인 프로젝트 목록 슬라이드
- 슬라이드 버튼
- 슬라이드 드래그 기능
- 디테일 페이지 링크 버튼

### 4. /projects/detail - [ProjectDetail.tsx](src/pages/ProjectDetail.tsx)
- 프로젝트 상세 설명
- 깃허브, 웹사이트 링크

### 5. /contact - [Contact.tsx](src/pages/Contact.tsx)
- 깃허브, 이메일, 노션 이력서, 전화번호

<br/>

## 🎨 UI / UX
- 무채색을 사용한 깔끔한 디자인
- 단조로운 느낌을 줄이기 위한 글꼴 색상, 굵기, 크기, 테두리 선 등 다양한 텍스트 속성 활용
- 자연스러운 페이지 전환을 위한 애니메이션 구현
- 아이콘을 활용한 직관적인 표현 (버튼, 링크 등)
- 미디어쿼리, 반응형 단위(vw, vh 등)을 사용한 반응형 디자인

<br/>

https://user-images.githubusercontent.com/117163085/221346771-53143af1-e618-4012-b7a8-ebb60a59004a.mp4
