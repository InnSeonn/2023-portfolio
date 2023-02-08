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

const AppLayout = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-bg);
  }
`;

function App() {
  const location = useLocation();

  return (
    <AppLayout className='App'>
      <GlobalStyle />
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} timeout={500} classNames={location.pathname.includes('/projects/') ? 'slide' : location.pathname === '/' ? '' : 'bounce'}>
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
