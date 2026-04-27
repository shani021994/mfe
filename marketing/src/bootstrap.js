import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mount = (el) =>{
    const root = ReactDOM.createRoot(el);
    root.render(<App />,el);
};

if(process.env.NODE_ENV === 'development'){
    const devRooot = document.querySelector('#marketing-dev-root');
    if(devRooot){
        mount(devRooot);
    }
}

export { mount };
