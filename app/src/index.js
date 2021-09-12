import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'src/views/Home';
import About from 'src/views/About';
import Navbar from 'src/includes/Navbar';
import AddNote from 'src/views/AddNote';
import AllNotes from 'src/views/AllNotes';
import Login from 'src/views/Login';
import Settings from 'src/views/Settings'
import Register from 'src/views/Register';
import NavbarContext from 'src/context/navbar/navbarContext';
import NavbarState from 'src/context/navbar/navbarState';
import NotesState from 'src/context/notes/State';
import AuthState from 'src/context/auth/State';
import 'src/index.css';
import { FaHome, BiNotepad, IoCalendar } from 'react-icons/all';

const App = () => {
  const { state } = useContext(NavbarContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <section id="home__section">
          <Navbar pages={[['Dashboard', '/', <FaHome color='dimgray' />], ['Notes', '/allnotes', <BiNotepad color='dimgray' />], ['Calendar', '/calendar', <IoCalendar color='dimgray' />]]} />
          <section id="main__body" style={state.main__body.style}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/addnote" component={AddNote} />
              <Route path="/editnote/:id" component={AddNote} />
              <Route path="/view/:id" component={AddNote} />
              <Route path="/allnotes" component={AllNotes} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </section>
        </section>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <NavbarState>
        <NotesState>
          < App />
        </NotesState>
      </NavbarState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);
