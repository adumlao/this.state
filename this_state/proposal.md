# this.state Project Proposal


## Project Description

**this.state** is a site that gives the public access to real-time bills and legislation that congress just passed.  It will allow the user insight on how each party voted.  Upcoming bills will also be displayed, as well as a search functionality that will allow the user to search for bills according to a specific topic.

The site will have a directory of every senator and house member by state where a user can access a specific politician's contact information and website, and offer statistics on each of their voting records (including how many votes they've missed and their percentage of voting against party) and their spending habits.  Note that statistics are only available for congress members of the 115th congress and only reflect stats from year 2018- contact info will still be available for new members, but their statistics are not available yet.

## API used:

[https://projects.propublica.org/api-docs/congress-api/]

## React Component Hierarchy

![Component Hierarchy](https://i.imgur.com/SeIGH3C.jpg "Hierarchy")



## Wireframes

### /Home (will render recent bills passed):
![/Home](https://i.imgur.com/mPzyfzV.jpg "Home")



### /Bills (bills main page will render upcoming bills):
![/Bills](https://i.imgur.com/SYrjX85.jpg "Bills Main")



### /Bills/SearchResults (will display search results):
![/Bills/SearchResults](https://i.imgur.com/pwWHrT7.jpg "Bills Search Results")



### /Congress (congress main page will render recent press releases):
![/Congress](https://i.imgur.com/VAiEOC6.jpg "Congress Main")



### /Congress/Senate or /Congress/House (renders 2018 scorecard with a filter by state form):
![/Congress/Senate or /Congress/House](https://i.imgur.com/I2II6xF.jpg "Senate/House Scorecard")



### /Bills (shows expenses):
![/Congress/Senate/Expenses/:name or /Congress/House/Expenses/:name](https://i.imgur.com/brrVT9A.jpg "Expenses")



### /Congress/Senate/State or /Congress/House/State (shows politicans per state with a show more/less contact list button):
![/Bills](https://i.imgur.com/rxA4fTC.jpg "StateList")




## MVP / PostMVP

### MVP

- Display current passed bills in the homepage
- Nav bar with that routes to Home, Bills Archive, and Congress
- BillsArchive component displays upcoming bills to be voted on
- BillsArchive component will contain a search bills form component, user types keyword to search.
- BillSearchResults component will be routed after user hits the search button
- CongressHome component will display recent press releases
- CongressHome component will have a nav bar that will route to SenateList or HouseList component
- Both SenateList and HouseList will have a similar hierarchy:
  * a Congress115Stat component that shows the stats of the previous year, and an an OnClick function on the name of the politician that will lead to his contactList
  * a FilterByStateForm component with a dropdown box where the user selects a specific state, a PoliticiansList component that shows all the politicians of each state, an OnClick function on the name of the politician that will lead to his contactList
- Header and Footer Components

### PostMVP

- a filter by party function
- a filter by next re-election function
- a search for a specific bill function (needs a bill ID)
- a specific roll-call vote function (needs bill ID)

## Foreseeable Problems

- The API lists members of the 115th Congress and i will have to filter through their list to show only members that are still in office.
- Allowing the user to click on  a specific lawmaker and have that link route to a page that shows the politician's contact info and stats if they are available.
- Some bills have no headlines/titles.
- API has no pictures.

## Possible solutions

- there is an **in_office : true/false** property that i can use to filter through the array and have it only return those that are still in in_office
- A show more/show less functionality which will be a simpler/less-sophisticated part one to solve the problem.  I can use ```<Link to='/:name' />``` to really highlight the politician.
- Conditional rendering will show site logo/image in lieu of a title.
- Style it up!
