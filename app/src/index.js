import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Navbar from './includes/Navbar';
import AddNote from './views/AddNote';
import AllNotes from './views/AllNotes';
import Login from './views/Login';
import Register from './views/Register';
// import WebsiteHomePage from './views/WebsiteHomePage';
// import NotFound from './views/NotFound';
import NavbarContext from 'src/context/navbar/navbarContext';
import NavbarState from 'src/context/navbar/navbarState';
import NotesState from 'src/context/notes/State';
// import AuthContext from 'src/context/auth/Context';
// import AuthState from 'src/context/auth/State';
import './index.css';
import { FaHome, BiNotepad, IoCalendar } from 'react-icons/all'

const App = () => {
  const { state } = useContext(NavbarContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/">
          <section id="home__section">
            <Navbar pages={[['Dashboard', '/', <FaHome color='dimgray' />], ['Notes', '/allnotes', <BiNotepad color='dimgray' />], ['Calendar', '/calendar', <IoCalendar color='dimgray' />]]} />
            <section className="main__body" id="main__body" style={state.main__body.style}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/addnote" component={AddNote} />
                <Route path="/editnote/:id" component={AddNote} />
                <Route path="/view/:id" component={AddNote} />
                <Route path="/allnotes" component={AllNotes} />
              </Switch>
            </section>
          </section>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <NavbarState>
      <NotesState>
        < App />
      </NotesState>
    </NavbarState>
  </React.StrictMode>,
  document.getElementById('root')
);
