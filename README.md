# Find your Hat

## Description

In this project, i build an interactive terminal game with JavaScript classes. The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling 
down one of the holes or stepping outside of the field.

## Features

- **Field Class:** `Field` class, is mainly responsible for representing the game field.

- **Interactive Gameplay:** The game is playable by users through the terminal. Players can input directions to navigate the field and try to find their hat.

- **Winning and Losing Conditions:** The game continues until the player either wins by finding their hat, loses by falling into a hole, or attempts to move outside the field.

- **Dynamic Field Map:** After each player move, the current field map is displayed with visited tiles marked with `*`. Players are prompted for their next move.

## How to Play

1. **Run the Game:**
   - Execute `main.js` to start the game.

2. **Navigate the Field:**
   - Input directions (e.g., up, down, left, right) to move through the field.

3. **Win or Lose:**
   - Continue navigating until you either find your hat and win or land on a hole and lose.
