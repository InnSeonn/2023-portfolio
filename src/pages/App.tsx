import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import ProjectPage from './ProjectPage';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} timeout={500} classNames={location.pathname.includes('/projects/') ? 'slide' : 'bounce'}>
          <Routes location={location}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/projects' element={<ProjectPage />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </AppLayout>
  );
}

export default App;
