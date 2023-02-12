import Reset from 'styled-reset';
import { keyframes, css, createGlobalStyle } from 'styled-components';

export const ani = (content: string) => keyframes`
  ${content}
`;
const bounceAnimation = css`
  animation: ${ani(`
    0% {opacity: 0; transform: translateY(0px)}
    50% {transform: translateY(-20px)}
    100% {opacity: 1; transform: translateY(0px)}
  `)} 1s cubic-bezier(0.46, 0.03, 0.31, 1.03) both;
`;
const pageTransition = css`
  /* bounce */
  .bounce-enter {
    opacity: 0;
  }
  .bounce-enter-active {
    opacity: 1;
    transition: all 0.5s;
    z-index: 100;
    & > div {
      ${bounceAnimation}
    }
  }
  .bounce-enter-done {
    & > div {
      ${bounceAnimation}
    }
  }
  .bounce-exit {
    opacity: 1;
  }
  .bounce-exit-active,
  .bounce-exit-done {
    opacity: 0;
    transition: all 0.5s;
  }

  /* slide */
  .slide-enter {
    transform: translateY(100vh);
    //projectDetail 페이지와의 전환 시 투명도 유지
    + .bounce-exit,
    + .bounce-exit-active,
    + .bounce-exit-done {
      opacity: 1;
    }
  }
  .slide-enter-active,
  .slide-enter-done {
    transform: translateY(0);
  }
  .slide-exit,
  .slide-exit-active,
  .slide-exit-done {
    transform: translateY(100vh);
  }

  /* page */
  .page-enter,
  .page-enter-active {
    z-index: 101;
  }
  .page-exit {
    clip-path: inset(0 0 0 0);
  }
  .page-exit-active,
  .page-exit-done {
    clip-path: inset(0 100% 0 0);
    transition: all 0.5s;
    z-index: 101;
  }
`;

const Variables = css`
  :root {
    --container-padding: 40px;

    --color-bg: #f3f5f9;
    --color-black: #121212;
    --color-grey-light: #e8ebf1;
    --color-grey: #9fa1a7;
    --color-blue: #acc8e3;

    background-color: var(--color-bg);
  }
`;

const GlobalStyle = createGlobalStyle`
	${Variables}
	${Reset}
	${pageTransition}

	* {
		box-sizing: border-box;
		letter-spacing: -0.03em;
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: #000;
    }
    ::-webkit-scrollbar-track {
      background: var(--color-bg);
    }
	}
	body {
		color: var(--color-black);
		font-weight: 300;
		font-family: 'SUIT';
    word-break: keep-all;
	}
	a {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
	}
	button {
		display: block;
		padding: 0;
		border: none;
		background: none;
		appearance: none;
		font-family: inherit;
		cursor: pointer;
	}
`;

export default GlobalStyle;
