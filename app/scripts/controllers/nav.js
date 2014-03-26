'use strict';

angular.module('portfolio2014App')
  .controller('NavCtrl', function ($scope) {
    $scope.pages = [
      { name: 'Home',       url: '#/' },
      { name: 'Portfolio',  url: '#/work' },
      { name: 'About',      url: '#/about' },
      { name: 'Blog',       url: 'http://blog.apocola.net' }
    ];
  });
