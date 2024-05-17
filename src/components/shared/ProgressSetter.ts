export const ProgressUpdate = (newProgressValue: number, action: string) => {
    if (action === 'get') {
      // Retrieve progress value from localStorage
      const storedProgress = localStorage.getItem('progress');
      return storedProgress ? parseInt(storedProgress, 10) : 0;
    } else {
      // Update progress value in localStorage
      const clampedValue = Math.max(1, Math.min(100, newProgressValue)); // Clamp between 1 and 100
      localStorage.setItem('progress', clampedValue.toString());
      return clampedValue;
    }
  };