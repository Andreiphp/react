import React from 'react'
import './App.css';
import Header from './header/Header';
import Navbar from './navdar/Navbar';
import MessagesContainer from './messages/messages-container';
import ProfileContainer from './profile/profile-container';
import NewsContainer from './news/news-container';
import UsersContainer from './users/users-container';
import { Route } from 'react-router-dom';
function App(props) {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <div className='side-bar'>
          <Navbar />
        </div>
        <div className='wrapper'>
          <div className='contents'>
            <Route path='/profile' render={() => <ProfileContainer />} />
            <Route path='/messages' render={() => <MessagesContainer />} />
            <Route path='/news' render={() => <NewsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
