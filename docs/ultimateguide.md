---
title: Ultimate FLL Guide
nav_order: 2
---
# The Ultimate FLL Guide
{: .no_toc }

By Team 18225 - High Definition
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

## Overview

FIRST Lego League is an amazing program that may be overwhelming at first, but definitely worth it once you understand everything. In this guide, FTC 18225 will walk you through various aspects of FLL so that you feel more prepared as you step into the challenge! Before we begin, an important note that FLL recently realized the SPIKE gameset after several years of using EV3. This guide will be following SPIKE since it is recommended to transition into the newer set.


There are 3 parts to FLL, the Robot Game, Core Values, and the Research Project. Every year, there is a new theme and therefore, a different prompt for each of these sections. Core Values is focused in being respectful and a gracious professional on and off the playing field. The Robot Game is where you have 2 minutes and 30 seconds to complete various missions on a field. The Research Project is where teams research a specific prompt, find a problem, and create a solution to that problem. They will then have 2 minutes to present it to the judges.


In this guide specifically, we will be focusing on the Robot Game and the Research Project.

## Robot Game
### Game Strategy
There are typically around 16 challenges on the board that a team needs to attempt to complete within 2 minutes and 30 seconds. Since that is way too much to attempt in one go, it is very important to priortize missions. This is typically done by point values and missions that can be completed with similar attachments. Since you can return to base throughout the match, you also need to consider which missions are on the same path, and how frequently you want your robot to return to base. Returning to base is an opportunity to change your code and attachments on the robot.

Between competitions, it is a great opportunity to optimize your code and add missions to complete to increase your score and improve your performance at the next competition.

