'use strict';

angular.module('portfolio2014App')
  .controller('NavCtrl', function ($scope, scroller) {
    $scope.pages = [
      { name: 'Home',       icon:'home',        url: 'headline' },
      { name: 'Focus',      icon:'briefcase',   url: 'focus' },
      { name: 'Skillset',   icon:'code',        url: 'skills' },
      { name: 'Portfolio',  icon:'folder-open', url: 'portfolio' },
      { name: 'About',      icon:'clipboard',   url: 'about' },
      { name: 'Blog',       icon:'book',        url: 'http://blog.apocola.net' }
    ];
    $scope.triggerScroll = function(id, offset, duration){
      scroller.scrollToElement(document.getElementById(id), offset, duration);
      $scope.$emit('toggleMenu', {});
    };
  });
