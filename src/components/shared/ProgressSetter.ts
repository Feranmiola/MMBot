import { useState } from "react";
export const ProgressUpdate = (newProgressValue: number, action: string) => {
    const[progress, setProgress] = useState(15);

    if(action == 'get'){
        return progress;
    }else{
        setProgress(newProgressValue);
        return progress;
    }
}

