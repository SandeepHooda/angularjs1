angular.module('starter').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('home/home.html',
    "<div ng-controller=\"CTRL_HOME\"><button ng-click=\"getData()\">Fetch</button><div ng-if=\"employeeArray && employeeArray.length > 0\"><table border=\"1\"><tr><td>ID</td><td>Name</td><td>Salary</td><td>Age</td></tr><tr ng-repeat=\"emp in employeeArray\"><td>{{emp.id}}</td><td>{{emp.employee_name}}</td><td>{{emp.employee_salary}}</td><td>{{emp.employee_age}}</td></tr></table><div>{{emp.id}} {{emp.employee_name}}</div></div></div>"
  );

}]);
