import ResourceView from './ResourceView.jsx'

export default function Activities() {
  return <ResourceView title="Activities" endpoint="activities" collectionName="activities" fields={[{ label: 'Activity', key: 'type' }, { label: 'Athlete', key: 'user' }, { label: 'Duration', key: 'durationMinutes' }, { label: 'Points', key: 'points' }]} />
}