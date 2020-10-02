import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Home from "./pages/homepage/homepage.component";
import About from "./pages/aboutpage/aboutpage.component";
import Resume from "./pages/resumepage/resumepage.component";
import Uses from "./pages/usespage/usespage.component";
import Footer from "./components/footer/footer.component";
import SinglePost from "./pages/singlepost/singlepost.component";
import NotFound from './pages/notfoundpage/notfound.component';
import { HelmetProvider } from "react-helmet-async";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="holder">
      <HelmetProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/resume" component={Resume}></Route>
          <Route path="/uses" component={Uses}></Route>
          <Route path="/post/:id" component={SinglePost}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer name="Arnel" />
      </HelmetProvider>
    </div>
  );
}

export default App;
