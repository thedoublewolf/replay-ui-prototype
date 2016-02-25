let IntervalController = function(IntervalService) {
  
  let vm = this;

  vm.intervals = [];

  activate();

  function activate () {
    IntervalService.getAssets().then( (res) => {
      vm.intervals = res.data.results;
    });
  }

  console.log(vm.intervals);

};

IntervalController.$inject = ['IntervalService'];

export default IntervalController;