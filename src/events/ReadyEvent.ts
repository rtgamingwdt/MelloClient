import Event from "../Event";
import MelloClient from "../MelloClient";

export default class ReadyEvent extends Event {

    constructor() {
        super("ready", true);
    }

    public async execute(client: MelloClient): Promise<void> {
        console.info(client.user!.username + " is online!");
    }
}