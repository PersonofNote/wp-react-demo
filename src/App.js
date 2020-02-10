import React from 'react';
import './App.scss';
import { BrowserRouter as Router,
  Link,
  Route, 
  Switch 
  } from 'react-router-dom'
import SinglePage from './components/SinglePage.js';
import BlogPage from './components/BlogPage.js';
import ChartPage from './components/ChartPage.js';
import Footer from './components/Footer.js';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMenu: [],
      posts: []
    };
  }
  getMainMenu = async () => {
    let res = await axios.get(
      `http://localhost/wp-react/wp-backend/wp-json/wp/v2/pages`
    );
      let { data } = await res;
      this.setState({ mainMenu: data });
  };

  getArchive = async () => {
    let res = await axios.get(
      `http://localhost/wp-react/wp-backend/wp-json/wp/v2/posts?per_page=100`
    );
      let { data } = await res;
      this.setState({ posts: data });
  };
  
  componentDidMount = async () => {
    await this.getMainMenu();
    await this.getArchive();
  };
  render(){
    const { mainMenu } = this.state;
    return (
      <div className="App">
        <Router>
          <div className="Main-Menu">
            {mainMenu.map((page) => {
                      return <Link className="Main-Menu-Link" to={page.slug}>{page.title.rendered}</Link>;
            })}
            <Link className="Main-Menu-Link" to='/d3-in-react'>D3inReact</Link>
            <Link className="Main-Menu-Link" to='/blog'>Blog</Link>
          </div>
          <Switch>
            {mainMenu.map((page, index) => {
              return (
                  <Route
                      exact
                      key={index}
                      path={`/${page.slug}`}
                      render={props => (
                        //Generate single page view from returned data
                        <SinglePage {...props} page={page} />
                      )}
                  />
              );
            })}
            {/* Archive Route, TODO: expand to dynamically include various custom post types */}
            <Route
              exact
              path={`/blog`}
              render={props => (
                <BlogPage {...props} posts={this.state.posts} />
              )}
            />
            <Route
              exact
              path={`/d3-in-react`}
              render={props => (
                <ChartPage />
              )}
            />
            <Route render={() => <div className="container">Not Found</div>} />
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}