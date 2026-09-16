import ResourceView from './ResourceView.jsx'

export default function Teams() {
  const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
    : 'http://localhost:8000/api/teams/'

  return <ResourceView title="Teams" apiEndpoint={apiEndpoint} collectionName="teams" fields={[{ label: 'Team', key: 'name' }, { label: 'Description', key: 'description' }, { label: 'Members', key: 'members' }, { label: 'Total points', key: 'totalPoints' }]} />
}