import { defineConfig } from "vitepress";

const discordIcon =
  '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20.317 4.369A19.791 19.791 0 0 0 15.36 2.83a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.249.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.958 1.54.07.07 0 0 0-.032.027C.533 8.822-.32 13.14.099 17.403a.083.083 0 0 0 .032.057 19.9 19.9 0 0 0 6.073 3.07.078.078 0 0 0 .084-.027c.467-.638.883-1.312 1.237-2.02a.077.077 0 0 0-.043-.106 13.16 13.16 0 0 1-1.872-.891.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.1.246.199.373.293a.077.077 0 0 1-.007.128 12.299 12.299 0 0 1-1.873.89.077.077 0 0 0-.041.107c.36.708.776 1.382 1.236 2.019a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.083-3.07.077.077 0 0 0 .032-.055c.5-4.932-.838-9.215-3.549-13.007a.061.061 0 0 0-.031-.029ZM8.02 14.807c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.955 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419Z"/></svg>';

const githubIcon =
  '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.833 2.808 1.304 3.493.997.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.805 5.624-5.477 5.92.43.372.814 1.103.814 2.222 0 1.604-.015 2.897-.015 3.292 0 .322.216.696.825.578C20.565 22.092 24 17.597 24 12.297c0-6.627-5.373-12-12-12Z"/></svg>';

const enSidebar = [
  {
    text: "Start Here",
    items: [
      { text: "Introduction", link: "/" },
      { text: "Setup", link: "/getting-started/setup" },
      { text: "Server Types", link: "/getting-started/server-types" },
      { text: "Website Overview", link: "/website/overview" },
      { text: "Server Settings (Website)", link: "/website/server-settings" },
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
      { text: "Signup Profiles", link: "/features/signup-profiles" },
      { text: "Attendance", link: "/features/attendance" },
      { text: "Parties and Waitlist", link: "/features/parties-and-waitlist" },
      { text: "Draft Signups", link: "/features/draft" },
      { text: "Scores", link: "/features/scores" },
      { text: "VOD Reviews", link: "/features/vod-reviews" },
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
];

const ptSidebar = [
  {
    text: "Comece Aqui",
    items: [
      { text: "Introdução", link: "/pt/" },
      { text: "Configuração", link: "/pt/getting-started/setup" },
      { text: "Tipos de Servidor", link: "/pt/getting-started/server-types" },
      { text: "Visão Geral do Site", link: "/pt/website/overview" },
    ],
  },
  {
    text: "Bot do Discord",
    items: [
      { text: "Visão Geral dos Comandos", link: "/pt/bot/commands" },
      { text: "Membros e Roster", link: "/pt/bot/members-and-roster" },
      { text: "Configuração", link: "/pt/bot/configuration" },
      { text: "Agendadores", link: "/pt/bot/schedulers" },
    ],
  },
  {
    text: "Gerenciamento de Eventos",
    items: [
      { text: "Inscrições", link: "/pt/features/signups" },
      { text: "Presença", link: "/pt/features/attendance" },
      { text: "Grupos e Lista de Espera", link: "/pt/features/parties-and-waitlist" },
      { text: "Pontuações", link: "/pt/features/scores" },
    ],
  },
  {
    text: "Rastreamento e Ferramentas Públicas",
    items: [
      { text: "Guild Tracker", link: "/pt/features/guild-tracker" },
      { text: "Tierlists e Estatísticas", link: "/pt/features/tierlists-and-stats" },
    ],
  },
  {
    text: "Ferramentas da Comunidade",
    items: [
      { text: "Yap", link: "/pt/features/yap" },
      { text: "Recrutamento, Mercs, Verificação", link: "/pt/features/community-tools" },
      { text: "Servidores de Trial", link: "/pt/features/trial-servers" },
    ],
  },
  {
    text: "Premium e Referência",
    items: [
      { text: "Premium", link: "/pt/premium" },
      { text: "Comandos Slash", link: "/pt/reference/commands" },
    ],
  },
];

export default defineConfig({
  title: "GuildYapper Docs",
  description: "User guides for setting up and running GuildYapper.",
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
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/" },
          { text: "Setup", link: "/getting-started/setup" },
          { text: "Features", link: "/features/signups" },
          { text: "Commands", link: "/reference/commands" },
          { text: "GuildYapper", link: "https://guildyapper.com" },
        ],
        sidebar: enSidebar,
      },
    },
    pt: {
      label: "Português",
      lang: "pt-BR",
      link: "/pt/",
      themeConfig: {
        nav: [
          { text: "Guia", link: "/pt/" },
          { text: "Configuração", link: "/pt/getting-started/setup" },
          { text: "Recursos", link: "/pt/features/signups" },
          { text: "Comandos", link: "/pt/reference/commands" },
          { text: "GuildYapper", link: "https://guildyapper.com" },
        ],
        sidebar: ptSidebar,
      },
    },
  },
  themeConfig: {
    siteTitle: "GuildYapper Docs",
    logo: "/favicon.ico",
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: { svg: discordIcon }, link: "https://discord.gg/x2nKYuu2Z2" },
      { icon: { svg: githubIcon }, link: "https://github.com/Guildyapper/GY-Docs" },
    ],
    footer: {
      message:
        '<a href="https://discord.gg/x2nKYuu2Z2">Discord</a> · <a href="https://github.com/Guildyapper/GY-Docs">GitHub</a> · <a href="https://guildyapper.com/privacy">Privacy Policy</a> · <a href="https://guildyapper.com/tos">Terms of Service</a> · <a href="https://discord.gg/x2nKYuu2Z2">Support</a> · <a href="https://ko-fi.com/guildyapper">Donate</a>',
      copyright: "© GuildYapper. Documentation licensed under CC BY 4.0.",
    },
  },
});
