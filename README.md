# --- drama_free_dinner_party --- #

Don't sit Grandma next to Uncle Bob. Full stack Javascript app for creating a seating chart so everyone is happy. 

Built using Node, Express, PostgreSQL, Sequelize, HTML5 Canvas, and React-Redux.

## -- Overview -- ##

Imagine you are hosting an event and you need to fit a bunch of people into a room to eat dinner. There are two things you must figure out. 1) For a given number of guests, how can you arrange the tables/chairs/misc furniture in a rectangular room that is X feet wide by Y feet long so that everyone fits comfortably? 2) How can you generate a seating chart to to minimize awkward conversation/ fights so that everyone is happy? 

## -- Layout -- ##
![layout img](https://raw.githubusercontent.com/jffhtchr/drama_free_dinner_party/master/images/SeatingChart.png)

# -- User Stories -- #

As a user, I can…

Create instances of rectangular tables and place it inside the room. Tables may not overlap with each other or spill outside the boundaries of the room. For the sake of an MVP, tables automatically come with chairs spaced evenly around the table.
<br/>
<br/>
<img src="https://raw.githubusercontent.com/jffhtchr/drama_free_dinner_party/master/images/AddTable.png" alt="Add Img Table"  height="400">
<br/>
Create an instance of a guest.
<br/>
<br/>
<img src="https://raw.githubusercontent.com/jffhtchr/drama_free_dinner_party/master/images/CreateGuest.png" alt="Add Img Table"  height="400">
<br/>
Select a guest from the guest list to reveal their personal info. Edit/delete guest.
<br/>
<br/>
<img src="https://raw.githubusercontent.com/jffhtchr/drama_free_dinner_party/master/images/EditGuest.png" alt="Add Img Table"  height="400">
<br/>
Click on a guests chair to reveal information about that guest. Options to update or delete guest.
<br/>
<br/>
<img src="https://raw.githubusercontent.com/jffhtchr/drama_free_dinner_party/master/images/ClickGuestChair.png" alt="Add Img Table"  height="400">
<br/>
Auto-generate a seating chart based on user input.
<br/>
<br/>
<img src="https://raw.githubusercontent.com/jffhtchr/drama_free_dinner_party/master/images/CreateSeatingChart.png" alt="Add Img Table"  height="400">
