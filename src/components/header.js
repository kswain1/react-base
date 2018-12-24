// Import libraries
import React from 'react';
import { Text, View } from 'react-native';

//import Component as a rule of thumb make function
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    elevation: 5,

  },
  textStyle: {
    fontSize: 60,
  },
};

//make component availble for other parts of our project
export default Header;
