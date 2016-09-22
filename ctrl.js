angular.module('myApp').controller('mainCtrl', function($scope, quoteData){
    $scope.quotes = quoteData.getData();

    $scope.deleteMe = function(textToRemove){
      quoteData.removeData(textToRemove);
    }
    $scope.addQuote = function(){
      var newQuote = {
          text: $scope.newQuoteText,
          author: $scope.newQuoteAuthor
        }
        if (quoteData.addData(newQuote)){
          $scope.newQuoteText;
          $scope.newQuoteAuthor;
        }
    }
})
