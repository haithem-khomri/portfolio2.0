export const createPlaceholderDataURL = (text: string = 'Placeholder'): string => {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;

  // Get the context
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Fill background
  ctx.fillStyle = '#4A4A4A';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '16px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL();
}; 