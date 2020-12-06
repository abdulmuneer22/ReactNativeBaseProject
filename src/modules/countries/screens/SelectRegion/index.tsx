import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationFunctionComponent, Options } from 'react-native-navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { I18n } from '~modules/localization';
import { useTheme } from '~theme';

import { SelectRegionMenu } from '../../components';
import themedStyles from './styles';

const SelectRegionScreen: NavigationFunctionComponent = props => {
  const [styles] = useTheme(themedStyles);
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: top, marginBottom: bottom }]}>
      <StatusBar barStyle={'light-content'} />

      <SelectRegionMenu componentId={props.componentId} />
    </View>
  );
};

SelectRegionScreen.options = (): Options => ({
  topBar: {
    title: {
      text: I18n.t('regions'),
    },
  },
});

export default SelectRegionScreen;
