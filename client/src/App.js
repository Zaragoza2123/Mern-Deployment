import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import React,{ useState } from 'react';
import PetList from './components/PetList';
import AddPet from './components/AddPet';
import PetInfo from './components/PetInfo';
import EditPet from './components/EditPet';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Pet Shelter</h1>
        <Switch>
          <Route exact path='/'>
            <PetList></PetList>
          </Route>
          <Route exact path={'/pets/new'}>
            <h4>Know a pet needing a home?</h4>
            <AddPet></AddPet>
          </Route>
          <Route exact path={'/pets/:_id'}>
            <PetInfo></PetInfo>
          </Route>
          <Route exact path={'/pets/:_id/edit'}>
            <EditPet></EditPet>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
