import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Home, About, Navbar, AddNote, Test, AllNotes, Login, Settings, Register } from 'src/imports/Views';
import { NavbarState, NotesState, AuthState } from 'src/imports/State';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavbarContext } from 'src/imports/Context';
import 'src/styles/index.css';

const App = () => {
  const { state } = useContext(NavbarContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <section id="home__section">
          <Navbar pages={[['Dashboard', '/', <i class="fas fa-home link__icons"></i>], ['Notes', '/allnotes', <i class="far fa-sticky-note link__icons"></i>], ['Calendar', '/calendar', <i class="far fa-calendar-alt link__icons"></i>]]} />
          <Switch>
            <section id="main__body" style={state.main__body.style}>
              <Route exact path="/test" component={Test} />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/addnote" component={AddNote} />
              <Route path="/editnote/:id" component={AddNote} />
              <Route path="/view/:id" component={AddNote} />
              <Route path="/allnotes" component={AllNotes} />
              <Route path="/settings" component={Settings} />
            </section>
          </Switch>
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
