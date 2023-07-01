import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  return (
    <View>
      <Text style={styles.text}>
        {JSON.stringify(props.data)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
      color: 'white',
  },
});

// sadece proptan gelen dataların type' ı olsun dediğimizde exact kullanmalıyız örneğin app.jsx te 
// id ve name dışında başka bir property var ise shape yerine exact kullandığımızda hata verecektir 
User.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
}

export default User