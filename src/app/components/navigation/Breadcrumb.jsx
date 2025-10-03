export default function Breadcrumb({ items = [], separator = "/" }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <span className="mx-2 text-theme-muted">{separator}</span>
              )}
              {isLast ? (
                <span className="text-sm font-medium text-theme-secondary" aria-current="page">
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-medium text-theme-primary hover:text-theme-primary transition-colors duration-200"
                >
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}