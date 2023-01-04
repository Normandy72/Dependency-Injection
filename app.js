// 1-14
// (function(){
//     'use strict';

//     angular.module('DIApp', [])
//     .controller('DIController', DIController);

//     function DIController($scope, $filter){
//         $scope.name = "Kate";

//         $scope.upper = function(){
//             var upCase = $filter('uppercase');
//             $scope.name = upCase($scope.name);
//         };
//     };
// })();


// 15-16
// (function(){
//     'use strict';

//     angular.module('DIApp', [])
//     .controller('DIController', ['$scope', '$filter', DIController]);

//     function DIController($scope, $filter){
//         $scope.name = "Kate";

//         $scope.upper = function(){
//             var upCase = $filter('uppercase');
//             $scope.name = upCase($scope.name);
//         };
//     };
// })();


// 17
// (function(){
//     'use strict';

//     angular.module('DIApp', [])
//     .controller('DIController', ['$scope', '$filter', function($scope, $filter){
//         $scope.name = "Kate";

//         $scope.upper = function(){
//             var upCase = $filter('uppercase');
//             $scope.name = upCase($scope.name);
//         };
//     }]);
// })();


// 18
(function(){
    'use strict';

    angular.module('DIApp', [])
    .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter'];

    function DIController($scope, $filter){
        $scope.name = "Kate";
        
        $scope.upper = function(){
                var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    };
})();