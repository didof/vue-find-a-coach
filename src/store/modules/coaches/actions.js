import Coach from './Coach';

export default {
  add(context, data) {
    const { firstName, lastName, description, rate, areas } = data;
    const { userId } = context.rootGetters;
    const coach = new Coach(
      userId,
      firstName,
      lastName,
      description,
      rate,
      areas
    );

    context.commit('add', coach);
  }
};
