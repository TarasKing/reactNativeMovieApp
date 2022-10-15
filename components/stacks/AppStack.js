import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tab } from "@react-navigation/native";
import IndexScreen from "../screens/IndexScreen";
import DetailsScreen from "../screens/DetailsScreen";
import MoviesScreen from "../screens/MoviesScreen";
import Movies from '../containers/Movies';

const Stack = createNativeStackNavigator();


// function Home() {
//   return (
//     <Tab.Navigator>
//       {/* <Tab.Screen name="Search Results" component={IndexScreen} />
//       <Tab.Screen name="Movies" component={Movies} />
//     </Tab.Navigator> */}
// //   );
// // }


const AppStack = () => {
    
    return (
        <NavigationContainer>   
            <Tab.Navigator>
                <Tab.Screen name="Search Results" component={IndexScreen} />
                <Tab.Screen name="Movies" component={Movies} />
   
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
            </Tab.Navigator> 
    </NavigationContainer>
    )
}

export default AppStack