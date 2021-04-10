<template>
  <div
    class="absolute top-0 text-white right-0 z-20 drop-shadow cursor-pointer select-none"
  >
    <div class="container flex px-4 pt-1 cursor-pointer">
      <div class="flex-1 text-3xl my-auto" :data-icon="icon"></div>
      <div class="flex-1 text-3xl my-auto">{{ temp }}</div>
      <div class="flex-1 text-base mt-1">º</div>
    </div>
    <div class="text-sm text-center opacity-80">{{ location }}</div>
  </div>
</template>
<script>
import axios from "axios";
import getIcon from "../utils/icons";

export default {
  data() {
    return {
      temp: 24,
      location: "",
      icon: "P",
    };
  },
  mounted() {
    const fourHoursIThink = 14400000;
    let lastSaved = localStorage.getItem("last");
    if (!lastSaved) this.getWeather();
    else {
      lastSaved = JSON.parse(lastSaved);
      this.temp = lastSaved.temp;
      this.location = lastSaved.location;
      this.icon = getIcon(lastSaved.weather.id);
      if (lastSaved.date + fourHoursIThink < Number(new Date())) {
        this.getWeather();
      }
    }
  },
  methods: {
    async getWeather() {
      const geo = navigator.geolocation;
      geo.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const options = {
            method: "GET",
            url: "https://community-open-weather-map.p.rapidapi.com/weather",
            params: {
              lat,
              lon,
              lang: "null",
              units: "metric",
              mode: "xml, html",
            },
            headers: {
              "x-rapidapi-key":
                "770c78598bmsh7883bb3a9335a6dp1e6d80jsnb13906c14af3",
              "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            },
          };

          axios
            .request(options)
            .then((response) => {
              console.log(response);
              const { name, main } = response.data;
              const { feels_like } = main;
              this.temp = Math.floor(feels_like);
              this.location = name;
              localStorage.setItem(
                "last",
                JSON.stringify({
                  location: name,
                  temp: Math.floor(feels_like),
                  date: Number(new Date()),
                  lat,
                  lon,
                  weather: response.data.weather[0],
                })
              );
            })
            .catch((error) => {
              console.error(error);
            });
        },
        (err) => {
          alert("Please allow geolocation");
        }
      );
    },
  },
};
</script>
