import {Text, View} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function DetailsFooter() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.approveButton} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Duyệt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rejectButton} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Không duyệt</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.07,
    flexDirection: 'row',
  },
  approveButton: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#3AB408',
  },
  rejectButton: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#F72020',
  },
  buttonText: {
    color: 'white',
    lineHeight: 42,
    fontWeight: 'bold',
  },
});
