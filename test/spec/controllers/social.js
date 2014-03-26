'use strict';

describe('Controller: SocialCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolio2014App'));

  var SocialCtrl,i,scope,length;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocialCtrl = $controller('SocialCtrl', {
      $scope: scope
    });
  }));

  it('should include a list of social network accounts', function () {
    expect(scope.socialNetworks).toBeDefined();
    expect(scope.socialNetworks instanceof Array).toBe(true);
    expect(scope.socialNetworks.length).not.toBe(0);

    describe('a social network account', function(){
      it('should include a name, a url and an icon property', function(){
        for(i = 0; i < length; i++){
          expect(typeof scope.pages[i].name).toBeDefined();
          expect(typeof scope.pages[i].url).toBeDefined();
          expect(typeof scope.pages[i].icon).toBeDefined();
        }
      });
    });
  });
});
