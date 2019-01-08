import axios from 'axios';

async function getMyPlayers() {
  const resp = await axios({
    url: 'api/players/minep',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return resp.data;
}

async function deletePlayer(token, playerId) {
  try {
    const player = await axios.delete(`/api/players/${playerId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return player;
  } catch (e) {
    console.log(e);
  }
}

async function updatePlayer(token, playerId, playerData) {
  try {
    const updatedPlayer = await axios.put(`/api/players/${playerId}`, playerData,{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (e) {
    console.log(e);
  }
}

export {
  getMyPlayers,
  deletePlayer,
  updatePlayer
}
