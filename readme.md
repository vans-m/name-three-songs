# Welcome to "Name Three Songs"!

### Here's the login details to test the app:
Username: m.vanessa.dev@gmail.com\
Password: Name3songs\
###### Check it out at https://vans-m.github.io/name-three-songs/

## A little backstory
It all started in a pub, having a pint with friends.\
We were chatting about the trend of wearing heavy metal band t-shirts.\
Being big metalheads, they suggested using the old "name three songs" method to tell apart who's a real fan and who is not, but I had to disagree: I am terrible at remembering songs titles, so I would not be able to "name three songs" and be considered a poser!

Hearing that (and knowing I'm a developer), one of them suggested "you should create an app that helps you with that"!\
...and here we are now!

## How to use it
The app is pretty much straightforward:\
once you log in just type in the name of the band you're searching for, and see their top three songs!

## The tech behind it
The app is built in React, and all the styling is done in Scss.\
I have used the Spotify API to get the data needed, however only pre-authorised Spotify accounts can access the API (hence the login page and the generic user provided).\
The biggest challenge was ensuring a uniform behaviour across the whole app when the session expired, being a two-pages app I solved by creating a context on top of the routing with a token state, to automatically bring the user back to the login page when the token has expired.
