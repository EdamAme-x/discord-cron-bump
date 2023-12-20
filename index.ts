import {
  Hono
} from "https://deno.land/x/hono@v3.0.0/mod.ts";
const channelId = "1176797208922820608";
const auth = (Deno.args[0] ?? (Deno.env.get("auth") ?? 0)).toString();
console.log(`[@] ${channelId} : by ${auth}`);

const app = new Hono();

app.get("/", (c) => c.text("CRON SERVER"));
fetch("https://discord.com/api/v9/channels/" + channelId + "/messages", {
  "headers": {
      "accept": "*/*",
      "accept-language": "ja,en-US;q=0.9,en;q=0.8,ur;q=0.7,ig;q=0.6,ti;q=0.5,zh-CN;q=0.4,zh;q=0.3,sl;q=0.2,it;q=0.1",
      "authorization": auth,
      "content-type": "application/json",
      "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Chrome OS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-debug-options": "bugReporterEnabled",
      "x-discord-locale": "ja",
      "x-discord-timezone": "Asia/Tokyo",
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"mobile_network_type\":\"wifi\",\"content\":\"" + "定期話題盛り上げBOTが起動しました！ TIME:" + Date.now() + "\", \"tts\":false,\"flags\":0}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

Deno.cron("WADAI1", "0 */6 * * *", () => {
  const content = Math.random() > 0.5 ? "今皆何してる？" : "ねむいかもー"
  fetch("https://discord.com/api/v9/channels/" + channelId + "/messages", {
      "headers": {
          "accept": "*/*",
          "accept-language": "ja,en-US;q=0.9,en;q=0.8,ur;q=0.7,ig;q=0.6,ti;q=0.5,zh-CN;q=0.4,zh;q=0.3,sl;q=0.2,it;q=0.1",
          "authorization": auth,
          "content-type": "application/json",
          "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Chrome OS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-debug-options": "bugReporterEnabled",
          "x-discord-locale": "ja",
          "x-discord-timezone": "Asia/Tokyo",
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "{\"mobile_network_type\":\"wifi\",\"content\":\"" + content + "\", \"tts\":false,\"flags\":0}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
  });
})

Deno.cron("YORU1", "0 7 * * *", () => {
  const content = Math.random() > 0.45 ? "そろそろ寝るわおやすみ" : "全然寝れない おやすみ"
  fetch("https://discord.com/api/v9/channels/" + channelId + "/messages", {
      "headers": {
          "accept": "*/*",
          "accept-language": "ja,en-US;q=0.9,en;q=0.8,ur;q=0.7,ig;q=0.6,ti;q=0.5,zh-CN;q=0.4,zh;q=0.3,sl;q=0.2,it;q=0.1",
          "authorization": auth,
          "content-type": "application/json",
          "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Chrome OS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-debug-options": "bugReporterEnabled",
          "x-discord-locale": "ja",
          "x-discord-timezone": "Asia/Tokyo",
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "{\"mobile_network_type\":\"wifi\",\"content\":\"" + content + "\", \"tts\":false,\"flags\":0}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
  });
})

Deno.cron("ASA1", "0 15 * * *", () => {
  const content = Math.random() > 0.5 ? "おはよー" : "おはよ♡"
  fetch("https://discord.com/api/v9/channels/" + channelId + "/messages", {
      "headers": {
          "accept": "*/*",
          "accept-language": "ja,en-US;q=0.9,en;q=0.8,ur;q=0.7,ig;q=0.6,ti;q=0.5,zh-CN;q=0.4,zh;q=0.3,sl;q=0.2,it;q=0.1",
          "authorization": auth,
          "content-type": "application/json",
          "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Chrome OS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-debug-options": "bugReporterEnabled",
          "x-discord-locale": "ja",
          "x-discord-timezone": "Asia/Tokyo",
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "{\"mobile_network_type\":\"wifi\",\"content\":\"" + content + "\", \"tts\":false,\"flags\":0}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
  });
})

Deno.cron("NEWS1", "0 */2 * * *", () => {
  const content = `
${Math.random() > 0.5 ? "これおもろ" : "これえぐくね"}
${getNews()}
`
  fetch("https://discord.com/api/v9/channels/" + channelId + "/messages", {
      "headers": {
          "accept": "*/*",
          "accept-language": "ja,en-US;q=0.9,en;q=0.8,ur;q=0.7,ig;q=0.6,ti;q=0.5,zh-CN;q=0.4,zh;q=0.3,sl;q=0.2,it;q=0.1",
          "authorization": auth,
          "content-type": "application/json",
          "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Chrome OS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-debug-options": "bugReporterEnabled",
          "x-discord-locale": "ja",
          "x-discord-timezone": "Asia/Tokyo",
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "{\"mobile_network_type\":\"wifi\",\"content\":\"" + content + "\", \"tts\":false,\"flags\":0}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
  });
})

async function getNews() {
  // API Keyは自由に使ってOKだけど https://newsapi.org から取得したほうが制限なしで高速
  const resp = fetch("https://newsapi.org/v2/top-headlines?country=jp&apiKey=3a7fcb90a7f645a9bec74e645130af0b", {
      "headers": {
          "accept": "*/*",
          "accept-language": "ja,en-US;q=0.9,en;q=0.8,ur;q=0.7,ig;q=0.6,ti;q=0.5,zh-CN;q=0.4,zh;q=0.3,sl;q=0.2,it;q=0.1",
          "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Chrome OS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest"
      },
      "referrer": "https://newsapi.org/s/japan-news-api",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "include"
  })

  const data = resp.json();

  return data["articles"][Math.floor(data["articles"].length * Math.random())]["url"];
}

Deno.serve(app.fetch)