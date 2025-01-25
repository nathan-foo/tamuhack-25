import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const LandingInfo = () => {
    return(
        <div>
            <div className = "flex justify-center">
            <Card className = "w-[50%] bg-black m-8">
                <CardHeader>
            <CardTitle className = "text-white">Compete in Real-Time</CardTitle>
            </CardHeader>
            <CardContent className = "text-white">
            Challenge another player in a fast-paced 1v1 competition. Showcase your problem-solving skills in a timed environment!
            </CardContent>
            </Card>
            
            <Card className = "w-[50%] bg-black m-8">
                <CardHeader>
            <CardTitle className = "text-white">Explain Your Thought Process</CardTitle>
            </CardHeader>
            <CardContent className = "text-white">
            After reading the question, you'll have a minute or two to explain your approach. The AI will evaluate your clarity and strategy.
            </CardContent>
            </Card>
            </div>
            
            <div className = "flex justify-center"> 
                <Card className = "w-[50%] bg-black m-8">
                <CardHeader>
            <CardTitle className = "text-white">Customizable Settings</CardTitle>
            </CardHeader>
            <CardContent className = "text-white">
            Choose topics, difficulty levels, the number of rounds, and time per question to create your ideal game.
            </CardContent>
            </Card>

            <Card className = "w-[50%] bg-black m-8">
                <CardHeader>
            <CardTitle className = "text-white">AI Scoring & Feedback</CardTitle>
            </CardHeader>
            <CardContent className = "text-white">
            Receive scores and constructive feedback from an AI designed to analyze your thought process and problem-solving abilities.
            </CardContent>
            </Card>
            </div>
            
        </div>
    
      )
    
        

}

export default LandingInfo