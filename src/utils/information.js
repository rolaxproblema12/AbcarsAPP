import { View, Text } from 'react-native';
import React from 'react';
import { getDbConnection,getTasks } from '../utils/db';
import { getVehicles } from '../api/vehicles';

export function information() {
    useEffect(() =>{
        (async() => { await loadVehicles()
        })();
    },[])
    const db = getDbConnection()
    const loadVehicles = async () =>{
        const vehiclesL = []
        try{
        getTasks(db).then((datos)=>{
            JSON.parse(datos)._array.map(name=>vehicles.push(name))
            return vehiclesL;
    
            /*console.log( JSON.parse(datos)._array[0].name)*/})
          // const response = await getVehicles()
          // console.log(response)
        }catch(error){
          // console.error(error)
        }
    }

}