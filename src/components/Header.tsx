import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLayout = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  padding: 20px var(--container-padding);
  /* background-color: var(--color-bg); */
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
          <a href=''>Inn</a>
        </HeaderLogoBox>
        {isDisplay && (
          <HeaderList>
            <HeaderItem>
              <a href=''>about</a>
            </HeaderItem>
            <HeaderItem>
              <a href=''>projects</a>
            </HeaderItem>
            <HeaderItem>
              <a href=''>contact</a>
            </HeaderItem>
          </HeaderList>
        )}
      </HeaderNav>
    </HeaderLayout>
  );
}
