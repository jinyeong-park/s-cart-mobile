import client from './client';

// save it separate constant since '/listings' will be used multiple times
const endpoint = '/listings';

const getListings = () => client.get(endpoint);

export default {
  getListings
};