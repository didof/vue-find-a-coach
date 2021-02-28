import Coach from './Coach';

export default {
  add(context, data) {
    const { firstName, lastName, description, rate, areas } = data;
    const coach = new Coach(firstName, lastName, areas, description, rate);

    context.commit('add', coach);
  }
};
