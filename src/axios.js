import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tiktok-clone-mernstack.herokuapp.com/',
});

export default instance;
