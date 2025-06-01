'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeSwitcherButton() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null to avoid hydration mismatch
    // and to prevent layout shift, we can render a disabled button
    // or a button with a generic icon/text.
    // For simplicity, returning null for now, but a styled placeholder is better.
    return <Button variant="ghost" size="icon" disabled className="h-9 w-9" aria-label="Loading theme preference"/>;
  }

  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  const isDarkMode = effectiveTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  const ariaLabel = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      className="h-9 w-9" // Ensure consistent size with placeholder if any
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5" /> // Sun icon to switch to light
      ) : (
        <MoonIcon className="h-5 w-5" /> // Moon icon to switch to dark
      )}
    </Button>
  );
}
