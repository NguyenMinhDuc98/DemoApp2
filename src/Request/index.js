import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import RequestDetails from './Details';
import DetailsFooter from './Footer';
import RequestList from './List';

const DetailsRoute = () => <RequestDetails />;

const RequestRoute = () => <RequestList />;

const renderScene = SceneMap({
  details: DetailsRoute,
  request: RequestRoute,
});

export default function Request() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'details', title: 'Thông tin nhân viên'},
    {key: 'request', title: 'Danh sách hàng hóa, dịch vụ cần mua'},
  ]);

  return (
    <>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
      <DetailsFooter />
    </>
  );
}
