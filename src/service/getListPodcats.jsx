async function getListPodcast() {
  const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
  const response = await res.json();
  return response
}

export default getListPodcast
