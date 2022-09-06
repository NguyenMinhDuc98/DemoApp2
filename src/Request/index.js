import * as React from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import RequestDetails from './Details';

const DetailsRoute = () => <RequestDetails />;

const SecondRoute = () => <View style={styles.secondRouteStyle} />;

const renderScene = SceneMap({
  details: DetailsRoute,
  second: SecondRoute,
});

export default function Request() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'details', title: 'Details'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}

const styles = StyleSheet.create({
  detailsRouteStyle: {
    flex: 1,
    backgroundColor: '#ff4081',
  },
  secondRouteStyle: {
    flex: 1,
    backgroundColor: '#673ab7',
  },
});
