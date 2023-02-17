import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';
import ProjectDetail from './ProjectDetail';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import ProjectPage from './ProjectPage';
import { useEffect } from 'react';

const AppLayout = styled.div`
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
  background-color: var(--color-bg);
  overscroll-behavior: none;
  &.full {
    overflow: hidden;
  }
`;

function App() {
  const location = useLocation();

  useEffect(() => {
    setViewHeight();
    window.addEventListener('resize', setViewHeight);
    return () => window.removeEventListener('resize', setViewHeight);
  }, []);

  const setViewHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  return (
    <AppLayout className='App'>
      <GlobalStyle />
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} timeout={500} classNames={location.pathname.includes('/projects/') ? 'slide' : location.pathname === '/' ? 'page' : 'bounce'}>
          <Routes location={location}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/projects' element={<ProjectPage />}></Route>
            <Route path='/projects/detail/:name' element={<ProjectDetail />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </AppLayout>
  );
}

export default App;
