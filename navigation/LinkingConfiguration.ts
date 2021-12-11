/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from '@react-navigation/native';
import * as Linking from 'expo-linking';

import {RootStackParamList} from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Weather: {
            screens: {
              Weather: 'Weather',
            },
          },
          ToDo: {
            screens: {
              ToDo: 'To Do List',
            },
          },
          Alarm: {
            screens: {
              Alarm: 'Alarm',
            },
          },
          Crypto: {
            screens: {
              Crypto: 'Crypto',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
