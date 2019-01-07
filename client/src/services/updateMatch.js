import axios from 'axios';

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

export { updateMatch }
