import {Box} from 'native-base';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import projectManageImg from '../../assets/images/icon-project-management.73136e4.png';
import cashImg from '../../assets/images/cash.1ba178b.gif';
import buyImg from '../../assets/images/buy.2c5404e.gif';
import listImg from '../../assets/images/list.9dcaec3.png';
import wpImg from '../../assets/images/wp.f13a37b.gif';

const Home = () => {
  const features = [
    {
      label: 'Quản lý dự án',
      value: '',
      image: projectManageImg,
    },
    {label: 'Phân tích dòng tiền', value: '', image: cashImg},
    {label: 'Mua Hàng', value: 'Request', image: buyImg},
    {label: '1Office', value: ''},
    {label: 'Danh sách nhà phân phối', value: '', image: listImg},
    {label: 'Địa điểm làm việc', value: '', image: wpImg},
  ];

  const getFeaturesLayout = () => {
    return features.map((feature, index) => (
      <TouchableOpacity style={styles.featureBox} key={index}>
        <Box style={styles.imageBox}>
          <Image
            source={feature.image}
            alt="Alternate Text"
            style={styles.imageStyle}
          />
        </Box>
        <Text style={styles.featureLabel}>{feature.label}</Text>
      </TouchableOpacity>
    ));
  };

  return <View style={styles.container}>{getFeaturesLayout()}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureBox: {
    width: 100,
    marginBottom: 40,
  },
  imageBox: {
    height: 60,
    width: 100,
    backgroundColor: 'green',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  featureLabel: {
    textAlign: 'center',
    color: 'rgb(0, 81, 158)',
    fontSize: 16,
  },
});

export default Home;
