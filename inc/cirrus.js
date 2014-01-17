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
    else {alert("Error de cal a cal")}
};
function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
};
function tVueloTotal(){
    if ((document.getElementById("hLlega").value != null) && (document.getElementById("hSale").value != null)) {
        var u = document.getElementById("hLlega").value;
        var v = document.getElementById("hSale").value;
        total = Math.round(( (u - v) *100))/100 ;
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
        minutes = leftPad(minutes, 2) ;
        return hours + ":" + minutes
};

function ConsumoGas(){
 var cSalida;
    cSalida = document.getElementById("cSale").value;
    var cLlegada;
    cLlegada = document.getElementById("cLlega").value;
        total =Math.round(((cSalida - cLlegada) *100))/100  ;
           document.getElementById("Consumo").value = total ;
    if (cSalida != null){
        document.getElementById("pCombust").value = Math.round((cSalida * 2.73 *100))/100 ;
    }

};

function pDespegueTotal()  {
    var pCarga = parseInt(document.getElementById("pCarga").value);
    var pCombustible = parseInt(document.getElementById("pCombust").value);
    var pOperacional = parseInt(document.getElementById("pOper").value);
    document.getElementById("pDespegue").value = (pCarga + pCombustible + pOperacional);
};
function calACalinput2() {
    if (/*(document.getElementById("utcLlega").value != null) && (*/document.getElementById("utcSale").value != null)  {
        var end = document.getElementById("utcLlega2").value ;
        var timeEnd = end.split(":");
        var start = document.getElementById("utcSale2").value
        var timeStart = start.split(":");
        var u = new Date();
        var v = new Date();
        u.setHours(timeStart[0]);
        u.setMinutes(timeStart[1]);
        v.setHours(timeEnd[0]);
        v.setMinutes(timeEnd[1]);

        var Total = v - u;

        var TVuelo = msToTime(Total);
        document.getElementById("calACal2").value = TVuelo ;

    }
    else {alert("Error de cal a cal")}
};

function tVueloTotal2(){
    if ((document.getElementById("hLlega2").value != null) && (document.getElementById("hSale2").value != null)) {
        var u = document.getElementById("hLlega2").value;
        var v = document.getElementById("hSale2").value;
        total = Math.round(( (u - v) *100))/100 ;
        document.getElementById("tVuelo2").value = total;
    }
};

function ConsumoGas2(){
    var cSalida;
    cSalida = document.getElementById("cSale2").value;
    var cLlegada;
    cLlegada = document.getElementById("cLlega2").value;
    total =Math.round(((cSalida - cLlegada) *100))/100  ;
    document.getElementById("Consumo2").value = total ;
    if (cSalida != null){
        document.getElementById("pCombust2").value = Math.round((cSalida * 2.73 *100))/100 ;
    }

};

function pDespegueTotal2()  {
    var pCarga = parseInt(document.getElementById("pCarga2").value);
    var pCombustible = parseInt(document.getElementById("pCombust2").value);
    var pOperacional = parseInt(document.getElementById("pOper2").value);
    document.getElementById("pDespegue2").value = (pCarga + pCombustible + pOperacional);
};

function prevueloChange() {
    document.getElementById("PrevueloNombre").value =$('#PrevueloSelect option:selected').text();
    document.getElementById("PrevueloLicencia").value = $('#PrevueloSelect').val();
}   ;

