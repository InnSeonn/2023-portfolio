import Reset from 'styled-reset';
import { keyframes, css, createGlobalStyle } from 'styled-components';

export const ani = (content: string) => keyframes`
  ${content}
`;
export const bounceAnimation = css`
  animation: ${ani(`
    0% {opacity: 0; transform: translateY(0px)}
    50% {transform: translateY(-20px)}
    100% {opacity: 1; transform: translateY(0px)}
  `)} 1s cubic-bezier(0.46, 0.03, 0.31, 1.03) both;
`;

const Variables = css`
  :root {
    --container-padding: 40px;

    /* --color-bg: #fcfdff; */
    --color-bg: #f3f5f9;
    --color-black: #121212;
    --color-grey-light: #e8ebf1;
    --color-grey: #9fa1a7;
    --color-blue: #acc8e3;
  }
`;

const GlobalStyle = createGlobalStyle`
	${Variables}
	${Reset}

	* {
		box-sizing: border-box;
		letter-spacing: -0.03em;
	}
	body {
		color: var(--color-black);
		font-weight: 300;
		font-family: 'SUIT';
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
