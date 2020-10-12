import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import App from './components/App/App';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Technology from './components/Technology/Technology';
import CV from './components/CV/CV';
import Contact from './components/Contact/Contact';

function Wrapper(component) {
  return (
    <div className="container">
      <Sidebar />
      {component}
    </div>
  );
}

const AppWrapper = () => Wrapper(<App />);
const AboutWrapper = () => Wrapper(<About />);
const ProjectsWrapper = () => Wrapper(<Projects />);
const TechnologyWrapper = () => Wrapper(<Technology />);
const CVWrapper = () => Wrapper(<CV />);
const ContactWrapper = () => Wrapper(<Contact />);

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={AppWrapper} />
    <Route path="/about" component={AboutWrapper} />
    <Route path="/projects" component={ProjectsWrapper} />
    <Route path="/technology" component={TechnologyWrapper} />
    <Route path="/cv" component={CVWrapper} />
    <Route path="/contact" component={ContactWrapper} />
  </BrowserRouter>,
  document.getElementById('root')
);
