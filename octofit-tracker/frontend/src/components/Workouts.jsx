import ResourceView from './ResourceView.jsx'

export default function Workouts() {
  return <ResourceView title="Workouts" endpoint="workouts" collectionName="workouts" fields={[{ label: 'Workout', key: 'title' }, { label: 'Focus', key: 'focus' }, { label: 'Duration', key: 'durationMinutes' }, { label: 'Difficulty', key: 'difficulty' }]} />
}