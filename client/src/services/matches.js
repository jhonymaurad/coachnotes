import axios from 'axios';

async function getMyMatches() {
  const resp = await axios({
    url: 'api/matches/mine',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log(resp.data);
  return resp.data;
}

export {
  getMyMatches
}
