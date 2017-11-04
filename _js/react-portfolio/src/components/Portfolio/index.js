import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import PortfolioList from './PortfolioList';
import PortfolioDetails from './PortfolioDetails';
const api = require('../../helpers/api.js');

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      projects: [],
      navigationBack: false,
    };

    this.getPortfolioProjects = this.getPortfolioProjects.bind(this);
  }

  componentDidMount () {
    this.getPortfolioProjects();
  }

  getPortfolioProjects () {
    this.setState(() => {
      return { loading: true };
    });

    api.getPortfolioProjects()
      .then((res) => {
        let data = res && res.data ? res.data : [];
        this.setState(() => {
          return {
            loading: false,
            projects: data
          };
        });
        /*console.log('projects state', this.state.projects);*/
      });
  }

  render() {
    const loading = this.state.loading;
    const projects = this.state.projects;

    return (
      !loading
        ?
        <div>
          <Route exact path = "/" render={(props) => <PortfolioList {...props} projects={projects} />} />
          <Route exact path="/:id" render={(props) => <PortfolioDetails {...props} projects={projects} />} />
          <Route path="*" status="404" component={NotFound} />
        </div>
        : <h2>Loading...</h2>
    );
  }
}

function NotFound() {
  return <div><h1>404 Not Found</h1></div>
}

export default Portfolio;
