function EmptyState({ title, description, action }) {
  return (
    <div className="rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
      <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  )
}

export default EmptyState
