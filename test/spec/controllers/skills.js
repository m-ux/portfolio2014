'use strict';

describe('Controller: SkillsCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolio2014App'));

  var SkillsCtrl,scope,i,j;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SkillsCtrl = $controller('SkillsCtrl', {
      $scope: scope
    });
  }));

  it('should include a list of skills attributed to Michael Patten', function () {
    expect(scope.skillList).toBeDefined();
    expect(scope.skillList instanceof Array).toBe(true);
    expect(scope.skillList.length).not.toBe(0);

    describe('a skill', function(){
      it('should be grouped by section and contain a name, value and description property', function(){
        for(i = 0; i < scope.skillList.length; i++){
          expect(scope.skillList[i].section).toBeDefined();
          expect(scope.skillList[i].skills).toBeDefined();
          expect(scope.skillList[i].skills instanceof Array).toBe(true);

          for(j = 0; j < scope.skillList[i].skills.length; j++){
            expect(scope.skillList[i].skills[j].name).toBeDefined();
            expect(scope.skillList[i].skills[j].value).toBeDefined();
            expect(scope.skillList[i].skills[j].description).toBeDefined();
          }

        }
      });
    });
  });
});
