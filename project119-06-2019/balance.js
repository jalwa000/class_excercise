var cup = {
    maxvalue: 300,
    currentValue: 0,
    refillValue: function () {
        if ((this.currentValue + 50) <= this.maxvalue) {

            this.currentValue += 50;
            // console.log(this.crrentValue);           
            return this.currentValue;
        } else {
            document.getElementById("water").innerHTML = " cup is full, Stop!!!";
            return this.currentValue;