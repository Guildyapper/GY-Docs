# Guild Tracker

O Guild Tracker ajuda as comunidades a acompanhar a composição das guildas, histórico de guildas, histórico de jogadores e consistência nas regiões suportadas.

<div class="quick-links">
  <a href="https://guildyapper.com/guild-tracker/dashboard">Painel</a>
  <a href="https://guildyapper.com/guild-tracker/guilds">Guildas</a>
  <a href="https://guildyapper.com/guild-tracker/players">Jogadores</a>
</div>

## O que Faz

- Adiciona guildas à lista de guildas rastreadas.
- Mostra listas de guildas rastreadas por região e tipo.
- Mostra histórico de guildas.
- Mostra membros atuais de uma guilda.
- Mostra informações de consistência da guilda.
- Mostra histórico de jogadores e perfis de jogadores.
- Pode postar atualizações do tracker em um canal do Discord configurado.
- Alimenta as páginas públicas do Guild Tracker no site.

## Quem Pode Usar

Servidores Guild / Aliança e Comunidade podem usar comandos do Guild Tracker em regiões suportadas. Algumas ações de adição/configuração são voltadas para oficial/admin.

## Permissões e Configuração Necessárias

- A região do servidor deve ser EU, NA ou SA.
- Tipo de atualização e canal do Guild Tracker configurados em `/setup` ou `/configure server`.
- A guilda rastreada deve existir na lista do tracker antes de poder ser incluída em um filtro personalizado.

::: warning Regiões Não Suportadas
Os comandos do Guild Tracker não são suportados para as regiões de servidor RU, MENA, SEA, KR ou JP.
:::

## Comandos do Discord

```text
/guild add guildname:Exemplo guildtype:PVP region:EU
/guild list region:EU type:PVP
/guild history guild:Exemplo region:EU
/guild members guild:Exemplo region:EU
/guild consistency guild:Exemplo region:EU
/player history player:NomeDeFamília region:EU
/player profile player:NomeDeFamília region:EU
```

## Tipos de Atualização do Tracker

A postagem do tracker é configurada em `/configure server`.

| Configuração | Significado |
| --- | --- |
| Todos | Posta atualizações mais amplas do tracker. |
| Apenas PvP | Limita a postagem do tracker ao rastreamento focado em PvP. |
| Desabilitado | Mantém os comandos do tracker disponíveis mas para a postagem de atualizações. |

## Filtro de Guilda Personalizado

Use um filtro personalizado quando seu servidor se importa apenas com uma lista específica de guildas.

```text
/configure guildfilter file:guildas.txt
```

O arquivo enviado deve conter nomes de guildas, um por linha.

::: info Limites do Filtro
Mantenha os filtros do tracker personalizados com até 30 nomes de guildas. As guildas que ainda não estão na lista do tracker devem ser adicionadas primeiro com `/guild add`.
:::

## Visualizações no Site

O site fornece visualizações maiores para os dados do tracker:

- [Painel](https://guildyapper.com/guild-tracker/dashboard): visão geral ampla.
- [Guildas](https://guildyapper.com/guild-tracker/guilds): lista de guildas pesquisável e detalhes.
- [Jogadores](https://guildyapper.com/guild-tracker/players): lista de jogadores pesquisável e detalhes.

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela do painel do Guild Tracker.
  Caminho sugerido: `/screenshots/guild-tracker/dashboard.webp`
</div>

## Problemas Comuns

### Os comandos do Guild Tracker dizem que a região não é suportada

A região do seu servidor não é EU, NA ou SA. Altere a região apenas se o servidor foi configurado incorretamente.

### Uma guilda não está no filtro

Certifique-se de que a guilda está rastreada primeiro, depois faça upload do filtro personalizado novamente.

### Os dados do site e os resultados do comando do Discord diferem

Verifique se está usando a mesma região e a mesma grafia do nome da guilda.
