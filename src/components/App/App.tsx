// Requirements
import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Types
import { MetaItem } from '../../types/MetaItem';

// Components
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Technology from '../Technology/Technology';
import CV from '../CV/CV';
import Contact from '../Contact/Contact';
import PageNotFound from '../PageNotFound/PageNotFound';

// Style
import './App.less';

// Data
import data from '../../data/data.json';
import metadata from '../../data/metadata.json';

interface Props {
  component: ReactElement,
  pageMetadata: MetaItem
}

function Wrap(props: Props): ReactElement {
  const { component, pageMetadata } = props;

  return (
    <div className="container">
      <Helmet>
        <title>{`Steve Bunting Software Development Portfolio${pageMetadata.title}`}</title>
        <meta name="description" content={pageMetadata.description} />
      </Helmet>
      <Sidebar />
      {component}
    </div>
  );
}

const MainWrapper = () => (
  <Wrap
    component={<Main />}
    pageMetadata={metadata.main}
  />
);
const AboutWrapper = () => (
  <Wrap
    component={<About />}
    pageMetadata={metadata.about}
  />
);
const ProjectsWrapper = () => (
  <Wrap
    component={<Projects data={data.projects} />}
    pageMetadata={metadata.projects}
  />
);
const TechnologyWrapper = () => (
  <Wrap
    component={<Technology data={data.technologies} />}
    pageMetadata={metadata.technology}
  />
);
const CVWrapper = () => (
  <Wrap
    component={<CV />}
    pageMetadata={metadata.cv}
  />
);
const ContactWrapper = () => (
  <Wrap
    component={<Contact />}
    pageMetadata={metadata.contact}
  />
);
const PageNotFoundWrapper = () => (
  <Wrap
    component={<PageNotFound />}
    pageMetadata={metadata.pageNotFound}
  />
);

function App(): ReactElement {
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
