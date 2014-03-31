'use strict';

angular.module('portfolio2014App')
  .controller('RootCtrl', function ($scope) {

      // used with ng-class directive to monitor menu state
    $scope.menuFlag = '';
    $scope.menuOpen = false;

    /**
     * List of template files referenced via ng-include in index.html
     * @namespace templates
     */
    $scope.templates = {
      social:     'views/social.html',
      navigation: 'views/navigation.html',
      headline:   'views/headline.html',
      focus:      'views/focus.html',
      about:      'views/about.html',
      skills:     'views/skills.html',
      portfolio:  'views/portfolio.html'
    };

    /**
     * Toggles boolean value of {@link menuOpen} & sets the value of {@link menuFlag} accordingly
     * @method toggleMenu
     */
    $scope.toggleMenu = function(){
      this.menuOpen = !this.menuOpen;
      this.menuFlag = this.menuOpen ? 'menu-open' : '';
    };

  });
