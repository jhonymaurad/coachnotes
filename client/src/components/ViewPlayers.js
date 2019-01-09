import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import UpdatePlayerForm from './UpdatePlayerForm';
import Counter from './Counter';
import { getMyPlayers } from '../services/playerServices';
import { deletePlayer } from '../services/playerServices';
import { updatePlayer } from '../services/playerServices';
import avatar from '../images/man_avatar.png';
import { IoMdCalendar } from "react-icons/io";

export default class ViewPlayers extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [],
      playersCount: '',
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
    console.log(players.length)
    this.setState({
      players: players,
      playersCount: players.length
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
        <div>
          <h1>My Players:</h1>
          <h4>Number of Player:</h4>
          <Counter playersCount={this.state.playersCount}/>
        </div>
        <Link to='/addplayer'><IoMdCalendar className='navIcons' /></Link>Add Player
        <ul className='player-info-container'>
        {this.state.players.map(player => (
          <div
            key={player.id}
            className='players-profile'
            onClick={() => this.updateFocusPlayer(player.id)}>
              <h3>{player.name}</h3>
              <img src={avatar}
                   alt="profile"
                   className='avatarImg'/>

                  <h3>Date of Birth: </h3>
                  <h5>{player.date_of_birth}</h5>
                  <h3>Nickname</h3>
                  <h5>{player.avatar}</h5>
                  <h3>Position:</h3>
                  <h5>{player.position}</h5>
                  <h3>Team:</h3>
                  <h5>{player.team}</h5>
            <button
              id={player.id}
              onClick={this.handleDelete}
              className='deleteButtons deleteProfile'>Delete</button>
          </div>
        ))}
        </ul>
        {focusPlayer !== null && this.renderFocusPlayer()}
      </div>
    )
  }
}
