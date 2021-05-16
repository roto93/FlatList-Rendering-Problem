import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MOCK = [
  { name: 'Andy' },
  { name: 'Beck' },
  { name: 'Carl' },
]

export default function App() {
  const [selectAll, setSelectAll] = useState(false);

  const RenderData = ({ item }) => {
    const [isSelected, setIsSelected] = useState(selectAll);
    return (
      <TouchableOpacity
        onPress={() => { setIsSelected(prev => !prev) }}
        style={[styles.item_btn, { backgroundColor: isSelected ? '#7A7A7A' : 'transparent' }]}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>

      <View>
        <TouchableOpacity
          onPress={() => { setSelectAll(prev => !prev) }}
          style={[styles.selectAll_btn, { backgroundColor: selectAll ? '#7A7A7A' : 'transparent' }]}>
          <Text>全選</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flatlist_container}>
        <FlatList
          data={MOCK}
          renderItem={(cases) => <RenderData item={cases.item} />}
          keyExtractor={(cases, index) => index.toString()}
          style={{ width: '100%', }}
        />
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectAll_btn: {
    borderWidth: 1,
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlist_container: {
    borderWidth: 1,
    width: 200,
    height: 150,
    alignItems: 'center',
    marginTop: 20,
  },
  item_btn: {
    height: 40,
    justifyContent:
      'center', alignItems: 'center',
  },
});
