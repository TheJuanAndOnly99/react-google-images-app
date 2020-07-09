import axios from 'axios';

export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers : {
    Authorization : 'Client-ID casWWwVkn1a2l-76iyR4x95OWaUXTTkBc3y7TpSw2Jo'
  }
});
