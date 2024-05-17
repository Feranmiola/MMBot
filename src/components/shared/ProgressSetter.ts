import { useState } from "react";
export const ProgressUpdate = (newProgressValue: number) => {
    const[progress, setProgress] = useState(0);

    setProgress(newProgressValue);
    return progress;
}
