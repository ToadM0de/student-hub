import { View, Text, StyleSheet, Pressable, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>Welcome home!</Text>

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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    },
    title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    text: {
    fontSize: 16,
    textAlign: 'center',
    },
});