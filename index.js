const { WebhookClient } = require("discord.js");

const projectWebhooks = {};

// send a test message to each project with their name and webhook
const sendTestMessage = async () => {
  for (const [project, webhook] of Object.entries(projectWebhooks)) {
    const client = new WebhookClient({ id: webhook.id, token: webhook.token });
    await client.send(`Hello ${project}`);
    console.log("Sent message to", project);
  }
};

sendTestMessage();
