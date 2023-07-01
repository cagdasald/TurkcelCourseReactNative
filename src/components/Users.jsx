import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Users = (props) => {
  return (
    <View>
      <Text style={styles.text}>
        {
            JSON.stringify(props.data, null, 2)
        }
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  text: {
      color: 'white',
  },
});

export default Users