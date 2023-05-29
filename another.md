  "scripts": {
    "start": "react-scripts start",
    "dev": "concurrently \"npm run server\" \"npm run start\"",
    "server": "json-server -w server/db.json -p 3001",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },