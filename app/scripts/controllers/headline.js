'use strict';

angular.module('portfolio2014App')
  .controller('HeadlineCtrl', function ($scope) {
    $scope.poster = 'test-01.jpg';
    $scope.videos = [
      { src: 'video/test-01.mp4' },
      { src: 'video/test-01.ogv' }
    ];
  });
