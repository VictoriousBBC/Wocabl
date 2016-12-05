angular.module('starter.controllers', [])

.controller('ListsCtrl', function($scope, Lists) {
  $scope.lists = Lists.all();
  $scope.remove = function(list) {
    Lists.remove(list);
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ListDetailCtrl', function($scope, $stateParams, Lists) {
 $scope.list = Lists.get($stateParams.listId);
  console.log($scope.list);
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  console.log($scope.chat);
})
