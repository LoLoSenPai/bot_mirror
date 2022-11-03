import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway("MjgwNTE0MDk4NTk5NDI4MDk3.GQmMoh.8BI55MZytGHrBhWs1emJ1gYwYj22ErbPWsPsHQ");

gateway.on("message", (m) => {
  // Copy messages from Soultools server to Soloff server
  if (m.channel_id === "927748201107320852") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };
    // let image = m.image ? m.image : m.attachments[0].url;

    client.sendWebhook(
      "https://discord.com/api/webhooks/1026842503623745637/jzgOolxRsSOL_5Vc23Q0C8-iBQ2QcIDuNU4gO5m91GOjWCVYvi8Q0Ri3_ClriBfKdJgw",
      content //+ "\n" + image
    );
  }
  // Copy messages from Fractal server to Rabbit server
  if (m.channel_id === "1037374542777176156") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/1037375634562891806/u0OgYZ4W_EEuBFbc91v1NB85E-on4LzGDUyhLsePFeqhdH6tf1-S6qWEq3u7xo_UZCJZ",
      content
    );
  }
  // Copy messages from Gorilla server to Rabbit server
  if (m.channel_id === "993633368371638292") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/1037501311157014548/wO8n8D9YeIntHALslU0tSViN0ddNLZO_ZrtSfUphFfqSwbEydUj8AJY7Y4djF_ElRHfU",
      content
    );
  }
});
