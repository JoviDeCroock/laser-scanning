const ICON_PATHS = {
  'arrow-left': 'M14.5 5.5L8 12l6.5 6.5',
  'arrow-right': 'M9.5 5.5L16 12l-6.5 6.5',
  times: 'M7 7l10 10M17 7L7 17',
  'envelope-o': 'M4 7h16v10H4z M4 8l8 6 8-6',
  home: 'M4 10.5L12 4l8 6.5V20H4z M9 20v-5.5h6V20',
  mobile:
    'M9 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M11 5h2 M11.5 17h1',
}

const Icon = ({ name, className, title }) => {
  const path = ICON_PATHS[name]

  if (!path) {
    return null
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      {path.split(' M').map((segment, index) => (
        <path
          key={`${name}-${index}`}
          d={segment.startsWith('M') ? segment : `M${segment}`}
        />
      ))}
    </svg>
  )
}

export default Icon
