import { Component } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render(){

    return (
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home key="general" pageSize={this.pageSize} country="in" category="general" />} />
          <Route path="/business" exact element={<Home key="business" pageSize={this.pageSize} country="in" category="business" />} />
          <Route path="/entertainment" exact element={<Home key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
          <Route path="/general" exact element={<Home key="general" pageSize={this.pageSize} country="in" category="general" />} />
          <Route path="/health" exact element={<Home key="health" pageSize={this.pageSize} country="in" category="health" />} />
          <Route path="/science" exact element={<Home key="science" pageSize={this.pageSize} country="in" category="science" />} />
          <Route path="/sports" exact element={<Home key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
          <Route path="/technology" exact element={<Home key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
     
    </>
  );
}
}

