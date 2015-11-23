var app = angular.module('progressApp', []);

app.controller('progressBars', ['$scope',
    function($scope) {
        $scope.progressData = [{
            "fund": "examplename",
            "goal": "10000",
            "raised": "4650",
            "link": "#general"
        }
        ];
    }
]);