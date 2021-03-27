import { useState } from 'react';

// calling api, handling error and show activity indicator
export default useApi = (apiFunc) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // ...args : put them in the single array
  const requestServer = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    // error handling
    if (!response.ok) {
      return setError(true)
    }
    setError(false);
    setData(response.data);
  }

  return { data, error, loading, requestServer }

}