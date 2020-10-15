import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import './index.css';

import Sidebar from './components/Sidebar/Sidebar';
import App from './components/App/App';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Technology from './components/Technology/Technology';
import CV from './components/CV/CV';
import Contact from './components/Contact/Contact';

const data = require('./data.json');

function Wrap(component) {
  return (
    <div className="container">
      <Sidebar />
      {component}
    </div>
  );
}

const AppWrapper = () => Wrap(<App />);
const AboutWrapper = () => Wrap(<About />);
const ProjectsWrapper = () => Wrap(<Projects />);
const TechnologyWrapper = () => Wrap(<Technology />);
const CVWrapper = () => Wrap(<CV />);
const ContactWrapper = () => Wrap(<Contact />);

ReactDOM.render(
  <HashRouter basename="/">
    <Route exact path="/" component={AppWrapper} />
    <Route path="/about" component={AboutWrapper} />
    <Route path="/projects" component={ProjectsWrapper} />
    <Route path="/technology" component={TechnologyWrapper} />
    <Route path="/cv" component={CVWrapper} />
    <Route path="/contact" component={ContactWrapper} />
  </HashRouter>,
  document.getElementById('root')
);
