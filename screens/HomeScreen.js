import { View, Text, StyleSheet, FlatList, Pressable, Button } from 'react-native';

const details = [
  {
    id: "1",
    name: "Details",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList data={details}
       keyExtractor={(item) => item.id}
       renderItem={({item}) => (
        <Pressable style={styles.card} 
        onPress={() => navigation.navigate('Details', {detail: 
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