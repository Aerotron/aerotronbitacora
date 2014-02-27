/**
 * Created with JetBrains WebStorm.
 * User: SistemasAerotron
 * Date: 29/10/13
 * Time: 04:09 PM
 * To change this template use File | Settings | File Templates.
 */
function addGastosUser(StrId, StrName, StrMatricula, StrSalary ){

    $.ajax({
        url: 'http://localhost:2467/WebSite3/Service1.asmx/AddGastos',
        /**url: 'http://10.168.3.250/service/Service1.asmx/AddGastos',**/
        contenType: 'application/xml; charset=utf-8',
        dataType: "xml",
        type: 'POST',
        cache: false,
        data:{Id:parseInt(StrId), Name:StrName,Matricula:StrMatricula, Salary:parseInt(StrSalary) },
        success: function (response) {
            $(response).find("string").each(function (index) {
                var id = $(this).text();
                alert(id);
            });

        },
        failure: function (msg) {
            $(msg).find("string").each(function (index) {
                var id = $(this).text();
                alert(id);
            });

        }
    });
}  ;
function Login(){

  var user = document.getElementById("usrName").value ;
  var Password = document.getElementById("passwordd").value;
        BorrarUsuario();
       $.ajax({
        url: 'http://187.174.155.50/service/Service1.asmx/LogIn',
        contenType: 'application/xml; charset=utf-8',
        dataType: "xml",
        type: 'POST',
        cache: false,
        data:{Id:user, Pass:Password},
        success: function (response) {
                      var succes = 0;
                     $(response).find("Usuario").each(function (index) {
                      agregarUser($(response).find("Nombre").text(),$(this).find("Licencia").text() , $(this).find("PassWord").text(), $(this).find("Clave").text(),$(this).find("Correo").text(),$(this).find("Id").text());
                         StartLogin();
                         addMecanicos();
                         ListDBValues();
                         location.href = "#home"
                         succes = 1;
                     });
                        if (succes==0){alert("Not logged in")};
        },
        failure: function (msg) {

                alert("Error al intetar Logear");


        }
    });
};

