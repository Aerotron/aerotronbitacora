/**
 * Created with JetBrains WebStorm.
 * User: SistemasAerotron
 * Date: 29/10/13
 * Time: 04:09 PM
 * To change this template use File | Settings | File Templates.
 */
function addGastosUser(StrId, StrName, StrMatricula, StrSalary ){
     alert("manando");
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
function Login (user, Password){

}  ;