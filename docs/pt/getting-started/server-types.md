# Tipos de Servidor

O GuildYapper altera os comandos disponíveis com base no tipo de servidor selecionado durante o `/setup`. Isso evita que um Discord de guilda fique sobrecarregado com ferramentas exclusivas da comunidade, e mantém um Discord de trial focado em trials.

```text
/setup
/configure server
```

## Guild / Aliança

Use para um Discord de guilda ou aliança que realiza eventos e gerencia um roster de membros.

### O que Desbloqueia

- Inscrições de Node War, GvG, Guild League e personalizados.
- Histórico de presença e inscrições.
- Gerenciamento de roster e perfil de membros.
- Grupos de Node War, comportamento de lista de espera e prioridade de classe.
- Pesquisa e atualizações do Guild Tracker em regiões suportadas.
- Pontuações e envios de pontuação.
- Yap.
- Automação e personalização do Premium.

### Quem Pode Usar

Membros com o cargo de membro configurado podem usar as ferramentas regulares de membros. Oficiais/admins com o cargo de oficial configurado podem gerenciar inscrições, configurações do servidor, grupos, rosters, agendas e outras ferramentas administrativas.

### Melhor Para

Guildas que precisam de um lugar para:

1. Planejar guerras.
2. Lidar com listas de espera.
3. Manter o roster organizado.
4. Revisar histórico de presença e pontuações.
5. Dar aos membros visibilidade de perfil e pontuação no site.

## Comunidade

Use para um Discord de comunidade pública, hub regional ou servidor de comunidade PvP do BDO.

### O que Desbloqueia

- Pesquisa do Guild Tracker.
- Comandos do navegador de recrutamento.
- Comandos de post de inscrição de merc.
- Postagem de mensagem de verificação.
- Ferramentas de atualização de tierlist.
- Yap.

### O que Não Inclui

Servidores de comunidade não recebem comandos de gerenciamento de eventos de guilda como `/signup nodewar` ou ferramentas de presença de roster.

::: info Servidores de Comunidade são Focados em Ferramentas Públicas
O modo Comunidade é destinado a servidores que ajudam muitas guildas ou jogadores, não um roster privado de uma guilda.
:::

## Trial Server

Use apenas para um Discord dedicado a trials.

### O que Desbloqueia

- Cargos automáticos de TrialMaster e Trialee.
- Mensagem de inscrição de trial.
- Canais privados de trial para candidatos.
- Histórico de trial.
- Fluxo de encerramento de trial com resultados aprovado/reprovado.
- Comandos de pesquisa de jogador e guilda.

### O que a Configuração Cria

A configuração do Trial Server cria:

| Tipo | Criado pela configuração |
| --- | --- |
| Cargos | `TrialMaster`, `Trialee` |
| Categorias | `Staff`, `Trialee`, `Trials`, `Archive` |
| Canais de texto | `signup`, `trial-history`, `staff` |
| Canais de voz | `Staff`, `General`, `GroupFights-1`, `GroupFights-2` |
| Mensagem | Uma mensagem de Trial Signup com um botão |

::: warning Use um Discord de Trial Novo
A configuração do Trial Server cria cargos, canais, categorias, permissões e um convite. Use-a em um Discord dedicado novo sempre que possível, e prefira o convite padrão do bot em vez do convite com permissões mínimas.
:::

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela do layout de canais do Trial Server gerado.
  Caminho sugerido: `/screenshots/trials/trial-server-layout.webp`
</div>

## Alterando o Tipo de Servidor Depois

Use `/configure server` para visualizar e alterar o tipo de servidor. Mudar para o modo Guild / Aliança cria configurações de classe padrão e grupos de Node War se estiverem ausentes.

::: warning Cuidado com Mudanças de Tipo de Servidor
Alterar o tipo de servidor afeta quais comandos o GuildYapper sincroniza com o Discord. Se os usuários disserem que os comandos desapareceram, verifique o tipo de servidor atual primeiro.
:::
