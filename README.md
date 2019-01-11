# Coach notes -Website Description-

For coaches everywhere…A simple website that lets you manage and keep track of your matches, training activities and players currently coaching.

The purpose of this application is to demonstrate the Rails backend and React frontend.  

### Stay Organize
Plan and structure activities for your team in a way that’s best for you. Set priorities and deadlines.

### Stay on Track
Follow matches and training through every stage. Create and update your team's activities

### Keep Track of your Squad
Add, update or delete players from your profile.

## Wireframa:
![Alt text](./client/src/images/wireframe.jpg?raw=true "wireframe")

## ERD

![Alt text](client/src/images/erd.jpg?raw=true "erd")

## M.V.P
- User can register for an account
- User can login
- User can create, update or delete an activity


## Post M.V.P features
- User can add players to his/her profile
- User can add, update or delete players from his/her profile
-Add filter to the lists. For example filter by player's position or by the priority of the activity.

## Technologies used:

- Ruby on Rails
- React
- Axios


## References:

- Class examples from WDI General Assembly
- React documentation
- Rails documentation

## Code example

It took time to figure out what type of data i needed to send to the server for update requests
```
async handleUpdate(e){
  e.preventDefault();
  const token = localStorage.getItem('token');
  const match = await updateMatch(token, this.state.focusMatch, this.state.editFormData);
  const matches = await getMyMatches();
  this.setState(prevState => ({
    ...prevState.matches,
    matches
  }))
}
```



## Installation instructions

## Links
GitHub repository [Couch Notes](https://github.com/jhonymaurad/coachnotes).
Website link [Couch Notes Heroku](https://tranquil-thicket-20809.herokuapp.com/).
