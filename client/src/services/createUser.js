import axios from 'axios';

async function register(user_data) {
  try {
    const user = await axios.post('/api/coaches', user_data);
    return user;
  } catch (e) {
    console.log(e);
  }
}

export { register }
