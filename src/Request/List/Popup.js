import React from 'react';
import {Center, Modal, Text, Box} from 'native-base';
import {StyleSheet} from 'react-native';

export default function PurchaseDetailsModal({
  showModal,
  setShowModal,
  dataSource,
}) {
  const handleClose = () => {
    setShowModal(false);
  };

  const data = [
    {label: 'Hàng hóa, dịch vụ', value: dataSource?.tenHangHoa_DichVu},
    {label: 'Mã hiệu', value: dataSource?.model_MaHieu},
    {label: 'Xuất xứ', value: dataSource?.xuatXu_Hang},
    {label: 'Số lượng', value: dataSource?.soLuong},
    {label: 'Đơn vị', value: dataSource?.donVi},
    {label: 'Đơn giá', value: `${dataSource?.donGiaTamTinh} đ`},
    {label: 'Tổng tiền', value: `${dataSource?.soTienTamTinh} đ`},
    {label: 'Mã HMTK', value: dataSource?.maHangMucTrienKhai},
    {label: 'Ghi chú', value: dataSource?.ghiChu},
  ];

  const dataLayout = () => {
    return data.map((item, index) => (
      <Box key={index} style={styles.item}>
        <Text style={styles.itemLabel}>{item.label}</Text>
        <Text style={styles.itemValue}>{item.value}</Text>
      </Box>
    ));
  };

  return (
    <Center>
      <Modal isOpen={showModal} onClose={handleClose}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header _text={styles.modalHeader}>
            Chi tiết đơn hàng
          </Modal.Header>
          <Modal.Body>{dataLayout()}</Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
}

const styles = StyleSheet.create({
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    marginBottom: 10,
  },
  itemLabel: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  itemValue: {},
});
