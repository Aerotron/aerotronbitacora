/**
 * Created with JetBrains WebStorm.
 * User: SistemasAerotron
 * Date: 29/10/13
 * Time: 04:09 PM
 * To change this template use File | Settings | File Templates.
 */
function addGastosUser(StrId, StrName, StrMatricula, StrSalary ){

    $.ajax({
        url: 'http://10.168.3.250/service/Service1.asmx/AddGastos',
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
                     $(response).find("Usuario").each(function (index) {
                      agregarUser($(response).find("Nombre").text(),$(this).find("Licencia").text() , $(this).find("PassWord").text(),  $(this).find("Clave").text(),$(this).find("Correo").text());
              });
                 StartLogin();
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
