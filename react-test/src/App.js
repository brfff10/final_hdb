import React from 'react';
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom';
import NavbarParent from './components/NavBar/NavBarParent';
import HomeScreen from './components/HomeScreen/HomeScreen'
import PatientInfoRequests from './components/PatientInfoRequests/PatientInfoRequests';
import About from './components/About/About';
import Records from './components/Records/Records';

const App = () => (
  <Router>
    <div>
      <NavbarParent/>

      <Route exact path="/" component={HomeScreen} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/requests" component={UnderConstruction} />
      <Route path="/tab1" component={UnderConstruction} />
      <Route path="/tab2" component={UnderConstruction} />
      <Route path="/profile" component={UnderConstruction} />
      <Route path="/patients" component={PatientInfoRequests} />
      <Route path="/record/:id" component={Records} />
    </div>
  </Router>
);

const UnderConstruction = () => (
  <div>
    <h2>Under Construction</h2>
  </div>
);


const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


export default App;
