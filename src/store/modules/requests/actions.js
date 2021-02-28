import Request from './Request';

export default {
  add(context, payload) {
    const { coachId, email, message } = payload;
    const request = new Request(coachId, email, message);
    context.commit('add', request);
  }
};
