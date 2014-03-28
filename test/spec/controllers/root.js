'use strict';

describe('Controller: RootCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolio2014App'));

  var RootCtrl,scope,oldState,newState;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RootCtrl = $controller('RootCtrl', {
      $scope: scope
    });
  }));

  it('should include a hash reference of templates files', function(){
    expect(scope.templates instanceof Object).toBe(true);
    for(var prop in scope.templates){
      if(scope.templates.hasOwnProperty(prop)){
        expect(typeof scope.templates[prop]).toBe('string');
        expect(scope.templates[prop].indexOf('views/')).toBe(0);
      }
    }
  });

  it('should include a method for toggling the menu state', function () {
    oldState = scope.menuOpen;
    scope.toggleMenu();
    newState = scope.menuOpen;
    expect(newState).toBe(!oldState);
  });
});
