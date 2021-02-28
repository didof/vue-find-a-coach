import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        },
        {
          id: 'c3',
          firstName: 'Francesco',
          lastName: 'Di Donato',
          areas: ['frontend'],
          description:
            'I am Francesco and I am Software Engineer Frontend at CHILI',
          hourlyRate: 30
        },
        {
          id: 'c4',
          firstName: 'Frank',
          lastName: "O'Gift",
          areas: ['backend'],
          description:
            'I am an alternative verions of Francesco and I am love microservices stuff',
          hourlyRate: 30
        },
        {
          id: 'c5',
          firstName: 'Papa',
          lastName: 'F',
          areas: ['career'],
          description: 'After all these years I could dispatch some tips...',
          hourlyRate: 100
        }
      ]
    };
  }
};
