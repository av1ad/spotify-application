import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');


    
})
  return (
    <div className="App">
      <a href="http://localhost:8888/login">Log in to spotify</a>
    </div>
  );
}

export default App;
