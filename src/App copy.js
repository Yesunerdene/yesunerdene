import React, {useState} from 'react'
import { Button } from 'react-bootstrap';

import './App.css';
import Home from './Pages/Home';
// import img from './photo.jpeg';

function App() {
  const [theme, settheme] = useState('light-theme');

  const changeTheme = () => {
    settheme(theme ===  'light-theme' ? 'dark-theme' : 'light-theme');
  };

  return (
    <div className={`container App ${theme}`}>
      <div className="container">
        <div className="row">
            <Button onClick={changeTheme} type="button" variant="primary">{theme === 'light-theme' ? 'Dark' : 'Light'}</Button>
            <Button onClick={changeTheme} variant="primary">{theme === 'light-theme' ? 'Dark' : 'Light'}</Button>
            <Button variant="secondary" size="lg">
              Large button
            </Button>
        </div>
      </div>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
