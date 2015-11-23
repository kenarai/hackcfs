 <script>
  
  var app = angular.module('angularjs-starter', []);

 app.controller('MainCtrl', function($scope) {

 $scope.choices = [{id: 'choice1'}];

 $scope.addNewChoice = function() {
   var newItemNo = $scope.choices.length+1;
   $scope.choices.push({'id':'choice'+newItemNo});
 };

 if($scope.choices.length > 1){
   $scope.removeChoice = function() {
     var lastItem = $scope.choices.length-1;
     $scope.choices.splice(lastItem);
   };
 }

});
  
  </script>