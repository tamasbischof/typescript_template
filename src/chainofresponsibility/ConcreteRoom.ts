import { Room, Status } from "./Room";

export class ConcreteRoom implements Room
{
    private _statuses: Map<string, Status> = new Map<string, Status>();
    private _nextRoom: Room;

    public get nextRoom(): Room {
        return this._nextRoom;
    }

    public set nextRoom(value: Room)
    {
        this._nextRoom = value;
    }

    constructor(...statuses: string[])
    {
        for (const status of statuses)
        {
            this._statuses.set(status, Status.UP);
        }
    }

    getStatus(id: string): Status {
        const value = this._statuses.get(id);
        if (value !== undefined)
        {
            return value;
        }
        else
        {
            const next = this.nextRoom;
            if (next)
            {
                return this.nextRoom.getStatus(id);
            }
            else
            {
                throw new Error("Device not found!");
            }
        }
    }

}