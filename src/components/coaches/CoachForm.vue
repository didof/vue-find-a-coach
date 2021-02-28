<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="firstNameClass">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        v-model.trim="firstName.value"
        @blur="clearValidity('firstName')"
      />
      <p v-if="firstNameIsValid">First name should be provided</p>
    </div>
    <div class="form-control" :class="lastNameClass">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        v-model.trim="lastName.value"
        @blur="clearValidity('lastName')"
      />
      <p v-if="lastNameIsValid">Last name should be provided</p>
    </div>
    <div class="form-control" :class="descriptionClass">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        rows="5"
        v-model="description.value"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="descriptionIsValid">A description is required</p>
    </div>
    <div class="form-control" :class="rateClass">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        name="rate"
        v-model.number="rate.value"
        @blur="clearValidity('rate')"
      />
      <p v-if="rateIsValid">A rate/hour is requiered</p>
    </div>
    <div class="form-control" :class="areasClass">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          name="frontend"
          id="frontend"
          value="frontend"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="backend"
          id="backend"
          value="backend"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="career"
          id="career"
          value="career"
          v-model="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Development</label>
      </div>
      <p v-if="areasIsValid">At least one area have to be picked</p>
    </div>
    <p v-if="showErrorParagraph">
      Some fields received invalid input. Please, fix it.
    </p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
import { buildEventMap } from '../../utils';

const EVENTS_LIST = ['save-data'];
const EVENTS = buildEventMap(EVENTS_LIST);

export default {
  emits: EVENTS_LIST,
  data() {
    return this.resetData();
  },
  computed: {
    showErrorParagraph() {
      return !this.isFirstSubmit && !this.isValid;
    },
    firstNameIsValid() {
      return !this.isFirstSubmit && !this.firstName.isValid;
    },
    firstNameClass() {
      return { invalid: this.firstNameIsValid };
    },
    lastNameIsValid() {
      return !this.isFirstSubmit && !this.lastName.isValid;
    },
    lastNameClass() {
      return { invalid: this.lastNameIsValid };
    },
    descriptionIsValid() {
      return !this.isFirstSubmit && !this.description.isValid;
    },
    descriptionClass() {
      return { invalid: this.descriptionIsValid };
    },
    rateIsValid() {
      return !this.isFirstSubmit && !this.rate.isValid;
    },
    rateClass() {
      return { invalid: this.rateIsValid };
    },
    areasIsValid() {
      return !this.isFirstSubmit && !this.areas.isValid;
    },
    areasClass() {
      return { invalid: this.areasIsValid };
    }
  },
  methods: {
    resetData() {
      return {
        firstName: {
          value: '',
          isValid: false
        },
        lastName: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        },
        rate: {
          value: null,
          type: Number,
          isValid: false
        },
        areas: {
          value: [],
          type: Array,
          isValid: false
        },
        isFirstSubmit: true,
        isValid: false
      };
    },
    submitForm() {
      this.isFirstSubmit = false;

      this.validateForm();

      this.isValid = this.formIsValid();

      if (!this.isValid) return;

      const formData = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        description: this.description.value,
        rate: this.rate.value,
        areas: this.areas.value
      };
      this.$emit(EVENTS.SaveData, formData);
    },
    validateForm() {
      const data = Object.keys(this.$data);
      data.forEach(property => {
        const memoryRef = this.$data[property];
        const { value, type } = memoryRef;
        switch (type) {
          case String:
          default:
            if (value && value.length > 0) memoryRef.isValid = true;
            break;
          case Number:
            if (value && !isNaN(value * 1) && value > 0)
              memoryRef.isValid = true;
            break;
          case Boolean:
            if (value && typeof value === 'boolean') memoryRef.isValid = true;
            break;
          case Array:
            if (value && value.length > 0) memoryRef.isValid = true;
            break;
        }
      });
    },
    formIsValid() {
      const data = Object.keys(this.$data);
      const exclude = ['isValid', 'isFirstSubmit'];
      return data.every(property => {
        if (exclude.includes(property)) return true;
        return this.$data[property].isValid;
      });
    },
    clearValidity(fieldName) {
      this[fieldName].isValid = true;
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
