import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const Title = (props) => {
    return (
        <View>
            <Text style={[styles.title, {color: props.color}]}>{props.numberOfLines}-{props.text}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 600,
        fontSize: 30,
    },
  });

  Title.propTypes = {
    text: PropTypes.string,
  }

  

export default Title
