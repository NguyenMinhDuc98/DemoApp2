import {Box, FlatList, HStack, Spacer, Text, View, VStack} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PurchaseDetailsModal from './Popup';

export default function PurchaseList({purchaseList}) {
  const [showModal, setShowModal] = useState(false);
  const [dataSource, setDataSource] = useState();

  const handleOpenModal = item => {
    setShowModal(true);
    setDataSource(item);
  };

  return (
    <Box style={styles.container}>
      <PurchaseDetailsModal
        showModal={showModal}
        setShowModal={setShowModal}
        dataSource={dataSource}
      />
      <View style={styles.listHeader}>
        <Text style={styles.headerText}>Hàng hóa, dịch vụ</Text>
        <Text style={styles.headerText}>Xuất xứ</Text>
      </View>
      <FlatList
        data={purchaseList}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.singlePurchase}
            onPress={() => handleOpenModal(item)}>
            <HStack space={[2, 3]} justifyContent="space-between">
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                  {item.tenHangHoa_DichVu}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                alignSelf="flex-start">
                {item.xuatXu_Hang}
              </Text>
            </HStack>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    // backgroundColor: 'yellow',
    height: '100%',
  },
  singlePurchase: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  listHeader: {
    flex: 0.1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
