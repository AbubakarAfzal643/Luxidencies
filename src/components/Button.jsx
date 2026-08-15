import clsx from 'clsx'

const variantClasses = {
  primary:
    'bg-neutral-950 text-white hover:bg-amber-500 hover:text-neutral-950 focus-visible:ring-neutral-950 cursor-pointer',
  ghost:
    'border border-neutral-300 bg-white text-neutral-900 hover:bg-amber-500 hover:text-white focus-visible:ring-neutral-500 cursor-pointer',
  accent:
    'bg-amber-500 text-neutral-950 hover:bg-black hover:text-white focus-visible:ring-amber-500 cursor-pointer',
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
