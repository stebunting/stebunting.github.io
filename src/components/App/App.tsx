// Requirements
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  component: React.ReactElement,
  pageMetadata: MetaItem
}

function Wrap(props: Props): React.ReactElement {
  const { component, pageMetadata } = props;

  return (
    <div className="container">
      <title>{`Steve Bunting Software Development Portfolio${pageMetadata.title}`}</title>
      <meta name="description" content={pageMetadata.description} />
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

function App(): React.ReactElement {
  return (
    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        element: <MainWrapper />,
        errorElement: <PageNotFoundWrapper />,
      }, {
        path: "/about",
        element: <AboutWrapper />,
      }, {
        path: "/projects",
        element: <ProjectsWrapper />,
      }, {
        path: "/technology",
        element: <TechnologyWrapper />,
      }, {
        path: "/cv",
        element: <CVWrapper />,
      }, {
        path: "/contact",
        element: <ContactWrapper />,
      },
    ])} />
  );
}

export default App;
