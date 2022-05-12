import { Robot } from "./Robot";

export interface Command
{
    apply(robot: Robot): void;
    undo(robot: Robot): void;
}