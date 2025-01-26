import React from 'react'
import { Progress } from "@/components/ui/progress"
const WaitingScreen = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const duration = 8000; // 5 seconds
    const stepTime = 50; // Time per step, in milliseconds
    const steps = duration / stepTime; // Number of steps to take in 5 seconds
    let currentStep = 0;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (currentStep >= steps) {
          clearInterval(timer);
          return 100;
        }
        currentStep++;
        return Math.round((currentStep / steps) * 90);
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
      <div className="w-[60%] flex flex-col items-center">
        <Progress value={progress} className="w-full [&>div]:bg-gradient-to-r [&>div]:from-purple-400 [&>div]:via-purple-500 [&>div]:to-indigo-500 [&>div]:rounded-l-full" />
        <span className="text-sm mt-2">{progress}%</span>
      </div>
      <div className="mt-4">
        <p>Loading feedback ...</p>
      </div>
    </div>
  )
}
export default WaitingScreen;