import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ani } from '../components/GlobalStyle';
import { TfiArrowRight } from 'react-icons/tfi';

export const Layout = styled.section`
  position: absolute;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  padding: calc(var(--container-padding) * 2) var(--container-padding);
  background-color: var(--color-bg);
`;
const HomeLayout = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: flex-start;
  }
`;
const HomeBox = styled.div`
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const HomeTitleBox = styled.div`
  padding: 0 1.2em 0 0;
  font-size: 7rem;
  font-weight: 900;
  line-height: 1.2;
  transition: padding 0.5s;
  @media screen and (max-width: 1500px) {
    font-size: 7vw;
  }
  @media screen and (max-width: 992px) {
    padding: 0;
    font-size: 5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 9.7vw;
  }
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
    color: var(--color-black);
    clip-path: inset(100% 0 0 0);
    animation: ${ani(`to{clip-path: inset(0 0 0 0)}`)} 2s ${(props) => 1 + props.order * 0.3}s forwards;
    content: '${(props) => props.content}';
  }
`;
const HomeNavList = styled.ul`
  padding: 0 0 0 var(--container-padding);
  font-size: 3rem;
  font-weight: 900;
  @media screen and (max-width: 1500px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 992px) {
    padding: var(--container-padding) 0 0;
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 7.6vw;
  }
`;
const HomeNavItem = styled.li`
  overflow: hidden;
  padding: 0.5em 0;
`;
const HomeIconBox = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 10px;
  margin: 0 0 0 0.5em;
`;
const HomeArrowIcon = styled(TfiArrowRight)`
  color: var(--color-black);
  font-size: 0.5em;
  opacity: 1;
  transform: translateX(-100%);
  transition: all 0.5s;
`;
const HomeNavLink = styled(Link)<{ order: number }>`
  display: flex;
  align-items: center;
  color: transparent;
  -webkit-text-stroke: 1px var(--color-black);
  opacity: 0.5;
  transform: translateX(-100%);
  animation: ${ani(`to{transform: translateX(0)}`)} 0.5s ${(props) => 1 + props.order * 0.5}s forwards;
  transition: color 0.5s, opacity 0.5s;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--color-black);
      opacity: 1;
      ${HomeArrowIcon} {
        transform: translateX(0);
        animation: ${ani(`0% {transform: translateX(0)}; 100%{transform: translateX(10px)}`)} 0.5s alternate infinite;
      }
    }
  }
  @media screen and (max-width: 768px) {
    opacity: 1;
  }
`;

export default function Home() {
  return (
    <HomeLayout>
      <HomeBox>
        <div>
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
        </div>
        <nav>
          <HomeNavList>
            <HomeNavItem>
              <HomeNavLink to='/about' order={1}>
                /about
                <HomeIconBox>
                  <HomeArrowIcon />
                </HomeIconBox>
              </HomeNavLink>
            </HomeNavItem>
            <HomeNavItem>
              <HomeNavLink to='/projects' order={2}>
                /projects
                <HomeIconBox>
                  <HomeArrowIcon />
                </HomeIconBox>
              </HomeNavLink>
            </HomeNavItem>
            <HomeNavItem>
              <HomeNavLink to='/contact' order={3}>
                /contact
                <HomeIconBox>
                  <HomeArrowIcon />
                </HomeIconBox>
              </HomeNavLink>
            </HomeNavItem>
          </HomeNavList>
        </nav>
      </HomeBox>
    </HomeLayout>
  );
}
