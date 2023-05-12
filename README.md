# SEI Project 3: Hagl

## Overview
For our third project as part of General Assembly’s Software Engineering Immersive bootcamp, we were tasked with the job of building our very first full-stack application with full CRUD functionality. For this particular project, I worked as a part of a team of three and we split the work up so that each of us had the opportunity to contribute to both the front-end and the back-end. 

My team settled on the concept of building an online marketplace, where users could create their own account, upload “junk” items (junk is used very loosely, here!) they no longer wanted and then “swap” them with other users on the platform. This was a really enjoyable project to work on, and one that also presented its fair share of programming challenges for us to overcome both individually and as a team.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683883454/Project%203:%20Hagl/hero_atllnt.png)

## Deployment link
My project can be found at the following link:

<a href='https://hagl-project-3.herokuapp.com/'>Hagl</a>

## Code installation
* Fork code from <a href='https://github.com/sjdnz93/project-3'>GitHub repository</a> 
* In root folder, run ```npm install```
* In root folder, run ```npm run seed```
* In root folder, run ```npm run serve```
* In client folder, run ```npm run start```

## Timeframe & working team
This was a group project and I worked as a part of a team of three. My teammates were <a href='https://github.com/tommycroot'>Tom Croot</a> and <a href='https://github.com/JackL-1'>Jack Lungu</a>. We had roughly 1.5 weeks to build this application. 

**Dates:** 

Mar 22 to Mar 31 2023

## Technologies used
**Planning and testing:**
* Excalidraw (wireframes)
* Google Docs (general planning)
* Insomnia
* Chrome Development Tools

**Back-end:**
* MongoDB
* Mongoose
* Node.js
* Express
* Axios

**Front-end:**
* React
* Sass (SCSS)
* Bootstrap
* Axios

## Brief
**Technical Requirements:**

* Build a full-stack application by making your own back-end and your own front-end
* Use an Express API to serve your data from a Mongo database
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
* Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this
* Be deployed online so it's publicly accessible

## Planning

**Wireframing the basic design/user story for the app:**

Before our team got stuck into writing any code, we took some time to collaborate and produce wireframes of the basic layout of our application, as well as the user’s journey through the site. This helped us anticipate the number of components we’d need to build out and also got us thinking about the various programming challenges we’d likely face when it came to implementing CRUD functionality.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884212/Project%203:%20Hagl/wire1_kc7pma.png)
![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884212/Project%203:%20Hagl/wire2_l7rwcg.png)
![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884212/Project%203:%20Hagl/wire3_h4ninq.png)
![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884212/Project%203:%20Hagl/wire4_uf2pdi.png)

**Google Docs for project conceptualisation/check-list of anticipated tasks:**

We used a shared Google Doc to help us really solidify the concept of our app, and explain to ourselves what its task was, who it was for and how it would work. By doing this we gave ourselves a clear vision of what we were working towards in terms of the functionality we wanted to include as a part of our MVP, and it also provided a jumping off point for us to delegate various aspects of the build amongst our team. It also gave us a fairly clear idea of what our back-end would look like and include.

In future, I think using a task management system such as Trello alongside this working doc would have made for a more streamlined and effective collaboration effort. As helpful as this working doc was for getting started, it got fairly messy/convoluted pretty quickly. Still, it was better to have it than not. Below are a few screenshots of this doc for context:

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884443/Project%203:%20Hagl/plan1_i4qoue.png)
![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884443/Project%203:%20Hagl/plan2_uq87ik.png)

Tasks were delegated pretty democratically - if someone wanted to work on a particular aspect then it was up to them to raise their hand for it. While we didn’t necessarily pseudocode any problems we foresaw ourselves potentially running into, we did plan out how our models would look, what the user functionality should be in terms of the API requests they could make were, and the basic front-end structure of the web app prior to getting started on any real code. 

This helped us to really visualise what we were trying to build, and gave us a pretty concrete idea of the amount of work we had ahead of us, while also alerting us to any challenges that we might run into. With regards to the challenges, we agreed early on that if a team member became stuck on something, we’d all jump in and work together towards a solution. Ultimately this approach came with its fair share of pros and cons, which are detailed later in the ReadMe.

Plotting out basic functionality, with the associated API request:

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884681/Project%203:%20Hagl/plan3_kejmrl.png)

Roughly planning out a basic router for the back-end:

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884681/Project%203:%20Hagl/plan4_hsiv0u.png)

Planning a rough structure in terms of the routes that we’d need to build when we eventually came to the front-end:

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884682/Project%203:%20Hagl/plan5_sv2qkr.png)

## Build process
Below is a snapshot of the aspects of the build that I worked on, and which I’m particularly happy with, split between the back-end and the front-end.

### BACK-END:
#### Seeding the database:

Once we’d decided on the structure of the various models we’d include in our app database, I was delegated the task of producing the items that we’d use to seed the database. The process of building this code out was incredibly straightforward, but the task of manually writing out a load of random user accounts and items that were supposed to be “up for swap” wasn’t going to be a fun one. 

