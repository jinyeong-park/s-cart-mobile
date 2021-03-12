import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const result = await Location.requestPermissionsAsync();
      if (!result.granted) return;
      const {
        coords: { latitude, longitude }
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });

    } catch (error) {
      // if the above promise doesn't resolve
      console.log(error)
    }
  }

  useEffect(() => {
    getLocation();
  }, [])

  return location
};

