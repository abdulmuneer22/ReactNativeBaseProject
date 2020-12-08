import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationFunctionComponent, Options } from 'react-native-navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { I18n } from '~modules/localization';
import { useTheme } from '~theme';

import { SelectRegionMenu } from '../../components';
import themedStyles from './styles';

const SelectRegionScreen: NavigationFunctionComponent = () => {
  const [styles] = useTheme(themedStyles);
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <StatusBar barStyle={'light-content'} />

      <SelectRegionMenu />
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