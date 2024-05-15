import React from 'react';
import { View, StyleSheet } from 'react-native';

const YellowCurvyFrame = () => {
  return (
    <View style={styles.frame}>
      {/* Your content goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    backgroundColor: '#ffc107', // Yellow color
    borderRadius: 20, // Adjust this value to change the curvature
    borderWidth: 5, // Adjust this value to change the border width
    borderColor: '#ff9800', // Orange color for the border
    padding: 10, // Add some padding if needed
  },
});

export default YellowCurvyFrame;