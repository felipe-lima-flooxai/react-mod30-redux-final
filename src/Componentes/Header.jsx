import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Contador Global</h1>
      <p>Este projeto usa Redux para gerenciar o estado global do contador.</p>
      <p>O objetivo é usar os botões para fazer o valor atual ficar igual ao objetivo</p>
    </header>
  );
}

export default Header;
