import React, {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {RequestServices} from '../../service/RequestService';
import EmployeeInfo from './Details';
import DetailsFooter from './Footer';
import PurchaseList from './List';

export default function Request() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'details', title: 'Thông tin nhân viên'},
    {key: 'request', title: 'Danh sách hàng hóa, dịch vụ cần mua'},
  ]);

  const [details, setDetails] = useState({});

  const getDetails = async () => {
    try {
      const res = await RequestServices.getRequestDetails(554);
      setDetails(res.data);
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 13 ~ getDetails ~ error', error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const DetailsRoute = () => <EmployeeInfo details={details} />;

  const RequestRoute = () => (
    <PurchaseList purchaseList={details?.yeuCauMuaHangChiTiets} />
  );

  const renderScene = SceneMap({
    details: DetailsRoute,
    request: RequestRoute,
  });

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
