<template>
  <coach-filter @change-filter="setFilters"></coach-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link :to="'/register'" v-if="!isAlreadyRegistered">
          Register as Coach
        </base-button>
      </div>
      <ul v-if="shouldRenderItems">
        <li v-for="coach in filteredCoaches" :key="coach.id">
          <coach-item
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :hourlyRate="coach.hourlyRate"
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

import { CoachItem, CoachFilter } from '../../components/coaches';

export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      activeFilters: ['frontend', 'backend', 'career']
    };
  },
  computed: {
    hasCoaches() {
      return this.$store.getters[`${ns.coaches}/hasCoaches`];
    },
    hasAtLeastOneFilter() {
      return Object.values(this.activeFilters).length;
    },
    shouldRenderItems() {
      return this.hasCoaches && this.hasAtLeastOneFilter;
    },
    filteredCoaches() {
      const coaches = this.$store.getters[`${ns.coaches}/coaches`];
      return coaches.filter(({ areas }) => {
        return areas.some(area =>
          Object.values(this.activeFilters).includes(area)
        );
      });
    },
    isAlreadyRegistered() {
      return this.$store.getters[`${ns.coaches}/isCoach`];
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
