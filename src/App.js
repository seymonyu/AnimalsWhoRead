import React, { Component } from "react";
import "./App.scss";
//import Ticker from "./components/Ticker";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Articles from "./components/Articles";
import Logo from "./components/Logo";
import Mission from "./components/Mission";
<<<<<<< HEAD
import Footer from "./components/Footer";


//import { Link } from "react-router-dom";
=======
import NavBar from "./components/NavBar";
>>>>>>> b9c28fe27a0d643909e7babcd4b24fcab8bdee96

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

<<<<<<< HEAD
  /*   componentDidMount = () => {
    const json = localStorage.getItem("articles");
    console.log(json);
    const articles = JSON.parse(json);
    console.log(articles);

    this.setState({ articles: articles });
  }; */

=======
>>>>>>> b9c28fe27a0d643909e7babcd4b24fcab8bdee96
  componentDidUpdate = () => {
    const articles = JSON.stringify(this.state.articles);
    localStorage.setItem("articles", articles);
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Logo />
        <Header />
        <Mission />
        <Form getArticles={this.getArticles} />
        <Articles articles={this.state.articles} />
        <Ticker />
        <Footer />
      </div>
    );
  }
}

export default App;
