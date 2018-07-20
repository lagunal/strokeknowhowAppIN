//const apiHost = 'http://10.0.0.34:80/strokeknowhow2/wp-json/toolkit/v1/';
const apiHost = 'https://strokeknowhow.org/wp-json/toolkit/v1/';

export default {
  //fetch the data from energency toolkit
  async getEmergency(userId) {
    try {
      const response = await fetch(apiHost + 'get-emergency/' + userId);
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  },
  
  //save data emergency toolkit
  saveToolkit(data, userId, token) {
    try {
      fetch(apiHost + 'save-emergency/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
          json: data,
          id: userId,
        }),
      });
    } catch(error) {
        console.error(error);
    }
},
};




