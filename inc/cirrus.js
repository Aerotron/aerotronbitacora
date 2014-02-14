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
    function PreEnvio(){
        ValidarDatosTramo1();

    };
function ValidarDatosTramo1() {
    var De = $('#De').val();
    var A = $('#A').val();
    var calACal = $('#calACal').val();
    var tVuelo = $('#tVuelo').val();
    var cSale = $('#cSale').val();
    var cLlega = $('#cLlega').val();
    var Consumo = $('#Consumo').val();
    var pCarga = $('#pCarga').val();
    var nVuelo = $('#nVuelo').val();
    var OAT = $('#OAT').val();
    var Aceite = $('#Aceite').val();
    var Crucero =  $('#Crucero').val();
    var RPM = $('#RPM').val();
    var ManPress = $('#MANPRESS').val();
    var OilTemp = $('#OILTEMP').val();
    var OilPress = $('#OILPRESS').val();
    var EGT = $('#EGT').val();
    var CHT = $('#CHT').val();
    var VOLTS = $('#VOLTS').val();
    var AMPERS = $('#AMPERS').val();
    var FUELFLOW = $('#FUELFLOW').val();
    var Ferry = $('#Ferry1').val();
    var Pax1_1 = $('#Pax1_1').val();
    var Pax1_2 = $('#Pax1_2').val();
    var Pax1_3 = $('#Pax1_3').val();

    $('#errores').html('');
    $('#errores').append('<p>Campos Faltantes del Tramo 1:</p>');
    if((De == null) || (De == "") || (De == undefined) ){
        $('#errores').append('<p>Origen</p>');
    } ;
    if((A == null) || (A == "") || (A == undefined) ){
        $('#errores').append('<p>Destino</p>');
    } ;
    if((calACal == null) || (calACal == "") || (calACal == undefined) ){
        $('#errores').append('<p>Utc</p>');
    } ;
    if((tVuelo == null) || (tVuelo == "") || (tVuelo == undefined) ){
        $('#errores').append('<p>Horometros</p>');
    } ;
    if((cSale == null) || (cSale == "") || (cSale == undefined) ){
        $('#errores').append('<p>Combustible Salida</p>');
    } ;
    if((cLlega == null) || (cLlega == "") || (cLlega == undefined) ){
        $('#errores').append('<p>Combustible Llegada</p>');
    } ;
    if((Consumo == null) || (Consumo == "") || (Consumo == undefined) ){
        $('#errores').append('<p>Consumo de Combustible</p>');
    } ;
    if((pCarga == null) || (pCarga == "") || (pCarga == undefined) ){
        $('#errores').append('<p>Peso de Carga</p>');
    } ;
    if((nVuelo == null) || (nVuelo == "") || (nVuelo == undefined) ){
        $('#errores').append('<p>N. Vuelo</p>');
    } ;
    if((OAT == null) || (OAT == "") || (OAT == undefined) ){
        $('#errores').append('<p>OAT</p>');
    } ;
    if((Aceite == null) || (Aceite == "") || (Aceite == undefined) ){
        $('#errores').append('<p>Aceite Agregado</p>');
    } ;
    if((Crucero == null) || (Crucero == "") || (Crucero == undefined) ){
        $('#errores').append('<p>Crucero</p>');
    } ;
    if((RPM == null) || (RPM == "") || (RPM == undefined) ){
        $('#errores').append('<p>RPM</p>');
    } ;
    if((ManPress == null) || (ManPress == "") || (ManPress == undefined) ){
        $('#errores').append('<p>ManPress</p>');
    } ;
    if((OilTemp == null) || (OilTemp == "") || (OilTemp == undefined) ){
        $('#errores').append('<p>OilTemp</p>');
    } ;
    if((OilPress == null) || (OilPress == "") || (OilPress == undefined) ){
        $('#errores').append('<p>OilPress</p>');
    } ;
    if((EGT == null) || (EGT == "") || (EGT == undefined) ){
        $('#errores').append('<p>EGT</p>');
    } ;
    if((CHT == null) || (CHT == "") || (CHT == undefined) ){
        $('#errores').append('<p>CHT</p>');
    } ;
    if((VOLTS == null) || (VOLTS == "") || (VOLTS == undefined) ){
        $('#errores').append('<p>VOLTS</p>');
    } ;
    if((AMPERS == null) || (AMPERS == "") || (AMPERS == undefined) ){
        $('#errores').append('<p>AMPERS</p>');
    } ;
    if((FUELFLOW == null) || (FUELFLOW == "") || (FUELFLOW == undefined) ){
        $('#errores').append('<p>FUELFLOW</p>');
    } ;
    if(Ferry = false){
        if((Pax1_1 == null) || (Pax1_1 == "") || (Pax1_1 == undefined) ){
            $('#errores').append('<p>Pasajeros </p>');
        } ;

    }
};

    function ValidarDatosTramo2() {
        var De2 = $('#De2').val();
        var A2 = $('#A2').val();
        var calACal2 = $('#calACal2').val();
        var tVuelo2 = $('#tVuelo2').val();
        var cSale2 = $('#cSale2').val();
        var cLlega2 = $('#cLlega2').val();
        var Consumo2 = $('#Consumo2').val();
        var pCarga2 = $('#pCarga2').val();
        var nVuelo2 = $('#nVuelo2').val();
        var OAT2 = $('#OAT2').val();
        var Aceite2 = $('#Aceite2').val();
        var Crucero2 =  $('#Crucero2').val();
        var RPM2 = $('#RPM2').val();
        var ManPress2 = $('#MANPRESS2').val();
        var OilTemp2 = $('#OILTEMP2').val();
        var OilPress2 = $('#OILPRESS2').val();
        var EGT2 = $('#EGT2').val();
        var CHT2 = $('#CHT2').val();
        var VOLTS2 = $('#VOLTS2').val();
        var AMPERS2 = $('#AMPERS2').val();
        var FUELFLOW2 = $('#FUELFLOW2').val();
        var Ferry2 = $('#Ferry2').val();
        var Pax1_1 = $('#Pax2_1').val();
        var Pax1_2 = $('#Pax2_2').val();
        var Pax1_3 = $('#Pax2_3').val();



        $('#errores').append('<p>Campos Faltantes del Tramo 2:</p>');
        if((De2 == null) || (De2 == "") || (De2 == undefined) ){
            $('#errores').append('<p>Origen</p>');
        } ;
        if((A2 == null) || (A2 == "") || (A2 == undefined) ){
            $('#errores').append('<p>Destino</p>');
        } ;
        if((calACal2 == null) || (calACal2 == "") || (calACal2 == undefined) ){
            $('#errores').append('<p>Utc</p>');
        } ;
        if((tVuelo2 == null) || (tVuelo2 == "") || (tVuelo2 == undefined) ){
            $('#errores').append('<p>Horometros</p>');
        } ;
        if((cSale2 == null) || (cSale2 == "") || (cSale2 == undefined) ){
            $('#errores').append('<p>Combustible Salida</p>');
        } ;
        if((cLlega2 == null) || (cLlega2 == "") || (cLlega2 == undefined) ){
            $('#errores').append('<p>Combustible Llegada</p>');
        } ;
        if((Consumo2 == null) || (Consumo2 == "") || (Consumo2 == undefined) ){
            $('#errores').append('<p>Consumo de Combustible</p>');
        } ;
        if((pCarga2 == null) || (pCarga2 == "") || (pCarga2 == undefined) ){
            $('#errores').append('<p>Peso de Carga</p>');
        } ;
        if((nVuelo2 == null) || (nVuelo2 == "") || (nVuelo2 == undefined) ){
            $('#errores').append('<p>N. Vuelo</p>');
        } ;
        if((OAT2 == null) || (OAT2 == "") || (OAT2 == undefined) ){
            $('#errores').append('<p>OAT</p>');
        } ;
        if((Aceite2 == null) || (Aceite2 == "") || (Aceite2 == undefined) ){
            $('#errores').append('<p>Aceite Agregado</p>');
        } ;
        if((Crucero2 == null) || (Crucero2 == "") || (Crucero2 == undefined) ){
            $('#errores').append('<p>Crucero</p>');
        } ;
        if((RPM2 == null) || (RPM2 == "") || (RPM2 == undefined) ){
            $('#errores').append('<p>RPM</p>');
        } ;
        if((ManPress2 == null) || (ManPress2 == "") || (ManPress2 == undefined) ){
            $('#errores').append('<p>ManPress</p>');
        } ;
        if((OilTemp2 == null) || (OilTemp2 == "") || (OilTemp2 == undefined) ){
            $('#errores').append('<p>OilTemp</p>');
        } ;
        if((OilPress2 == null) || (OilPress2 == "") || (OilPress2 == undefined) ){
            $('#errores').append('<p>OilPress</p>');
        } ;
        if((EGT2 == null) || (EGT2 == "") || (EGT2 == undefined) ){
            $('#errores').append('<p>EGT</p>');
        } ;
        if((CHT2 == null) || (CHT2 == "") || (CHT2 == undefined) ){
            $('#errores').append('<p>CHT</p>');
        } ;
        if((VOLTS2 == null) || (VOLTS2 == "") || (VOLTS2 == undefined) ){
            $('#errores').append('<p>VOLTS</p>');
        } ;
        if((AMPERS2 == null) || (AMPERS2 == "") || (AMPERS2 == undefined) ){
            $('#errores').append('<p>AMPERS</p>');
        } ;
        if((FUELFLOW2 == null) || (FUELFLOW2 == "") || (FUELFLOW2 == undefined) ){
            $('#errores').append('<p>FUELFLOW</p>');
        } ;
        if(Ferry = false){
            if((Pax1_1 == null) || (Pax1_1 == "") || (Pax1_1 == undefined) ){
                $('#errores').append('<p>Pasajeros </p>');
            } ;

        };



}
function FaltantesGenerales (){
    var PrevueloNombre = $('#PrevueloNombre').val();
    var PrevueloLicencia = $('#PrevueloLicencia').val();

    if((PrevueloLicencia == null) || (PrevueloLicencia == "") || (PrevueloLicencia == undefined) ){
        $('#errores').append('<p>Licencia del Prevuelo </p>');
    } ;
    if((PrevueloNombre == null) || (PrevueloNombre == "") || (PrevueloNombre == undefined) ){
        $('#errores').append('<p>Licencia del Prevuelo </p>');
    } ;
}
function BorrarDatosBitacora(){
    $('#hSale').val('');
    $('#hLlega').val('');
    $('#hSale2').val('');
    $('#hLlega2').val('');
    $('#De2').val('');
    $('#A2').val('');
  $('#calACal2').val('');
     $('#tVuelo2').val('');
    $('#cSale2').val('');
    $('#cLlega2').val('');
   $('#Consumo2').val('');
    $('#pCarga2').val('');
    $('#nVuelo2').val('');
    $('#OAT2').val('');
    $('#Aceite2').val('');
     $('#Crucero2').val('');
     $('#RPM2').val('');
    $('#MANPRESS2').val('');
    $('#OILTEMP2').val('');
    $('#OILPRESS2').val('');
   $('#EGT2').val('');
    $('#CHT2').val('');
    $('#VOLTS2').val('');
    $('#AMPERS2').val('');
    $('#FUELFLOW2').val('');
    $('#Ferry2').val('');
    $('#Pax2_1').val('');
    $('#Pax2_2').val('');
    $('#Pax2_3').val('');
     $('#De').val('');
    $('#A').val('');
    $('#calACal').val('');
    $('#tVuelo').val('');
    $('#cSale').val('');
    $('#cLlega').val('');
    $('#Consumo').val('');
    $('#pCarga').val('');
    $('#nVuelo').val('');
    $('#OAT').val('');
    $('#Aceite').val('');
    $('#Crucero').val('');
    $('#RPM').val('');
    $('#MANPRESS').val('');
    $('#OILTEMP').val('');
    $('#OILPRESS').val('');
    $('#EGT').val('');
    $('#CHT').val('');
    $('#VOLTS').val('');
    $('#AMPERS').val('');
    $('#FUELFLOW').val('');
    $('#Ferry1').val('');
    $('#Pax1_1').val('');
    $('#Pax1_2').val('');
    $('#Pax1_3').val('');
}

