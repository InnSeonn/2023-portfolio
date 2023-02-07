import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const HeaderLayout = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  padding: 20px var(--container-padding);
  font-size: 1.25rem;
  font-weight: bold;
  font-family: 'Italiana';
  text-transform: capitalize;
  z-index: 999;
`;
const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 1px solid var(--color-grey-light);
`;
const HeaderItem = styled.li<{ active: boolean }>`
  display: inline-block;
  padding: 0 1em;
  color: var(--color-black);
  opacity: 0.2;
  transition: all 0.5s;
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
    `}
`;

export default function Header() {
  const location = useLocation();
  const [active, setActive] = useState('/');

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <HeaderLayout>
      <HeaderNav>
        <HeaderLogoBox>
          <Link to='/'>Inn</Link>
        </HeaderLogoBox>
        {active !== '/' && (
          <ul>
            <HeaderItem active={active === '/about'}>
              <Link to='/about'>about</Link>
            </HeaderItem>
            <HeaderItem active={active === '/projects'}>
              <Link to='/projects'>projects</Link>
            </HeaderItem>
            <HeaderItem active={active === '/contact'}>
              <Link to='/contact'>contact</Link>
            </HeaderItem>
          </ul>
        )}
      </HeaderNav>
    </HeaderLayout>
  );
}
