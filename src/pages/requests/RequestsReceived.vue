<template>
  <div>requests received</div>
  {{ requests }}
</template>

<script>
import { ns } from '../../store';

export default {
  data() {
    return {
      requests: this.$store.getters[`${ns.requests}/requests`]
    };
  }
};
</script>
