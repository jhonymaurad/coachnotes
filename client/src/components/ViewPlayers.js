import React, { Component } from 'react';

import UpdatePlayerForm from './UpdatePlayerForm';
import { getMyPlayers } from '../services/playerServices';
import { deletePlayer } from '../services/playerServices';
import { updatePlayer } from '../services/playerServices';
import avatar from '../images/avatar.png';

export default class ViewPlayers extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      focusPlayer: null,
      editPlayerData: {
        "name": '',
        "data_of_birth": '',
        "avatar": '',
        "position": '',
        "team": ''
      }
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  async componentDidMount(){
    const players = await getMyPlayers();
    this.setState({
      players
    })
  }

  async handleDelete(e){
    const token = localStorage.getItem('token');
    const player = await deletePlayer(token, e.currentTarget.id);
    const players = await getMyPlayers();
    this.setState(prevState => ({
      ...prevState.players,
      players
    }))
  }

  async handleUpdate(e){
    e.preventDefault();
    const token = localStorage.getItem('token');
    const player = await updatePlayer(token, this.state.focusPlayer, this.state.editPlayerData);
    const players = await getMyPlayers();
    this.setState(prevState => ({
      ...prevState.players,
      players
    }))
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState(prevState => ({
      editPlayerData: {
        ...prevState.editPlayerData,
        [name] : value
      }
    }));
  }

  renderFocusPlayer(){
    const player = this.state.players.find(player => player.id === this.state.focusPlayer)
    const { editPlayerData } = this.state;
    const {
      name,
      date_of_birth,
      avatar,
      position,
      team
    } = editPlayerData;
    return(
      <UpdatePlayerForm
        name= {player.name}
        onSubmit={this.handleUpdate}
        onChange={this.handleChange}
        valueName={name}
        valueDOB={date_of_birth}
        valueAvatar={avatar}
        valuePosition={position}
        valueTeam={team} />
    )
  }

  updateFocusPlayer(id){
    const data = this.state.players.find(player => player.id === id);
    this.setState(prevState => ({
      focusPlayer: id,
      editPlayerData: {
        ...prevState.editPlayerData,
        name: data.name,
        date_of_birth: data.date_of_birth,
        avatar: data.avatar,
        position: data.position,
        team: data.team
      }
    }));
  }


  render(){
    const { players, focusPlayer } = this.state;
    return(
      <div className='viewPlayers'>
        <ul className='players-container'>
        {this.state.players.map(player => (
          <div
            key={player.id}
            className='players-profile'
            onClick={() => this.updateFocusPlayer(player.id)}>
            <h3>{player.name}</h3>
            <h3>{player.date_of_birth}</h3>
            <h3>{player.avatar}</h3>
            <img src={avatar}
                 style={{height: '200px', width:"150px", paddingTop:"150px"}}
                 alt="profile"/>
            <h3>{player.position}</h3>
            <h3>{player.team}</h3>
            <button
              id={player.id}
              onClick={this.handleDelete}>Delete</button>
          </div>
        ))}
        </ul>
        {focusPlayer !== null && this.renderFocusPlayer()}
      </div>
    )
  }
}
