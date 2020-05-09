import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from '../actions';

export default function HomeScreen() {
  const settings = useSelector(state => state.settings);
  const sectionTypes = ['Off', 'From People I Follow', 'From Everyone'];

  return (
    <ScrollView style={styles.scrollview}>
      <StatusBar barStyle = "light-content" backgroundColor = "#000" />

      {settings.map((item, i) => {
        return (
          <View key={i}>
            <Text style={styles.header}>{item.type}</Text>

            {sectionTypes.map((sectionType, j) => (
              <Section
                key={j}
                option={sectionType}
                active={item.active}
                index={i}
                pos={j}
              />
            ))}

            <Text style={styles.example}>{item.sample}</Text>
            <View style={styles.hr} />
          </View>
        )
      })}
    </ScrollView>
  );
}

const Section = ({ option, active, pos, index }) => {
  const dispatch = useDispatch();
  let settings = useSelector(state => state.settings);

  function update(pos, index) {
    settings[index].active = pos;
    dispatch(updateSettings(settings));
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{option}</Text>

      {active === pos ? (
        <TouchableOpacity style={styles.radioFill}>
          <View style={styles.radioFillCenter}></View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.radio} onPress={() => update(pos, index) } />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 18,
    paddingVertical: 20
  },
  radio: {
    borderColor: 'grey',
    borderWidth: 2,
    width: 23,
    height: 23,
    borderRadius: 50
  },
  radioFill: {
    backgroundColor: '#0088ff',
    width: 23,
    height: 23,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioFillCenter: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 50
  },
  header: {
    color: '#fff',
    fontSize: 18,
    paddingVertical: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16
  },
  example: {
    color: '#656565',
    paddingVertical: 5
  },
  hr: {
    backgroundColor: '#2d2d2d',
    height: 1,
    flex: 1,
    marginVertical: 10
  }
});
