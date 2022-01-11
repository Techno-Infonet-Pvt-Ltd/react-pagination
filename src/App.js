import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './component/navbar/navbar.component';
import Home from './component/home/home.component';
import About from './component/about/about.component';
import Services from './component/services/services.component';
import Contact from './component/contact/contact.component';
import Comment from './component/comment/comment.component';
// import Loader from "react-loader-spinner";

import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



function App(){
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/comment/:id" exact component={Comment} />
      <Route path="/about" exact component={About} />
      <Route path="/services" exact component={Services}/>
      <Route path="/contact" exact component ={Contact} />
    </div>
    </Router>
  );
}
export default App;
