# Learn-SDLC
An online platform to learn Systems Development Life Cycle in a fun and interesting way. Link to the website: http://gc200333253.computerstudi.es/teamNoClue/ 

This started out as a project from my System Analysis class, geared towards practicing SCRUM software developement methodology and learn more about the System Development Life Cycle. My team's name was 'TeamNoClue', cause we were bad at naming :p We had five developers in team, and all the roles were divided among us. For info on team members and their roles please go here: 
My role was that of Lead Developer and Designer. My task was to plan, design and develop the whole platform, inside which, individual components developed by other team members will be integrated to come up with a complete learning platform at end. As heavy as it sounds.

Following is my work on the Learn-SDLC platform:

# Planning

### Purpose (user stories for me)
Learn-SDLC is an online platform where anyone can learn about what SDLC is, and how it is used in the technology industry.
   1. It should be website that anyone can use regardless of age or background. 
   2. It should be fun and engaging for the children while still being resourceful and assistive to elderly people.
   3. Should be accessible from both anywhere through different web browser (responsive and multi-browser compatibility).
   4. Provide the knowledge in a systematic and proper way, besides giving a way of measuring the information grasped.
   5. Allow users to learn a little bit beyond SDLC by introducing further learning opportunities.
   6. Acknowledge to learners some relevant and useful learning resources available over the internet.

### How it works 
   1. Main home page of website describes the way the platform works and provide user with links to various important sections of the website like Study Area, Games, and About page.
   2. The learning process starts from the Study Area. Following is the working of study area, or the real teaching concept of the Learn-SDLC website. Various parts of the Study Area and there purpose:
     1. Introduction: Gives a brief introduction of the topic along with Definition breakdown to make the concept more clear.
     2. Explanation: This section explains the whole concept with proper and detailed explanation. It make it less boring, more emphasis is placed on using visuals and graphics where ever possible.
     3. Examples makes it easier to understand the real world application of the concept learned. This section contains various examples based on real world usage of SDLC
     4. Testing the knowledge is the best way to retain it for long term, and it also servers as a measure to check knowledge actually gained. This section uses the Quizzlet.com app, on which user can take quizs, test or play games like Scatters, Flashcards and Space game.

# Designing

### Design Layout
Various components of the website were designed and planned at first taking into consideration the purpose and page-structure of the website. Header, Navigation panels, body section (main view) and the footer section, were all designed using web design tools.

### CSS - Bootstrap, Materialize CSS and Angular Material Design
Due to the limitation of developing the whole platform in just 2 weeks, it was decided to use the available CSS frameworks. The responsibility of choosing the framework and designing the website was put on my shoulders. Depending on the website requirements, mainly that it should be a fun and engaging while still being easily accessible through various devices, I decided to use a combination of CSS frameworks for best productivity and fluidity. I decided to use Bootstrap, Materialize CSS and my custom CSS styles. Bootstrap was basically used for creating responsive web structure, and materialize fulfilled the need of creating a more colorful and fun looking website. Angular Material Design was also heavily used

### Properties
Dimensions supported - At least 720 px wide screen, and best viewed at 1330 px wide screen.

# Developing
From the starting it was clear to me that it needs to be something like a single page application, fast and fluid, in form of a full package for learning SDLC. Since all parts of the website are connected to each other, therefore it was mandatory to present the website as a whole, rather than individual parts. Therefore, the team decided to go with the plan for developing a Single Page Application, and I recommended AngularJS for it, because I love it :) Angular's fast performance, nested-view features for enhanched routing controls and the angular material design, were the main reason to choose AngularJS. 

### Structure

           Index
             |
             |
         Main view 
               |------- Home
               |------ Study Area ---------Nested view
               |------ Games                    |---------- SDLC
               |------ About                    |---------- Planning
               |------ Devs                     |---------- Analysis
                                                |---------- Design
                                                |---------- Implementation
                                                |---------- Support & Security

### Development
   1. Started with a basic structure. Made the index.html, containing the basic model of the website as we designed it. It contained the Main view.
   2. The main view handled the display of first-level pages of the website, i.e., Home, Study Area, Games, About and Devs. While the nested view, inside the Study Area page, showed various views depending on the sub-topic selected to study at that time, which may be SDLC, Planning, Analysis, Design, Implementation or Support and security.
   3. There were two options in front of us when deciding on how to inject data into the views. First option was to simply create separate template files for each of the stages and then inject those templates depending on the route selected. Second option was to have only one template file (with a general structure of that web page), and inject data into it through the controller. The controller injects value through scope variables, and the value for those scope variables keeps changing dynamically with the change in controller. It still depends on routing, as which controller is selected depends on route.
   4. The second option was more faster, with much less redundant code and led to more efficient application performance. But the problem was that it was much more complicated to develop and needed more time and work. Since, in the whole team of 5 members, only I knew angularJS, and other were at most comfortable with HTML, not even JavaScript, I had to choose something which would not only enable us to make SPA using angular, but also enable other members to easily contribute their bit to the website. Therefore, we chose to go with the first option.
   5. First option was really easy to work with. Each stage has separate HTML file, with simple HTML and some angular code. Therefore, any member, regardless of experience or knowledge of JavaScript or angular could easly add their content or edit the files based on needs. This was also suitable considering our deadline, since it involved creation of duplicate files, and now the work could be divided among us evenly rather than me doing all the developement.
   6. I created the whole website first, with simple and basic classes from the bootstrap framework and Angular Material Design framework. Then added materialize CSS to add more color and creativity.
   7. Then created the final documented verison of the code files, including all the HTML, JS and CSS files.
   8. Then created the documentation file, containing extensive details of the whole project. Done :)
   
This project really taught me a lot of things. Team work, planning and managing a project are a few of them. We did work really hard for it, and hope you'll see the hard work.

####Thank You.

## p-k
