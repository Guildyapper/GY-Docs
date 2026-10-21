# Inscrições

As inscrições são o fluxo central de eventos para servidores Guild / Aliança. Elas permitem que oficiais criem eventos, membros escolham presença, e a liderança gerencie listas de espera, grupos, gráficos, resultados e links de pontuação.

<div class="quick-links">
  <a href="https://guildyapper.com/management/signups">Inscrições no Site</a>
  <a href="/pt/features/parties-and-waitlist">Grupos e Lista de Espera</a>
  <a href="/pt/features/attendance">Presença</a>
  <a href="/pt/features/scores">Pontuações</a>
</div>

## O que Faz

- Cria inscrições de eventos de Node War, GvG, Guild League e personalizados.
- Rastreia estados de presença como Confirmado, Aguardando, Indeciso, Não Pode, Férias e Não Compareceu.
- Permite que oficiais atualizem caps, detalhes, participantes, resultados e gráficos.
- Suporta listas de espera e movimentações automáticas baseadas nas regras do servidor.
- Conecta a presença no evento ao gerenciamento no site e às sessões de pontuação.

## Quem Pode Usar

Os membros geralmente podem responder às inscrições. Oficiais/admins criam e gerenciam inscrições.

## Permissões e Configuração Necessárias

- Tipo de servidor Guild / Aliança.
- Cargo de membro configurado.
- Cargo de oficial/admin configurado.
- Nomes de guildas configurados para registro de guilda/aliança.
- Canal de voz opcional do Node War para verificações de ausentes no canal de voz.
- Grupos opcionais configurados através de `/configure parties`.

## Criar uma Inscrição de Node War

```text
/signup nodewar date:19.05.2026 max-attendance:55 server:Mediah 1
```

As opções de inscrição de Node War incluem:

| Opção | Obrigatório | Significado |
| --- | --- | --- |
| `date` | Sim | Data do evento. |
| `max-attendance` | Sim | Número máximo interno de membros confirmados. |
| `visible-attendance` | Não | Cap mostrado publicamente quando quiser que seja diferente do máximo interno. |
| `server` | Não | Servidor ou localização no jogo. |
| `info` | Não | Detalhes extras mostrados na inscrição. |
| `skip-streak` | Não | Exclui esta inscrição da lógica de sequência/modo-justo da lista de espera. |
| `role` | Não | Cargo para mencionar ao postar. |

::: tip Presença Visível
Use a presença visível quando seu cap interno e o alvo público são diferentes. Por exemplo, você pode internamente permitir overflow enquanto mostra um alvo mais limpo aos membros.
:::

## Criar uma Inscrição de GvG

```text
/signup gvg date:19.05.2026 time:20:00 max-attendance:40 enemy-guild:GuildaInimiga match-type:Ranked
```

As inscrições de GvG incluem uma guilda inimiga e um tipo de partida.

| Tipo de partida | Significado |
| --- | --- |
| Ranked | Conta como GvG ranqueado para as visualizações de Guerras de Guilda do GuildYapper. |
| Practice | Útil para scrims ou lutas de treino. |

::: warning GvG Ranqueado Precisa de Sua Guilda Configurada
Para inscrições de GvG ranqueado, certifique-se de que os nomes das suas próprias guildas estejam configurados em `/configure server`.
:::

## Criar uma Inscrição de Guild League

```text
/signup gleague date:19.05.2026 start-time:20:00 end-time:22:00 role:@Guilda
```

As inscrições de Guild League criam intervalos de tempo para partidas válidas no intervalo de tempo configurado.

## Criar uma Inscrição Personalizada

```text
/signup custom type:Treino date:19.05.2026 time:20:00 max-attendance:30
```

Use inscrições personalizadas para treinos, reuniões ou outros eventos que ainda precisam de rastreamento de presença.

::: info Tamanho de Grupo Personalizado
Inscrições personalizadas e de GvG podem usar um tamanho de grupo personalizado. Se nenhum tamanho personalizado for definido, o GuildYapper usa o comportamento normal de inscrição.
:::

## Estados de Presença

| Estado | Significado |
| --- | --- |
| Confirmado / Participando | O membro quer participar e atualmente tem uma vaga. |
| Aguardando | O membro quer participar mas está na lista de espera. |
| Indeciso | O membro ainda não fez uma escolha clara. |
| Não Pode | O membro não pode participar. |
| Férias | O membro está ausente. |
| Não Compareceu | Estado marcado pelo oficial para presença perdida. |

## Gerenciando uma Inscrição

Os oficiais podem usar o menu de gerenciamento da inscrição e `/signup list`.

```text
/signup list
```

As ações de gerenciamento comuns incluem:

- Atualizar mensagem.
- Pingar participantes.
- Atualizar limites de presença.
- Atualizar detalhes da inscrição.
- Mover participantes entre estados de presença.
- Pingar membros não no canal de voz.
- Enviar DM aos membros selecionados.
- Gerenciar voluntários.
- Reverter excesso de confirmados para a lista de espera.
- Definir resultado e fechar.
- Abrir ou fechar a inscrição.
- Limpar o canal.
- Cancelar evento.
- Exportar presença.
- Ver gráficos de distribuição de classe, gearscore ou guilda.

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela de uma inscrição ativa com opções de gerenciamento.
  Caminho sugerido: `/screenshots/signups/signup-management.webp`
</div>

## Gerenciamento de Inscrições no Site

Abra [Inscrições no Site](https://guildyapper.com/management/signups) para uma visualização maior dos eventos. Os oficiais podem navegar pelas inscrições, abrir um evento, inspecionar participantes, atualizar presença, mover membros e trabalhar com atribuições de grupos.

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela da visualização detalhada da inscrição no site.
  Caminho sugerido: `/screenshots/signups/website-signup-detail.webp`
</div>

## Problemas Comuns

### Um membro não está listado corretamente

Peça ao membro para atualizar seu perfil:

```text
/member update
```

### A ordem da lista de espera parece inesperada

Verifique o modo da lista de espera, prioridade de classe, prioridade do membro, prioridade do grupo, modo justo e configurações de overflow do grupo. Veja [Grupos e Lista de Espera](/pt/features/parties-and-waitlist).

### A mensagem de inscrição foi excluída

Use `/signup list`, abra Gerenciar e reposte a inscrição se a mensagem original não puder ser encontrada.

### Membros não estão recebendo DMs

As ações de mensagem direta requerem Premium para alguns fluxos, e os membros devem permitir DMs.
