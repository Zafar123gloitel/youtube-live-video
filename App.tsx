// App.js
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {fetchLiveStream} from './services/YouTubeService';
import YouTubePlayer from './components/YouTubePlayer';

const API_KEY = 'AIzaSyAXeXtSBDMY3ftLJR8WwLYdgIZc2wCScMk';
const CHANNEL_ID = 'UCKX2jWjVX5Arh8md7cNgwyg';

export default function App() {
  const [videoId, setVideoId] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLiveStream = async () => {
      const stream = await fetchLiveStream(API_KEY, CHANNEL_ID);
      console.log(API_KEY);
      if (stream) {
        setVideoId(stream.id.videoId);
      } else {
        setError('No live stream currently available');
      }
    };

    getLiveStream();
  }, []);

  return (
    <View style={styles.container}>
      {videoId ? (
        <YouTubePlayer videoId={videoId} />
      ) : (
        <Text style={styles.errorText}>{error || 'Loading...'}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});
