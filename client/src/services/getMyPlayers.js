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

export {
  getMyPlayers
}
