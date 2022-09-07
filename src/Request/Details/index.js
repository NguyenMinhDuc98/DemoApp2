import {Box, ScrollView} from 'native-base';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import moment from 'moment';

const EmployeeInfo = ({details}) => {
  const infos = [
    {label: 'Tên:', value: details?.tenNhanVien},
    {label: 'Chức vụ:', value: details?.chucVu},
    {label: 'Mã nhân viên:', value: details?.maNhanVien},
    {label: 'Phòng/Ban:', value: details?.phongBan},
    {label: 'Mã dự án:', value: details?.maDuAn},
    {label: 'Địa điểm làm việc:', value: details?.diaDiemLamViec},
    {
      label: 'Ngày đệ trình:',
      value: moment(details?.ngayDeTrinh).format('DD/MM/YYYY'),
    },
    {label: 'Phụ phí:', value: details?.phuPhi},
    {
      label: 'Ngày giao hàng:',
      value: moment(details?.ngayCanHang).format('DD/MM/YYYY'),
    },
    {label: 'Mã chi phí:', value: details?.maChiPhi},
    {label: 'Số tham chiếu:', value: details?.soThamChieu},
  ];

  const detailsLayout = () => {
    return infos.map((info, index) => (
      <Box key={index} style={styles.info}>
        <Text style={styles.label}>{info.label} </Text>
        <Text style={styles.value}>{info.value}</Text>
      </Box>
    ));
  };

  return <ScrollView style={styles.container}>{detailsLayout()}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  info: {
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
  },
  value: {
    color: 'black',
  },
});

export default EmployeeInfo;
