import { View, Text, SafeAreaView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { getVehicles } from '../api/vehicles'
import { getDbConnection,getTasks } from '../utils/db'

export default function AutosAlmacen() {
  useEffect(() =>{
    (async() => { await loadVehicles()
    })();
  },[])
  const db = getDbConnection()
  const loadVehicles = async () =>{

    try{
      getTasks(db).then((datos)=>{console.log(datos)})
      // const response = await getVehicles()
      console.log(response)
    }catch(error){
      // console.error(error)
    }
  }
  return (
    <SafeAreaView>
        <Text>Estamos en autos almacen</Text>
    </SafeAreaView>

  )
}