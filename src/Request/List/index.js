import {Box, FlatList, HStack, Spacer, Text, View, VStack} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PurchaseDetailsModal from './Popup';

export default function RequestList() {
  const [purchaseList, setPurchaseList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      id: '1',
      fullName: 'Aafreen Khan',
      timeStamp: '12:47 PM',
    },
    {
      id: '2',
      fullName: 'Sujitha Mathur',
      timeStamp: '11:11 PM',
    },
    {
      id: '3',
      fullName: 'Anci Barroco',
      timeStamp: '6:22 PM',
    },
    {
      id: '4',
      fullName: 'Aniket Kumar',
      timeStamp: '8:56 PM',
    },
    {
      id: '5',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
    },
  ];
  return (
    <Box style={styles.container}>
      <PurchaseDetailsModal showModal={showModal} setShowModal={setShowModal} />
      <View style={styles.listHeader}>
        <Text style={styles.headerText}>Hàng hóa, dịch vụ</Text>
        <Text style={styles.headerText}>Mã HMTK</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.singlePurchase}
            onPress={() => setShowModal(true)}>
            <HStack space={[2, 3]} justifyContent="space-between">
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                  {item.fullName}
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
                {item.timeStamp}
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
