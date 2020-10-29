import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Technology from '../Technology/Technology';
import CV from '../CV/CV';
import Contact from '../Contact/Contact';

const data = require('../../data.json');

function Wrap(component) {
  return (
    <div className="container">
      <Sidebar />
      {component}
    </div>
  );
}

const MainWrapper = () => Wrap(<Main />);
const AboutWrapper = () => Wrap(<About />);
const ProjectsWrapper = () => Wrap(<Projects data={data.projects} />);
const TechnologyWrapper = () => Wrap(<Technology data={data.technologies} />);
const CVWrapper = () => Wrap(<CV />);
const ContactWrapper = () => Wrap(<Contact />);

function App() {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={MainWrapper} />
      <Route path="/about" component={AboutWrapper} />
      <Route path="/projects" component={ProjectsWrapper} />
      <Route path="/technology" component={TechnologyWrapper} />
      <Route path="/cv" component={CVWrapper} />
      <Route path="/contact" component={ContactWrapper} />
    </HashRouter>
  );
}

export default App;
