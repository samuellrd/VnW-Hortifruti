import React, { Component } from "react";
import "./App.css";
import alfaceImg from "./images/alface.png";
import laranjaImg from "./images/laranja.png";
import cerejaImg from "./images/cereja.png";
import cenouraImg from "./images/cenoura.png";
import mangaImg from "./images/manga.png";
import limaoImg from "./images/limao.png";
import beterrabaImg from "./images/beterraba.png";
import tomateImg from "./images/tomate.png";
import cesta from "./images/cesta.png";

class App extends Component {
  state = {
    frutas: [
      { nome: "Alface", image: alfaceImg },
      { nome: "Laranja", image: laranjaImg },
      { nome: "Cereja", image: cerejaImg },
      { nome: "Cenoura", image: cenouraImg },
      { nome: "Manga", image: mangaImg },
      { nome: "Limão", image: limaoImg },
      { nome: "Beterraba", image: beterrabaImg },
      { nome: "Tomate", image: tomateImg },
    ],
  };

  render() {
    const { frutas } = this.state;

    return (
      <div>
        <h1 className="titulo">HORTIFRUTI VnW</h1>
        <h2 className="subtitulo">Nossos Produtos</h2>
        <section className="conteudo">
          <div className="frutasContainer">
            {frutas.map((frutas) => (
              <figure className="frutas">
                <figcaption className="nomesFrutas">{frutas.nome}</figcaption>
                <img
                  className="frutasImg"
                  src={frutas.image}
                  alt={frutas.nome}
                />
                {frutas.name}
              </figure>
            ))}
          </div>
          <div className="cestaDeCompras">
            <figure className="cesta">
              <img className="cestaImg" src={cesta} alt="cesta de frutas" />
              <figcaption className="legenda">
                Arraeste o seu produto aqui para colocar na cestinha
              </figcaption>
            </figure>
            <div className="botoes">
              <button className="adiciona">+</button>
              <button className="remove">-</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
