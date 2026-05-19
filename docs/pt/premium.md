# Premium

O Premium desbloqueia automação avançada e personalização para um servidor GuildYapper, além de apoiar o desenvolvimento.

```text
/premium
```

## O que Faz

O Premium desbloqueia:

- Automação avançada de agendadores.
- Personalização de inscrições através da configuração de membros.
- Opções de perfil personalizado do bot.
- Utilitários de mensagem direta.
- Ações de agendador exclusivas do Premium, como postagem automática de inscrições, fechamento, anúncios pré-guerra e verificações de membros inativos.

## Quem Pode Usar

Qualquer membro no servidor do Discord pode abrir `/premium`. A ativação do trial gratuito requer o cargo de oficial. A compra é feita pelo fluxo de assinatura do Discord quando disponível.

## Permissões e Configuração Necessárias

- O GuildYapper deve estar configurado no servidor.
- O cargo de oficial é necessário para ativar o trial de 30 dias.
- Os recursos do Premium se aplicam ao servidor/aliança onde a assinatura está ativa.

::: info Pagamentos São Feitos pelo Discord
`/premium` mostra os botões de Premium do Discord quando estão disponíveis. Se esses botões não carregarem, use o botão `Open Store` exibido na mensagem de Premium.
:::

## Recursos Incluídos

### Agendadores Avançados

O Premium desbloqueia automação através de:

```text
/configure scheduler
```

Os recursos de agendador do Premium incluem postagem automática de inscrições de Node War, fechamento e limpeza automática de inscrições, anúncios pré-Node War, verificações de membros inativos e opções adicionais de mensagem direta.

### Personalização de Inscrições

O Premium permite personalização mais rica das inscrições através da configuração de membros.

```text
/configure member member:@Membro
```

Use isso para etiquetas ou emojis personalizados de membros que devem aparecer nas inscrições, como cargos especiais ou anotações de utilidade.

### Perfil Personalizado do Bot

O Premium permite que um servidor personalize o perfil do bot para aquele Discord.

```text
/configure server
```

Os campos de perfil personalizável disponíveis incluem apelido, bio, avatar e banner onde o Discord permitir que o bot os atualize.

### Utilitários de Mensagem Direta

O Premium desbloqueia auxiliares de mensagem direta para fluxos como DMs de movimentação de lista de espera, DMs para participantes selecionados e DMs relacionados a agendadores.

::: warning Membros Podem Bloquear DMs
O Premium ativa o recurso no lado do bot, mas os usuários do Discord ainda podem bloquear DMs ou ter configurações de privacidade que impedem a entrega.
:::

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela da mensagem de status do `/premium`.
  Caminho sugerido: `/screenshots/premium/premium-status.webp`
</div>

## Trial de 30 Dias

Os servidores podem ativar um trial Premium de 30 dias único através de `/premium`.

Regras:

1. O usuário que ativa o trial deve ter o cargo de oficial.
2. O servidor só pode usar o trial uma vez.
3. Um trial não pode ser ativado se uma assinatura paga/manual já estiver ativa.
4. Um novo trial não pode ser ativado enquanto outro trial estiver ativo.

```text
/premium
```

::: tip Experimente o Trial Primeiro
Use o trial antes de redesenhar sua configuração de agendadores. Ele dá aos oficiais tempo suficiente para testar a postagem automática, fechamento, DMs e verificações de membros inativos com eventos reais.
:::

## Titularidade da Assinatura

A mensagem de Premium do GuildYapper indica que qualquer membro no servidor do Discord pode comprar a assinatura para a aliança.

::: warning Comprador Sai do Servidor
As assinaturas são canceladas quando o usuário que comprou a assinatura sai do servidor do Discord.
:::

## Loja e Doações

A mensagem de Premium inclui:

- Botão de assinatura Premium.
- Botão de assinatura VIP quando disponível.
- Ativar Trial de 30 Dias.
- Abrir Loja.
- Doar pelo Ko-fi.

## Problemas Comuns

### Os botões de Premium não carregam

Use o botão `Open Store` em `/premium` ou diretamente com [este link](https://discord.com/discovery/applications/1238194592982110248/store).

### A ativação do trial está desabilitada

O servidor pode já ter uma assinatura ativa, um trial ativo ou um trial utilizado anteriormente.

### Um recurso do Premium ainda parece bloqueado

Execute `/premium` para verificar o status, depois reabra o comando do recurso após o Discord atualizar o direito.
