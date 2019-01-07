import axios from 'axios';

async function createMatch(formData) {
  try {
    const match = await axios.post(`/api/matches/`,
          {
            "match": formData
          });
    return match;
  } catch (e) {
    console.log(e);
  }
}

export { createMatch }
