 
// global variables
var db;
var shortName = 'WebSqlDB';
var version = '3.0';
var displayName = 'WebSqlDB';
var maxSize = 65535;
 
// this is called when an error happens in a transaction
function errorHandler(transaction, error) {
   alert('Error: ' + error.message + ' code: ' + error.code);
 
}
 
// this is called when a successful transaction happens
function successCallBack() {};
 
function nullHandler(){};
 
// called when the application loads
function onBodyLoad(){

 if (!window.openDatabase) {
    alert('Databases are not supported in this browser.');
   return;
 }
 
// this line tries to open the database base locally on the device
// if it does not exist, it will create it and return a database object stored in variable db
 db = openDatabase(shortName, version, displayName,maxSize);
 
// this line will try to create the table User in the database just created/openned
 db.transaction(function(tx){
 tx.executeSql( 'CREATE TABLE IF NOT EXISTS UserBitacoras(UserId INTEGER NOT NULL PRIMARY KEY, ID Integer, Name TEXT, PassWordd TEXT, Clave TEXT, Password TEXT, Correo TEXT, Licence TEXT, ID Integer)',
[],nullHandler,errorHandler);
 },errorHandler,successCallBack);

    db.transaction(function(tx){
        // you can uncomment this next line if you want the User table to be empty each time the application runs
        // tx.executeSql( 'DROP TABLE User',nullHandler,nullHandler);
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS Prevuelo(UserId INTEGER NOT NULL PRIMARY KEY, Name TEXT NOT NULL, Licence TEXT NOT NULL )',
            [],nullHandler,errorHandler);
    },errorHandler,successCallBack);
    StartLogin();
    ListDBValues();
}

// list the values in the database to the screen using jquery to update the #lbUsers element
function ListDBValues() {
 
 if (!window.openDatabase) {
  alert('Databases are not supported in this browser.');
  return;
 }
// this line clears out any content in the #lbUsers element on the page so that the next few lines will show updated
// content and not just keep repeating lines
 $('#PrevueloSelect').html('');
// this next section will select all the content from the User table and then go through it row by row
// appending the UserId  FirstName  LastName to the  #lbUsers element on the page
 db.transaction(function(transaction) {
   transaction.executeSql('SELECT * FROM Prevuelo;', [],
     function(transaction, result) {
         $('#PrevueloSelect').html('');
         $('#PrevueloSelect').append('<option value="'+ $('#PerfilLicencia').val() +'">' + $('#PerfilNombre').val() + '</option>');
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $('#PrevueloSelect').append('<option value="'+ row.Licence +'">' + row.Name + '</option>');
        }
      }
     },errorHandler);
 },errorHandler,nullHandler);
 
 return;
 } ;

function agregarMecanico(user,licencia) {

    if (!window.openDatabase) {
        alert('Databases are not supported in this browser.');
        return;
    }
// this is the section that actually inserts the values into the User table
    db.transaction(function(transaction) {
        transaction.executeSql('INSERT INTO Prevuelo(Name, Licence) VALUES (?,?)',[user,licencia],
            nullHandler,errorHandler);
    });

    return false;
  } ;
function agregarUser(Nombre, Licencia, PassWord, Clave, Correo, ID){
    db.transaction(function(transaction) {
        transaction.executeSql('INSERT INTO UserBitacoras(Name, PassWord, Clave, Correo ,Licence,ID ) VALUES (?,?,?,?,?,?)',[Nombre,PassWord,Clave,Correo,Licencia,ID],
            nullHandler,errorHandler);
    });
}
function BorrarUsuario () {
    db.transaction(function(transaction) {
        transaction.executeSql('DELETE * from UserBitacoras',
            nullHandler,errorHandler);

    });
    db.transaction(function(tx){
        tx.executeSql( 'DROP TABLE UserBitacoras' ,
            [],nullHandler,errorHandler);
    },errorHandler,successCallBack);
    db.transaction(function(tx){
        tx.executeSql( 'CREATE TABLE IF NOT EXISTS UserBitacoras(UserId INTEGER NOT NULL PRIMARY KEY, Name TEXT, PassWordd TEXT, Clave TEXT, Password TEXT, Correo TEXT, Licence TEXT, ID INTEGER)',
            [],nullHandler,errorHandler);
    },errorHandler,successCallBack);
}
function BorrarMecanicos () {
    db.transaction(function(transaction) {
        transaction.executeSql('DELETE * from Prevuelo',
            nullHandler,errorHandler);
    });
}
// this is the function that puts values into the database using the values from the text boxes on the screen
function AddValueToDB() {
 
 if (!window.openDatabase) {
   alert('Databases are not supported in this browser.');
   return;
 }
 
// this is the section that actually inserts the values into the User table
 db.transaction(function(transaction) {
   transaction.executeSql('INSERT INTO User(FirstName, LastName, PassWordd, Clave) VALUES (?,?,?,?)',[$('#usrName').val(), $('#passwordd').val(),$('#passwordd').val(),$('#passwordd').val()],
     nullHandler,errorHandler);
   });
 
// this calls the function that will show what is in the User table in the database

 
 return false;
 
};

function resetDatabase (){
    tx.executeSql( 'DROP TABLE UserBitacoras',nullHandler,nullHandler);
    tx.executeSql( 'DROP TABLE Prevuelo',nullHandler,nullHandler);


}
function ListMecanicos() {

    db.transaction(function(transaction) {
        transaction.executeSql('SELECT * FROM Prevuelo;', [],
            function(transaction, result) {
                if (result != null && result.rows != null) {
                    for (var i = 0; i < result.rows.length; i++) {
                        var row = result.rows.item(i);

                      alert(row.Name);
                    }
                }
            },errorHandler);
    },errorHandler,nullHandler);

    return;
};

function StartLogin () {
    db.transaction(function(transaction) {
        transaction.executeSql('SELECT * FROM UserBitacoras;', [],
            function(transaction, result) {
                 if (result.rows.item(0) != null && result.rows != null) {
                    var row = result.rows.item(0);
                    if (row.Name != ''){
                    document.getElementById("PerfilNombre").value = row.Name;
                    document.getElementById("PerfilLicencia").value = row.Licence;
                    document.getElementById("PerfilClave").value = row.Clave;
                    document.getElementById("PerfilCorreo").value = row.Correo;
                    document.getElementById("PerfilID").value = row.ID;
                    document.getElementById("usrName").value = row.Clave;
                    document.getElementById("passwordd").value = row.Pass;
                    document.getElementById("PrevueloNombre").value = row.Name;
                    document.getElementById("PrevueloLicencia").value = row.Licence;

                     $('#usrName').disabled = true;
                     $('#passwordd').disabled = true;

                    }
                     else{
                        alert("Not logged in 1");
                    }

                }
                else {
                    alert("Not logged in 2");
                }
            },errorHandler);
    },errorHandler,nullHandler);

    return;
} ;

