import ResourceView from './ResourceView.jsx'

export default function Leaderboard() {
  const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
    : 'http://localhost:8000/api/leaderboard/'

  return <ResourceView title="Leaderboard" apiEndpoint={apiEndpoint} collectionName="leaderboard" fields={[{ label: 'Rank', key: 'rank' }, { label: 'Athlete', key: 'user' }, { label: 'Team', key: 'team' }, { label: 'Score', key: 'score' }]} />
}