import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import DetailsScreen from "../screens/DetailsScreen";
import MoviesScreen from "../screens/MoviesScreen";
import TvShowsScreen from "../screens/TvShowsScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();


function TopTabs() {
        // const insets = useSafeAreaInsets();
    return (
 <Tab.Navigator
                initialRouteName="Search Results"
                tabBarOptions={{
                    activeTintColor: 'black',
                    labelStyle: { fontSize: 12 },
                    style: {
                        backgroundColor: 'white',
                        // marginTop: insets.top
                    },
                }}>
                
                <Tab.Screen
                    name="Movies"
                    component={MoviesScreen}
                    options={{ tabBarLabel: "Movies" }}
                />
                <Tab.Screen
                    name="Search Results"
                    component={IndexScreen}
                    options={{ tabBarLabel: "Search Results" }}
                />
                <Tab.Screen
                    name="TV Shows"
                    component={TvShowsScreen}
                    options={{ tabBarLabel: "TV Shows" }}
                />
            </Tab.Navigator>
    );
}


const AppStack = () => {

    return (
        <NavigationContainer>
           

            <Stack.Navigator>
            <Stack.Screen
                    name="myTabs"
                    component={TopTabs}
                    options={
                        { title: "Movie App", headerShown: false }
                    } />
            <Stack.Screen
                    name="Movies"
                    component={MoviesScreen}
                    options={
                        { title: "Movies" }
                    } />
            <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={
                        {title: "Movie Details"}
                    } />
            </Stack.Navigator> 
        </NavigationContainer>

    );
}

export default AppStack;

      

        
        
        
        


