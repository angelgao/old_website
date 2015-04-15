angular.module('postLoaderApp', ['ngResource', 'ngSanitize'])
  .controller('PostController', function($scope, $http, $window, $location) {
  	postId = $location.search().id;

	$http.get(
		'https://public-api.wordpress.com/rest/v1.1/sites/angelwgao.wordpress.com/posts/'+postId
		).success(function(data){
			$scope.post = data;
		});

    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var disqus_shortname = 'angelgao';
  var disqus_identifier = 'testing'+postId;
  var disqus_url = "http://www.angelgao.com/posts/"+postId;

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();

  });

