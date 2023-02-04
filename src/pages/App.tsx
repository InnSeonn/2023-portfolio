import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';
import ProjectDetail from './ProjectDetail';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import ProjectPage from './ProjectPage';

const AppLayout = styled.div<{ overflowY: string }>`
  overflow-x: hidden;
  overflow-y: ${(props) => props.overflowY};
  position: relative;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const location = useLocation();
  const [overflowY, setOverflowY] = useState('hidden');

  useEffect(() => {
    if (location.pathname.includes('/projects/')) {
      setOverflowY('visible');
    } else {
      setOverflowY('hidden');
    }
  }, [location.pathname]);

  return (
    <AppLayout overflowY={overflowY} className='App'>
      <GlobalStyle />
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} timeout={500} classNames={location.pathname.includes('/projects/') ? 'slide' : 'bounce'}>
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
