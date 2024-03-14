# botbattlr-Hellen-cherotich
BotBattlr React Application
Welcome to BotBattlr! This project is a React application that allows you to manage a collection of bots, enlist them into your army, and engage in thrilling battles.

Setup
To get started with BotBattlr, follow these instructions:

Create a GitHub Repository: Create a new PRIVATE repository in the Moringa-SDF-PTO5 organization. Name your repository in the format botbattlr-firstname-lastname. For example, botbattlr-Hellen-cherotich.

Download Server Data: Download the server db.json file from here. Ensure you have json-server installed on your machine.

Start JSON Server: Run the following command in your terminal to start the backend server:

bash
Copy code
$ json-server --watch db.json
Test Your Server: Visit the following route in your browser to verify that the server is running correctly: http://localhost:3000/bots

Deploy JSON Server: Follow this guide to deploy your JSON server.

Core Deliverables
In BotBattlr, you should be able to:

See profiles of all bots rendered in BotCollection.
Add an individual bot to your army by clicking on it. The selected bot should render in the YourBotArmy component. Each bot can only be enlisted once and will not disappear from the BotCollection.
Release a bot from your army by clicking on it. The bot will disappear from the YourBotArmy component.
Discharge a bot from service forever by clicking the red "x" button. This action will delete the bot both from the backend and from the YourBotArmy on the frontend.
Endpoints for Core Deliverables
GET /bots: Retrieve a list of available bots.
DELETE /bots/:id: Delete a bot by its ID.
Advanced Deliverables
While not required, these advanced features can further enhance your BotBattlr experience:

Choose whether to enlist a bot into your army or view its data. Clicking on the card will display a detailed view (BotSpecs) for that bot, replacing BotCollection.
Sort bots by their health, damage, or armor using the SortBar component.
Filter bots by their class, allowing multiple filters at the same time.
Enlist only one bot from each bot_class.
Conclusion
BotBattlr provides an exciting opportunity to demonstrate your React skills while managing an army of powerful bots. Have fun and happy battling! 







