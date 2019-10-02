import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import { getAllStarships } from './services/sw-api';

class App extends Component {
  state = { starships: []};

  async componentDidMount() {
    const starships = await getAllStarships();
    this.setState({ starships: starships.results });
  }
  
  getStarship = (id) => { return this.state.starships[id];}
  
  render() {
    return (
      <div>
        <h1>Star Wars</h1>
        <Switch>
          <Route exact path='/' render={() => 
            <div>
              {this.state.starships.map((starship, id) => 
                <Link to={`/starships/${id}`} key={starship.name}>{starship.name}</Link>
              )}
            </div>
          }/>
          <Route path='/starships/:id' render={(props) => 
            <StarshipPage
              {...props}
              getStarship={this.getStarship}
            />
          }/>
        </Switch>
      </div>
    );
  }

}

export default App;
