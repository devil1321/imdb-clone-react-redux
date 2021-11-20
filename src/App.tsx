import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import { State } from './APIController/reducers'
import * as MoviesActions from './APIController/action-creators/moviesActions'

const App = () => {

  const { actors, movies } = useSelector((state:State) => state)
  const dispatch = useDispatch()
  const MoviesAPI = bindActionCreators(MoviesActions,dispatch)

  useEffect(()=>{

  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
