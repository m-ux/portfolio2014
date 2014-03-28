'use strict';

describe('Controller: HeadlineCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolio2014App'));

  var HeadlineCtrl,i,scope,length;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeadlineCtrl = $controller('HeadlineCtrl', {
      $scope: scope
    });
  }));

  it('should include a poster image to be displayed while the video is loading', function () {
    expect(scope.poster).toBeDefined();
    expect(typeof scope.poster).toBe('string');
    expect(scope.poster.length).not.toBe(0);
  });

  it('should include a list of differently encoded video files to support various browsers', function () {
    expect(scope.videos).toBeDefined();
    expect(scope.videos instanceof Array).toBe(true);
    expect(scope.videos.length).not.toBe(0);

    describe('a video', function(){
      it('should include a source property', function(){
        for(i = 0; i < length; i++){
          expect(typeof scope.videos[i].src).toBeDefined();
        }
      });
    });
  });
});
