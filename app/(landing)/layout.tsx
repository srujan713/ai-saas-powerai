import { ClerkProvider } from "@clerk/nextjs";

const LandingLayout =  ({
    children
}: {
    children: React.ReactNode;
}) => {
    return(
        <ClerkProvider>
            <main className="h-full bg-[#111827] overflow-auto">
                <div className="mx-auto max-w-screen-xl h-full w-full">
                    {children}  
                </div>
            </main>  
        </ClerkProvider> 
    ); 
}

export default LandingLayout; 