# **Star Wars: Fleet Attack**
## Description:

Star Wars: Fleet Attack is a full-stack web application that lets the user browse the stats of various ships from the Star Wars universe and pit them against an imperial fleet in combinations of five.

## Technologies used:

- **Axios**: to access vehicle stats from the Star Wars: Galaxy of Heroes video game website. 
- **Bcrypt**: for hashing the users' passwords.
- **Connect-Flash**: to display notifications upon logins, singups, etc.
- **dotenv**: to load environment variables.
- **EJS** and **EJS Layouts**: for accessing HTML on the back-end.
- **Sessions**: so that the user can stay logged in.
- **Method-override**: allows the users to delete their accounts.
- **Passport**: for local authorization.
- **Rowdy-logger**: provides information on all paths.
- **Sequelize**: for managing the application's database and its models.
- **JavaScript**
- **Node.js**
- **PostgreSQL**
- **HTML5**
- **CSS**

## **Setup**

Fork the repository. Select 'clone' and copy the provided link. 

In the terminal, navigate to the desired file location and type:

"git clone [pasted github link]"

CD into the new file and install the following dependencies (npm i [name of dependency]): 
- axios
- bcrypt
- connect-flash
- dotenv
- ejs
- express
- express-ejs-layouts
- express-sessions
- method-override
- passport
- passport-local
- pg
- rowdy-logger
- sequelize

Create the database by typing: 'createdb [name of database]'

Edit the config.json file to reflect the correct database name, and change the dialect to postgres.

Migrate the models to your database by typing: 'sequelize db:migrate'.

Create a .env file and enter the following on lines 1 and 2, respectively:

PORT=3000

SESSION_SECRET=supersupersecretsignature

Type 'nodemon' in the terminal to open the server. Open your browser of choice and enter as the url: http://localhost:3000

## Approach

I started by making an ERD of the two active models and their join model. 

I then sketched up basic wireframes of the profile, battle, build, and home views.

Then I forked and cloned the boiler-plate we made in class and adapted it to accommodate the routes I had in mind.

After the routes were stubbed out, I created my db and models and tested them to make sure they were working.

Once basic navigation was established, I whiteboarded the game logic for the battle view and typed up a basic model of it in a separate js file to test its functionality. Then I adapted it for ejs so that it could incorportate data pulled from my API.

## **Unacheived Goals**

The battle logic I wrote turned out to not be as air-tight as I had thought. It allowed for a simultaneous win and loss. I spent a good few hours trying to plug that hole, but in the end, the changes I implemented made it impossible for the game-loop to ever be satisfied. I'm still not sure where it went wrong, but in the end, I just decided that a tie was an acceptable outcome, and I updated the user model to track ties as well as wins and losses.

I never figured out how to render audio in the battle sequences. I tried to do it the same way I played audio in my P1, but playing audio in an ejs file is a whole different beats, apparently. Though audio was not neccessarily one of my MVP goals, I really was not anticipating not being able to make it work, and the result is much more lackluster than I would have thought.

My primary stretch goal would have been to let users save their favorite fleets and fight each other with them, as opposed to just facing off against the computer. But I didn't even get close to tackling that.

## **Bugs**

The player is only supposed to be able to assemble a five-ship fleet for combat. For reasons I'm wholly uncertain about, on VERY rare occasions, a four- or six-ship fleet is created. In the former case, the battle logic simply doesn't work and the game doesn't progress. In the later case, the sixth ship is simply omitted from the battle.