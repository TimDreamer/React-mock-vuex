const people = {
  state: [
    {
      name: 'Alan',
      job: 'Designer',
      habits: ['jogging'],
    },
    {
      name: 'Eric',
      job: 'Chef',
      habits: ['Tennis'],
    },
    {
      name: 'Jenny',
      job: 'Teacher',
      habits: ['Dancing'],
    },
  ],
  reducer(people, { payload, type }) {
    switch (type) {
      case REVERSE:
        return people.slice().reverse()
      case ADD_NEW_PERSON:
        return [...people, payload]
      default:
        throw new Error('People reducer fails.')
    }
  },
}

export const REVERSE = 'REVERSE'
export const ADD_NEW_PERSON = 'ADD_NEW_PERSON'

export default people
