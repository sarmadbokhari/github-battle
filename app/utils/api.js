var axios = require('axios');

var id = 'GITHUB_CLIENT_ID';
var secret = 'SECRET_ID';
var params = `?client_id=${id}&client_secret${secret}`;

function getProfile(username) {
  return axios.get('https://github.com/users/' + username)
    .then(function(user) {
      return user.data;
    });
}

function getRepos(username) {
  return axios.get('https://github.com/users/' + username + '/repos/&per_page=100')
}

function getStarCount(repos) {
  return repos.data.reduce(function(count, repo) {
    return count + repo.stargazers_count;
  }, 0)
}

function calculateScore(profile, repos) {
  var followers = profile.followers;
  var totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

function handleError(err) {
  console.warn(err);
  return null;
}

function getUserData(player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(function(data) {
    var profile = data[0];
    var repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  });
}

function sortPlayers(players) {
  return players.sort(function(a,b) {
    return b.score - a.score;
  });
}

module.exports = {
  fetchPopularRepos: function(language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function(response) {
        return response.data.items;
      });
  }
};
