import axios from 'axios';

async function login(credentials){
  const token = await axios.post('/api/coach_token',
    {
      "auth": credentials
    });
    console.log(token.data);
    return token.data;
}

export { login }
