/**
 * Created with JetBrains WebStorm.
 * User: SistemasAerotron
 * Date: 22/10/13
 * Time: 04:39 PM
 * To change this template use File | Settings | File Templates.
 */
 function calACalinput() {
    if (/*(document.getElementById("utcLlega").value != null) && (*/document.getElementById("utcSale").value != null)  {
    var end = document.getElementById("utcLlega").value ;
    var timeEnd = end.split(":");
    var start = document.getElementById("utcSale").value
    var timeStart = start.split(":");
    var u = new Date();
    var v = new Date();
    u.setHours(timeStart[0]);
    u.setMinutes(timeStart[1]);
    v.setHours(timeEnd[0]);
    v.setMinutes(timeEnd[1]);

     var Total = v - u;

     var TVuelo = msToTime(Total);
    document.getElementById("calACal").value = TVuelo ;

    }
    else {alert("hola")}
};
function tVueloTotal(){
    if ((document.getElementById("hLlega").value != null) && (document.getElementById("hSale").value != null)) {
        var u = document.getElementById("hLlega").value;
        var v = document.getElementById("hSale").value;
        total = u - v;
        document.getElementById("tVuelo").value = total;
    }
    };

    function msToTime(ms){
        var secs = Math.floor(ms / 1000);
        var msleft = ms % 1000;
        var hours = Math.floor(secs / (60 * 60));
        var divisor_for_minutes = secs % (60 * 60);
        var minutes = Math.floor(divisor_for_minutes / 60);
        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.ceil(divisor_for_seconds);
        //return hours + ":" + minutes + ":" + seconds  + ":" + msleft;
        return hours + ":" + minutes
};

function ConsumoGas(){
 var cSalida;
    cSalida = document.getElementById("cSale").value;
    var cLlegada;
    cLlegada = document.getElementById("cLlega").value;
        total = cSalida - cLlegada ;
           document.getElementById("Consumo").value = total ;
    if (cSalida != null){
        document.getElementById("pCombust").value = cSalida * 2.5 ;
    }

};

function pDespegueTotal()  {
    var pCarga = parseInt(document.getElementById("pCarga").value);
    var pCombustible = parseInt(document.getElementById("pCombust").value);
    var pOperacional = parseInt(document.getElementById("pOper").value);
    document.getElementById("pDespegue").value = (pCarga + pCombustible + pOperacional);
};


