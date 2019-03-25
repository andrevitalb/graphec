$('#new_Ofe').change(function() {
    $('#act_cantP_Ofe').attr('disabled',!this.checked);
    $('#act_pend_Ofe').attr('disabled',!this.checked);

    $('#act_cantP_Ofe').attr('required',this.checked);
    $('#act_pend_Ofe').attr('required',this.checked);

    var data2 = document.querySelector('#data_2');
    var data3 = document.querySelector('#data_3');
    var data4 = document.querySelector('#data_4');

    var new_ofe = document.getElementById('new_Ofe').checked;
    var new_dem = document.getElementById('new_Dem').checked;

    if(new_ofe && new_dem) {
    	data4.style.display = 'inherit';
    	data3.style.display = 'none';
    	data2.style.display = 'none';
    }
    else if(new_ofe && !new_dem) {
    	data2.style.display = 'inherit';
    	data4.style.display = 'none';
    	data3.style.display = 'none';
    }
    else if(!new_ofe && new_dem) {
    	data3.style.display = 'inherit';
    	data4.style.display = 'none';
    	data2.style.display = 'none';
    }
    else {
    	data4.style.display = 'none';
    	data3.style.display = 'none';
    	data2.style.display = 'none';
    }
});

$('#new_Dem').change(function() {
    $('#act_cantP_Dem').attr('disabled',!this.checked);
    $('#act_pend_Dem').attr('disabled',!this.checked);
    $('#act_cantP_Dem').attr('required',!this.checked);
    $('#act_pend_Dem').attr('required',!this.checked);

    var data2 = document.querySelector('#data_2');
    var data3 = document.querySelector('#data_3');
    var data4 = document.querySelector('#data_4');

    var new_ofe = document.getElementById('new_Ofe').checked;
    var new_dem = document.getElementById('new_Dem').checked;

    if(new_ofe && new_dem) {
    	data4.style.display = 'inherit';
    	data3.style.display = 'none';
    	data2.style.display = 'none';
    }
    else if(new_ofe && !new_dem) {
    	data2.style.display = 'inherit';
    	data4.style.display = 'none';
    	data3.style.display = 'none';
    }
    else if(!new_ofe && new_dem) {
    	data3.style.display = 'inherit';
    	data4.style.display = 'none';
    	data2.style.display = 'none';
    }
    else {
    	data4.style.display = 'none';
    	data3.style.display = 'none';
    	data2.style.display = 'none';
    }

});

function equ() {
	var cantP_ofe = document.getElementById('cantP_Ofe').value;
    var pend_ofe = document.getElementById('pend_Ofe').value;
    var cantP_dem = document.getElementById('cantP_Dem').value;
    var pend_dem = document.getElementById('pend_Dem').value;

    var act_cantP_ofe = document.getElementById('act_cantP_Ofe').value;
    var act_pend_ofe = document.getElementById('act_pend_Ofe').value;
    var act_cantP_dem = document.getElementById('act_cantP_Dem').value;
    var act_pend_dem = document.getElementById('act_pend_Dem').value;

    var div = parseInt(pend_dem,10) + parseInt(pend_ofe,10);
    var sum = parseInt(cantP_dem,10) - parseInt(cantP_ofe,10);
    var res = sum / div;

    var cant = parseInt(cantP_dem, 10) - (parseInt(pend_dem, 10) * res);

    var precio = document.getElementById('pnt_eq');
    precio.innerHTML = res.toFixed(2);

    var cantidad = document.getElementById('cnt_eq');
    cantidad.innerHTML = cant.toFixed(2);

    var new_ofe = document.getElementById('new_Ofe').checked;
    var new_dem = document.getElementById('new_Dem').checked;

    if(new_ofe && new_dem) {
    	div = parseInt(act_pend_dem,10) + parseInt(act_pend_ofe,10);
    	sum = parseInt(act_cantP_dem,10) - parseInt(act_cantP_ofe,10);
    	res = sum / div;

    	cant = 0;    
        cant = parseInt(act_cantP_dem, 10) - (parseInt(act_pend_dem, 10) * res);

        precio = document.getElementById('pnt_eq_4');
	    precio.innerHTML = res.toFixed(2);

	    cantidad = document.getElementById('cnt_eq_4');
	    cantidad.innerHTML = cant.toFixed(2);
    }
    else if(!new_ofe && new_dem) {
    	div = parseInt(act_pend_dem,10) + parseInt(pend_ofe,10);
    	sum = parseInt(act_cantP_dem,10) - parseInt(cantP_ofe,10);
    	res = sum / div;

    	cant = 0;    
        cant = parseInt(act_cantP_dem, 10) - (parseInt(act_pend_dem, 10) * res);

        precio = document.getElementById('pnt_eq_3');
	    precio.innerHTML = res.toFixed(2);

	    cantidad = document.getElementById('cnt_eq_3');
	    cantidad.innerHTML = cant.toFixed(2);
    }
    else if(new_ofe && !new_dem) {
    	div = parseInt(pend_dem,10) + parseInt(act_pend_ofe,10);
    	sum = parseInt(cantP_dem,10) - parseInt(act_cantP_ofe,10);
    	res = sum / div;

    	cant = 0;    
        cant = parseInt(cantP_dem, 10) - (parseInt(pend_dem, 10) * res);

        precio = document.getElementById('pnt_eq_2');
	    precio.innerHTML = res.toFixed(2);

	    cantidad = document.getElementById('cnt_eq_2');
	    cantidad.innerHTML = cant.toFixed(2);
    }
}