To get around this, I employed the services of ChatGPT to randomly create items and users based on the model schema that I fed into it. Although we still had to manually source images ourselves and paste the URLs into the schema (ChatGPT is unable to do this), using ChatGPT in this way still saved us a tonne of time and enabled us to populate our database pretty quickly. I needed to adjust what I was asking ChatGPT to produce a couple of times, but ultimately what it put out fitted our needs.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884910/Project%203:%20Hagl/gpt1_gf8rda.png)
![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884910/Project%203:%20Hagl/gpt2_lleoqx.png)
![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683884910/Project%203:%20Hagl/gpt3_zlulg5.png)

#### Defining the route to pull down info to view another user’s profile:
* This proved to be more of a challenge than I first anticipated, largely because of the way in which we defined our user schema. With this particular ```GET``` request, we wanted to enable a user to view the profile of another user on the site, along with all of the items that particular user had listed at any one time.

* Because we’d defined items as a schema in its own right, and as a virtual field on our user schema, when the initial ```GET``` request was made to pull information on a particular user down by tapping into their profile ID, we couldn’t access their items.

**Defining userSchema, and the items as a virtual field, referencing our itemSchema:**

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683885079/Project%203:%20Hagl/process1_p5lq2q.png)

**Response from making the initial request to find a user by their ID. Note the absence of the ‘items’ field:**

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683885079/Project%203:%20Hagl/process1_p5lq2q.png)

* To solve this, in my ```getSingleProfile()``` controller function, I added another GET request to pull down all items that were stored on the database. With access to this information, I then filtered through all of the items, returning those items where the ```owner._id``` field matched the ```profile._id``` field on the initial find user by id request. Because I was dealing with objects with differing references, I had to stringify both the ```item.owner._id``` and ```profile._id``` in order to compare their values directly.

**Filtering through ```items```, saving each matching item to a new variable ```userItems```:**

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683885310/Project%203:%20Hagl/process3_dbvbzb.png)
![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683885310/Project%203:%20Hagl/process4_r0sznb.png)

* At this point I had returns from two separate requests, which needed to be combined into a single response that could then be used to render information on the front-end. In order to construct this response, I simply spread ```profile._doc``` into a new object called ```combined```, adding the ```userItems``` array in as a newly constructed field. At this point I also realised I was pulling down the user’s hashed password, so before returning this as a final response I deleted the password field. 

**Creating the combined object, and deleting the password field before sending the response to the client:**

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683885419/Project%203:%20Hagl/process5_fm7qgm.png)

**The combined response, prior to having the password field deleted:**

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683885468/Project%203:%20Hagl/process6_c5wil1.png)

* This was a key step in allowing us to view another user’s profile page, rendering their content on the page as we wanted. Final result appeared as below (note there’s still work to be done on styling).

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683885514/Project%203:%20Hagl/process7_c5apo9.png)

#### Writing the logic that allowed users to swap items between themselves:
* Reassigning ownership of certain items on the database was a task we identified as likely being a challenge fairly early on. After discussing a number of ways in which we could tackle this as a group, I floated the idea of simply using a ```PUT``` request to update the owner field for any given item.

* Though we tackled this problem as a group, I felt that I was elected as the de-facto project manager, and that I took the lead on pushing things forward, writing the code itself, and suggesting the solutions outlined below.

* Once we’d settled on this approach, writing the logic was fairly straight forward. I accessed the items up for swap by their unique IDs, and then used the owner field attached to each item to determine if the logged in user was in fact the owner of the first item up for swap (again, stringifying the objects so that the values could be directly compared, as opposed to the object references). If this was true, we created new objects for each item, where the existing item information was spread in, but the owner field was updated. We then saved these modified items to the database.

**The code we wrote to implement the swap function, logging out each step in the console to track whether or not our reassignment of the owner field was successful. While this proved to be reasonably simple to implement on the back-end, we still had the challenge of figuring out how/where we’d implement this on the front end:**

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683885842/Project%203:%20Hagl/process8_h036gu.png)
![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683885842/Project%203:%20Hagl/procss9_ieeclo.png)

### FRONT-END:
The vast majority of the front-end was done collaboratively, so here I will focus on the things that I built solo.

####  Building the home page components:
* Setting up the home page layout and rendering the content in React was the first thing I worked on with regards to the front-end build. I used our basic wireframe to inform how the page was structured, using Bootstrap to fit all of the items stored in our database into a grid. This was a pretty straightforward task that didn’t throw up any problems, and I think that this was facilitated by the way we structured our database to make accessing this information a simple task. The initial axios ```GET``` request to our ```/api/items``` endpoint pulled through the data in the way we expected it to, which meant that using this to render the JSX content was a quick process.

**Data was ordered on the page by ```swapValue```, which required the use of the ```.sort()``` method being called on our data object at the point in which we used the data object to set the state:**

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683885983/Project%203:%20Hagl/process10_dtmro5.png)

* While the home page component was an easy build, many of the other components were trickier - particularly with regards to implementing the functionality we were after on the front-end. This took up a lot of our time as we decided to focus on coming up with solutions as a team rather than individually, and I will discuss a few of these challenges in the Challenges section of this ReadMe.

