import { useStore } from '../store'
import { ADD_NEW_PERSON, REVERSE } from '../store/modules/people'

export default function People() {
  const { state, dispatch } = useStore().people

  return (
    <>
      {state.map((p) => {
        return (
          <div key={p.name}>
            {p.name} {p.job} {p.habits}
          </div>
        )
      })}
      {state.every((p) => p.name !== 'Herman') && (
        <button
          onClick={() =>
            dispatch[ADD_NEW_PERSON]({
              name: 'Herman',
              job: 'none',
              habits: [],
            })
          }
        >
          Add new person
        </button>
      )}
      <button onClick={dispatch[REVERSE]}>Reverse</button>
    </>
  )
}
