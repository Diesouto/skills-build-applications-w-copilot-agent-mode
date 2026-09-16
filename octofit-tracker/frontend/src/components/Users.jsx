import ResourceView from './ResourceView.jsx'

export default function Users() {
  const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
    : 'http://localhost:8000/api/users/'

  return <ResourceView title="Users" apiEndpoint={apiEndpoint} collectionName="users" fields={[{ label: 'Name', key: 'displayName' }, { label: 'Email', key: 'email' }, { label: 'Team', key: 'team' }, { label: 'Weekly points', key: 'weeklyPoints' }]} />
}