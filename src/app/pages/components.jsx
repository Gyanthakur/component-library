import Head from 'next/head';
import Navbar from '@/src/components/Navbar/Navbar';
import Card from '@/src/components/Card/Card';
import Button from '@/src/components/Button/Button';
import SuccessButton from '@/src/components/buttons/SuccessButton';
import ThemeToggleButton from '@/src/components/buttons/ThemeToggleButton';
import useToggle from '@/src/hooks/useToggle';
import Alert from '@/src/components/Notification/Alert';

export default function ComponentsPage() {
  const { on, toggle } = useToggle();
  const [isDark, setIsDark] = React.useState(false);
  const handleThemeToggle = () => setIsDark(prev => !prev);

  return (
    <>
      <Head>
        <title>Components – Open UI</title>
      </Head>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Components</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Button</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <SuccessButton>Subscribe</SuccessButton>
            <ThemeToggleButton onClick={handleThemeToggle} isDark={isDark} />
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Hook: useToggle</h2>
          <Card title="Toggle Demo" footer={<small>State: {String(on)}</small>}>
            <Button onClick={toggle}>{on ? 'ON' : 'OFF'}</Button>
          </Card>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Alerts</h2>
          <Alert type="success">Item added successfully ✅</Alert>
          <Alert type="warning">Low storage space ⚠️</Alert>
          <Alert type="error">Something went wrong ❌</Alert>
          <Alert type="info">New updates available ℹ️</Alert>
        </section>
      </main>
    </>
  );
}
