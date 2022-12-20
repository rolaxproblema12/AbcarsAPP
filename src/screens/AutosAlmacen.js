import { View, Text, SafeAreaView} from 'react-native'
import React,{useState,useEffect} from 'react'
import { getVehicles } from '../api/vehicles'

export default function AutosAlmacen() {
  useEffect(() =>{
    (async() => { await loadVehicles()
    })();
  },[])

  const loadVehicles = async () =>{
    try{
      const response = await getVehicles();
      console.log(response);
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