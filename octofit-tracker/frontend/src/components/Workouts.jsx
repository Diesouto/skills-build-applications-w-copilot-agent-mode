import ResourceView from './ResourceView.jsx'

export default function Workouts() {
  const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
    : 'http://localhost:8000/api/workouts/'

  return <ResourceView title="Workouts" apiEndpoint={apiEndpoint} collectionName="workouts" fields={[{ label: 'Workout', key: 'title' }, { label: 'Focus', key: 'focus' }, { label: 'Duration', key: 'durationMinutes' }, { label: 'Difficulty', key: 'difficulty' }]} />
}