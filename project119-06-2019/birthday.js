

    var fahim_bt = new Date('1985-01-01');

    var update = '';



    function update_bt() {

        var updated = document.getElementById('bt').value;



        var newDate = new Date(updated);

        fahim_bt.setFullYear(newDate.getFullYear());

        fahim_bt.setMonth(newDate.getMonth());

        fahim_bt.setDate(newDate.getDate());



        document.getElementById('display_bt').innerHTML = 'Your Birthday is ' + fahim_bt.toDateString()



    }

