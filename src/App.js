import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://jsonplaceholder.typicode.com/users

function App() {
    return ( <
        div className = "App" >
        <
        Users / > { /* <Success /> */ } <
        /div>
    );
}

export default App;