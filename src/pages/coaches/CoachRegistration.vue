<template>
  <section>
    <base-card>
      <h2>
        Register as a coach
      </h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import { ns } from '../../store';
import { CoachForm } from '../../components';
import BaseCard from '../../components/ui/BaseCard.vue';

export default {
  components: {
    CoachForm,
    BaseCard
  },
  methods: {
    saveData(formData) {
      this.$store.dispatch(`${ns.coaches}/add`, formData);
      this.$router.replace({ name: 'coaches-list' });
    }
  }
};
</script>
