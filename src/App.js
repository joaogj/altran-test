import React from 'react'
import './App.css'
import Page from './components/templates/page'

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
