import axios from 'axios';

async function deleteMatch(matchId) {
  try {
    const match = await axios.delete(`/api/matches/${matchId}`)
  } catch (e) {
    console.log(e)
  } 
}
