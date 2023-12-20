"use client"; 
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useProModalStore } from "@/hooks/use-pro-modal";

interface FreeCounterProps {
    apiLimitCount: number;
};
      
export const FreeCounter = ({
    apiLimitCount = 0
}: FreeCounterProps) => {
    const proModal = useProModalStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted){
        return null;
    }

    return(
        <div className="px-3">     
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6 mt-10">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p>
                            {apiLimitCount} / {MAX_FREE_COUNTS} Free Generation  
                        </p>
                    </div>
                    <Progress 
                        className="h-3"
                        value={(apiLimitCount / MAX_FREE_COUNTS)*100}
                    />
                    <Button onClick={proModal.onOpen} className="w-full mt-4" variant="premium">  
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white" />   
                    </Button>
                </CardContent>
            </Card> 
        </div>
    )
}