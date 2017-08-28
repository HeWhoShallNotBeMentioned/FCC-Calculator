(function(){
    // all your code here
    function Calculator (accum) {
      this.accum = 0;
      this.number = number;

      this.addition = function(number){
        this.accum = this.accum + number;
        return this.accum;
      };

      this.multiply = function(number){
        this.accum = this.accum * number;
        return this.accum;
      };

      this.subtract = function(number) {
        this.accum = this.accum - number;
        return this.accum;
      };

      this.divide = function(number) {
        this.accum = this.accum / number;
        return this.accum;
      };

    }

    //var calc = new Calculator();
})();
