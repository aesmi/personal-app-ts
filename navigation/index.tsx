/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Weather from '../screens/Weather';
import ToDo from '../screens/ToDo';
import Alarm from '../screens/Alarm';
import CryptoPrices from '../screens/CryptoPrices';
import Feeds from '../screens/Feeds';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    // this provides our initial tab that is selected when we open our app
    <BottomTab.Navigator
      initialRouteName="Weather"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Weather"
        component={Weather}
        options={({ navigation }: RootTabScreenProps<'Weather'>) => ({
          title: 'Weather',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="weather-cloudy" size={24} color="white" />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="ToDo"
        component={ToDo}
        options={{
          title: 'To Do List',
          tabBarIcon: ({ color }) => <FontAwesome name="list-ul" size={24} color="white" />
        }}
      />
       <BottomTab.Screen
        name="Alarm"
        component={Alarm}
        options={{
          title: 'Alarms',
          tabBarIcon: ({ color }) => <Ionicons name="alarm-outline" size={24} color="white" />,
        }}
      />
      <BottomTab.Screen
        name="Crypto"
        component={CryptoPrices}
        options={{
          title: 'Crypto Prices',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bitcoin" size={24} color="white" />,
        }}
      />
       <BottomTab.Screen
        name="Feeds"
        component={Feeds}
        options={{
          title: 'Feeds',
          tabBarIcon: ({ color }) => <FontAwesome name="reddit-alien" size={24} color="white" />
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
