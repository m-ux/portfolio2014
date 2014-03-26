'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolio2014App'));

  var NavCtrl,i,scope,length;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
    length = scope.length;
  }));

  it('should include a list of pages', function () {
    expect(scope.pages).toBeDefined();
    expect(scope.pages instanceof Array).toBe(true);
    expect(scope.pages.length).not.toBe(0);

    describe('a navCtrl Page', function(){
      it('should include a name and a url property', function(){
        for(i = 0; i < length; i++){
          expect(typeof scope.pages[i].name).toBeDefined();
          expect(typeof scope.pages[i].url).toBeDefined();
        }
      });
    });

  });
});
