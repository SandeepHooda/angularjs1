angular.module('starter').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('home/home.html',
    "<div ng-controller=\"CTRL_HOME\">HOME html {{count}}</div>"
  );

}]);
