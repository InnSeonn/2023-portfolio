import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { TfiArrowLeft } from 'react-icons/tfi';
import { Transition } from 'react-transition-group';

const FullNavLayout = styled.nav<{ state: string }>`
  overflow: hidden;
  position: absolute;
  inset: 0 0 0 0;
  padding: var(--container-padding);
  background-color: var(--color-black);
  color: var(--color-bg);
  transform: translateY(100%);
  transition: all 0.5s 0.1s;
  z-index: 9999;
  ${(props) =>
    ((props.state === 'entering' || props.state === 'entered') &&
      css`
        transform: translateY(0);
      `) ||
    ((props.state === 'exiting' || props.state === 'exited') &&
      css`
        transform: translateY(100%);
      `)}
  &::after {
    display: block;
    position: absolute;
    inset: 0 0 0 0;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png');
    opacity: 0.15;
    z-index: -1;
    content: '';
  }
`;
const FullNavButton = styled.button`
  color: inherit;
  font-size: 1.75rem;
`;
const FullNavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-bottom: 2em;
  font-size: 14vw;
  font-weight: 900;
`;
const FullNavItem = styled.li`
  padding: 0.2em 0;
`;
const FullNavLink = styled(Link)`
  color: transparent;
  -webkit-text-stroke: 1px var(--color-bg);
  transition: all 0.5s;
  &:hover {
    color: var(--color-bg);
  }
`;

type Props = {
  setFullNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FullNav({ setFullNav }: Props) {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
    const app = document.querySelector('.App') as HTMLElement;
    app.classList.add('full');
    return () => {
      app.classList.remove('full');
    };
  }, []);

  const closeFullNav = (e: React.MouseEvent) => {
    if (!(e.currentTarget instanceof HTMLButtonElement) && !(e.target instanceof HTMLAnchorElement)) return;
    setState(false);
    setTimeout(() => {
      setFullNav(false);
    }, 600);
  };

  return (
    <Transition in={state} timeout={500}>
      {(state) => (
        <FullNavLayout state={state}>
          <FullNavButton onClick={closeFullNav}>
            <TfiArrowLeft />
          </FullNavButton>
          <FullNavList onClick={closeFullNav}>
            <FullNavItem>
              <FullNavLink to='/'>home</FullNavLink>
            </FullNavItem>
            <FullNavItem>
              <FullNavLink to='/about'>about</FullNavLink>
            </FullNavItem>
            <FullNavItem>
              <FullNavLink to='/projects'>projects</FullNavLink>
            </FullNavItem>
            <FullNavItem>
              <FullNavLink to='/contact'>contact</FullNavLink>
            </FullNavItem>
          </FullNavList>
        </FullNavLayout>
      )}
    </Transition>
  );
}
