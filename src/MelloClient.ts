import { Client } from "discord.js";
import Constants from "./Constants";
import dotenv from "dotenv";
import fs from "fs";
import Event from "./Event";

export default class MelloClient extends Client {

    constructor() {
        super({ intents: Constants.Intents })
        dotenv.config();
        this.login(process.env.TOKEN);
        this.registerEvents();
    }

    private registerEvents() {
        const events = fs.readdirSync("src/events");
        for (const event of events) {
            const evt: Event = new (require("./events/" + event).default);
            evt.once ? this.once(evt.name, evt.execute.bind(null, this)) : this.on(evt.name, evt.execute.bind(null, this));
        }
    }
}