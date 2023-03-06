import MelloClient from "./MelloClient";

export default class Event {

    public name: string;
    public once: boolean;

    constructor(name: string, once: boolean) {
        this.name = name;
        this.once = once;
    }

    public async execute(client: MelloClient, ...args: any[]) {
        throw new Error("Event | Missing execute function in " + this.name);
    }
}