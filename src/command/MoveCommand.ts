import { Command } from "./Command";
import { Direction } from "./Direction";
import { Robot } from "./Robot";

export class MoveCommand implements Command
{
    private readonly _distance: number;

    constructor(distance: number)
    {
        this._distance = distance;
    }

    apply(robot: Robot): void {
        this.addDistance(robot, this._distance);
    }

    undo(robot: Robot): void {
        this.addDistance(robot, -this._distance);
    }

    addDistance(robot: Robot, distance: number) {
        switch(robot.heading)
        {
            case Direction.UP:
                robot.y += distance;
                break;
            case Direction.RIGHT:
                robot.x += distance;
                break;
            case Direction.LEFT:
                robot.x -= distance;
                break;
            case Direction.DOWN:
                robot.y -= distance;
                break;
        }
    }
}