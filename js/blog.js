angular.module('blogLoaderApp', ['ngResource', 'ngSanitize'])
  .controller('BlogController', function($scope, $http, $window) {

	$http.get(
		'https://public-api.wordpress.com/rest/v1.1/sites/angelwgao.wordpress.com/posts/'
		).success(function(data){
			$scope.blogPosts = data.posts;
		});

	$scope.redirect = function (data){
		$window.location.href = 'file:///C:/Angel/projects/startbootstrap-clean-blog-1.0.3/startbootstrap-clean-blog-1.0.3/post.html#?id='+data;
	};

  });