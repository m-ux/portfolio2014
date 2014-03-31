'use strict';

angular.module('portfolio2014App')
  .controller('SkillsCtrl', function ($scope) {
    $scope.skills = [
      { name: 'Information Architecture', value: '7.0', description: 'wireframing, sitemapping, specification', classmod: '' },
      { name: 'User Centered Design', value: '8.0', description:'personas, storyboarding, scenarios', classmod: 'hidden-xs' },
      { name: 'Lean UX', value: '9.0', description:'brainstorm, prototype, test, iterate', classmod: '' },
      { name: 'Web Design', value: '8.0', description:'adobe cc, color, type, composition', classmod: '' },
      { name: 'HTML5 CSS3', value: '9.0', description:'incl. bootstrap, foundation less/sass', classmod: ''},
      { name: 'Javascript', value: '9.5', description:'prototypal, design patterns, rest/json', classmod: ''},
      { name: 'Backbone.js', value: '9.0', description:'usually with marionette & require.js', classmod: 'hidden-xs' },
      { name: 'Angular.js', value: '4.0', description:'pretty new to angular - still learning', classmod: 'hidden-xs' },
      { name: 'Node.js', value: '7.0', description:'bower, grunt, yeoman, uglify, imgmin', classmod: 'hidden-xs' },
      { name: 'Agile Methodologies', value: '9.0', description:'jira, rally, youtrack, trac / agilo', classmod: '' },
      { name: 'Unit Testing (js)', value: '5.5', description:'bdd / tdd, jasmine / karma', classmod: 'hidden-xs' },
      { name: 'Version Control', value: '8.0', description:'git, mercurial, svn', classmod: 'hidden-xs' }
    ];
  });