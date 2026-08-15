import clsx from 'clsx'

const variantClasses = {
  primary:
    'border border-neutral-950 bg-neutral-950 text-white shadow-sm shadow-neutral-900/10 transition-colors duration-200 hover:bg-amber-500 hover:text-neutral-950 hover:border-amber-500 focus-visible:ring-neutral-950 cursor-pointer',
  ghost:
    'border border-neutral-300 bg-white text-neutral-900 shadow-sm transition-colors duration-200 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 focus-visible:ring-neutral-500 cursor-pointer',
  accent:
    'border border-amber-500 bg-amber-500 text-neutral-950 shadow-sm shadow-amber-500/20 transition-colors duration-200 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 focus-visible:ring-amber-500 cursor-pointer',
}

function Button({ children, className, variant = 'primary', ...props }) {
  return (
    <button
      className={clsx(
        'nav-cta-button inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
