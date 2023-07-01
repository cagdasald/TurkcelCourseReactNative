import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';


// aşşağıda props yerine parent den gelen property leri yazabiliriz ({isVisible, title, color, text}) gibi
const Title = (props) => {
    return (
        <View>
            {props.isVisible && <Text style={[styles.title, {color: props.color}]}>{props.numberOfLines}-{props.text}</Text>}
        </View>
      );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 600,
        fontSize: 30,
        color: 'white',
    },
  });

  Title.propTypes = {
    text: PropTypes.string.isRequired,
    isVisible: PropTypes.bool,
  }

  Title.defaultProps = {
    text: "Varsayılan Başlık",
    işVisible: false,
  }

  

export default Title
