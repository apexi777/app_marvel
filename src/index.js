import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';



// marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
