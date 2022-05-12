import { uptime } from "process";

export interface Room
{
    get nextRoom(): Room;
    set nextRoom(value: Room);
    getStatus(id: string): Status;
}

export enum Status{
    UP,
    DOWN
}