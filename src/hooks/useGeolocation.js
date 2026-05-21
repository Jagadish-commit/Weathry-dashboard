import { useEffect, useState }
from "react";

function useGeolocation() {
  const [location,
    setLocation] =
      useState(null);

  useEffect(() => {
    navigator.geolocation
      .getCurrentPosition(
        position => {
          setLocation({
            lat:
              position.coords.latitude,

            lon:
              position.coords.longitude,
          });
        }
      );
  }, []);

  return location;
}

export default useGeolocation;