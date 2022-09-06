import {Center, HStack, Icon, Pressable, Text} from 'native-base';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DetailsFooter() {
  const [selected, setSelected] = useState(1);
  return (
    <>
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}>
          <Center>
            <Text color="white" fontSize="12">
              Duyệt
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}>
          <Center>
            <Text color="white" fontSize="12">
              Không duyện
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </>
  );
}