#### Implementing our styling:
* Once we’d built out all of the various components that we wanted, we began the process of adding in our styling. Again, while this was largely a collaborative effort, I was in the driving seat and tasked with the job of actually writing out much of the SCSS that would inform the rest of the design implemented across the site. The homepage was the first component that we added styling to, and this set the tone for the visuals that we’d implement across the rest of the site. 

* As we’d spent quite a lot of our time working together to solve the problems that we’d faced in building the front-end out, the time we were left with to really focus on styling the site was pretty limited. While I’m happy enough with the result, there’s a lot more I’d like to do, and this was a valuable lesson in the importance of time management and delegation.

## Challenges

#### Building the user profile page component:
After working on the homepage component - which didn’t take too long at all - I began work on building out the profile page component that would render all of the information associated with a logged in user. While the actual build process was again fairly easy, I soon realised we had a problem when I tried to logout of one test user’s account and then into another. 

The first time you would click through to the new user’s profile page, it would initially render the information from the previous user. To begin with, we found that if you manually refreshed the page the correct information would display, but this ultimately wasn’t what we were looking for. After doing a bit of debugging, I realised that the issue seemed to be with our initial authenticated request to the endpoint. Information from the previous request was being cached even after that user had logged out, which was why it would then render on the page when the next user logged in.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683886406/Project%203:%20Hagl/challenge1_kysswf.png)

After trying to implement numerous solutions both solo and as a group, none of which worked, we ultimately had to call in our instructor to provide guidance. The solution we then came to included the use of ```interceptors.request``` when creating our authenticated helper. Admittedly, I’m still not 100% on how this actually works at the time of writing, but now that I’m aware that interceptors can be used to intercept a request and execute a specific custom function before the request is fulfilled I’ll be able to do more reading on this so that I can implement it in my next project if needs be.

![](https://res.cloudinary.com/djvf3fooo/image/upload/v1683886531/Project%203:%20Hagl/challenge2_dz7pqk.png)

#### Time management & delegation:
As a group, this was our first experience of working together to build a full-stack application from start to finish. While I think we worked well together when it came to collaborating on solving problems related to the components we’d built collaboratively, I think we also had a tendency to get a bit distracted by these problems. 

While most problems we encountered as a team were solvable with time, the byproduct of us all pitching in to solve them was that all the other aspects of the build were put on hold until we’d solved that particular problem. 

I think this was largely why we were left with less time than was ideal to implement our styling. In future group environments, I would definitely look to delegate in a smarter way (ensure that at least one person continues to work on getting new work done, for instance), and to make use of a project management tool such as Trello.

## Wins

**Teamwork:**
* While our time management maybe wasn’t a massive strong point, working together to build this application from an idea through to a working site was really fun. While ownership of various stages of the build was perhaps a bit cloudy at times owing to the fact that everyone was involved in building the vast majority of everything on the site, working together to problem solve and bounce ideas off one another made this build process really engaging and enjoyable.

**Built a working app:**
* The app might still have a few rough edges to sand off, but the fact that we were able to build in functionality (such as swapping ownership of items) that we hadn’t necessarily covered in class was super satisfying.

## Key learnings/takeaways
* I think the biggest learning for this project was the importance of time management and delegation. This was my first time having to think about such things in the context of building a full-stack application, and after seeing how easy it is to get sucked into problem solving as a group the trade-off really is that you’re ultimately left with less time to work on other aspects of the site. Going forward I’m certainly going to be far more methodical in terms of how I structure my time and tasks, in order to keep myself more accountable. I think that doing this will also help me to better keep track of the wins/challenges that I’ve encountered on a personal level too. While it was great collaborating for what felt like the vast majority of this project as a team, it also left me feeling like there weren’t too many aspects of the build that I truly owned. As a result, I’m really looking forward to the next project where I’ll be building out another fullstack application solo.

* After spending two months on this course learning about both the front-end and the back-end separately, working on this project to stitch the two together was a really fantastic experience. I feel like I now have so much more context about how these types of applications work, as well as the confidence to go out and build one by myself. Two months isn’t a huge amount of time in the grand scheme of things, and the learning curve has certainly been steep, but the fact that I can now do something that I previously had no idea about is incredibly satisfying. Working on this project has also reinforced my fascination with this subject, and has further confirmed that taking the jump to learn software engineering was the right move for me.

## Bugs
* We realised just before the deadline that we didn’t 100% secure our swap function. This means that a logged in user can swap two items that don’t belong to them. Will need to do some further work to figure out how to prevent this.

## Future improvements
* Definitely want to improve the styling to make this site more visually appealing. There’s quite a lot that can still be done here in my opinion, and for the next project I’m going to be far more mindful to allocate a lot more time for working on this.

* Certain pieces of functionality require the page to be reloaded in order to work properly (deleting message requests, finalising the swaps, etc). This isn’t a particularly React way of doing things, so now that the project is finished I want to work to implement these more seamlessly than they’re currently being implemented, and remove the requirement to reload these pages.

* Mobile responsiveness. At the moment the application does have a degree of mobile responsiveness implemented, but it looks a bit scrappy. There’s a lot of work that can still be done here.















