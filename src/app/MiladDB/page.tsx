"use client"
import React, { useState } from 'react'; // add this: useEffect

const MiladDB: React.FC = () => {
    const [username] = useState<string | null>(null);

    return (
        <section className="flex flex-col min-h-screen mt-28">
            <div className="border dark:border-white border-black rounded-xl pt-4 sm:pt-8 container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
                <div className="flex flex-col justify-start border dark:border-white border-black rounded-xl w-full mb-6 p-4">
                    <h1 className="text-3xl font-bold">My NoSQL DB</h1>
                    <h2 className="italic">Welcome: {username ? username : 'Guest'}</h2>
                </div>
                
            </div>
            
            
        </section>
    );
};

export default MiladDB;