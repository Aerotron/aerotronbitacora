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
          alert("Terminado");
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

    ValidarDatosTramo1();
    ValidarDatosTramo2();
    FaltantesGenerales();

    var conf = confirm("Are you sure you want to send this Flightlog?");

    if(conf == true){
    EnviarBitacora();
    }
}
function EnviarBitacora ()
{   var Matricula = $('#Matricula').val();
    var Id = $('#PerfilID').val();
    var Folio = $('#Folio').val();
    var De = $('#De').val();
    var A = $('#A').val();
    var utcSale = $('#utcSale').val();
    var utcLlega = $('#utcLlega').val();
    var Hsalida = $('#hSale').val();
    var HLlega = $('#hLlega').val();
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
    var EGT = $('#RPM').val();
    var CHT = $('#RPM').val();
    var VOLTS = $('#RPM').val();
    var AMPERS = $('#AMPERS').val();
    var FUELFLOW = $('#FUELFLOW').val();
    var Ferry = $('#Ferry1').val() + '';
    var Pax1_1 = $('#Pax1_1').val() + '';
    var Pax1_2 = $('#Pax1_2').val() + '';
    var Pax1_3 = $('#Pax1_3').val() + '';
    var FechaSalida = $('#date').val() + '';
    var FechaLlegada =$('#date').val() + '';
    $.ajax({
       // url: 'http://localhost:2467/WebSite3/Service1.asmx/AgregarBitacoraTA',
        url: 'http://187.174.155.50/service/Service1.asmx/AgregarBitacoraTA',
        contenType: 'application/xml; charset=utf-8',
        dataType: "xml",
        type: 'POST',
        cache: false,
        data:{NBitacora:Folio, FechaSalida1:FechaSalida, HoraLlegada1:utcLlega,AeropuertoSalida1:De, FechaLlegada1:FechaLlegada, HoraSalida1:utcSale, AeropuertoLlegada1:A,CalzoACalzo1:calACal,
            TiempoVuelo1:tVuelo, Calzos1:5, Capitan1:Id, CoPiloto:1, Ferry:Ferry, Matricula1:Matricula, HSalida1:Hsalida, HLlegada1:HLlega, Pax1:Pax1_1,Pax2:Pax1_2,Pax3:Pax1_3},
        success: function (response) {
          alert($(response).responseText);

        },
        failure: function (msg) {
            alert(msg);
            alert("Error");
        }
    });
}
