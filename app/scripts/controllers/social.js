'use strict';

angular.module('portfolio2014App')
  .controller('SocialCtrl', function ($scope) {
    $scope.socialNetworks = [
      { name: 'linkedin',       url: 'http://www.linkedin.com',       icon: 'linkedin' },
      { name: 'twitter',        url: 'http://www.twitter.com',        icon: 'twitter' },
    //{ name: 'xing',           url: 'http://www.xing.com',           icon: 'xing' },
      { name: 'dribbble',       url: 'http://www.dribbble.com',       icon: 'dribbble' },
      { name: 'github',         url: 'http://www.github.com',         icon: 'github' },
      { name: 'stackoverflow',  url: 'http://www.stackoverflow.com',  icon: 'stack-overflow' }
    ];
  });