function Logout(){
   BorrarUsuario();
    ClearUser();
   location.href = "#Page"
   return;
};
function ClearUser(){
    document.getElementById("PerfilNombre").value = "";
    document.getElementById("PerfilLicencia").value = "";
    document.getElementById("PerfilClave").value = "";
    document.getElementById("PerfilCorreo").value = "";
    document.getElementById("usrName").value = "";
    document.getElementById("passwordd").value = "";
    document.getElementById("PerfilID").value = "";
    $("#usrName").prop('disabled', false);
    $("#passwordd").prop('disabled', false);
}
function addMecanicos(){
    $.ajax({
        url: 'http://187.174.155.50/service/Service1.asmx/Mecanicos',
        contenType: 'application/xml; charset=utf-8',
        dataType: "xml",
        type: 'POST',
        cache: false,
        data:{},
        success: function (response) {
            BorrarMecanicos();
            $(response).find("Mecanico").each(function (index) {
                var nombre = $(this).find("Nombre").text();
                var licencia = $(this).find("Licencia").text();
                agregarMecanico(nombre,licencia);
            });

        },
        failure: function (msg) {
           alert(msg);
        }
    });
}  ;
function addMecanico(){

    $.ajax({
        url: 'http://187.174.155.50/service/Service1.asmx/Mecanicos',
        contenType: 'application/xml; charset=utf-8',
        dataType: "xml",
        type: 'POST',
        cache: false,
        data:{},
        success: function (response) {
            $(response).find("Mecanico").each(function (index) {
                var nombre = $(this).find("Nombre").text();
                var licencia = $(this).find("Licencia").text();
                alert(nombre);
                alert(licencia);
            });

        },
        failure: function (msg) {
            $(response).find("Mecanico").each(function (index) {
                var nombre = $(this).find("Nombre").text();
                var licencia = $(this).find("licencia").text();
                alert(nombre);
                alert(licencia);
            });
        }
    });
}  ;
function EnvioBitacora(){

    var tramo1=ValidarDatosTramo1();
   var mant=FaltantesGenerales();
   if (tramo1 == false || mant == false) {
    var conf = confirm("Hacen Falta Datos Seguro que Quieres Enviar?");

        if(conf == true){
        EnviarBitacora();
        }
   }
}
function EnvioBitacora2(){

  var tramo1 =  ValidarDatosTramo1();
  var tramo2 =  ValidarDatosTramo2();
  var mant =  FaltantesGenerales();
    if (tramo1 == false || tramo2 == false || mant == false) {
    var conf = confirm("Hacen Falta Datos Seguro que Quieres Enviar?");

        if(conf == true){
        EnviarBitacora2T();
        }
    }
    EnviarBitacora2T();
}
function EnviarBitacora ()
{
    alert("enviando!!");
    var Matricula = $('#matricula').val() + '';
    var Id = $('#PerfilID').val() + '';
    var CapNombre = $('#PerfilNombre').val() + '';
    var CapLicencia =  $('#PerfilLicencia').val() + '';
    var CopiNombre = $('#copiloto').val() + '';
    var Solicitado = $('#Solicitado').val() + '';
    var Folio = $('#Folio').val() + '';
    var De = $('#De').val() + '' ;
    var A = $('#A').val();
    var utcSale = $('#utcSale').val() + '';
    var utcLlega = $('#utcLlega').val() + '';
    var Hsalida = $('#hSale').val() + '';
    var HLlega = $('#hLlega').val() + '';
    var calACal = $('#calACal').val() + '';
    var tVuelo = $('#tVuelo').val() + '';
    var cSale = $('#cSale').val() + '';
    var cLlega = $('#cLlega').val() + '';
    var Consumo = $('#Consumo').val() + '';
    var pCarga = $('#pCarga').val()+ '';
    var pCombust = $('#pCombust').val()+ '';
    var pDespegue = $('#pDespegue').val()+ '';
    var nVuelo = $('#nVuelo').val() + '';
    var OAT = $('#OAT').val() + '';
    var Aceite = $('#Aceite').val() + '';
    var Crucero =  $('#Crucero').val() + '';
    var RPM = $('#RPM').val() + '';
    var ManPress = $('#MANPRESS').val() + '';
    var OilTemp = $('#OILTEMP').val() + '';
    var OilPress = $('#OILPRESS').val() + '';
    var EGT = $('#EGT').val() + '';
    var CHT = $('#CHT').val() + '';
    var VOLTS = $('#VOLTS').val() + '';
    var AMPERS = $('#AMPERS').val() + '';
    var FUELFLOW = $('#FUELFLOW').val() + '';
    var Ferry = $('#Ferry1').val() + '';
    var Pax1_1 = $('#Pax1_1').val() + '';
    var Pax1_2 = $('#Pax1_2').val() + '';
    var Pax1_3 = $('#Pax1_3').val() + '';
    var FechaSalida = $('#date').val() + '';
    var FechaLlegada =$('#date').val() + '';
    var AccionCorrectiva =$('#AccionCorrectiva').val() + '';
    var Reportes =$('#Reportes').val() + '';
    var Comentarios =$('#Comentarios').val() + '';
    var PrevueloNombre =$('#PrevueloNombre').val() + '';
    var PrevueloLicencia =$('#PrevueloLicencia').val() + '';
    var Correo = $('#PerfilCorreo').val() + '';
    $.ajax({
       // url: 'http://localhost:2467/WebSite3/Service1.asmx/AgregarBitacoraTA',
        url: 'http://187.174.155.50/service/Service1.asmx/AgregarBitacoraTA',
        contenType: 'application/xml; charset=utf-8',
        dataType: "xml",
        type: 'POST',
        cache: false,
        data:{NBitacora:Folio, FechaSalida1:FechaSalida, HoraLlegada1:utcLlega,AeropuertoSalida1:De, FechaLlegada1:FechaLlegada, HoraSalida1:utcSale,
            AeropuertoLlegada1:A,CalzoACalzo1:calACal,TiempoVuelo1:tVuelo, Calzos1:5, Capitan1:Id, CapitanNombre1:CapNombre , CoPiloto1:1,CopilotoNombre:CopiNombre,
            Ferry:Ferry, Matricula1:Matricula, CSalida1:cSale ,CLlegada1:cLlega,Consumo1:Consumo, HSalida1:Hsalida, HLlegada1:HLlega,
            pCarga1:pCarga, pCombust1:pCombust, pDespegue1:pDespegue, nVuelo1:nVuelo ,  Reporte1:Reportes,  AccionCorrectiva1:AccionCorrectiva, ManPress1:ManPress, OilTemp1:OilTemp, OilPress1:OilPress,
            EGT1:EGT,CHT1:CHT, OAT1:OAT , Ampers1:AMPERS, Volts1: VOLTS,   Aceite1:Aceite, FuelFlow1:FUELFLOW, RPM1:RPM,
            Pax1:Pax1_1,Pax2:Pax1_2,Pax3:Pax1_3, Solicitado:Solicitado, Folio:Folio, Crucero1:Crucero,
            Comentarios:Comentarios , PrevueloNombre:PrevueloNombre , PrevueloLicencia:PrevueloLicencia, PilotoEmail:Correo , CapitanLicencia:CapLicencia
        },
        success: function (response) {
           var Respuesta = $(response).find("string").text();
          alert(Respuesta);
        if (Respuesta == "Agregado Exitoso"){
            var conf = confirm("Quieres Borrar Datos de la Bitacora para una Nueva?");

            if(conf == true){
                BorrarDatosBitacora();

            }
        }
        },
        failure: function (msg) {
            alert(msg);
            alert("Error");
        }
    });
}
  function EnviarBitacora2T()
    {
        alert("enviando!!");
        var Matricula = $('#matricula').val() + '';
        var Id = $('#PerfilID').val() + '';
        var CapNombre = $('#PerfilNombre').val() + '';
        var CapLicencia =  $('#PerfilLicencia').val() + '';
        var Solicitado = $('#Solicitado').val() + '';
        var CopiNombre = $('#copiloto').val() + '';
        var Folio = $('#Folio').val() + '';
        //Tramo 1
        var De = $('#De').val() + '' ;
        var A = $('#A').val();
        var utcSale = $('#utcSale').val() + '';
        var utcLlega = $('#utcLlega').val() + '';
        var Hsalida = $('#hSale').val() + '';
        var HLlega = $('#hLlega').val() + '';
        var calACal = $('#calACal').val() + '';
        var tVuelo = $('#tVuelo').val() + '';
        var cSale = $('#cSale').val() + '';
        var cLlega = $('#cLlega').val() + '';
        var Consumo = $('#Consumo').val() + '';
        var pCarga = $('#pCarga').val()+ '';
        var pCombust = $('#pCombust').val()+ '';
        var pDespegue = $('#pDespegue').val()+ '';
        var nVuelo = $('#nVuelo').val() + '';
        var OAT = $('#OAT').val() + '';
        var Aceite = $('#Aceite').val() + '';
        var Crucero =  $('#Crucero').val() + '';
        var RPM = $('#RPM').val() + '';
        var ManPress = $('#MANPRESS').val() + '';
        var OilTemp = $('#OILTEMP').val() + '';
        var OilPress = $('#OILPRESS').val() + '';
        var EGT = $('#EGT').val() + '';
        var CHT = $('#CHT').val() + '';
        var VOLTS = $('#VOLTS').val() + '';
        var AMPERS = $('#AMPERS').val() + '';
        var FUELFLOW = $('#FUELFLOW').val() + '';
        var Ferry = $('#Ferry1').val() + '';
        var Pax1_1 = $('#Pax1_1').val() + '';
        var Pax1_2 = $('#Pax1_2').val() + '';
        var Pax1_3 = $('#Pax1_3').val() + '';

        //Tramo 2
        var De1 = $('#De2').val() + '' ;
        var A1 = $('#A2').val();
        var utcSale1 = $('#utcSale2').val() + '';
        var utcLlega1 = $('#utcLlega2').val() + '';
        var Hsalida1 = $('#hSale2').val() + '';
        var HLlega1 = $('#hLlega2').val() + '';
        var calACal1 = $('#calACal2').val() + '';
        var tVuelo1 = $('#tVuelo2').val() + '';
        var cSale1 = $('#cSale2').val() + '';
        var cLlega1 = $('#cLlega2').val() + '';
        var Consumo1 = $('#Consumo2').val() + '';
        var pCarga1 = $('#pCarga2').val()+ '';
        var pCombust1 = $('#pCombust2').val()+ '';
        var pDespegue1 = $('#pDespegue2').val()+ '';
        var nVuelo1 = $('#nVuelo2').val() + '';
        var OAT1 = $('#OAT2').val() + '';
        var Aceite1 = $('#Aceite2').val() + '';
        var Crucero1 =  $('#Crucero2').val() + '';
        var RPM1 = $('#RPM2').val() + '';
        var ManPress1 = $('#MANPRESS2').val() + '';
        var OilTemp1 = $('#OILTEMP2').val() + '';
        var OilPress1 = $('#OILPRESS2').val() + '';
        var EGT1 = $('#EGT2').val() + '';
        var CHT1 = $('#CHT2').val() + '';
        var VOLTS1 = $('#VOLTS2').val() + '';
        var AMPERS1 = $('#AMPERS2').val() + '';
        var FUELFLOW1 = $('#FUELFLOW2').val() + '';
        var Ferry2 = $('#Ferry2').val() + '';
        var Pax2_1 = $('#Pax2_1').val() + '';
        var Pax2_2 = $('#Pax2_2').val() + '';
        var Pax2_3 = $('#Pax2_3').val() + '';
        //mantenimiento
        var FechaSalida = $('#date').val() + '';
        var FechaLlegada =$('#date').val() + '';
        var AccionCorrectiva =$('#AccionCorrectiva').val() + '';
        var Reportes =$('#Reportes').val() + '';
        var Comentarios =$('#Comentarios').val() + '';
        var PrevueloNombre =$('#PrevueloNombre').val() + '';
        var PrevueloLicencia =$('#PrevueloLicencia').val() + '';
        var Correo = $('#PerfilCorreo').val() + '';
        $.ajax({
            // url: 'http://localhost:2467/WebSite3/Service1.asmx/AgregarBitacoraTA',
            url: 'http://187.174.155.50/service/Service1.asmx/AgregarBitacoraTA2',
            contenType: 'application/xml; charset=utf-8',
            dataType: "xml",
            type: 'POST',
            cache: false,
            data:{NBitacora:Folio,
                Matricula1:Matricula,
                Folio:Folio,
                Capitan1:Id,
                CapitanNombre1:CapNombre,
                CapitanLicencia:CapLicencia,
                CoPiloto1:1,
                CopilotoNombre:CopiNombre,
                Solicitado:Solicitado,

                AeropuertoSalida1:De,
                AeropuertoLlegada1:A,
                HSalida1:Hsalida,
                HoraSalida1:utcSale,
                HoraLlegada1:utcLlega,
                CalzoACalzo1:calACal,
                TiempoVuelo1:tVuelo,
                Calzos1:5,
                CSalida1:cSale,
                CLlegada1:cLlega,
                Consumo1:Consumo,
                pCarga1:pCarga,
                pCombust1:pCombust,
                pDespegue1:pDespegue,


                Crucero1:Crucero,
                ManPress1:ManPress,
                OilTemp1:OilTemp,
                OilPress1:OilPress,
                EGT1:EGT,
                CHT1:CHT,
                OAT1:OAT ,
                Ampers1:AMPERS,
                Volts1: VOLTS,
                Aceite1:Aceite,
                nVuelo1:nVuelo,
                FuelFlow1:FUELFLOW,
                RPM1:RPM,
                HLlegada1:HLlega,
                Ferry:Ferry,
                Pax1:Pax1_1,Pax2:Pax1_2,Pax3:Pax1_3,

                AeropuertoSalida2:De1,
                AeropuertoLlegada2:A1,
                HSalida2:Hsalida1,
                HoraSalida2:utcSale1,
                HoraLlegada2:utcLlega1,
                CalzoACalzo2:calACal1,
                TiempoVuelo2:tVuelo1,
                Calzos2:5,
                CSalida2:cSale1,
                CLlegada2:cLlega1,
                Consumo2:Consumo1,
                pCarga2:pCarga1,
                pCombust2:pCombust1,
                pDespegue2:pDespegue1,


                Crucero2:Crucero1,
                ManPress2:ManPress1,
                OilTemp2:OilTemp1,
                OilPress2:OilPress1,
                EGT2:EGT1,
                CHT2:CHT1,
                OAT2:OAT1 ,
                Ampers2:AMPERS1,
                Volts2: VOLTS1,
                nVuelo2:nVuelo1,
                Aceite2:Aceite1,
                FuelFlow2:FUELFLOW1,
                RPM2:RPM1,
                HLlegada2:HLlega1,
                Ferry2:Ferry2,
                Pax2_1:Pax2_1,Pax2_2:Pax2_2,Pax2_3:Pax2_3,

                FechaLlegada1:FechaLlegada,
                FechaSalida1:FechaSalida,
                AccionCorrectiva1:AccionCorrectiva,
                Reporte1:Reportes,
                Comentarios:Comentarios,
                PrevueloNombre:PrevueloNombre,
                PrevueloLicencia:PrevueloLicencia,
                PilotoEmail:Correo
            },
            success: function (response) {
                var Respuesta = $(response).find("string").text();
                alert(Respuesta);
                if (Respuesta = "Agregado Exitoso"){
                    var conf = confirm("Quieres Borrar Datos de la Bitacora para una Nueva?");

                    if(conf == true){
                        BorrarDatosBitacora();

                    }
                }
            },
            failure: function (msg) {
                alert(msg);
                alert("Error");
            }
        });
}
