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

export { createMatch }
