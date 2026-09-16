import ResourceView from './ResourceView.jsx'

export default function Activities() {
  const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
    : 'http://localhost:8000/api/activities/'

  return <ResourceView title="Activities" apiEndpoint={apiEndpoint} collectionName="activities" fields={[{ label: 'Activity', key: 'type' }, { label: 'Athlete', key: 'user' }, { label: 'Duration', key: 'durationMinutes' }, { label: 'Points', key: 'points' }]} />
}