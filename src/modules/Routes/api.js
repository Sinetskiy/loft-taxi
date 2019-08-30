export const getAddressList = () =>
  fetch(
    `https://loft-taxi.glitch.me/addressList`
  ).then(
    response =>
      response.status !== 200 ? Promise.reject(response) : response.json()
  );

export const getCoordinatesOfRoute = (startAddress, destinationAddress) =>
  fetch(
      `https://loft-taxi.glitch.me/route?address1=${startAddress}&address2=${destinationAddress}`
  ).then(
    response =>
      response.status !== 200 ? Promise.reject(response) : response.json()
  );
