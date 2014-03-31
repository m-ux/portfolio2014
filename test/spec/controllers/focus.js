'use strict';

describe('Controller: FocusCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolio2014App'));

  var FocusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FocusCtrl = $controller('FocusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
