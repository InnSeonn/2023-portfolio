import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLayout = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  padding: 20px var(--container-padding);
  /* background-color: var(--color-bg); */
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
  font-size: 1.25rem;
  font-weight: bold;
  font-family: 'Italiana';
`;
const HeaderList = styled.ul`
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: -0.03em;
`;
const HeaderItem = styled.li`
  display: inline-block;
  padding: 0 1em;
`;

export default function Header() {
  const location = useLocation();
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    location.pathname === '/' ? setIsDisplay(false) : setIsDisplay(true);
  }, [location.pathname]);

  return (
    <HeaderLayout>
      <HeaderNav>
        <HeaderLogoBox>
          <Link to='/'>Inn</Link>
        </HeaderLogoBox>
        {isDisplay && (
          <HeaderList>
            <HeaderItem>
              <Link to='/about'>about</Link>
            </HeaderItem>
            <HeaderItem>
              <Link to='/projects'>projects</Link>
            </HeaderItem>
            <HeaderItem>
              <Link to='/contact'>contact</Link>
            </HeaderItem>
          </HeaderList>
        )}
      </HeaderNav>
    </HeaderLayout>
  );
}
