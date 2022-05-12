import { Command } from "./Command";
import { Direction } from "./Direction";
import { Robot } from "./Robot";

export class TurnCommand implements Command
{
    apply(robot: Robot): void {
        if (robot.heading === Direction.LEFT)
        {
            robot.heading = Direction.UP;
        }
        else
        {
            robot.heading += 1;
        }
    }

    undo(robot: Robot): void {
        if (robot.heading === Direction.UP)
        {
            robot.heading = Direction.LEFT;
        }
        else
        {
            robot.heading -= 1;
        }
    }
    
}