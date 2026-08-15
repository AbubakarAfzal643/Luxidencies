function LoadingSpinner({ label = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10" role="status">
      <span className="h-9 w-9 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900" />
      <p className="text-sm text-neutral-600">{label}</p>
    </div>
  )
}

export default LoadingSpinner
