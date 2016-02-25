let IntervalDirective = function() {
  
  return {
    restrict: 'AE',
    scope: {
      interval: "=interval"
    },
    template: `
      <div>
        <p>{{interval.assetUrl}}</p>
      </div>
    `,
  };

};

IntervalDirective.$inject = [''];

export default IntervalDirective;