import * as React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

// dependencies
// import { createAlarm, editAlarm, activateAlarmById, cancelAlarmById } from 'react-native-simple-alarm';
import moment from 'moment';
// https://github.com/liplylie/react-native-simple-alarm
export default function Alarm() {
  const [alarms, setAlarms] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alarms</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
        {alarms.map((alarm,idx)=>{
          <AlarmItem key={idx}/>
        })}
      </View>
      <EditScreenInfo path="/screens/Alarm.tsx" />
    </View>
  );
}

const AlarmItem = () => {
  return(<View>

  </View>)
}

const displayAlarms = () => {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  alarmContainer: {
    flex: 1,
    flexDirection:'column'
  }
});
