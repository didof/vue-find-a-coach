<template>
  <section>
    <base-card>
      <template v-slot:header>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </template>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :title="area"
        :type="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
  <section>
    <base-card>
      <h2>Interested? Reach out now!</h2>
      <base-button link :to="contactLink">Contact</base-button>
    </base-card>
  </section>
  <router-view></router-view>
</template>

<script>
import { ns } from '../../store';

export default {
  props: ['id'],
  data() {
    return {
      coach: null
    };
  },
  created() {
    this.coach = this.$store.getters[`${ns.coaches}/coachById`](this.id);
  },
  computed: {
    fullName() {
      return `${this.coach.firstName} ${this.coach.lastName}`;
    },
    rate() {
      return this.coach.hourlyRate;
    },
    contactLink() {
      return { name: 'coach-contact', params: { id: this.id } };
    },
    areas() {
      return this.coach.areas;
    },
    description() {
      return this.coach.description;
    }
  }
};
</script>
