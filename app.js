import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway("MjgwNTE0MDk4NTk5NDI4MDk3.GQmMoh.8BI55MZytGHrBhWs1emJ1gYwYj22ErbPWsPsHQ");

gateway.on("message", (m) => {
  if (m.channel_id === "927748201107320852") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };
    // let image = m.image ? m.image : m.attachments[0].url;

    client.sendWebhook(
      "https://discord.com/api/webhooks/1026842503623745637/jzgOolxRsSOL_5Vc23Q0C8-iBQ2QcIDuNU4gO5m91GOjWCVYvi8Q0Ri3_ClriBfKdJgw",
      content //+ "\n" + image
    );
  }
});