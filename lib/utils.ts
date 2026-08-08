import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import confetti from 'canvas-confetti';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloadFile(content: string, filename: string, mimeType = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

export function triggerConfetti() {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38BDF8', '#8B5CF6', '#22C55E', '#EAB308'],
    });
  } catch {
    // Graceful fallback if canvas is unsupported
  }
}
