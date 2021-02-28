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
      <h2>Interested? Reach out now!</h2>
      <base-button link :to="contactLink">Contact</base-button>
    </base-card>
  </section>
</template>

<script>
export default {
  computed: {
    fullName() {
      return 'a';
    },
    rate() {
      return 'a';
    },
    contactLink() {
      return 'a';
    }
  }
};
</script>
