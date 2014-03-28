'use strict';

angular.module('portfolio2014App')
  .controller('SkillsCtrl', function ($scope) {
    $scope.skillList = [
      { section: 'User Experience', skills: [
        { name: 'Research & Analysis', value: '70', description: 'user testing, user interviews, heuristics, justifications' },
        { name: 'Information Architecture', value: '80', description: 'wireframing, sitemapping, ' },
        { name: 'User Centered Design', value: '75', description:'personas, storyboarding, scenarios' },
        { name: 'Lean UX', value: '90', description:'brainstorming, prototyping, iteration, collaboration' }
      ]},
      { groupname: 'Responsive Design', skills: [
        { name: 'General Design', value: '80', description:'composition, color, typography, art direction, photoshop/illustrator'},
        { name: 'Responsive Layout/U.I.', value: '90', description:'media queries, device orientation, content reflows, '},
        { name: 'Bootstrap/Foundation', value: '85', description:'grids, ui components, forms, validation' },
        { name: 'LESS/SASS', value: '80', description:'variables, calculations, mixins' }
      ]},
      { groupname: 'Interaction & UI Development', skills: [
        { name: 'HTML5/CSS3', value: '90', description:'core HTML/CSS, semantics, transitions, transformations, localstorage, audio/video, geolocation, canvas'},
        { name: 'Javascript', value: '90', description:'prototypal inheritance, design patterns, event handling, DOM manipulation, ajax, CommonJS/AMD'},
        { name: 'MV* Frameworks', value: '80', description:'angular.js, backbone.js, REST, data modelling, application design' },
        { name: 'Node.js', value: '70', description:'' }
      ]},
      { groupname: 'Auxiliary Development', skills: [
        { name: 'Unit Testing (Javascript)', value: '70', description:'BDD/TDD, Jasmine/Karma'},
        { name: 'Version Control', value: '80', description:'GIT/Mercurial/SVN'},
        { name: 'Agile Methodologies', value: '90', description:'defining features, writing user stories, task planning/sprint planning, estimation, product backlogs, iterative development, JIRA, Rally, Trac & YouTrack' },
        { name: 'Automation/Build', value: '70', description:'Node.js - Yeoman/Bower/Grunt, jsHint, imgMin, svgMin, uglifyjs' }
      ]}
    ];
  });
