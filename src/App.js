import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router,
  Link,
  Route, 
  Switch,
  Redirect 
  } from 'react-router-dom'
import SinglePage from './pages/SinglePage.js';
import BlogPage from './pages/BlogPage.js';
import ChartPage from './pages/ChartPage.js';
import Footer from './components/Footer.js';
import axios from 'axios';
import scrollTop from './functions/ScrollTop';

//TODO: implement Google crawling/SEO, back button, scroll-to-top element on scroll

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

  // Blog page will display all posts
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
            <Link onClick={scrollTop} aria-label="Home"  className="Main-Menu-Link" to='/'>Home</Link>
            {mainMenu.map((page) => {
              if(page.slug !== "home-page"){
                      return <Link aria-label={page.title.rendered} onClick={scrollTop} className="Main-Menu-Link" to={page.slug}>{page.title.rendered}</Link>;
              }
            })}
            <Link onClick={scrollTop} aria-label="D3 in React"  className="Main-Menu-Link" to='/d3-in-react'>D3inReact</Link>
            <Link onClick={scrollTop}  aria-label="Blog" className="Main-Menu-Link" to='/blog'>Blog</Link>
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
            <Route exact path="/">
              <Redirect to="/home-page" />
            </Route>
            <Route render={() => <div className="container">Not Found</div>} />
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}