'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Star, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    const router = useRouter();
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = Array.from({ length: 50 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 1,
            }));
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                />
            ))}

            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10"
            >
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Looks like you’ve taken a wrong turn. <br/>
                Don’t worry, it happens to the best of us!</p>
                <div className="flex justify-center space-x-4 mb-8">
                    {[1, 2, 3,4,5].map((_, index) => (
                        <motion.div
                            key={index}
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.2,
                            }}
                        >
                            <Star className="text-yellow-400" size={24} />
                        </motion.div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button
                        onClick={() => router.push('/')}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center"
                    >
                        <ArrowLeft className="mr-2" size={20} />
                        Back to Me
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;