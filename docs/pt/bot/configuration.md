# Configuração

A maioria das configurações do servidor fica em `/configure`. Use após `/setup` para ajustar o GuildYapper para sua guilda.

```text
/configure server
/configure nwparty
/configure class
/configure member member:@Membro
/configure scheduler
/configure guildfilter file:guildas.txt
```

## O que Faz

A configuração controla a identidade do servidor, permissões, comportamento do Guild Tracker, configurações do Yap, nomes de guildas, canais de evento, comportamento da lista de espera, lógica de grupos, prioridade de classe, substituições de membros e agendadores.

## Quem Pode Usar

A configuração é para oficiais/admins com o cargo de oficial/admin configurado.

::: warning Alterações Afetam Fluxos em Uso
Alterar cargos, canais, modo de lista de espera, nomes de guildas ou configurações de grupos pode afetar futuras inscrições e visualizações de roster. Faça pequenas alterações e verifique a próxima inscrição antes de modificar mais.
:::

## Configuração do Servidor

```text
/configure server
```

A tela de configuração do servidor tem várias abas.

| Aba | O que controla |
| --- | --- |
| General | Tipo de servidor, região, cargo de membro, cargo de oficial/admin, canal de log, Yap, cooldown do Yap, perfil personalizado do bot. |
| Guild Tracker | Tipo de atualização do Tracker, canal de atualização, filtro de guilda personalizado. |
| Guild | Nomes das guildas, canal de férias, canal de atualização de perfil, modo de renomeação. |
| Nodewar | Canal de voz do Node War, modo de ordenação de inscrição, modo de lista de espera, valores visíveis de inscrição, modo justo de lista de espera, notificações de movimentação, troca de grupos. |

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela do `/configure server`.
  Caminho sugerido: `/screenshots/configuration/server-config.webp`
</div>

## Configurações do Yap

A configuração do servidor pode ativar ou desativar o Yap, bloquear todas as menções em novos yaps e definir um cooldown personalizado. O cooldown padrão é de 3 minutos, a menos que seja alterado.

## Configurações do Guild Tracker

A aba do tracker permite que você decida o que o GuildYapper posta:

- Todas as atualizações de guildas rastreadas.
- Atualizações focadas em PvP.
- Postagem do tracker desativada.

Você também pode usar um filtro de guilda personalizado para que apenas as guildas rastreadas selecionadas sejam postadas.

::: info Filtro de Guilda Personalizado
`/configure guildfilter` faz upload de um arquivo de texto. Mantenha até 30 nomes de guildas e certifique-se de que as guildas já existem na lista do tracker.
:::

## Nomes das Guildas

Os nomes das guildas são usados quando os membros se registram e quando o GuildYapper agrupa os dados dos membros para inscrições e visualizações de roster. Uma guilda ou aliança pode adicionar vários nomes de guildas.

## Modos de Node War

As configurações de Node War incluem:

| Configuração | Significado |
| --- | --- |
| Modo de ordenação de inscrição | Como os membros são ordenados nas listas de inscrição. |
| Modo de lista de espera | Como os membros em lista de espera se movem para as vagas abertas. |
| Critério de desempate da lista de espera | O que decide entre membros com prioridade igual. |
| Valores exibidos | Quais valores de membros aparecem nas inscrições; o nome de família sempre fica visível. |
| Modo justo de lista de espera | Adiciona prioridade para membros que ficaram na lista de espera em Node Wars anteriores. |
| Notificações de movimentação da lista de espera | Pode anunciar ou enviar DM aos membros quando são movidos da lista de espera para confirmados. |
| Troca de grupos | Permite que membros troquem de grupo quando ativado. |

## Prioridade de Classe

```text
/configure class
```

A configuração de classe permite que os oficiais definam prioridades de classe/especialização e limites de tipo de classe. Essas prioridades podem afetar a ordenação das inscrições, decisões da lista de espera e composição dos grupos.

::: tip Prioridade de Classe é uma Ferramenta de Planejamento
Use-a para expressar o que sua composição precisa, não como um julgamento permanente dos membros. Mantenha as prioridades compreensíveis para os oficiais.
:::

## Substituições de Membros

```text
/configure member member:@Membro
```

A configuração de membro é para substituições individuais, como prioridade personalizada, atribuição de grupo ou detalhes de exibição usados nas inscrições.

## Problemas Comuns

### Comandos desapareceram

Verifique o tipo de servidor em `/configure server`. A sincronização de comandos do Discord depende do tipo de servidor atual.

### O Guild Tracker está desabilitado

Verifique sua região e a aba do tracker. O Guild Tracker é suportado apenas para EU, NA e SA.

### Mensagens Yap mencionam everyone

Ative o bloqueio de menções em `/configure server`. Menções de cargo são bloqueadas por padrão, e a opção mais forte bloqueia todas as menções em yaps recém-adicionados.
