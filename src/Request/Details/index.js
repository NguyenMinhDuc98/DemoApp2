import {ScrollView} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {getRequestDetails} from '../../../service/RequestService';

const RequestDetails = () => {
  const [details, setDetails] = useState({});

  const getDetails = async () => {
    try {
      const res = await getRequestDetails();
      setDetails(res);
      // console.log('🚀 ~ file: index.js ~ line 11 ~ getDetails ~ res', res);
    } catch (error) {
      // console.log('🚀 ~ file: index.js ~ line 13 ~ getDetails ~ error', error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const infos = [
    {label: 'Tên:', value: details.tenNhanVien},
    {label: 'Chức vụ:', value: details.chucVu},
    {label: 'Mã nhân viên:', value: details.maNhanVien},
    {label: 'Phòng/Ban:', value: details.phongBan},
    {label: 'Mã dự án:', value: details.maDuAn},
    {label: 'Địa điểm làm việc:', value: details.diaDiemLamViec},
    {label: 'Ngày đệ trình:', value: details.ngayDeTrinh},
    {label: 'Phụ phí:', value: details.phuPhi},
    {label: 'Ngày giao hàng:', value: details.ngayCanHang},
    {label: 'Mã chi phí:', value: details.maChiPhi},
    {label: 'Số tham chiếu:', value: details.soThamChieu},
  ];

  const detailsLayout = () => {
    return infos.map((info, index) => (
      <Text key={index} style={styles.info}>
        {info.label} {info.value}
      </Text>
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
  },
});

export default RequestDetails;
