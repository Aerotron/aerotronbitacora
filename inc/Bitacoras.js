document.addEventListener("deviceready", onDeviceReady, false);

// Populate the database
//
function populateDB(tx) {

    tx.executeSql('CREATE TABLE IF NOT EXISTS Bitacoras (ID unique integer NOT NULL,IDBitacora_Server INTEGER , Capitan, Copiloto, Aterrizajes, Ciclos,' +
        'HobbsOut, HobbsIn, IFR, TV,Usuario, FechaActualizacion)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS BitacorasTramos (IDTramo unique, ID, IDBitacora, FechaSalida, HoraSalida, AeropuertoSalida' +
        'FechaLlegada,HoraLlegada, AeropuertoLlegada, CalzoaACalzo, TiempoVuelo, Capitan, CoPiloto, Folio_S, TipoVuelo, Ferry, Raite, Pax, Socio,' +
        'NumBitacora, Matricula)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS Bitacoras (ID unique,IDBitacora_Server, Capitan, Copiloto, Aterrizajes, Ciclos)');

}

// Query the database
//
function queryDB(tx) {
    tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
}

// Query the success callback
//
function querySuccess(tx, results) {
    var len = results.rows.length;
    console.log("DEMO table: " + len + " rows found.");
    for (var i=0; i<len; i++){
        console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
    }
}

// Transaction error callback
//
function errorCB(err) {
    console.log("Error processing SQL: "+err.code);
}

// Transaction success callback
//
function successCB() {
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(queryDB, errorCB);
}

// device APIs are available
//
function onDeviceReady() {
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);


};