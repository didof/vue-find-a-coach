export default {
  add(state, payload) {
    console.log(payload);
    state.requests.push(payload);
  }
};
