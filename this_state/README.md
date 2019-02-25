# this.state


## Project Description

**this.state** is a site that gives the public access to real-time bills and legislation that congress just passed.  It will allow the user insight on how each party voted.  Upcoming bills will also be displayed, as well as a search functionality that will allow the user to search for bills according to a specific topic.

The site will have a directory of every senator and house member by state where a user can access a specific politician's contact information and website, and offer statistics on each of their voting records (including how many votes they've missed, their percentage of voting against party) and their spending habits.  Note that statistics are only available for congress members of the 115th congress and only reflect stats from year 2018- contact info will still be available for new members, but their statistics are not available yet.

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



## MVP/PostMVP

### MVP

- Display CurrentBills  component in the homepage
- NavMain bar with that routes to /Home, /BillsArchive, and /CongressHome
- /BillsArchive route displays UpcomingBills component to be voted on
- /BillsArchive route will contain a SearchBillsForm component, user types keyword to search.
- BillResults component will be routed after user hits the search button
- /CongressHome route will display PressReleases component
- /CongressHome route will have a NavCongress bar that will route to /senate or /house
- /senate and /house routes will have a similar hierarchy:
  * a CongressStat component that renders the stats of the previous year, and an an OnClick function on the name of the politician that will lead to his ContactList component
  * a FilterByStateForm component with a dropdown box where the user selects a specific state, a PoliticiansList component that shows all the politicians of each state, an OnClick function on the name of the politician that will lead to his ContactList
- Header and Footer Components

### PostMVP

- a filter by party function
- a filter by next re-election function
- a search for a specific bill function (needs a bill ID)
- a specific roll-call vote function (needs bill ID)

## React Component Hierarchy

![Component Hierarchy](https://i.imgur.com/SeIGH3C.jpg "Hierarchy")



## Functional Components

| Component | Description |
| --- | :---: |  
| Header | This will render the header |
| Footer | This will render the header|
| NavMain| This will render the nav bar in the header with links to /home /billsarchive and /congresshome|
| CurrentBills | A list of current bills passed and the votes outcome will render at the homepage |
| UpcomingBills | Renders a list of upcoming bills immediately when routed to /BillsArchive |
| SearchBillsForm | Renders a form for the user to type in a keyword |
| BillResults | Renders a list of bills that have the keyword searched |
| PressReleases | Renders a list of the most current press releases |
| NavCongress | Renders links to /senate and /house |
| CongressStat | Renders the stats of the previous year |
| ContactList | Renders contact info (phone, site, socials) |
| FilterByStateForm | Renders a dropdown box for the user to choose a state |
| PoliticiansList | Renders a list of politicians by state |

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 2hrs| hrs | hrs |
| Header/Footer component | H | 1hr | hrs | hrs |
| NavMain | 1H | hrs| hrs | hrs |
| CurrentBills | 1H | hrs| hrs | hrs |
| UpcomingBills | 1H | hrs| hrs | hrs |
| SearchBillsForm | 1.5H | hrs| hrs | hrs |
| BillResults | 1H | hrs| hrs | hrs |
| PressReleases | 1H | hrs| hrs | hrs |
| NavCongress | 1H | hrs| hrs | hrs |
| CongressStat | 2.5H | hrs| hrs | hrs |
| ContactList | 1H | hrs| hrs | hrs |
| FilterByStateForm | 2H | hrs| hrs | hrs |
| PoliticiansList | 2H | hrs| hrs | hrs |
| Styling | 6H | hrs| hrs | hrs |
| Total | H | hrs| hrs | hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
