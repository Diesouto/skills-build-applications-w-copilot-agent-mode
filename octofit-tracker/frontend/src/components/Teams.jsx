import ResourceView from './ResourceView.jsx'

export default function Teams() {
  return <ResourceView title="Teams" endpoint="teams" collectionName="teams" fields={[{ label: 'Team', key: 'name' }, { label: 'Description', key: 'description' }, { label: 'Members', key: 'members' }, { label: 'Total points', key: 'totalPoints' }]} />
}