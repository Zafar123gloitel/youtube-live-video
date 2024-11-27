import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const LiveStreamScreen = () => {
  const videoId = 'YOUR_VIDEO_ID'; // Replace with the YouTube live video ID.
  const liveStreamURL = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: liveStreamURL}}
        style={styles.webview}
        javaScriptEnabled={true}
        allowsFullscreenVideo={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
  },
});

export default LiveStreamScreen;
