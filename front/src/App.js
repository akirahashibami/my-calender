import React, {createContext, useState} from 'react';
import logo from './logo.svg';

import ContextA from './hooksSample/ContextA';

import './App.css';

import Counter from './hooksSample/counter';
import EffectFunction from './hooksSample/title_counter';

export const UserContext = createContext()
export const HobbyContext = createContext()

function App() {

  // useStateを使ってuserを作成
  const [user, setUser] = useState({
    name: 'セイラ',
    age: '17'
  })
  // useStateを使ってhobbyを作成
  const [hobby, setHobby] = useState('キャンプ')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
        <EffectFunction />
        <div>
          {/* userContesxt Providerを作成しvalueにはuserをセット */}
          <UserContext.Provider value={user}>
            {/* HobbyContext Providerを作成し、valueにはhobbyをセット */}
            <HobbyContext.Provider value={hobby}>
              <ContextA />
            </HobbyContext.Provider>
          </UserContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
