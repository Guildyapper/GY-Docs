# Tierlists e Estatísticas

O GuildYapper possui páginas públicas no site para tierlists de guildas, tierlists de classes, guerras de guildas, pontuações da Arena de Solare, streams, popularidade de classes e desempenho de classes.

<div class="quick-links">
  <a href="https://guildyapper.com/tierlist">Tierlist NW</a>
  <a href="https://guildyapper.com/class-tierlist">Tierlist de Classes</a>
  <a href="https://guildyapper.com/guildwars">Guerras de Guildas</a>
  <a href="https://guildyapper.com/wars/solare">Navegador AOS</a>
  <a href="https://guildyapper.com/wars/streams">Streams</a>
  <a href="https://guildyapper.com/class-statistics">Popularidade de Classes</a>
  <a href="https://guildyapper.com/class-performance">Desempenho de Classes</a>
</div>

## O que Faz

- Mostra tierlists de guildas/alianças por região e contexto de tierlist.
- Mostra entradas de tierlist de classe/especialização.
- Mostra histórico de atualizações de tierlist e metodologia onde disponível.
- Mostra páginas de GvG ranqueado/Guerras de Guilda futuras e passadas.
- Mostra pontuações de partidas e estatísticas de classe/jogador da Arena de Solare.
- Mostra streams com palavras-chave relevantes de PvP.
- Mostra visualizações de popularidade e desempenho de classes.

## Quem Pode Usar

A maioria dessas páginas é pública. As ferramentas de edição de admin estão disponíveis apenas para usuários com as permissões de admin relevantes.

## Permissões e Configuração Necessárias

- A navegação pública não requer um servidor Guild / Aliança.
- A edição de tierlist requer permissões de admin de tierlist.
- A edição de tierlist de classes requer permissões de admin de tierlist de classes.
- Os dados de Guerras de Guilda dependem de inscrições e resultados de GvG ranqueado.
- O desempenho de classes depende dos dados de pontuação/combate disponíveis.

## Tierlists de Guildas

Use a [Tierlist NW](https://guildyapper.com/tierlist) para navegar por alianças ativas, tiers, histórico de atualizações e metodologia onde presente.

Os servidores de comunidade também podem usar:

```text
/tierlist updates announce:false days:7
/tierlist retire-guild guildname:Exemplo region:EU
```

::: info Contextos de Tierlist
As tierlists podem ser delimitadas por contextos como tiers de cerco ou cap. Use os filtros do site para garantir que está visualizando a ladder pretendida.
:::

## Popularidade e Desempenho de Classes

| Página | Use para |
| --- | --- |
| [Popularidade de Classes](https://guildyapper.com/class-statistics) | Visualizações de população de classes, divisão de especialização e tendências. |
| [Desempenho de Classes](https://guildyapper.com/class-performance) | Comparar classes por métricas de desempenho derivadas de pontuação e combate. |

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela da visão geral de desempenho de classes.
  Caminho sugerido: `/screenshots/stats/class-performance.webp`
</div>

## Guerras de Guildas e AOS

- [Guerras de Guildas](https://guildyapper.com/guildwars) mostra informações de GvG ranqueado.
- [Navegador AOS](https://guildyapper.com/wars/solare) mostra pontuações de partidas e visualizações de classe/jogador da Arena de Solare.
- [Streams](https://guildyapper.com/wars/streams) exibe streams com títulos relevantes de PvP como Nodewar, NW, AOS ou RBF.

## Problemas Comuns

### Um GvG ranqueado está ausente

Certifique-se de que a inscrição de GvG foi criada como ranqueada e fechada com um resultado.

### Um stream não aparece

O título do stream precisa de uma palavra-chave relevante de PvP.

### As estatísticas de classes parecem incompletas

As estatísticas dependem dos dados de pontuação e combate disponíveis para os filtros selecionados.
