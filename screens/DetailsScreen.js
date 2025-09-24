import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DetailsScreen({route}) {
  const {resource} = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{resource.name}</Text>
      <Text style={styles.description}>{resource.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});