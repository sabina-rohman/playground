function starWarsString(id){
    var str = '';
    return $.getJSON("https://swapi.co/api/people/${id}").then(function(data){
        str += `${data.name} is featured in `;
        var filmData = data.films[0];
        return $.getJSON(filmData);
    }).then(function(res){
        str += `${res.title} directed by {res.director} `;
        var planet = res.planets[0];
        return planet;
    }).then(function(res){
        str += `took place in ${res.name}`;
        return str;
    }).then(function(finalString){
        return finalString;
    })
}

function getMostFollpwers(...usernames){
    let baseUrl = "https://api.github.com/users/";
    let urls = usernames.map(username => baseUrl + username);
    return Promise.all(urls).then(function(data){
        let max = data.sort((a,b) => a.followers < b.followers)[0];
        return `${max.name} has most number of followers with ${max.followers}`;
    })
}