import ResourceView from './ResourceView.jsx'

export default function Users() {
  return <ResourceView title="Users" endpoint="users" collectionName="users" fields={[{ label: 'Name', key: 'displayName' }, { label: 'Email', key: 'email' }, { label: 'Team', key: 'team' }, { label: 'Weekly points', key: 'weeklyPoints' }]} />
}