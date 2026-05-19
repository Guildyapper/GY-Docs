# Comandos Slash

Esta página lista os slash commands voltados ao usuário encontrados no bot do Discord do GuildYapper. O Discord pode mostrar menos comandos dependendo do tipo do seu servidor.

::: info O Tipo de Servidor Importa
Os modos Guild / Aliança, Comunidade e Trial Server não compartilham exatamente o mesmo conjunto de comandos. Se um comando estiver ausente, verifique `/configure server`.
:::

## Configuração e Ajuda

```text
/setup
/help
/premium
```

| Comando | Uso |
| --- | --- |
| `/setup` | Configuração inicial do servidor. Permissão de Administrador necessária. |
| `/help` | Abre o menu de ajuda de comandos. |
| `/premium` | Mostra status do Premium, trial, loja, assinatura e botões de doação. |

## Configuração

```text
/configure server
/configure nwparty
/configure class
/configure member member:@Membro
/configure scheduler
/configure guildfilter file:guildas.txt
```

| Comando | Uso |
| --- | --- |
| `/configure server` | Tipo de servidor, região, cargos, canais, Yap, tracker, nomes de guildas e comportamento do Node War. |
| `/configure nwparty` | Grupos de Node War, limites, prioridade, overflow, alvos e atribuições. |
| `/configure class` | Prioridades de classe/especialização e limites de prioridade de tipo de classe. |
| `/configure member` | Configuração individual de membro. |
| `/configure scheduler` | Agendas de lembrete e automação. |
| `/configure guildfilter` | Upload de arquivo de filtro personalizado do Guild Tracker. |

## Inscrições

```text
/signup nodewar date:19.05.2026 max-attendance:55
/signup gvg date:19.05.2026 time:20:00 max-attendance:40 enemy-guild:GuildaInimiga match-type:Ranked
/signup gleague date:19.05.2026 start-time:20:00 end-time:22:00 role:@Guilda
/signup custom type:Treino date:19.05.2026 time:20:00 max-attendance:30
/signup list
```

| Comando | Uso |
| --- | --- |
| `/signup nodewar` | Criar uma inscrição de Node War. |
| `/signup gvg` | Criar uma inscrição de GvG ranqueado ou de treino. |
| `/signup gleague` | Criar intervalos de tempo de inscrição de Guild League. |
| `/signup custom` | Criar uma inscrição de evento personalizado. |
| `/signup list` | Listar e gerenciar inscrições existentes. |

## Presença

```text
/attendance me
/attendance member member:@Membro
/attendance overview
/attendance export
```

| Comando | Uso |
| --- | --- |
| `/attendance me` | Ver sua própria presença. |
| `/attendance member` | Ver a presença de um membro. |
| `/attendance overview` | Ver visão geral de presença do servidor. |
| `/attendance export` | Exportar presença para CSV. |

## Membros

```text
/member update
/member view member:@Membro
/member list sorting:gearscore
/member missing
```

| Comando | Uso |
| --- | --- |
| `/member update` | Atualizar seus próprios detalhes de membro. |
| `/member view` | Ver as informações de equipamento/perfil de um membro. |
| `/member list` | Listar membros ordenados por gearscore, classe ou guilda. |
| `/member missing` | Mencionar ou listar membros que ainda não se registraram. |

## Pontuações

```text
/scores menu
/scores upload file:pontuacao.png
```

| Comando | Uso |
| --- | --- |
| `/scores menu` | Abrir o menu de pontuações no Discord. |
| `/scores upload` | Fazer upload de capturas de tela de pontuação de guerra do BDO. |

## Guild Tracker

```text
/guild add guildname:Exemplo guildtype:PVP region:EU
/guild list region:EU type:PVP
/guild history guild:Exemplo region:EU
/guild members guild:Exemplo region:EU
/guild consistency guild:Exemplo region:EU
/player history player:NomeDeFamília region:EU
/player profile player:NomeDeFamília region:EU
```

| Comando | Uso |
| --- | --- |
| `/guild add` | Adicionar uma guilda para rastrear. |
| `/guild list` | Listar guildas rastreadas. |
| `/guild history` | Ver histórico da guilda. |
| `/guild members` | Ver lista atual de membros de uma guilda. |
| `/guild consistency` | Ver informações de consistência da guilda. |
| `/player history` | Ver histórico de guildas do jogador. |
| `/player profile` | Ver perfil de um jogador. |

::: warning Limite de Região do Tracker
Os comandos do Guild Tracker estão disponíveis para EU, NA e SA.
:::

## Yap

```text
/addyap content:Sua mensagem yap
/yap
```

| Comando | Uso |
| --- | --- |
| `/addyap` | Adicionar uma nova mensagem yap. |
| `/yap` | Postar um yap aleatório. |

## Comandos de Comunidade

```text
/recruiting register guildname:Exemplo dc-server-link:https://discord.gg/exemplo gs-requirement:700
/recruiting update
/recruiting remove
/merc lf-signup
/verify post
/tierlist updates announce:false
/tierlist retire-guild guildname:Exemplo region:EU
```

| Comando | Uso |
| --- | --- |
| `/recruiting register` | Registrar uma guilda no navegador de recrutamento. |
| `/recruiting update` | Atualizar sua entrada de recrutamento da guilda. |
| `/recruiting remove` | Remover sua entrada de recrutamento da guilda. |
| `/merc lf-signup` | Postar uma inscrição de looking-for-merc. |
| `/verify post` | Postar uma mensagem de verificação. |
| `/tierlist updates` | Ver ou anunciar atualizações de tierlist. |
| `/tierlist retire-guild` | Retirar uma guilda das atualizações de tierlist no Discord. |

## Comandos de Trial

```text
/trial signup
/trial configure
/trial end result:passed reason:Boa adequação trialee:NomeDeFamília
```

| Comando | Uso |
| --- | --- |
| `/trial signup` | Reenviar a mensagem de inscrição de trial. |
| `/trial configure` | Reconfigurar as configurações do Trial Server. |
| `/trial end` | Encerrar um trial como aprovado ou reprovado com um motivo. |

## Links Rápidos do Site

<div class="quick-links">
  <a href="https://guildyapper.com/profile">Perfil</a>
  <a href="https://guildyapper.com/management/signups">Inscrições</a>
  <a href="https://guildyapper.com/management/roster">Roster</a>
  <a href="https://guildyapper.com/management/scores">Gerenciamento de Pontuações</a>
  <a href="https://guildyapper.com/scores">Pontuações Pessoais</a>
  <a href="https://guildyapper.com/guild-tracker/dashboard">Guild Tracker</a>
</div>
