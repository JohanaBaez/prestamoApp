import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React, { useState, useEffect } from "react";

import { HttpClient } from "../services/http.service";
import { ListPrestamoResponse } from "../interfaces/index";
import axios from 'axios';

const client = new HttpClient
const Usuarios = () => {

    const [prestamos, setPrestamo] = useState<ListPrestamoResponse>({
        data: [],
        metadata:{
          nextPage:1,
          currentPage:1,
          perPage:1
        }
    
      });
      const getPrestamos = async () => {
        const response = await client.get<ListPrestamoResponse>('prestamos');
        setPrestamo(response);
        console.log(response)
        
      };
    
      useEffect(() => {
        getPrestamos();
      }, []);
  return (
    <ScrollView
    >
      {prestamos.data.map((prestamo, index) => (
        <View style={styles.Firsth} key={index}>
          <View>
            <Image
              style={styles.img}
              source={{ uri: prestamo.foto }}
            />
          </View>

          <View style={styles.Third}>
            <Text style={styles.Text2}>{prestamo.vencimiento}</Text>
            <Text style={styles.Text2}>{prestamo.total}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default Usuarios

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-start',
        backgroundColor:'#2f2485'
      },
      containerView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'flex-start',
        marginBottom: 10,
        paddingVertical: 10,
        borderRadius: 10,
      
        borderColor: '#fffff',
        marginTop: 10,
        
      },
      text: {
        fontSize: 24,
        color: '#050000'
      },
      container1: {
        marginTop: '20',
        flex: 1,
        flexDirection: 'column',
      },
      Firsth: {
        marginTop: 20,
      
      },
      img: {
        height: 80,
        width: 90,
        borderRadius: 5,
        marginLeft: 50,
      },
      Third: {
        marginTop: -80,
        marginLeft: 150,
        height: 90,
        width: 235,
        borderRadius: 10,
        boxShadow: '2px 2px 2px #91BFF5',
    
      },
      Text2: {
        marginTop: 5,
        color: '#000',
        marginLeft: 10,
        fontSize: 15,
      }
})