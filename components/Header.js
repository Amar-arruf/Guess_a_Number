import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Color from '../constants/Color';
import TitleText from './TitleText';

const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? Color.primary : 'white',
    alignItems: 'center',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent', 
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
    justifyContent: 'center'
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? Color.primary : 'white',
  }
});

export default Header;
