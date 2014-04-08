'use strict';

angular.module('portfolio2014App')
  .controller('PortfolioCtrl', function ($scope, parallaxHelper) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.portfolio = [
      { id: 'bellprototypes', name: 'Bell Radio Player Prototype' },
      { id: 'herobox', name: 'Winner, Startup Weekend Toronto 2011' },
      { id: 'redcross', name: 'Redcross.ca Campaign Series' },
      { id: 'holiday', name: 'ecentricarts holiday card 2012' }
    ];
    $scope.background = parallaxHelper.createAnimator(-0.6, 500, -500);
  });
