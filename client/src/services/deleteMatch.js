import axios from 'axios';

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

export { deleteMatch }
