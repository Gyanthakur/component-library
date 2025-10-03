export default function Pagination({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5
}) {
  const getVisiblePages = () => {
    const delta = Math.floor(maxVisiblePages / 2)
    const start = Math.max(1, currentPage - delta)
    const end = Math.min(totalPages, start + maxVisiblePages - 1)
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page)
    }
  }

  const visiblePages = getVisiblePages()

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center space-x-1">
        {/* First Page */}
        {showFirstLast && currentPage > 1 && (
          <button
            onClick={() => handlePageChange(1)}
            className="px-3 py-2 text-sm font-medium text-theme-secondary bg-theme-surface border border-theme rounded-md hover:bg-theme-surface-hover transition-all duration-200"
          >
            First
          </button>
        )}

        {/* Previous Page */}
        {showPrevNext && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm font-medium text-theme-secondary bg-theme-surface border border-theme rounded-md hover:bg-theme-surface-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            Previous
          </button>
        )}

        {/* Page Numbers */}
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`
              px-3 py-2 text-sm font-medium border rounded-md transition-all duration-200
              ${page === currentPage
                ? 'text-white bg-theme-primary border-theme-primary shadow-theme-sm'
                : 'text-theme-secondary bg-theme-surface border-theme hover:bg-theme-surface-hover'
              }
            `}
          >
            {page}
          </button>
        ))}

        {/* Next Page */}
        {showPrevNext && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm font-medium text-theme-secondary bg-theme-surface border border-theme rounded-md hover:bg-theme-surface-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            Next
          </button>
        )}

        {/* Last Page */}
        {showFirstLast && currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(totalPages)}
            className="px-3 py-2 text-sm font-medium text-theme-secondary bg-theme-surface border border-theme rounded-md hover:bg-theme-surface-hover transition-all duration-200"
          >
            Last
          </button>
        )}
      </div>

      {/* Page Info */}
      <div className="text-sm text-theme-primary">
        Page {currentPage} of {totalPages}
      </div>
    </nav>
  )
}