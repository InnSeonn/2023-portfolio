import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const ani = (content: string) => keyframes`
  ${content}
`;
const HomeLayout = styled.section`
  overflow: hidden;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-bg);
`;
const HomeCol = styled.div<{ col: number }>`
  ${(props) =>
    (props.col === 1 &&
      css`
        width: 45%;
        margin: calc(var(--container-padding) * 3) 0;
        padding: 0 var(--container-padding);
        border-right: 1px solid var(--color-grey-light);
        background-color: #f3f5f9;
      `) ||
    (props.col === 2 &&
      css`
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        width: 55%;
        padding: 0 var(--container-padding);
      `)}
`;
const HomeTitleBox = styled.div`
  font-size: 6rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;
const HomeTextBox = styled.div`
  overflow: hidden;
`;
const HomeParagraph = styled.p<{ order: number; content: string }>`
  position: relative;
  color: var(--color-grey-light);
  transform: translateY(100%);
  animation: ${ani(`to{transform: translateY(0)}`)} 0.5s ${(props) => props.order * 0.3}s forwards;
  &::after {
    display: block;
    position: absolute;
    inset: 0 0 0 0;
    color: #000;
    clip-path: inset(100% 0 0 0);
    animation: ${ani(`to{clip-path: inset(0 0 0 0)}`)} 2s ${(props) => 1 + props.order * 0.3}s forwards;
    content: '${(props) => props.content}';
  }
`;
const HomeButtonText = styled.span`
  margin-top: -3em;
  margin-right: -1.4em;
  opacity: 0.6;
  letter-spacing: 0.05em;
  writing-mode: vertical-rl;
`;
const HomeButton = styled.button<{ order: number }>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 200px;
  height: 300px;
  margin-bottom: ${(props) => props.order * 100}px;
  border-radius: 50%;
  box-shadow: 0px 14px 20px 0 #c3c7e159;
  ${(props) =>
    (props.order === 1 &&
      css`
        background: radial-gradient(#b8def7, #9599e2);
        transform: translateY(calc(100px + 100%));
      `) ||
    (props.order === 2 &&
      css`
        background: radial-gradient(#baecff, #e4e586);
        transform: translateY(calc(200px + 100%));
      `) ||
    (props.order === 3 &&
      css`
        background: radial-gradient(#e9d7a5, #65bddf);
        transform: translateY(calc(300px + 100%));
      `)}
  font-size: 24px;
  font-weight: bold;
  animation: ${ani(`to{transform: translateY(-10px)}`)} ${(props) => props.order * 0.5 + 1}s cubic-bezier(0.46, -0.04, 0.5, 1.22) 1.5s forwards;
  &.bounce {
    animation: ${ani(`
      0% {transform: translateY(-10px)}
      50% {transform: translateY(10px)}
      100% {transform: translateY(-10px)}
    `)} 2s cubic-bezier(0.42, 0, 0.56, 1.13) infinite;
  }
  &::after {
    position: absolute;
    inset: 0 0 0 0;
    display: block;
    border-radius: inherit;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png');
    opacity: 0.15;
    content: '';
  }
  &:hover ${HomeButtonText} {
    opacity: 1;
    transition: all 0.5s;
  }
`;

export default function Home() {
  const handleAnimationEnd = (e: React.AnimationEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      e.target.classList.add('bounce');
    }
  };

  const mouseEventHandler = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      e.type === 'mouseover' ? (e.target.style.animationPlayState = 'paused') : (e.target.style.animationPlayState = 'running');
    }
  };

  return (
    <HomeLayout>
      <HomeCol col={1}>
        <HomeTitleBox>
          <HomeTextBox>
            <HomeParagraph order={0} content='Front-end'>
              Front-end
            </HomeParagraph>
          </HomeTextBox>
          <HomeTextBox>
            <HomeParagraph order={1} content='Junior Developer'>
              Junior Developer
            </HomeParagraph>
          </HomeTextBox>
          <HomeTextBox>
            <HomeParagraph order={2} content='Park Inseon'>
              Park Inseon
            </HomeParagraph>
          </HomeTextBox>
          <HomeTextBox>
            <HomeParagraph order={3} content='Portfolio'>
              Portfolio
            </HomeParagraph>
          </HomeTextBox>
        </HomeTitleBox>
      </HomeCol>
      <HomeCol col={2} onAnimationEnd={handleAnimationEnd} onMouseOver={mouseEventHandler} onMouseOut={mouseEventHandler}>
        <HomeButton order={1}>
          <HomeButtonText>about</HomeButtonText>
        </HomeButton>
        <HomeButton order={3}>
          <HomeButtonText>projects</HomeButtonText>
        </HomeButton>
        <HomeButton order={2}>
          <HomeButtonText>contact</HomeButtonText>
        </HomeButton>
      </HomeCol>
    </HomeLayout>
  );
}
