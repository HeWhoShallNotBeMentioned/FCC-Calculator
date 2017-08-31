//'use esversion: 6'

(function(){
  'use strict';
    // all your code here
    function Calculator () {
      this.accum = 0;
      this.number = 0;
      this.previousMath = "";
      this.currentMath = "";

      this.addition = function(){
        this.number = Number(this.getNumber());
        console.log(this.number);
        this.accum = Number(this.accum) + this.number;
        console.log("this.accum", this.accum);
        this.clearDisplay();
        this.previousMath = "+";
        return this.accum;
      };

      this.multiply = function(number){
        if (this.previousMath === ""){
          this.accum = 1;
        }
        this.number = Number(this.getNumber());
        console.log(this.number);
        this.accum = Number(this.accum) * this.number;
        console.log("this.accum", this.accum);
        this.clearDisplay();
        this.previousMath = "x";

        return this.accum;
      };

      this.subtract = function(number) {
        if (this.previousMath === ""){
          this.accum = 0;
        }
        this.number =  (Number(this.getNumber()));
        console.log(this.number);
        this.accum = -1 * (this.number - Number(this.accum)) ;
        console.log("this.accum", this.accum);
        this.clearDisplay();

        this.previousMath = "-";
        return this.accum;
      };

      this.divide = function(number) {

        this.number = Number(this.getNumber());
        console.log(this.number);
        if (this.previousMath === ""){
          this.accum = 1;
        this.accum =  this.number / Number(this.accum)  ;
      } else {
        this.accum =  Number(this.accum) / this.number ;
      }
        console.log("this.accum", this.accum);

        this.previousMath = "/";
        this.clearDisplay();
        return this.accum;
      };

      this.clearAccum = function(accum) {
        this.previousMath = "";
        this.currentMath = "";
        this.accum = 0;
        return this.accum;
      };

      this.buttonSearch = function(e) {
        console.log("inside buttonSearch ", e.target.id);
      };

      this.display = function(something){
        var initValue = document.getElementById("inputField").value;
        something = initValue + something;
        this.clearDisplay();
        document.getElementById("inputField").value = something;
        // console.log("typeof initvalue ", typeof initValue);
        // console.log("display ", something);
        // console.log("initValue ", initValue);
        //return update to the display
      };

      this.initDisplay = function(){
        document.getElementById("inputField").defaultValue = "";
        console.log("initDisplay");
      };

      this.clearDisplay = function(){
        document.getElementById("inputField").value = " ";

        console.log("clearDisplay");
      };

      this.getNumber = function(){
        this.number = document.getElementById("inputField").value;
        return this.number;
      };

      this.calculate = function(method){
        this.previousMath = this.currentMath;
        this.currentMath = method;
        if (this.previousMath === "+") {
          console.log("inside this.calculate ", method);
          this.addition();
        } else if (this.previousMath === "-") {
          console.log("inside this.calculate ", method);
          this.subtract();
        } else if (this.previousMath === "x") {
          console.log("inside this.calculate ", method);
          this.multiply();
        } else if (this.previousMath === "/") {
          console.log("inside this.calculate ", method);
          this.divide();
        } else {
          console.log("inside else of this.calculate");
          this.accum = document.getElementById("inputField").value;
          //this.previousMath = method;
          this.clearDisplay();
          console.log("method ", method);
          console.log("this.accum ", this.accum);
          return this.accum;
        }
      };

      this.showTotal = function(){
        //console.log("buttonClick2", buttonClick2);
        this.calculate(this.previousMath);
        document.getElementById("inputField").value = this.accum;
      };


    }

    var calc = new Calculator();
    calc.initDisplay();

    document.getElementById("buttonList").addEventListener("click", function(e) {
      //document.getElementById("inputField").defaultValue = 0;
      calc.buttonSearch(e);

    	if(e.target && e.target.nodeName == "BUTTON") {
    		// List item found!  Output the ID!
        // console.log("e.target.nodeName   ", e.target.nodeName);
    		// console.log("Button ", e.target.id, " was clicked!");
        let buttonClick = Number(e.target.id);
        if ( isNaN(buttonClick )) {
          buttonClick = e.target.id;
        }

        // console.log("buttonClick  ", buttonClick);
        // console.log("typeof buttonClick ", typeof buttonClick);
          if ( (buttonClick >= 0 && buttonClick <= 9) || buttonClick === ".") {
            calc.display(buttonClick);

            console.log("it's a number or .");
          } else if (buttonClick === "+" || buttonClick === "-" || buttonClick === "x" || buttonClick === "/"){
            console.log("it's a + or - or x or /");
            //buttonClick2 = "plus";
            //console.log("buttonClick2 right below plus", buttonClick2);
            calc.calculate(buttonClick);
          // } else if (buttonClick === "-"){
          //   console.log("it's a -");
          // } else if (buttonClick === "x"){
          //   console.log("it's a *");
          // } else if (buttonClick === "/"){
          //   console.log("it's a /");
          } else if (buttonClick === "C"){
            calc.clearAccum();
            calc.clearDisplay();
            console.log("it's a C");
          } else if (buttonClick === "="){
            console.log("it's a =");
            calc.showTotal();
            calc.clearAccum();
          }
            else {
            console.log("not sure what it is");
          }
        }
    });


})();
