# Badge Component

A flexible badge component with multiple variants, sizes, and customization options.

## Props

### Badge

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `node` | `required` | Content to display inside the badge |
| variant | `string` | `'neutral'` | Style variant (`'primary'`, `'success'`, `'warning'`, `'danger'`, `'neutral'`) |
| size | `string` | `'md'` | Size variant (`'sm'`, `'md'`, `'lg'`) |
| pill | `boolean` | `false` | Whether to render as a pill (fully rounded) |
| onClose | `function` | `undefined` | Callback function when close button is clicked |
| className | `string` | `''` | Additional CSS classes to apply |
| icon | `node` | `undefined` | Icon to display before the content |
| count | `number` | `undefined` | Number to display as a counter badge |

### Chip

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `node` | `required` | Content to display inside the chip |
| variant | `string` | `'neutral'` | Style variant (`'primary'`, `'success'`, `'warning'`, `'danger'`, `'neutral'`) |
| icon | `node` | `undefined` | Icon to display before the content |
| onRemove | `function` | `undefined` | Callback function when remove button is clicked |
| className | `string` | `''` | Additional CSS classes to apply |

## Usage

```jsx
import { Badge, Chip } from './Badge';

// Basic badge
<Badge>Default</Badge>

// Badge with variant
<Badge variant="success">Success</Badge>

// Badge with icon
<Badge icon={<StarIcon />}>Featured</Badge>

// Badge with count
<Badge count={5}>Notifications</Badge>

// Closable badge
<Badge onClose={() => console.log('Closed!')}>Closable</Badge>

// Pill badge
<Badge pill>Round</Badge>

// Chip component
<Chip onRemove={() => console.log('Removed!')}>Tag</Chip>
```