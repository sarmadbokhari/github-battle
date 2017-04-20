var axios = require('axios');

var id = 'GITHUB_CLIENT_ID';
var secret = 'SECRET_ID';
var params = `?client_id=${id}&client_secret${secret}`;

module.exports = {
  fetchPopularRepos: function(language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function(response) {
        return response.data.items;
      });
  }
};
