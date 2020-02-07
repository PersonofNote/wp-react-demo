import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Link,
  Route, 
  Switch 
  } from 'react-router-dom'
import SinglePage from './components/SinglePage.js';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMenu: []
    };
  }
  getMainMenu = async () => {
    let res = await axios.get(
      `http://localhost/wp-react/wp-backend/wp-json/wp/v2/pages`
    );
      let { data } = await res;
      this.setState({ mainMenu: data });
  };
  
  componentDidMount = async () => {
    await this.getMainMenu();
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
          </div>
          <Switch>
            {mainMenu.map((page, index) => {
              return (
                  <Route
                      exact
                      key={index}
                      path={`/${page.slug}`}
                      render={props => (
                        <SinglePage {...props} page={page} />
                      )}
                  />
              );
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}
