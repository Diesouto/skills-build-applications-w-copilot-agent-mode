import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function formatValue(value) {
  if (value === null || value === undefined || value === '') return 'Not available'
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value === 'object') return value.displayName || value.name || value._id || 'Available'
  return String(value)
}

function ResourceView({ title, apiEndpoint, collectionName, fields }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetchCollection(apiEndpoint, collectionName, controller.signal)
      .then((data) => { setItems(data); setStatus('ready') })
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
          setStatus('error')
        }
      })

    return () => controller.abort()
  }, [apiEndpoint, collectionName])

  return (
    <section aria-labelledby={`${collectionName}-heading`}>
      <div className="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-4">
        <div><p className="text-uppercase small text-success mb-1">OctoFit</p><h1 id={`${collectionName}-heading`} className="h2 mb-0">{title}</h1></div>
        {status === 'ready' && <span className="badge text-bg-light border">{items.length} records</span>}
      </div>
      {status === 'loading' && <p className="text-secondary">Loading {collectionName}...</p>}
      {status === 'error' && <div className="alert alert-warning mb-0">Unable to load {collectionName}: {error}</div>}
      {status === 'ready' && items.length === 0 && <div className="alert alert-light border">No {collectionName} found.</div>}
      {status === 'ready' && items.length > 0 && <div className="row g-3">{items.map((item, index) => <article className="col-12 col-md-6 col-xl-4" key={item._id || index}><div className="resource-card bg-white h-100 p-3"><dl className="mb-0">{fields.map(({ label, key }) => <div key={key}><dt>{label}</dt><dd>{formatValue(item[key])}</dd></div>)}</dl></div></article>)}</div>}
    </section>
  )
}

export default ResourceView