"use client"

import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ShortUniqueId from 'short-unique-id';

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [topic, setTopic] = useState("");
    const [rounds, setRounds] = useState("");

    // Display on screen after game is generated
    const [gameCode, setGameCode] = useState("");

    const { isLoaded, isSignedIn, user } = useUser();

    const generateGame = async () => {
        // Comment in once game is made
        // if (!title || !topic || !rounds) return;

        const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/games`;

        const userId = user?.id;
        const { randomUUID } = new ShortUniqueId({ dictionary: 'number', length: 7 });
        const gameId = randomUUID();

        toast.success('Loading...');

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    title: "Test game",
                    difficulty: "easy",
                    topic: "hashmaps",
                    rounds: "4",
                    gameId: gameId,
                    createdBy: userId,
                }),
            });

            if (!response.ok) {
                toast.error('Something went wrong.');
                throw new Error(`Response status: ${response.status}`);
            } else {
                toast.success('Game created!');
                setGameCode(gameId);
            }
        } catch (error) {
            toast.error('Something went wrong.');
            throw new Error(`Failed to create game: ${error}`);
        }

        return new Response('Game Created', { status: 201 });
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            {/* Need to fill out the title, difficulty, topic (like hashmap or array or wtv leetcode topics there are) and # of rounds */}
            {/* Then show game code on screen so player can copy it and share */}
            <button onClick={generateGame}>Generate</button>
        </div>
    )
}

export default CreatePage