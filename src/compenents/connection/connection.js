import React from 'react';

let Connection = ({showSignup}) => {

let handleSignup = (event) => {
    event.preventDefault();
};

let handleLogin = (event) => {
    event.preventDefault();
};

return (
    <div>
        {showSignup ? (
            <form onSubmit={handleSignup}>
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prénom" />
            <input type="email" placeholder="Adresse e-mail" />
            <input type="password" placeholder="Mot de passe" />
            <button type="submit">S'inscrire</button>
            </form>) : (<form onSubmit={handleLogin}>
            <input type="email" placeholder="Adresse e-mail" />
            <input type="password" placeholder="Mot de passe" />
            <button type="submit">Connexion</button>
            </form>)}
    </div>
    );
};

export default Connection;
