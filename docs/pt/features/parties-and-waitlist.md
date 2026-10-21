# Grupos e Lista de Espera

Os grupos e listas de espera decidem como uma inscrição completa se torna um plano real. O GuildYapper pode manter as pessoas em grupos configurados, dividir grupos grandes, respeitar prioridades e mover membros da lista de espera para vagas abertas.

```text
/configure parties
/configure class
/configure member member:@Membro
/configure server
```

## O que Faz

- Cria e configura grupos de Node War como Main, Defense, Flex ou grupos personalizados.
- Atribui membros a grupos configurados.
- Divide grupos muito grandes em subgrupos.
- Usa prioridade de classe, grupo, individual e sequência de lista de espera quando configurado.
- Permite que oficiais movam temporariamente membros para um evento ou alterem permanentemente a atribuição de grupo do roster.
- Suporta comportamento de lista de espera como ordem padrão, prioridade personalizada, gearscore, aleatório ou manual.

## Quem Pode Usar

Oficiais/admins configuram grupos e comportamento da lista de espera. Os membros veem a inscrição resultante e as atribuições de grupos.

## Permissões e Configuração Necessárias

- Tipo de servidor Guild / Aliança.
- Cargo de oficial/admin.
- Grupos de Node War configurados através de `/configure parties`.
- Prioridades de classe opcionais através de `/configure class`.
- Substituições de membros opcionais através de `/configure member`.

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela do `/configure parties`.
  Caminho sugerido: `/screenshots/parties/nwparty-config.webp`
</div>

## Noções Básicas de Grupos

Toda inscrição tem um grupo Main/padrão. A configuração de Guild / Aliança também cria grupos iniciais. Os oficiais podem adicionar mais grupos e configurar:

| Configuração | Significado |
| --- | --- |
| Nome do grupo | Nome de exibição na inscrição e nas visualizações de grupos. |
| Cargo do grupo | Cargo do Discord usado para atribuir ou identificar membros daquele grupo. |
| Chave de ordenação | Valores mais altos fazem o grupo aparecer antes nas visualizações de inscrição. |
| Prioridade do grupo | Adiciona prioridade aos membros daquele grupo. |
| Limite do grupo | Tamanho máximo antes que o comportamento de overflow comece. |
| Participantes alvo | Permite que o grupo solicite voluntários se estiver abaixo do alvo. |
| Tipo de overflow | Controla o que acontece quando o grupo excede seu limite. |
| Taxa de limite de prioridade | Para ou reduz a prioridade quando uma parte suficiente do grupo já está representada. |

::: info Prioridades se Somam
A prioridade efetiva de um membro pode incluir prioridade pessoal, prioridade de classe, prioridade de grupo e prioridade de sequência da lista de espera.
:::

## Tipos de Overflow

| Tipo de overflow | Comportamento |
| --- | --- |
| `SPLIT` | Divide um grupo grande em subgrupos iguais como Main 1 e Main 2. |
| `OVERFLOW` | Mantém o grupo no cap e move membros extras para o grupo padrão/Main. |
| `LIMIT` | Mantém o grupo no cap e deixa os membros em excesso na lista de espera. |

::: tip SPLIT é Melhor para Grupos Flexíveis Grandes
Use `SPLIT` quando um grupo pode se tornar vários grupos balanceados. Use `LIMIT` quando um grupo está verdadeiramente limitado.
:::

## Como Funcionam os Grupos Divididos

Quando um grupo usa `SPLIT`, o GuildYapper tenta criar subgrupos limpos:

1. Membros forçados a um índice de grupo específico ficam lá quando possível.
2. Os subgrupos são mantidos tão iguais em tamanho quanto possível.
3. Cargos especiais como BSR, PA e Shai são distribuídos entre os subgrupos quando possível.
4. O equilíbrio de gearscore é usado como melhoria secundária.
5. Quando uma inscrição está congelada ou já tem atribuições, o GuildYapper mantém as atribuições existentes estáveis quando possível.

Exemplo: se Main tem um limite de 20 e 44 membros confirmados, pode se tornar Main 1, Main 2 e Main 3.

::: warning Índice de Grupo Forçado
Se um oficial forçar um membro para Main 2 para um evento, o GuildYapper trata isso como intencional e evita movê-lo apenas para deixar a matemática mais bonita.
:::

## Movimentações Temporárias vs Permanentes de Grupos

O construtor de grupos do site e as ações de gerenciamento do Discord podem lidar com dois tipos de movimentações:

| Tipo de movimentação | Use quando |
| --- | --- |
| Movimentação temporária de evento | Você quer mover este membro apenas para a inscrição atual. |
| Movimentação de roster do servidor | Você quer alterar a atribuição de grupo padrão deste membro para futuras inscrições. |

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela do construtor de grupos do site com o pool e o quadro de grupos.
  Caminho sugerido: `/screenshots/parties/party-builder.webp`
</div>

## Modos de Lista de Espera

O modo de lista de espera é configurado em:

```text
/configure server
```

| Modo | Significado |
| --- | --- |
| Padrão | Inscrições anteriores se movem primeiro. |
| Prioridade Personalizada | Prioridade efetiva mais alta se move primeiro. |
| Gearscore | Gearscore mais alto se move primeiro. |
| Aleatório | Movimentações são aleatorizadas. |
| Manual | O GuildYapper não move automaticamente membros da lista de espera. |

## Modo Justo da Lista de Espera

O modo justo dá aos membros prioridade extra quando ficaram na lista de espera em Node Wars anteriores. Os oficiais podem decidir quanta prioridade é adicionada por Node War na lista de espera e se "Não Pode" deve contar.

::: info Objetivo do Modo Justo
O modo justo ajuda membros que repetidamente ficam de fora do roster final a ter uma chance melhor depois, enquanto ainda permite que os oficiais mantenham necessidades de classe e grupo no sistema.
:::

## Revertendo Excesso de Confirmados

Quando os caps ou limites de grupos mudam, os oficiais podem mover os confirmados em excesso de volta para a lista de espera. Isso é útil após reduzir um cap ou limpar uma inscrição que teve respostas Confirmado em excesso.

## Problemas Comuns

### Uma divisão de grupos parece irregular

Verifique índices de grupos forçados, limites de grupos e distribuição de cargos especiais. O GuildYapper pode manter algumas atribuições estáveis mesmo que uma divisão perfeita exigisse movê-las.

### Um membro não se moveu da lista de espera

Verifique o modo de lista de espera, cap, status da inscrição, prioridade e se o modo manual está ativado.

### Um membro continua voltando para o mesmo grupo

Ele pode ter uma atribuição permanente de grupo do servidor. Atualize-a no roster ou em `/configure member`.
