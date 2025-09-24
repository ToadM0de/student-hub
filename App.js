import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Home"
       component={HomeScreen} 
       options={({navigation})=> ({
      })}
      />


      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Resources" component={ResourcesScreen} />
       <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutBtn: {
    color: 'blue',
    fontSize: 16,
    marginRight: 10,
  }
});
