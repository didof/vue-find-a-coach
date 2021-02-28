export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && Boolean(state.coaches.length);
  },
  coachById: state => id => state.coaches.find(coach => coach.id === id)
};
