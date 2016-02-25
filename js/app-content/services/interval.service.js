let IntervalService = function($http, SERVER) {

  let assetUrl = SERVER.URL + 'assets';
  
  function getAssets () {
    return $http.get(assetUrl, SERVER.CONFIG);
  } 

};

IntervalService.$inject = ['$http', 'SERVER'];

export default IntervalService;