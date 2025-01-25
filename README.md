# TAMUhack 2025

## Project Setup
Clone the repository onto your device and open the repository folder.

To start the Next.js app:
1. From the root directory, run `cd client-next` and `npm install` in the terminal.
2. Use `npm run dev` to start the project on `localhost:3000`.

To start the Express server:
1. From the root directory, run `cd backend` and `npm install` in the terminal.
2. Use `node server.js` or `nodemon start` to start the server on `localhost:8000`.

Note: You will need to have two terminals open to host the backend and frontend at the same time!

## NPM Packages

The following npm packages should already be included in the package.json files, so you can simply run `npm i`.

Before pushing to GitHub, create a `.gitignore` file in the backend folder so you don't push the node modules.

In `client-next`:
```
npx create-next-app@latest // Use React ^18 instead of 19 because of dependencies
npx shadcn@latest init
npm i @clerk/nextjs
npm i svix
npm i @google/generative-ai
npm i socket.io-client
npm i mongodb
npm i mongoose
npm i react-icons
```

In `backend`:
```
npm i express
npm i socket.io
npm i cors
```

## Environment Variables
Copy these variables into a `.env.local` file in the `client-next` directory.

**Do NOT paste these keys in your code. Do NOT push this file to the repo!!!**

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000

MONGODB_URI=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
SIGNING_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_GEMINI_API_KEY=

// TODO: Add AWS keys
```

## Tech Stack
- Next.js: https://nextjs.org/docs
- React/Tailwind: https://tailwindcss.com/docs/
- Express.js: https://expressjs.com/
- Socket.io: https://socket.io/docs/v4/
- MongoDB: https://www.mongodb.com/products/platform/atlas-database
- Gemini API: https://ai.google.dev/
- AWS Transcribe: https://aws.amazon.com/blogs/machine-learning/transcribe-speech-to-text-in-real-time-using-amazon-transcribe-with-websocket/
- Clerk Authentication: https://clerk.com/docs
- Livekit.io: https://docs.livekit.io/home/

## General Approach

Design a working play page, where:
1. A signed in user has the option to join or create a game with custom topics, time limit, number of questions, and difficulty (dropdown menu for options preferably).
2. When a user creates a game, Gemini API will generate questions and return a json object that we can use.
3. The output from Gemini is stored in a database via API requests.
4. The user is given a game code to invite a friend, which will also be stored in the database.
5. When two players join a game, no more players can be added.
6. On game start, users will take turns answering questions fetched from the database. Users will submit answers by pressing an audio record button (using AWS Transcribe) or by typing in a text area.
7. After each question, the user input is converted to text and sent to Gemini API for scoring. The scores will be based on time complexity, space complexity, correct usage of data structures and algorithms, and clarity/thoroughness of the approach, and feedback will be provided for the user's response.
8. Integrate Livekit.io so that users can see their opponent during a game. Mute players while it is not their turn and allow them to spectate their opponent as they respond. (Or have both players complete each round at the same time.)
9. If we have time left, add sound effects and basic animations to the game.

Design a dashboard page, where:
1. Users can view their game history, win statistics, and areas for improvement (time/space complexity, DSA, response effectiveness). Data for game history and scores will be stored to MongoDB after each game.

Design a landing page, make app flowchart and video presentation, prepare pitch, etc.
