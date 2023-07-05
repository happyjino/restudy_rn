// ch02_3

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import * as D from './src/data'
import ClassComponent from './src/screens/ClassComponent';

const person = D.createRandomPerson()
export default function App() {
  return (
    <SafeAreaView>
      <ClassComponent />
    </SafeAreaView>
  )
}
