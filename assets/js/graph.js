var graf1 = new Morris.Line({
    element: 'oferta_demanda',

    xkey: 'Cantidad',

    ykeys: ['precio_Ofe1', 'precio_Dem1', 'precio_Ofe2', 'precio_Dem2'],

    parseTime: false,
    smooth: false,
    labels: ['Precio Oferta Inicial', 'Precio Demanda Inicial', 'Precio Nueva Oferta', 'Precio Nueva Demanda'],
    resize: true,
    lineColors: ['#186FF2', '#F00F39', '#0D4FB3', '#E00F85']
});

function graf() {
    var cantP_ofe = document.getElementById('cantP_Ofe').value;
    var pend_ofe = document.getElementById('pend_Ofe').value;
    var cantP_dem = document.getElementById('cantP_Dem').value;
    var pend_dem = document.getElementById('pend_Dem').value;

    var act_cantP_ofe = document.getElementById('act_cantP_Ofe').value;
    var act_pend_ofe = document.getElementById('act_pend_Ofe').value;
    var act_cantP_dem = document.getElementById('act_cantP_Dem').value;
    var act_pend_dem = document.getElementById('act_pend_Dem').value;

    var new_ofe = document.getElementById('new_Ofe').checked;
    var new_dem = document.getElementById('new_Dem').checked;

    var div = parseInt(pend_dem,10) + parseInt(pend_ofe,10);
    var sum = parseInt(cantP_dem,10) - parseInt(cantP_ofe,10);
    var res = sum / div;

    var rangos = [res - 2, res - 1, res, res + 1, res + 2];

    var ope = 0;

    var ret = [];
    var ofe1 = [1.0,2.0,3.0,4.0], dem1 = [1.0,2.0,3.0,4.0], ofe2 = [1.0,2.0,3.0,4.0], dem2 = [1.0,2.0,3.0,4.0], result, result2, result3;
    
    for (var x = 0; x < 5; x++) {
        ofe1[x] = 0;
        ofe1[x] = parseInt(cantP_ofe, 10) + (parseInt(pend_ofe, 10) * rangos[x]);
        ofe1[x] = Math.floor(ofe1[x] * 100) / 100;

        dem1[x] = 0;
        dem1[x] = parseInt(cantP_dem, 10) - (parseInt(pend_dem, 10) * rangos[x]);
        dem1[x] = Math.floor(dem1[x] * 100) / 100;

        if(new_ofe){
            ofe2[x] = 0;    
            ofe2[x] = parseInt(act_cantP_ofe, 10) + (parseInt(act_pend_ofe, 10) * rangos[x]);
            ofe2[x] = Math.floor(ofe2[x] * 100) / 100;
        }

        if(new_dem){
            dem2[x] = 0;    
            dem2[x] = parseInt(act_cantP_dem, 10) - (parseInt(act_pend_dem, 10) * rangos[x]);
            dem2[x] = Math.floor(dem2[x] * 100) / 100;
        }

        if(!new_ofe && !new_dem) {
            ret.push({
              Cantidad: rangos[x],
              precio_Ofe1: ofe1[x].toFixed(2),
              precio_Dem1: dem1[x].toFixed(2)
            });
        }
        else if(!new_dem){
            ret.push({
              Cantidad: rangos[x],
              precio_Ofe1: ofe1[x].toFixed(2),
              precio_Dem1: dem1[x].toFixed(2),
              precio_Ofe2: ofe2[x].toFixed(2)
            });
        }
        else if(!new_ofe){
            ret.push({
              Cantidad: rangos[x],
              precio_Ofe1: ofe1[x].toFixed(2),
              precio_Dem1: dem1[x].toFixed(2),
              precio_Dem2: dem2[x].toFixed(2)
            });
        }
        else {
            ret.push({
              Cantidad: rangos[x],
              precio_Ofe1: ofe1[x].toFixed(2),
              precio_Dem1: dem1[x].toFixed(2),
              precio_Ofe2: ofe2[x].toFixed(2),
              precio_Dem2: dem2[x].toFixed(2)
            });
        }
    }

    var may = ofe1[4].toFixed(2), men = ofe1[0].toFixed(2);

    for(var x = 0; x < 5; x++) {
        if(ofe1[x] > may) may = ofe1[x];
        if(dem1[x] > may) may = dem1[x];
        if(new_ofe) if(ofe2[x] > may) may = ofe2[x];
        if(new_dem) if(dem2[x] > may) may = dem2[x];

        if(ofe1[x] < men) men = ofe1[x];
        if(dem1[x] < men) men = dem1[x];
        if(new_ofe) if(ofe2[x] < men) men = ofe2[x];
        if(new_dem) if(dem2[x] < men) men = dem2[x];
    }

    graf1.options["ymax"] = may;
    graf1.options["ymin"] = men;

    graf1.setData(ret);
}

function data_table() {
    var table = '';
    var rows = 5;
    var cols = 5;

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

    var new_ofe = document.getElementById('new_Ofe').checked;
    var new_dem = document.getElementById('new_Dem').checked;

    var rangos = [res - 2, res - 1, res, res + 1, res + 2];

    table += "<tr><th>Px</th><th>QSx</th><th>QDx</th><th>QS'x</th><th>QD'x</th></tr>";

    for(var r = 0; r < rows; r++){
        table += '<tr>';

        table += '<td>' + rangos[r] + '</td>';
        
        ope = parseInt(cantP_ofe, 10) + (parseInt(pend_ofe, 10) * rangos[r]);
        ope = Math.floor(ope * 100) / 100;
        table += '<td>' + ope.toFixed(2) + '</td>';

        ope = 0;    
        ope = parseInt(cantP_dem, 10) - (parseInt(pend_dem, 10) * rangos[r]);
        ope = Math.floor(ope * 100) / 100;
        table += '<td>' + ope.toFixed(2) + '</td>';

        if(new_ofe) {
            ope = 0;    
            ope = parseInt(act_cantP_ofe, 10) + (parseInt(act_pend_ofe, 10) * rangos[r]);
            ope = Math.floor(ope * 100) / 100;
            table += '<td>' + ope.toFixed(2) + '</td>';
        }

        if(new_dem) {
            if(new_ofe) {
                ope = 0;    
                ope = parseInt(act_cantP_dem, 10) - (parseInt(act_pend_dem, 10) * rangos[r]);
                ope = Math.floor(ope * 100) / 100;
                table += '<td>' + ope.toFixed(2) + '</td>';
            }
            else {
                ope = 0;    
                ope = parseInt(act_cantP_dem, 10) - (parseInt(act_pend_dem, 10) * rangos[r]);
                ope = Math.floor(ope * 100) / 100;
                table += '<td></td><td>' + ope.toFixed(2) + '</td>';
            }
        }
            
        table += '</tr>';   
    }

    document.getElementById('tabla_grafs').innerHTML = ('<table class = "col-md-12">' + table + '</table>');
}