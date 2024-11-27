import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const App = () => {
  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-black text-xl `}>App Screen</Text>
    </View>
  );
};

export default App;
