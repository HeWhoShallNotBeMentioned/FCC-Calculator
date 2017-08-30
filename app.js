//'use esversion: 6'

(function(){
  'use strict';
    // all your code here
    function Calculator () {
      this.accum = 0;
      this.number = 0;

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

      this.clearAccum = function(accum) {
        this.accum = 0;
        return this.accum;
      };

      this.buttonSearch = function(e) {
        console.log("inside buttonSearch ", e.target.id);
      };

    }

    var calc = new Calculator();

    document.getElementById("buttonList").addEventListener("click", function(e) {
      calc.buttonSearch(e);
    	if(e.target && e.target.nodeName == "BUTTON") {
    		// List item found!  Output the ID!
        console.log("e.target.nodeName   ", e.target.nodeName);
    		console.log("Button ", e.target.id, " was clicked!");
        let buttonClick = Number(e.target.id);
        if ( isNaN(buttonClick )) {
          buttonClick = e.target.id;
        }
        console.log("buttonClick  ", buttonClick);
        console.log("typeof buttonClick ", typeof buttonClick);
          if ( buttonClick >= 0 && buttonClick <= 9) {
            console.log("it's a number");
          } else if (buttonClick === "+"){
            console.log("it's a +");
          } else if (buttonClick === "-"){
            console.log("it's a -");
          } else if (buttonClick === "x"){
            console.log("it's a *");
          } else if (buttonClick === "/"){
            console.log("it's a /");
          } else if (buttonClick === "C"){
            console.log("it's a C");
          } else if (buttonClick === "="){
            console.log("it's a =");
          } else if (buttonClick === "."){
            console.log("it's a .");
          }
            else {
            console.log("not sure what it is");
          }
        }
    });


})();
