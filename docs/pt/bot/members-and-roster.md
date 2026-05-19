# Membros e Roster

As ferramentas de membros mantêm seu roster do GuildYapper utilizável: quem está registrado, qual classe/especialização eles jogam, sua guilda, equipamento, atribuição de grupo, histórico de presença, prioridade e snapshots de pontuação.

<div class="quick-links">
  <a href="https://guildyapper.com/profile">Perfil</a>
  <a href="https://guildyapper.com/management/roster">Roster</a>
</div>

## O que Faz

- Permite que membros atualizem seu próprio perfil.
- Permite que oficiais visualizem, classifiquem e filtrem o roster.
- Mostra detalhes do membro como gearscore, classe/especialização, guilda, grupo, presença e pontuações.
- Ajuda os oficiais a encontrar membros que ainda não se registraram.
- Suporta configuração de oficial para configurações individuais de membros, como prioridade, grupo e etiquetas de exibição de inscrições.

## Quem Pode Usar

Os membros podem atualizar e visualizar suas próprias informações. Os oficiais podem gerenciar dados de membros e revisar visualizações de roster em todo o servidor.

## Permissões e Configuração Necessárias

- Cargo de membro configurado em `/configure server`.
- Cargo de oficial/admin configurado em `/configure server`.
- Nomes de guildas configurados se seus membros devem escolher de guildas conhecidas.
- Canal de atualização de perfil opcional para atualizações de equipamento e resumos mensais de mudanças de equipamento.

```text
/configure server
/configure member member:@Membro
```

## Atualizações de Perfil de Membros

Os membros devem manter seu perfil atualizado através do Discord ou do site.

```text
/member update
```

Os dados típicos de perfil incluem:

| Campo | Por que é importante |
| --- | --- |
| Nome de família | Usado em inscrições, roster, presença, pontuações e pesquisa. |
| Classe/especialização | Usado para exibição de inscrição, distribuição de classe, prioridade de classe e estatísticas. |
| Gearscore | Usado para ordenação e contexto do roster. |
| Guilda | Usado em filtros de roster, inscrições e visualizações de aliança. |
| Link do Garmoth | Dá aos oficiais e ao membro uma rota rápida para equipamentos detalhados. |

::: tip Perfil no Site
A [página de Perfil](https://guildyapper.com/profile) geralmente é mais fácil para uma limpeza completa do perfil porque tem mais espaço do que um modal do Discord.
:::

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela da página de perfil.
  Caminho sugerido: `/screenshots/members/profile-page.webp`
</div>

## Listando Membros

Use `/member list` para um resumo do roster no Discord.

```text
/member list sorting:gearscore
/member list sorting:class
/member list sorting:guild
```

Você pode filtrar por guilda se o seu servidor tiver vários nomes de guildas configurados.

```text
/member list sorting:gearscore guild-filter:ExemploGuilda
```

## Encontrando Registros Ausentes

Use `/member missing` quando quiser ver quem tem o cargo do Discord mas ainda não se registrou no GuildYapper.

```text
/member missing
/member missing role:@Membro
```

::: info Respostas Privadas
Muitos comandos de lista e visão geral incluem uma opção `private`. Use quando a saída for útil apenas para você ou para a equipe de oficiais.
:::

## Gerenciamento de Roster por Oficiais

A [página de Roster](https://guildyapper.com/management/roster) é o principal lugar para o trabalho de roster dos oficiais.

Os oficiais podem revisar:

- Detalhes do membro.
- Resumos de presença.
- Atribuição de grupo.
- Classe/especialização.
- Prioridade pessoal e fontes de prioridade.
- Snapshots de pontuação.
- Histórico de presença recente.

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela da lista de roster e do modal de detalhes do membro.
  Caminho sugerido: `/screenshots/members/roster-detail.webp`
</div>

## Problemas Comuns

### Um membro está ausente das inscrições

Verifique se ele tem o cargo de membro configurado e concluiu `/member update` ou seu perfil no site.

### Um membro aparece na guilda errada

Peça a ele para atualizar o perfil ou peça a um oficial para editar o membro no roster.

### Oficiais não conseguem editar os dados do roster

Verifique o cargo de oficial/admin em:

```text
/configure server
```
