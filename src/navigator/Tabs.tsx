import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from './Tab1';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Tab2Screen } from './Tab2';


const Tab = createBottomTabNavigator();


export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={{
            tabBarActiveTintColor: '#5856D6',
            tabBarStyle: { 
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.92)', 
                paddingBottom: 10, //( Platform.OS === 'ios') ? 0 : 10, 
                borderWidth: 0,
                elevation: 0,
                height: 60,//( Platform.OS === 'ios') ? 70 : 80,
            }
        }}
    >
        <Tab.Screen
            name="Homescreen" 
            component={ Tab1 }
            options={{
                headerShown: false,
                tabBarLabel: "listado",
                tabBarIcon: ({ }) => (
                    <Icon 
                        color={ Colors } 
                        size={ 20 } 
                        name='list-outline'
                    />
                )
            }}
            />
        <Tab.Screen 
            name="SearchScreen" 
            component={ Tab2Screen } 
            options={{
                headerShown: false,
                tabBarLabel: "Búsqueda",
                tabBarIcon: ({ }) => (
                    <Icon 
                        color={ Colors } 
                        size={ 20 } 
                        name='search-outline'
                    />
                )
            }}
            />
    </Tab.Navigator>
  );
}