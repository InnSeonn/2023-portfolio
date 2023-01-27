import Reset from 'styled-reset';
import { css, createGlobalStyle } from 'styled-components';

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
		border: none;
		background: none;
		appearance: none;
		font-family: inherit;
		cursor: pointer;
	}
`;

export default GlobalStyle;
