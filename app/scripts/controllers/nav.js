'use strict';

angular.module('portfolio2014App')
  .controller('NavCtrl', function ($scope) {
    $scope.pages = [
      { name: 'Home',       icon:'home',        url: 'root' },
      { name: 'About',      icon:'clipboard',   url: 'about' },
      { name: 'Skillset',   icon:'code',        url: 'skills' },
      { name: 'Portfolio',  icon:'folder-open', url: 'work' },
      { name: 'Blog',       icon:'book',        url: 'http://blog.apocola.net' }
    ];
  });
