import logo from './logo.svg';
import './App.css';
import Introduction from './components/introduction'
import { Component } from 'react';
import Sidebar from './components/sidebar';
import About from './components/about';
import Projects from './components/projects';
import Blog from './components/blog';
import Timeline from './components/timeline';


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>        
        <div id="colorlib-main">
          <Introduction></Introduction>
          <About></About>
          <Projects></Projects>
          <Blog></Blog>
          <Timeline></Timeline>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
