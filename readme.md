# Project 1 Documentation
## By J. Mitchell Paoletti 


## Introcution

The object of this game is to test the knowledge of the SEIR Penguin class' knowledge against that of me, Mitchell. To do this, I've created a trivia game where we take facts that I know, and see if the class knows them too.

## Technologies used

-HTML
-CSS
-JS
-jQuery

## Challenges
My biggest challenge was getting the trivia game to work in the console, then expanding it from there. I also struggled to get the questions to not repeat and how to get the game to work with a user-inputted score limit.

### I have trouble with...

I had a lot of trouble with my game double couting inputs and running through multiple questions every time a user clicked an answer. This was fixed by using the off() command in jQuery. I had some trouble getting my game to work with user-inputted score limits and making my modals. 

I also struggled to get my program to not repeat questions. I went through several different possible solutions, all of which just seemed to lock up my program. After trying several different solutions, Alex B and I relaized that the issue was that my random index variable was a constant variable, and thus couldn't be changed. After changing it to let, my solution ran immediatly and without issue. 



