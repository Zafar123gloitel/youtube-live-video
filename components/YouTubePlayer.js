import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const YouTubePlayer = ({videoId}) => {
  if (!videoId) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: videoUrl}}
        style={styles.webView}
        allowsFullscreenVideo
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default YouTubePlayer;
