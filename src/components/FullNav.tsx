import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { TfiClose } from 'react-icons/tfi';
import { Transition } from 'react-transition-group';
import { createBrowserHistory } from 'history';

const FullNavLayout = styled.nav<{ state: string }>`
  overflow: hidden;
  position: fixed;
  inset: 0 0 0 0;
  padding: var(--container-padding);
  background-color: var(--color-black);
  color: var(--color-bg);
  transform: translateX(100%);
  transition: all 0.5s 0.1s;
  z-index: 9999;
  ${(props) =>
    ((props.state === 'entering' || props.state === 'entered') &&
      css`
        transform: translateX(0);
      `) ||
    ((props.state === 'exiting' || props.state === 'exited') &&
      css`
        transform: translateX(100%);
      `)}
`;
const FullNavButton = styled.button`
  margin: auto 0 auto auto;
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
  const backBtnRef = useRef<HTMLButtonElement>(null);
  const history = createBrowserHistory();

  useEffect(() => {
    //뒤로가기 방지
    history.push(history.location);
    window.addEventListener('popstate', preventGoBack);

    //FullNav 표시
    setState(true);
    const app = document.querySelector('.App') as HTMLElement;
    app.classList.add('full');

    //577px 이상에서 FullNav 미표시
    window.addEventListener('resize', handleResizeNav);

    return () => {
      app.classList.remove('full');
      window.removeEventListener('resize', handleResizeNav);
      window.removeEventListener('popstate', preventGoBack);
    };
  }, []);

  const preventGoBack = () => {
    //윈도우 뒤로가기 버튼 또는 제스처 시 애니메이션 적용 X
    setFullNav(false);
  };

  const closeFullNav = (e: React.MouseEvent) => {
    if (!(e.currentTarget instanceof HTMLButtonElement) && !(e.target instanceof HTMLAnchorElement)) return;
    setState(false);
    setTimeout(() => {
      setFullNav(false);
    }, 600);
  };

  const handleResizeNav = () => {
    if (window.matchMedia('(min-width: 577px)').matches) {
      setFullNav(false);
    }
  };

  return (
    <Transition in={state} timeout={500}>
      {(state) => (
        <FullNavLayout state={state}>
          <FullNavButton onClick={closeFullNav} ref={backBtnRef}>
            <TfiClose />
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
