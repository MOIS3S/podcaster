async function getListPodcast() {
  const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
  const response = await res.json();
  return response
}

async function getDetailPodcast({ podcastId }) {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${podcastId}`);
  const response = await res.json();
  return response
}

export {
  getListPodcast,
  getDetailPodcast
};
