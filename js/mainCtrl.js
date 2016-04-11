angular.module('dragonHunt').controller('mainCtrl', function($scope, hunt) {

  $scope.test = "Tyler";

  $scope.tryRest = hunt.tryRest;

  $scope.tryAttack = hunt.tryAttack;

  $scope.tryRun = hunt.tryRun;

  $scope.random = hunt.random;

  $scope.message = hunt.message;

  $scope.humanHp = hunt.humanHp;

  $scope.dragonHp = hunt.dragonHp;

  $scope.slaying = hunt.slaying;
});
