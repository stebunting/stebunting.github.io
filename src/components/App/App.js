import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.less';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Technology from '../Technology/Technology';
import CV from '../CV/CV';
import Contact from '../Contact/Contact';
import PageNotFound from '../PageNotFound/PageNotFound';

const data = require('../../data.json');

function Wrap({ component, pageTitle }) {
  useEffect(() => {
    document.title = `Steve Bunting Software Development Portfolio${pageTitle}`;
  }, []);

  return (
    <div className="container">
      <Sidebar />
      {component}
    </div>
  );
}
Wrap.propTypes = {
  component: PropTypes.element.isRequired,
  pageTitle: PropTypes.string.isRequired
};

const MainWrapper = () => (
  <Wrap
    component={<Main />}
    pageTitle=""
  />
);
const AboutWrapper = () => (
  <Wrap
    component={<About />}
    pageTitle=" // About"
  />
);
const ProjectsWrapper = () => (
  <Wrap
    component={<Projects data={data.projects} />}
    pageTitle=" // Projects"
  />
);
const TechnologyWrapper = () => (
  <Wrap
    component={<Technology data={data.technologies} />}
    pageTitle=" // Technology"
  />
);
const CVWrapper = () => (
  <Wrap
    component={<CV />}
    pageTitle=" // CV"
  />
);
const ContactWrapper = () => (
  <Wrap
    component={<Contact />}
    pageTitle=" // Contact"
  />
);
const PageNotFoundWrapper = () => (
  <Wrap
    component={<PageNotFound />}
    pageTitle=" // Page Not Found"
  />
);

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={MainWrapper} />
        <Route path="/about" component={AboutWrapper} />
        <Route path="/projects" component={ProjectsWrapper} />
        <Route path="/technology" component={TechnologyWrapper} />
        <Route path="/cv" component={CVWrapper} />
        <Route path="/contact" component={ContactWrapper} />
        <Route component={PageNotFoundWrapper} />
      </Switch>
    </Router>
  );
}

export default App;
