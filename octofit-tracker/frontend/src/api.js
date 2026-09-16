const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function getCollection(payload, collectionName) {
  if (Array.isArray(payload)) return payload
  if (!payload || typeof payload !== 'object') return []

  const candidates = [payload[collectionName], payload.items, payload.data, payload.results]
  return candidates.find(Array.isArray) ?? []
}

export async function fetchCollection(endpoint, collectionName, signal) {
  const response = await fetch(endpoint, { signal })
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
  return getCollection(await response.json(), collectionName)
}