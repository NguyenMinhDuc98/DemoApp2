import {HStack, Icon, IconButton, Text} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function AppBar() {
  return (
    <>
      <HStack
        bg="#673ab7"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon
                size="sm"
                as={MaterialCommunityIcons}
                name="menu"
                color="white"
              />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
      </HStack>
    </>
  );
}
