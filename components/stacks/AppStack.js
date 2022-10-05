import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import DetailsScreen from "../screens/DetailsScreen";
import MoviesScreen from "../screens/MoviesScreen";

const Stack = createNativeStackNavigator();


const AppStack = () => {
    
    return (
    <NavigationContainer>            
        <Stack.Navigator>
            <Stack.Screen
                    name="Index"
                    component={IndexScreen}
                    options={ 
                        { title: "Search Results" }
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
    )
}

export default AppStack