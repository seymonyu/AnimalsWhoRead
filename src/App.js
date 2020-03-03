import React, { Component } from "react";
/*import "./App.scss";*/
import Ticker from "./components/Ticker";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Articles from "./components/Articles";
import Logo from "./components/Logo";
import Mission from "./components/Mission";
<<<<<<< HEAD
import Contact from "./components/Contact";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Button } from "react-bootstrap";
import FooterMain from "./components/FooterMain";
=======
import NavBar from "./components/NavBar";
>>>>>>> development

const API_KEY = "38c6325b37ef4200b8d0b52b8e8ab90b";

class App extends Component {
  state = {
    articles: []
  };

  // Making the API Call
  getArticles = async e => {
    const articleName = e.target.elements.articleName.value || "chicken";
    e.preventDefault();
    const api_call = await fetch(
      `http://newsapi.org/v2/everything?q=${articleName}&apiKey=${API_KEY}&pageSize=20`
    );

    const data = await api_call.json();
    this.setState({ articles: data.articles });
    console.log(this.state.articles);
  };

  componentDidUpdate = () => {
    const articles = JSON.stringify(this.state.articles);
    localStorage.setItem("articles", articles);
  };

  render() {
    return (
      <div className="App">
        <NavBar />
<<<<<<< HEAD
=======
        <Logo />
>>>>>>> development
        <Header />
        <Mission />
        <Form getArticles={this.getArticles} />
        <Articles articles={this.state.articles} />
        <Ticker />
<<<<<<< HEAD
        <FooterMain />
=======
>>>>>>> development
      </div>
    );
  }
}

export default App;
