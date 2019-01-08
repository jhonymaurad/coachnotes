import React, { Component } from 'react';

import { getMyPlayers } from '../services/getMyPlayers';

export default class ViewPlayers extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: []
    }
  }

  async componentDidMount(){
    const players = await getMyPlayers();
    this.setState({
      players
    })
  }

  render(){
    return(
      <div>
        <ul>
        {this.state.players.map(player => (
          <div key={player.id}>
            <h3>{player.name}</h3>
            <h3>{player.date_of_birth}</h3>
            <h3>{player.avatar}</h3>
            <h3>{player.position}</h3>
            <h3>{player.team}</h3>
          </div>
        ))}

        </ul>

      </div>

    )

  }

}
