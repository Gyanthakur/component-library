---
name: PropTypes Enhancement
about: Add PropTypes validation to components for better type checking
title: 'Enhancement: Add PropTypes validation to components'
labels: 'enhancement', 'good first issue', 'hacktoberfest'
assignees: ''

---

**Is your feature request related to a problem? Please describe.**
Currently, many components in the library lack proper PropTypes validation, which can lead to runtime errors and make it harder for developers to understand the expected props for each component.

**Describe the solution you'd like**
Add PropTypes validation and defaultProps to all components, starting with the Badge component. This will:
- Improve code reliability
- Provide better developer experience
- Help catch potential bugs during development
- Follow React best practices

**Describe alternatives you've considered**
- Using TypeScript instead of PropTypes (would require larger refactor)
- Keeping components without prop validation (current state)

**Additional context**
This is a good first issue for Hacktoberfest contributors and will improve the overall quality of the component library.