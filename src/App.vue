<template>
  <div id="app">
    <div class="z-10">
      <Weather />
    </div>
    <div class="z-10 absolute h-screen w-screen">
      <div
        class="text-white inset-0 relative text-center top-1/3 cursor-default select-none"
      >
        <h1 class="drop-shadow text-9xl font-normal">
          {{ dateToShow }}
        </h1>
        <h1 class="drop-shadow-2 text-4xl mt-6">
          Master yourself, master the enemy
        </h1>
        <h1 class="drop-shadow-2 text-xl font-light opacity-80 mt-48">
          Master yourself, master the enemy
        </h1>
      </div>
    </div>
    <div
      class="z-0 h-screen bg-cover bg-center"
      :style="`background-image: url('${url}');`"
    ></div>
  </div>
</template>

<script>
import Weather from "./components/Weather";
export default {
  components: {
    Weather,
  },
  name: "App",
  data() {
    return {
      url: "https://i.redd.it/mbag0ynd8dr61.jpg",
      dateToShow: "22:22",
    };
  },
};
</script>

<style>
[data-icon]:before {
  font-family: "MeteoconsRegular";
  content: attr(data-icon);
}
.drop-shadow {
  filter: drop-shadow(0 0 0.75rem black);
}
.drop-shadow-2 {
  filter: drop-shadow(0 0 0.5rem black);
}
</style>
