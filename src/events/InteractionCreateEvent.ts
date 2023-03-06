import { Interaction } from "discord.js";
import Event from "../Event";
import MelloClient from "../MelloClient";

export default class InteractionCreateEvent extends Event {

    constructor() {
        super("interactionCreate", false);
    }

    public async execute(client: MelloClient, interaction: Interaction): Promise<void> {
        console.log(interaction);
    }
}