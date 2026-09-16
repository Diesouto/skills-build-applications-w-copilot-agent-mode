import ResourceView from './ResourceView.jsx'

export default function Leaderboard() {
  return <ResourceView title="Leaderboard" endpoint="leaderboard" collectionName="leaderboard" fields={[{ label: 'Rank', key: 'rank' }, { label: 'Athlete', key: 'user' }, { label: 'Team', key: 'team' }, { label: 'Score', key: 'score' }]} />
}