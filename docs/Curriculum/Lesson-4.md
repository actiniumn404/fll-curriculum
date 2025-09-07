---
title: 4 - Coding a Line-Following Robot
nav_order: 8
parent: FLL Curriculum
---

# Lesson 4: Coding a Line-Following Robot
{: .no_toc }

In this lesson, we will be coding a line-following robot. The goal is to use sensors to guide your robot's movements and make it follow a path automatically.
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
        A robot's color sensor is pointed at a black line on a white floor. How does the sensor's input directly help the robot stay on the line?
        <quiz-option>
            It tells the robot's motor to turn only when it's on the line.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            It measures the distance to the line to keep the robot centered.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            It sends a signal that the program uses to decide whether to correct its direction.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            It tells the robot to move forward at a constant speed.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question >
        What would happen if you forgot to put your if-then-else block inside a forever loop?
        <quiz-option >
            The robot would only follow the line for a short time and then stop.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            The robot would check for the line only one time at the start of the program.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            The robot would drive in a circle instead of a straight line.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            The robot's motors would not be able to turn on.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question >
        A robot's program has an if-then-else statement: if the sensor sees the black line, it moves straight. What is the most likely command in the else block to help the robot follow the line?
        <quiz-option>
            A command to stop all movement.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            A command to make the robot turn in the opposite direction from the line.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            A command to make the robot adjust its steering to the side where the line is.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            A command to play a sound.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question >
        Your robot is following a line but keeps turning sharply and going off the path. What is the most likely reason for this behavior?
        <quiz-option >
            The motors are not connected to the correct ports.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct> 
            The speed of the motors is set too high, causing it to overcorrect.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            The line is not dark enough for the color sensor to detect.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option>
            The forever loop is running too fast.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>

    <quiz-mc-question>
        What would be the best way to change the code so the robot follows a blue line instead of a black one?
        <quiz-option>
            Change the set movement speed block.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            Change the motor ports.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option correct>
            Change the color in the sensor is color block to blue.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
        <quiz-option >
            Remove the forever loop.
            <quiz-explanation></quiz-explanation>
        </quiz-option>
    </quiz-mc-question>
</content-quiz>