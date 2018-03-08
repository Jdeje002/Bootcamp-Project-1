//meetup api
var apiKey= "504576183f744b1d78d246c75283750"
var queryURL ="https://crossorigin.me/https://api.meetup.com/2/categories?key="+apiKey+"&group_urlname=ny-tech&sign=true"

https://api.meetup.com/2/categories?&sign=true&photo-host=public&fields=basketball&page=20

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (result) {
    console.log(result)
})