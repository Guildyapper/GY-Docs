# Configuração

Use `/setup` uma vez após convidar o GuildYapper. A configuração define o tipo de servidor, região, cargos e canais que o GuildYapper usará posteriormente.

```text
/setup
```

## Convidar o GuildYapper

Use o convite padrão para uma configuração mais tranquila:

[Convidar o GuildYapper](https://discord.com/oauth2/authorize?client_id=1238194592982110248)

O GuildYapper usa Administrador por padrão para evitar falhas de configuração ao criar ou atualizar cargos, canais, logs, mensagens de inscrição, estruturas de Trial Server e outros recursos do Discord. Esta é a opção recomendada para a maioria dos servidores, especialmente se você quiser automação do Trial Server.

Se o seu servidor preferir conceder permissões manualmente, use o convite mínimo:

[Convidar o GuildYapper com permissões mínimas](https://discord.com/oauth2/authorize?client_id=1238194592982110248&permissions=277025639488&integration_type=0&scope=bot+applications.commands)

Com o convite mínimo, alguns recursos podem exibir erros de permissão do Discord até que você conceda as permissões ausentes ao cargo do bot ou às substituições de canal. Exemplos comuns incluem criar cargos, criar ou ler canais, criar convites, renomear membros, excluir mensagens, limpar canais de inscrição e remover membros de trial que falharam.

::: warning Administrador Necessário
Apenas um membro do Discord com permissão de Administrador pode executar `/setup`. Após a configuração, as ações administrativas do GuildYapper no dia a dia usam o cargo de oficial/admin configurado.
:::

## Permissões e Privacidade

O GuildYapper não tem acesso amplo para ler o texto normal das mensagens dos canais do Discord. O Discord trata o Conteúdo de Mensagem como um intent privilegiado que controla o acesso a campos de mensagem como conteúdo, embeds, anexos e componentes. O GuildYapper não tem esse intent privilegiado aprovado, portanto o Discord não envia texto comum de mensagens de canal a ele, a menos que você interaja diretamente com o bot de uma forma que forneça dados a ele.

O GuildYapper armazena as informações que usuários e oficiais fornecem diretamente para o produto, como inscrições, presença, detalhes de perfil/roster de membros, informações de equipamento, escolhas de configuração e dados relacionados ao fluxo do bot.

Leia a explicação do Discord aqui: [What are Privileged Intents?](https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-FAQ)

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela da primeira tela do `/setup` aqui.
  Caminho sugerido: `/screenshots/setup/setup-start.webp`
</div>

## O que a Configuração Faz

A configuração armazena a configuração básica do servidor e ativa o conjunto de comandos para o tipo de servidor selecionado.

1. Você seleciona a região.
2. Você seleciona o tipo de servidor.
3. Você seleciona o cargo de membro e o cargo de oficial/admin.
4. Você seleciona ou cria um canal de log do bot.
5. Para servidores Guild / Aliança e Comunidade, você configura a postagem do Guild Tracker.
6. Para servidores Guild / Aliança, você configura os nomes das guildas e canais de evento.
7. Para Trial Servers, o GuildYapper cria a estrutura de trial automaticamente.

::: info A Configuração Pode Ser Alterada Depois
A maioria das escolhas de configuração pode ser alterada com `/configure server`. Se o bot foi configurado para o tipo errado de servidor e você deseja uma reinicialização completa, remova o bot e convide-o novamente.
:::

## Regiões

A configuração suporta estas regiões e fusos horários:

| Região | Fuso horário usado pelo GuildYapper |
| --- | --- |
| EU | Europe/Berlin |
| NA | America/New_York |
| SA | America/Sao_Paulo |
| SEA | Asia/Singapore |
| KR | Asia/Seoul |
| JP | Asia/Tokyo |
| RU | Europe/Moscow |
| MENA | Europe/Istanbul |

::: warning Suporte de Região do Guild Tracker
Os comandos do Guild Tracker estão disponíveis para EU, NA e SA. RU, MENA, SEA, KR e JP ainda podem concluir a configuração, mas os comandos do Guild Tracker são ignorados ou desabilitados.
:::

## Tipos de Servidor

| Tipo de servidor | Escolha quando | Ferramentas principais |
| --- | --- | --- |
| Guild / Aliança | Seu Discord realiza Node War, GvG, Guild League ou outros eventos de guilda. | Inscrições, presença, roster, grupos, Guild Tracker, Yap, pontuações. |
| Comunidade | Seu Discord é um hub público ou comunitário em vez de um roster de uma guilda. | Guild Tracker, recrutamento, posts de merc, verificação, atualizações de tierlist, Yap. |
| Trial Server | Você quer um Discord dedicado para candidatos a trial. | Inscrição de trial, canais automáticos, histórico de trial, fluxo de encerramento de trial. |

Leia mais em [Tipos de Servidor](/pt/getting-started/server-types).

## Configuração Inicial Recomendada para uma Guilda

1. [Convide o GuildYapper](https://discord.com/oauth2/authorize?client_id=1238194592982110248).
2. Execute `/setup`.
3. Escolha sua região.
4. Escolha `Guild / Aliança`.
5. Selecione o cargo de membro que os membros regulares da guilda têm.
6. Selecione o cargo de oficial/admin que pode gerenciar o GuildYapper.
7. Selecione um canal de log para mudanças de membros, presença, inscrições e configuração.
8. Escolha um tipo de atualização do Guild Tracker.
9. Selecione um canal para as atualizações do Guild Tracker.
10. Adicione os nomes das guildas que pertencem à sua guilda ou aliança.
11. Revise `/help` e abra `/configure server`.

```text
/setup
/help
/configure server
```

::: tip Grupos Padrão
A configuração de Guild / Aliança cria grupos iniciais de Node War como Main, Defense e Flex. Você pode ajustá-los depois com `/configure parties`.
:::

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela do resumo de configuração concluído ou da visão geral do `/configure server`.
  Caminho sugerido: `/screenshots/setup/setup-complete.webp`
</div>

## Após a Configuração

As próximas ações úteis são:

```text
/configure server
/configure parties
/configure profiles
/configure class
/member missing
/signup nodewar
/premium
```

| Objetivo | Onde ir a seguir |
| --- | --- |
| Criar eventos | [Inscrições](/pt/features/signups) |
| Configurar comportamento de grupos e lista de espera | [Grupos e Lista de Espera](/pt/features/parties-and-waitlist) |
| Permitir que membros atualizem seu perfil | [Membros e Roster](/pt/bot/members-and-roster) |
| Ativar lembretes e automação | [Agendadores](/pt/bot/schedulers) |
| Verificar status de pagamento e trial | [Premium](/pt/premium) |

## Problemas Comuns

### "Servidor já configurado"

O servidor já possui configuração do GuildYapper. Use:

```text
/configure server
```

### O Guild Tracker está ausente

O Guild Tracker é suportado apenas para EU, NA e SA. Se a região do seu servidor for RU, MENA, SEA, KR ou JP, esses comandos não estão disponíveis.

### As pessoas erradas podem usar comandos

Verifique os cargos de membro e oficial/admin configurados em:

```text
/configure server
```

### Uma sessão de configuração expirou

Execute `/setup` novamente. As telas de configuração interativas podem expirar se ficarem sem uso por muito tempo.
