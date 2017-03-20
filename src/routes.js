import React from 'react';
/*import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';*/
import { Route, Router } from 'react-router';
import App from './App';
import NotesContainer from './containers/NotesContainer';
import NoteDetailsContainer from './containers/NoteDetailsContainer';

import ModalConfirmation from './ModalConfirmation';
import createHistory from './createConfirmationHistory';

const getModalConfirmation = ModalConfirmation('modal-holder');
const history = createHistory(getModalConfirmation);

export default (
  <Router history={history}>
    <Route path="/" component={App} >
      <Route path="/:folderId" component={NotesContainer}>
        <Route path="/:folderId/:noteId" component={NoteDetailsContainer}/>
      </Route>
    </Route>
  </Router>
);

/*const NoMatch = ({location}) => (
 <div>
 <h3>No match for <code>{location.pathname}</code></h3>
 </div>
 );*/

/**
 *
 * <div>
 <Switch>
 <Route path="/" component={App}/>
 <Route component={NoMatch}/>
 </Switch>
 </div>
 *
 * */

/*export default (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/:folderId" component={NotesContainer}/>
        <Route exact path="/:folderId/:noteId" component={NoteDetailsContainer}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
);*/

/**
 * <Route path="/:folderId" component={NotesContainer}>
 *   <Route path="/:folderId/:noteId" component={NoteDetailsContainer}/>
 * </Route>
 */
