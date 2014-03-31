'use strict';

describe('Controller: SkillsCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolio2014App'));

  var SkillsCtrl,scope,i;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SkillsCtrl = $controller('SkillsCtrl', {
      $scope: scope
    });
  }));

  it('should include a list of skills attributed to Michael Patten', function () {
    expect(scope.skills).toBeDefined();
    expect(scope.skills instanceof Array).toBe(true);
    expect(scope.skills.length).not.toBe(0);

    describe('a skill', function(){
      it('should be grouped by section and contain a name, value and description property', function(){

        for(i = 0; i < scope.skills.length; i++){
          expect(scope.skills[i].name).toBeDefined();
          expect(scope.skills[i].value).toBeDefined();
          expect(scope.skills[i].description).toBeDefined();
          expect(scope.skills[i].classmod).toBeDefined();
        }

      });
    });
  });
});
