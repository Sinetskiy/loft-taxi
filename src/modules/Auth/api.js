export const login = (email, pass) =>
  fetch(
    `https://loft-taxi.glitch.me/auth?` +
           `username=${email}&` +
           `password=${pass}`
  ).then(
    response =>
      response.status !== 200 ? Promise.reject(response) : response.json()
  );
