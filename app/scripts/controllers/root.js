'use strict';

angular.module('portfolio2014App')
  .controller('RootCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.navOpen = false;
    $scope.navClass = '';
    $scope.toggleMenu = function(){
      this.menuOpen = !this.menuOpen;
      this.navClass = this.menuOpen ? 'shift' : '';
    };
  });
