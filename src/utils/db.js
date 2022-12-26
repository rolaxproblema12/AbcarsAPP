import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';

const DATABASE_NAME = 'qrData.db';

export function db(){


    // useEffect(()=>{
    // try{
    //     db.transaction(tx =>{
    //         tx.executeSql('CREATE TABLE IF NOT EXISTS location_vehicles(id INTEGER PRIMARY KEY AUTOINCREMENT , name TEXT)')
    //     });
    //     console.log('creada')
    // }catch(e){
    //     console.log('error',e);
    // }
    // }, [])

}

export function getDbConnection(){
    try{
        const db = SQLite.openDatabase('qrData.db');
        console.log('creado con exito111');
        return db;
    }catch(e){
        console.log(e)
    }
}

// }
export function createTables(db){
    
    useEffect(()=>{
    try{
        db.transaction(tx =>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS location_vehicles(id INTEGER PRIMARY KEY AUTOINCREMENT , name TEXT)')
        });
        console.log('creada')
    }catch(e){
        console.log('error',e);
    }
    }, [])
    

}
export function initDataBase(){
    const db = getDbConnection();
    createTables(db);
    console.log('creado con exito')
    // db.close();

}
export function insertQr(db, name){
    try{
        // const insertQuery = `INSERT INTO vehicle_location(name) values ('${name}')`;
        // return db.executeSql(insertQuery);}
        console.log('Hola desde insett',name)
        // console.log(db)
        db.transaction(tx=>{
            tx.executeSql('INSERT INTO location_vehicles(name) VALUES (?)',[name]);
        });
        console.log('registro creado')
    }catch(e){
        console.log(e);
    }

}
export function getTasks(db){
    const qrs = [];
    console.log("Hola desde Qr optiencion",db)
    // const results = db.executeSql('SELECT id, name FROM vehicle_Location');
    db.transaction(tx =>{
        tx.executeSql('SELECT name FROM location_vehicles', [],(_,{rows}) =>
            console.log(JSON.stringify(rows))
        );
    })
    // results.forEach(function(ResultSet){
    //     for(let index = 0; index < ResultSet.rows.length; index++){
    //         qrs.push(ResultSet.rows.item(index));
    //     }
    // });
    console.log(qrs);
}