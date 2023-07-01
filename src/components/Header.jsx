import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <View>
        <Text style={styles.title}>NAVBAR</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 900,
        fontSize: 75,
    },
  });

export default Header;