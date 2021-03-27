import client from './client';

// save it separate constant since '/listings' will be used multiple times
const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  // content-type
  // application/json
  // multipart/form-data
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image, index) =>
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image
    }))

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  // Parent > Child

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded /  progress.total),
  });
}

// export as defult
export default {
  getListings,
  addListing
};