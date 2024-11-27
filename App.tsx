import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import LiveStreamScreen from './components/live';

const App = () => {
  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-black text-xl text-center mt-10 font-bold `}>
        App Screen
      </Text>
      <LiveStreamScreen />
    </View>
  );
};

export default App;
