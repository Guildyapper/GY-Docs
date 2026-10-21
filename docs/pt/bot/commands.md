# Visão Geral dos Comandos do Discord

Os comandos do GuildYapper são slash commands. O Discord mostra apenas os comandos adequados para o seu tipo de servidor.

```text
/help
```

::: info Comece com Help
`/help` mostra uma visão geral dos comandos dentro do Discord e é a forma mais rápida de confirmar o que está disponível no seu servidor.
:::

## Comandos do Dia a Dia para Membros

Esses são os comandos com os quais a maioria dos membros interage.

```text
/member update
/member view member:@Membro
/attendance me
/yap
/addyap content:Sua mensagem
/scores menu
/premium
```

| Comando | O que faz |
| --- | --- |
| `/member update` | Abre o fluxo de atualização de membro para o seu próprio perfil no GuildYapper. |
| `/member view` | Mostra uma visão geral de equipamento/perfil de um membro. |
| `/attendance me` | Mostra seu próprio resumo de presença. |
| `/yap` | Posta um yap salvo aleatório quando o Yap está ativado. |
| `/addyap` | Adiciona uma nova mensagem yap se passar nas verificações de menção. |
| `/scores menu` | Abre o menu de pontuações no Discord. |
| `/premium` | Mostra o status do Premium, trial, loja e opções de assinatura. |

## Comandos de Oficiais

Oficiais/admins usam esses para configurar e operar o servidor.

```text
/configure server
/configure parties
/configure profiles
/configure class
/configure member member:@Membro
/configure scheduler
/signup nodewar
/signup gvg
/signup gleague
/signup custom
/signup list
/attendance overview
/attendance member member:@Membro
/attendance export
/member list sorting:gearscore
/member missing
/scores upload file:pontuacao.png
```

::: warning Permissões
As ações de oficial requerem o cargo de oficial/admin configurado. Se as pessoas erradas podem ou não podem usar comandos, verifique `/configure server`.
:::

## Comandos do Tracker

Os comandos do Guild Tracker estão disponíveis em regiões suportadas.

```text
/guild add guildname:Exemplo guildtype:PVP region:EU
/guild list region:EU type:PVP
/guild history guild:Exemplo region:EU
/guild members guild:Exemplo region:EU
/guild consistency guild:Exemplo region:EU
/player history player:NomeDeFamília region:EU
/player profile player:NomeDeFamília region:EU
```

::: warning Limite de Região
Os comandos do Guild Tracker não são suportados para as regiões de servidor RU, MENA, SEA, KR ou JP.
:::

## Comandos de Comunidade

Servidores de comunidade podem usar ferramentas de coordenação pública.

```text
/recruiting register guildname:Exemplo dc-server-link:https://discord.gg/exemplo gs-requirement:700
/recruiting update
/recruiting remove
/merc lf-signup
/verify post
/tierlist updates announce:false
```

## Comandos do Trial Server

Os Trial Servers recebem comandos específicos de trial.

```text
/trial signup
/trial configure
/trial end result:passed reason:Boa adequação trialee:NomeDeFamília
```

## Referência Completa de Comandos

Para uma lista completa agrupada por área, veja [Comandos Slash](/pt/reference/commands).
