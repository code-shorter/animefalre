const seasonInp = document.getElementById("inp-season-no");
const episodeInp = document.getElementById("inp-episode-no");
const serverOneInp = document.getElementById("inp-server1-link");

document
  .getElementById("selected-anime")
  .addEventListener("change", async (e) => {
    const animeId = e.target.value;

    try {
      const response = await fetch(`/admindata?selected=${animeId}`);
      if (!response.ok) {
        throw new Error("Response error, Anime Id not found");
      }
      const data = await response.json();
      const seasonData = data.season;
      const episodeData = data.episodeNo;

      seasonInp.value = seasonData;
      episodeInp.value = episodeData;

      serverOneInp.addEventListener("input", (e) => {
        const episode = data.episode;
        const inp = e.target.value;

        episode.forEach((episode) => {
          const URLdata = episode.server1;
          if (inp === URLdata) {
            alert("URL is already in use");
          }
        });
      });
    } catch (error) {
      console.error("Fetching error: " + error);
      alert("Error fetching data: " + error.message);
    }
  });
