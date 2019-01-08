import axios from 'axios';

async function createMatch(token, formData) {
  try {
    const match = await axios.post(`/api/matches/`, formData, {
      headers: {
				'Authorization': `Bearer ${token}`
			},
    });
    return match.data;
  } catch (e) {
    console.log(e);
  }
}

async function deleteMatch(token, matchId) {
  try {
    const match = await axios.delete(`/api/matches/${matchId}`, {
      headers: {
				'Authorization': `Bearer ${token}`
			}
    });
    return match;
  } catch (e) {
    console.log(e)
  }
}

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

async function updateMatch(token, matchId, matchData) {
  try {
    const updatedMatch = await axios.put(`/api/matches/${matchId}`, matchData, {
      headers:{
				'Authorization': `Bearer ${token}`
			}
    });
    return updatedMatch.data;
  } catch (e) {
    console.log(e);
  }
}

export {
  createMatch,
  deleteMatch,
  getMyMatches,
  updateMatch
  }
