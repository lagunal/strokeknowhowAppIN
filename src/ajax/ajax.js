
const apiHost = 'https://strokeknowhow.org/wp-json/custom-toolkit/v1/';
//const apiHost = 'http://localhost/strokeknowhow2/wp-json/custom-toolkit/v1/';

export default {
  //fetch the data from energency toolkit
  async getToolkit(userId, toolkit) {

    try {
      const response = await fetch(apiHost + toolkit + '/' + userId);
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  },
  //save data emergency toolkit
  saveToolkit(data, userId, token, toolkit) {

        return fetch(apiHost + toolkit + '/' + userId, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
          body: JSON.stringify({
              data: data
          }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });

  },


};




