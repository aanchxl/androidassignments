import React from 'react';
import { View, StyleSheet } from 'react-native';
import ApiExample from './ApiExample';
const App = () => {
    return (
      <View style={styles.container}>
        <ApiExample />
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  export default App;
    