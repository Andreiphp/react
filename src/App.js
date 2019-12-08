import React from 'react'
import './App.css';
import Header from './header/Header';
import Navbar from './navdar/Navbar';
import Dialogs from './dialogs/Dialogs';
import Messages from './messages/Messages';
import { Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title='React' />
        <div className='wrapper'>
          <Navbar />
          <div className='contents'>
            <Route path='/profile' component={Dialogs} />
            <Route path='/messages' component={Messages} />
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
