import { useStore } from '../store'

export default function BadPeople() {
  const { state } = useStore().people

  return (
    <>
      {state.map((p) => {
        return <div key={p.name}>{p.name} bad version</div>
      })}
    </>
  )
}
