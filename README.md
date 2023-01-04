### Sequence
1. add main files
2. add ng-app="module_name" attribute
3. add script tags into head tag
4. add ng-controller="controller_name" attribute into div tag
5. add ng-model="model_name" attribute into input tag
6. create IIFE in app.js and add 'use strict'
7. create angular.module
8. create .controller
9. define function for controller
10. add $filter in function parameters (allow create filter functions)
11. add property upper to $scope (upper is a function that convert all chars in uppercase)
12. create function upCase using $filter service named 'uppercase'
13. for $scope.name call upCase function with name as a parameter for function
14. add ng-blur (when textbox lose focus) attribute, it's value is 'upper();' function

***
##### Protecting Dependency Injection from Minification
###### 1st opportunity
15. create array from second parameter in controller
16. add in array $scope and filter (it's tell Angular in which order should appear this arguments in function DIController)
###### 2nd opportunity
17. create function inside controller instead out of controller
###### 3rd opportunity (best)
18. create $inject - property of DIController. It's an array that contains 2 elements: scope and filter 

***
https://www.javascriptminifier.com/