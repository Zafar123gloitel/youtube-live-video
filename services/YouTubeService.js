export const fetchLiveStream = async (apiKey, channelId) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      return data.items[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching live stream: ', error);
    return null;
  }
};
