<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
      </div>
      <ul v-if="hasCoaches">
        <li v-for="coach in filteredCoaches" :key="coach.id">
          <coach-item
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.rate"
            :areas="coach.areas"
          ></coach-item>
        </li>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import { ns } from '../../store';

import { CoachItem } from '../../components/coaches';

export default {
  components: {
    CoachItem
  },
  computed: {
    hasCoaches() {
      return this.$store.getters[`${ns.coaches}/hasCoaches`];
    },
    filteredCoaches() {
      return this.$store.getters[`${ns.coaches}/coaches`];
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
