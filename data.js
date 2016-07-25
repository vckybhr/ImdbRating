var movies = document.getElementsByClassName('project-title');
for (var i = 0; i < movies.length; i++) 
   { 
		var h2 = movies[i].getElementsByTagName('h2');
		var moviename = h2[0].innerText;
		movieurl = "http://www.omdbapi.com/?t=" + moviename;

    	var xmlHttp = new XMLHttpRequest();
    	xmlHttp.open( "GET", movieurl, false ); // false for synchronous request
    	xmlHttp.send( null );
  		var x = xmlHttp.responseText;

		var obj = JSON.parse(x);
		var imdb = obj.imdbRating;

		var node = document.createElement("p");   
		node.innerHTML = imdb;
		movies[i].appendChild(node); 





   } 
