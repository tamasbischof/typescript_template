import { expect } from "chai";
import { Robot } from "../src/command/Robot";
import { TurnCommand } from "../src/command/TurnCommand";
import { Command } from "../src/command/Command";
import { MoveCommand } from "../src/command/MoveCommand";
import { Direction } from "../src/command/Direction";

describe('Command tests', () => {
    it('is at correct position', () => {
        const robot = new Robot();
        const commands = [
            new MoveCommand(50),
            new TurnCommand(),
            new MoveCommand(100)
        ];
        for (const command of commands)
        {
            command.apply(robot);
        }
        expect(robot.x).to.be.equal(100);
        expect(robot.y).to.be.equal(50);
        expect(robot.heading).to.be.equal(Direction.RIGHT);
    });

    it('undid last command', () => {
        const robot = new Robot();
        const commands = [
            new MoveCommand(50),
            new TurnCommand(),
            new MoveCommand(100)
        ];
        for (const command of commands)
        {
            command.apply(robot);
        }
        commands[commands.length - 1].undo(robot);
        expect(robot.x).to.be.equal(0);
        expect(robot.y).to.be.equal(50);
        expect(robot.heading).to.be.equal(Direction.RIGHT);
    });
});