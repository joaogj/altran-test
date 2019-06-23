import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/atoms/Menu/index';
import Side from './components/atoms/Sidebar';
import Spotlight from './components/molecules/Spotlight';
import Page from './components/templates/page'
import Button from './components/atoms/Button';
import Rail from './components/organisms/Rail';

const Itemns = [
  {
    icon: "svg/search.svg",
    text: "Busca",
  },
  {
    icon: "svg/home.svg",
    text: "início"
  },
  {
    icon: "svg/radio.svg",
    text: "agora na globo"
  },
  {
    icon: "svg/category.svg",
    text: "categorias"
  },
  {
    icon: "svg/user.svg",
    text: "minha conta"
  }
]

function App() {
  return (
    <Page renderItems={Itemns} />
  );
}

export default App;
