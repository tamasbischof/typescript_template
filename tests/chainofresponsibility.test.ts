import { expect } from "chai";
import { Room, Status } from "../src/chainofresponsibility/Room";
import { ConcreteRoom } from "../src/chainofresponsibility/ConcreteRoom";

describe('Chain of responsibility tests', () => {
    it('returns from end of chain', () => {
        const roomA = new ConcreteRoom("fridge");
        const roomB = new ConcreteRoom();
        const roomC = new ConcreteRoom();
        roomB.nextRoom = roomA;
        roomC.nextRoom = roomB;
        expect(roomC.getStatus("fridge")).to.be.equal(Status.UP);
    });

    it('throws error when not in chain', () => {
        const roomA = new ConcreteRoom();
        const roomB = new ConcreteRoom();
        const roomC = new ConcreteRoom();
        roomB.nextRoom = roomA;
        roomC.nextRoom = roomB;
        expect(() => roomC.getStatus("fridge")).to.throw();
    });
});