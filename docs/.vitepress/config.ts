import { defineConfig } from "vitepress";

export default defineConfig({
  title: "GuildYapper Docs",
  description: "User guides for setting up and running GuildYapper.",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: "https://docs.guildyapper.com",
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:site_name", content: "GuildYapper Docs" }],
    ["meta", { property: "og:type", content: "website" }],
  ],
  themeConfig: {
    siteTitle: "GuildYapper Docs",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Guide", link: "/" },
      { text: "Setup", link: "/getting-started/setup" },
      { text: "Features", link: "/features/signups" },
      { text: "Commands", link: "/reference/commands" },
      { text: "GuildYapper", link: "https://guildyapper.com" },
    ],
    sidebar: [
      {
        text: "Start Here",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Setup", link: "/getting-started/setup" },
          { text: "Server Types", link: "/getting-started/server-types" },
          { text: "Website Overview", link: "/website/overview" },
        ],
      },
      {
        text: "Discord Bot",
        items: [
          { text: "Command Overview", link: "/bot/commands" },
          { text: "Members and Roster", link: "/bot/members-and-roster" },
          { text: "Configuration", link: "/bot/configuration" },
          { text: "Schedulers", link: "/bot/schedulers" },
        ],
      },
      {
        text: "Event Management",
        items: [
          { text: "Signups", link: "/features/signups" },
          { text: "Attendance", link: "/features/attendance" },
          { text: "Parties and Waitlist", link: "/features/parties-and-waitlist" },
          { text: "Scores", link: "/features/scores" },
        ],
      },
      {
        text: "Tracking and Public Tools",
        items: [
          { text: "Guild Tracker", link: "/features/guild-tracker" },
          { text: "Tierlists and Stats", link: "/features/tierlists-and-stats" },
        ],
      },
      {
        text: "Community Tools",
        items: [
          { text: "Yap", link: "/features/yap" },
          { text: "Recruiting, Mercs, Verify", link: "/features/community-tools" },
          { text: "Trial Servers", link: "/features/trial-servers" },
        ],
      },
      {
        text: "Premium and Reference",
        items: [
          { text: "Premium", link: "/premium" },
          { text: "Slash Commands", link: "/reference/commands" },
        ],
      },
    ],
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/x2nKYuu2Z2" },
    ],
    footer: {
      message: "GuildYapper documentation for Discord server admins and members.",
    },
  },
});
