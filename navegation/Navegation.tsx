import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import Inicio from '../screens/Inicio';
import Agregar from '../screens/Agregar';
import Editar from '../screens/Editar';
import Usuarios from '../screens/Usuarios';

const Tab = createBottomTabNavigator();
const Navegation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator  screenOptions={{
headerShown: false,
}}
tabBar={(props) => <MyTabBar {...props} />}>

<Tab.Screen name="Inicio" component={Inicio} />
<Tab.Screen name="Agregar" component={Agregar} />
<Tab.Screen name="Editar" component={Editar} />
<Tab.Screen name="Usuarios" component={Usuarios} />

</Tab.Navigator>
</NavigationContainer>
  )
}
const MyTabBar = ({ state, descriptors, navigation }: any) => {
    return (
      <View style={styles.bottomBar}>
        {state.routes.map((route: any, index: any) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];
  
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const color = isFocused ? "#3018cc" : "#BBBBBB";
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onPress()}
              testID={options.tabBarTestID}
              accessibilityRole="button"
            >
              {index === 0 && (
                <View style={styles.icon}>
                  {isFocused ? (
                    <Ionicons name="home" size={24} color={color} />
                  ) : (
                    <Ionicons name="home-outline" size={24} color={color} />
                  )}
                </View>
              )}
              {index === 1 && (
                <View style={styles.icon}>
                  {isFocused ? (
                    <Ionicons name="bookmark" size={24} color={color} />
                  ) : (
                    <Ionicons name="bookmark-outline" size={24} color={color} />
                  )}
                </View>
              )}
              
              {index === 2 && (
                <View style={styles.icon}>
                  {isFocused ? (
                    <Ionicons name="notifications" size={24} color={color} />
                  ) : (
                    <Ionicons
                      name="notifications-outline"
                      size={24}
                      color={color}
                    />
                  )}
                </View>
              )}
              {index === 3 && (
                <View style={styles.icon}>
                  {isFocused ? (
                    <Ionicons name="person" size={24} color={color} />
                  ) : (
                    <Ionicons name="person-outline" size={24} color={color} />
                  )}
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
export default Navegation

const styles = StyleSheet.create({
    icon: {},
    bottomBar: {
      height: 80,
      backgroundColor: "#F1F1F1",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    middleicon: {
      bottom: 40,
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: "#3018cc",
      justifyContent: "center",
      alignItems: "center",
    },
})