### Design
The next step is to design your robot digitally. For SPIKE, the best tool is to use Studio 2.0. This allows you to visualize how your robot looks like and significantly boosts your score compared to other teams who have not completed this process. Follow [these instructions](https://primelessons.org/en/ProgrammingLessons/CAD.pdf) on how to download Studio 2.0 and import the SPIKE parts.

### Parts
There are 7 main categories of [parts](https://le-www-live-s.legocdn.com/sc/media/files/support/spike-prime/le_spike_prime_set_element_overview_classroom_poster_18x24inch-a7ecd36fbf6d15fd4c7617f4cb882531.pdf):

1. [Hub](https://le-www-live-s.legocdn.com/sc/media/files/support/spike-prime/techspecs_techniclargehub-fba3b469ecb9eaafbde5f24d34ba090e.pdf): This will make your program run. The motors/sensors will be attached to the brain to make robot work.
   * This also includes a built-in gyro sensor.
2. [Motors](https://assets.education.lego.com/v3/assets/blt293eea581807678a/bltb9abb42596a7f1b3/5f8801b5f4c5ce0e93db1587/le_spike-prime_tech-fact-sheet_45602_1hy19.pdf): Motors will be attached to the attachments and wheels to make them move.
   * Large Motor: Used for the wheels and moves the robot
   * Medium Motor: Used for attachments that complete the missions
3. Sensors: Will detect elements like colors and obstructions on the field
   * [Force](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt23df304b05e587b2/5f8801ba721f8178f2e5e626/techspecs_technicforcesensor.pdf): Detects if button is pressed
   * [Color](https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt62a78c227edef070/5f8801b9a302dc0d859a732b/techspecs_techniccolorsensor.pdf): Detects color/intensity of light
   * Distance: Detects the distance between robot and other objects
4. Beams: Beams are pieces that connect together to build a frame and put the robot together
   * Straight: straight
   * Angular: bent one or more times
   * Thin: half the width of a typical beam
5. Pegs: Pegs are connectors, connecting beams to one another
6. Axels: Axels are similar to beams, however, they have a cross at the end
7. Gears: Gears can make attachments and wheels turn
   * Technical / Worm Gears
   * Crown Gears

A great way to train students on using the Studio 2.0 software is to have them practice building structures, naming different components of the structure, and explaining what functionality the component might serve on a robot. Here are some good examples for students to practice:

### Build 
After students have built their robot digitally, it is time for them to build the robot in real life. It is important to purchase the [SPIKE Prime Kit](https://education.lego.com/en-us/products/lego-education-spike-prime-set/45678/#spike%E2%84%A2-prime). Since this is very similar to designing the robot but building it in real life instead, there is no additional information to add here. However, here are some resources to help with the process.

* [Robot Example 1](https://primelessons.org/RobotDesigns/instructions/DroidBotMSpikePrime.pdf)
* [Robot Example 2](https://primelessons.org/RobotDesigns/instructions/DroidBotEBuildInstructions.pdf)
* [Robot Example 3](https://primelessons.org/RobotDesigns/instructions/DroidBotIVBuildInstructions.pdf)
* [Robot Example 4](https://docs.google.com/document/d/18qo2yo5CzPKrgjCPCIQQEoclvTcnXIepYB1JGAkIq1o/edit?tab=t.0)
* [Robot Example 5](https://docs.google.com/document/d/1PwaDRD7icmDjvsLyesW5ODWR_GPVVb9QuibzqC5Xs7A/edit?tab=t.0)

### Programming
Before we learn more about programming, you need to know more information about the SPIKE hub. The SPIKE Hub is similar to the brain of the robot. It controls all operations and is the connection between the program on the computer and the motors/sensors on the robot. There are 6 ports that motors/sensors can be connected to. Additionally, the hub uses bluetooth to connect to the programming software, allowing you to download your code into the hub and therefore, onto the robot. In your program, you will tell the code what specific ports should do what actions and then the code will execute the following actions.

To program the SPIKE robot, the [SPIKE App](https://education.lego.com/en-us/downloads/spike-app/software/) must be downloaded.

There are 9 types of blocks:
* Motors: Control motor settings 
* Movement: Control motor movement 
* Light: Change the light and symbols on the Hub 
* Sound: Play sounds from the hub 
* Events: Run code if an event happens 
* Control: Loops and if statements 
* Sensors: Conditionals based on sensors 
* Operators: Operators to effect the value of conditionals 
* Variables: Create variables to track values that may change throughout the code 
* My Blocks: Customized functions
  Gaining confidence in programming comes with practice and exercises. However, below are a few basic tutorials that will help get you familiar with the blocks.

Once you have written your code, click the “Connect” button to connect to your SPIKE hub and upload your code. There is not a way to test your code virtually.

#### Setting up Motors
You can control movement using rotations, degrees, seconds, centimeters, and inches. There are 4 steps to control them:
1. Set which ports have motors
2. Set the number of inches/cm in one motor rotation
3. Set the speed of movement

#### Move Robot in Square
1. Use repeat block to repeat action within the block a set number of times
2. Within the repeat block, move forward for 1 rotation
3. Within the repeat block, rotate robot 90 degrees

## Research Project
The Research Project is a critical aspect of FIRST Lego League. Here is a great video that discusses the basics of the research project:
<iframe width="560" height="315" src="https://www.youtube.com/embed/U0GRalUUt00?si=sYGfnppCFnZo-0b1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
Every year, FLL realizes a new challenge to be researched. Once you have received the challenge, here are 7 steps to lead you to success:
1. Research about the topic
2. List mini challenges
3. Pick one challenge as your final challenge
4. Research your challenge
5. Think of possible solutions and select
6. Develop Your Solution
7. Share with the community

### Step 1: Research About the Topic
The FLL topic is typically extremely broad. This is why it is important to research the initial topic to grasp the entire range of the issue. Additionally, you will broaden your thinking and expand on what you may already know of the topic.
* Research upon the topic and take notes
* When you find an interesting topic, continue researching upon it
* Broad Research - try to find anything that you can

### Step 2: List Mini Challenges
The topic is too broad to solve all at once. This is why your research will be used to identify specific challenges within that broader topic to develop a solution for.

### Step 3: Select a Challenge to Research
Time to select one of these challenges. Create a combined list of challenges with your team and work on selecting a challenge. Some tips include:
* Eliminate options everyone doesn't like
* Do a couple rounds of elimination where everyone select a couple to remove and the most common will be removed
It is also important to pick a challenge with room for solutions, lots of existing research, and something all the students are interested in pursing.

### Step 4: Research your Selected Challenge
With your selected challenge picked, you need to get very specific to the problem.
* What are the causes?
* Why is the challenge important?
* What age group does it affect?
* What are the effects of the challenge?
* What are some statistics that prove your thoughts?
* What are some existing solutions (and their benefits/consequences)?

It is also very important to talk with experts and facilities. Before going to a meeting, prepare questions and be knowledgeable in what you want to ask them. Make sure to take very thorough notes in your research so that you can reference them later for the judging presentation.

### Step 5: Selecting the Solution

It is time to think of some possible solutions to your problem. Make sure that this is not an existing solution and solves the challenge effectively. Once there are lots of ideas brainstormed, time to narrow down ideas again and select one. Sometimes combining ideas can be valuable. One of the most effective strategies is to create a criteria table. List criteria that the best solution must meet and rank each solution on how effectively they reach that criteria. The solution with the greatest number of points wins!

### Step 6: Develop the Solution
When developing the solution, it is important to draw a basic sketch and also create a physical model. Think through everything about your solution! Is it realistic, humane, and cost effective? How does it impact the problem? Why is it better then current solutions? And how will you implement it in your solution? Listing out all these details will only make it easier to answer very specific questions that judges ask.

### Step 7: Present to the Community

Once you have developed your solution, it is important to share your findings. Develop a presentation and present it to your family, friends, teachers, or community members. This will allow you to get experience with presenting, what types of questions people might ask, and also how to effectively present. Is it better to give a 2 minute memorized script, or also add a skit or a demonstration to make it more engaging?

## Conclusion
We hope that this guide helped you in the basics of FIRST Lego League and wish you the best in your journey forward. **Our team is always happy to mentor your team!** Feel free to reach out to us with the following methods:

Email - [ftc18225@gmail.com](mailto:ftc18225@gmail.com)
Website - [https://ftc18225.everstem.org](https://ftc18225.everstem.org)