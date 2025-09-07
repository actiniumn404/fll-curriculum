---
title: 5 - Touch and Ultrasonic Sensors
nav_order: 9
parent: FLL Curriculum
---

# Lesson 5: Touch and Ultrasonic Sensors
{: .no_toc }

In this lesson, we’ll explore two important sensors: the Touch Sensor and the Ultrasonic Distance Sensor. These sensors help your robot interact with its environment, giving it the ability to "feel" and "see."
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/ErDj8myI_Tg?si=s1CXRpumwxveoNae" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Quiz
<content-quiz>

    <quiz-mc-question >
        What is the main difference between how a Touch Sensor and an Ultrasonic Sensor help a robot?
        <quiz-option>
            The Touch Sensor is for sensing motion, and the Ultrasonic Sensor is for sensing color.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            The Touch Sensor is for telling when it feels something, and the Ultrasonic Sensor is for measuring how far something is.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            The Touch Sensor is for stopping a motor, and the Ultrasonic Sensor is for turning a motor.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            The Touch Sensor is for sensing sound, and the Ultrasonic Sensor is for sensing light.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question >
        In the Ultrasonic Sensor activity, the robot stops when it gets to a certain distance from an object. How does the robot know what "close" means?
        <quiz-option >
            The program uses a forever loop to check for close objects.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            The program uses an if-then block to check if the distance is less than a certain number.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            The program uses a sound to tell the robot how close the object is.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            The program uses a timer to measure how long the robot has been moving.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question >
        What would happen if you forgot to put your if-then-else block inside a forever loop in the Ultrasonic Sensor program?
        <quiz-option correct>
            The robot would check for obstacles only once at the beginning.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            The robot would go in circles instead of straight.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            The robot would be unable to move forward at all.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            The robot would stop at every obstacle, even if it was not close.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question >
        A robot's program has an if-then statement: if the Touch Sensor is pressed, the robot moves backward. What would happen if the robot was programmed this way and drove into a wall?
        <quiz-option >
            It would keep driving into the wall until you stopped the program.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option > 
            It would move backward and then stop.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            It would move backward and then keep moving backward.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            It would not react because the Touch Sensor needs an else command.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question>
        What would be the best way to program a robot to move forward until it feels a light tap?
        <quiz-option correct>
            Use a forever loop with a wait until block set to "when sensor is pressed lightly".
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            Use a move forward block for a certain number of seconds.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            Use an Ultrasonic Sensor and a when distance is closer than block.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            Use a Color Sensor and a when color is block.      
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>
</content-quiz>