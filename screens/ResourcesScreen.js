import { View, Text, StyleSheet, FlatList, Pressable, Button } from 'react-native';

const resources = [
  {
    id: "1",
    name: "React Native Docs",
    description: "https://reactnative.dev/",
  },
  {
    id: "2",
    name: "React Native Paper",
    description: "https://callstack.github.io/react-native-paper/docs/guides/getting-started",
  },
  {
    id: "3",
    name: "Expo",
    description: "https://expo.dev/",
  },
    {
    id: "4",
    name: "SafeAreaView",
    description: "https://reactnative.dev/docs/safeareaview",
  },
];
export default function ResourcesScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Resources</Text>
      <FlatList data={resources}
       keyExtractor={(item) => item.id}
       renderItem={({item}) => (
        <Pressable style={styles.card} 
        onPress={() => navigation.navigate('Details', {resource: 
        item})}
        >
            <Text style={styles.cardTitle}>{item.name}</Text>
        </Pressable>
       )}
        />
        <Button title="Home" onPress={() => navigation.navigate
            ('Home')} />
                    <Button title="Resources" onPress={() => navigation.navigate
            ('Resources')} />
                    <Button title="Profile" onPress={() => navigation.navigate
            ('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
    },
});