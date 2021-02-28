<template>
  <section>
    <base-card>
      <h2>Find your coach</h2>
      <span class="filter-option">
        <input
          type="checkbox"
          name="frontend"
          id="frontend"
          :checked="filters.frontend"
          @change="setFilter"
        />
        <label for="frontend">Frontend</label>
      </span>
      <span class="filter-option">
        <input
          type="checkbox"
          name="backend"
          id="backend"
          :checked="filters.backend"
          @change="setFilter"
        />
        <label for="backend">Backend</label>
      </span>
      <span class="filter-option">
        <input
          type="checkbox"
          name="career"
          id="career"
          :checked="filters.career"
          @change="setFilter"
        />
        <label for="career">Career</label>
      </span>
    </base-card>
  </section>
</template>

<script>
import { initialFilters } from '../../config';
import { buildEventMap } from '../../utils';

const EVENTS_LIST = ['change-filter'];
const EVENTS = buildEventMap(EVENTS_LIST);

export default {
  emits: EVENTS_LIST,
  data() {
    return {
      filters: initialFilters
    };
  },
  computed: {
    test() {
      return this.filters;
    }
  },
  methods: {
    setFilter(event) {
      const { name } = event.target;
      const updatedFilters = { ...this.filters };
      updatedFilters[name] = !updatedFilters[name];

      this.filters = updatedFilters;

      const listFilters = Object.entries(updatedFilters).reduce(
        (actives, [filterName, isChecked]) => {
          isChecked && actives.push(filterName);
          return actives;
        },
        []
      );

      this.$emit(EVENTS.ChangeFilter, listFilters);
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
