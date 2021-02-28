export default {
  add(state, payload) {
    console.log(payload);
    state.coaches.push(payload);
  }
};
