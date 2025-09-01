---
title: 1.4 - Force Sensor
nav_order: 4
parent: FLL Curriculum
---

# Lesson 1, Part 4: Force Sensor
{: .no_toc }

In this lesson, we’ll learn about and use the LEGO Spike Prime Force Sensor and Gyro Sensor. You’ll use block coding to train your robot to respond to signals based on touch, movement, and tilt.
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
        If you want to create a program that makes a sound when a robot is picked up, which sensor would you use?        
        <quiz-option>
            The Distance Sensor
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            The Gyro Sensor.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            The Color Sensor.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            The Force Sensor.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question >
        What is the purpose of the “when released” event block for the Force Sensor?
        <quiz-option >
            To tell the motor to spin faster or slower.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            To play a sound when the sensor is not being pressed.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            To make the program stop when the pressure on the sensor is gone.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            To tell the motor to turn 90 degrees.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question >
        What is the key difference between using a “start motor” block and a “run for 1 rotation” block?
        <quiz-option>
            The “start motor” block moves the motor for a specific time, while “run for” makes it move forever.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            The “start motor” block can only be used with the Gyro Sensor, but “run for” can be used with any sensor.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            The “start motor” block makes the motor run continuously, while the “run for” block makes it run for a specific amount of time or rotation.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            The “start motor” block can only be used with the Force Sensor, while “run for” can only be used with the Gyro Sensor.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question >
        A program uses a "when tilted" block to play a sound. If you want the sound to play when the robot is turned around a full circle (360°), what would you do?        
        <quiz-option >
            Change the event block to "when pressed".
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            Use a "run for" block with the motor.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            Change the number of degrees in the "when tilted" block.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            Change the sound to a longer sound.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question>
        A robot has a program that makes a motor spin when the Force Sensor is pressed. What kind of blocks would be needed to make the motor spin only while the sensor is being held down?
        <quiz-option>
            A "when pressed" block and a "run for" block.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
             A "start sound" block and a "when tilted" block.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            A "start motor" block and a "stop motor" block.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            A "when pressed" event block with a "start motor" block, and a "when released" event block with a "stop motor" block.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>
</content-quiz>