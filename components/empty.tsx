import Image from "next/image";

interface EmptyProps {
    label: string;
}

export const Empty = ({
    label
}: EmptyProps) => {
    return(
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-72 w-72">
                <Image 
                    alt="emtpy"
                    fill   
                    src="/online-education.png"    
                />
            </div>
            <p className="text-muted-foreround text-sm text-center">
                {label}
            </p>
        </div>   
    );
}