export type Level = 'green' | 'yellow' | 'orange' | 'black';

export function fileSizeLevel(sizeMB: number): Level {
  if (sizeMB > 300) return 'black';
  if (sizeMB > 150) return 'orange';
  if (sizeMB > 50) return 'yellow';
  return 'green';
}

export function totalSizeLevel(sizeMB: number, isMobile = false): Level {
  if (isMobile) {
    if (sizeMB > 180) return 'black';
    if (sizeMB > 120) return 'orange';
    if (sizeMB > 80) return 'yellow';
    return 'green';
  }
  if (sizeMB > 1800) return 'black';
  if (sizeMB > 1200) return 'orange';
  if (sizeMB > 800) return 'yellow';
  return 'green';
}

export function pageCountLevel(pages: number): Level {
  if (pages > 1000) return 'black';
  if (pages > 500) return 'orange';
  if (pages > 200) return 'yellow';
  return 'green';
}

export function levelTone(level: Level): 'ok' | 'warn' | 'danger' {
  switch (level) {
    case 'green':
      return 'ok';
    case 'yellow':
    case 'orange':
      return 'warn';
    case 'black':
      return 'danger';
  }
}
