# Recrutamento, Mercs e Verificação

Os servidores de comunidade recebem ferramentas de coordenação pública: posts de recrutamento, posts de looking-for-merc e mensagens de verificação.

```text
/recruiting register
/merc lf-signup
/verify post
```

## O que Faz

- Registra guildas no navegador de recrutamento.
- Atualiza ou remove entradas de recrutamento.
- Posta mensagens de inscrição de looking-for-merc.
- Posta mensagens de verificação.

## Quem Pode Usar

Esses comandos são destinados a servidores de Comunidade. As atualizações de recrutamento estão vinculadas ao usuário/servidor responsável pela entrada da guilda. As permissões de posts de verificação e merc dependem dos cargos configurados.

## Permissões e Configuração Necessárias

- Tipo de servidor Comunidade.
- Cargo de oficial/admin para ações de postagem controladas.
- Região selecionada durante a configuração.

## Navegador de Recrutamento

Registre uma guilda:

```text
/recruiting register guildname:Exemplo dc-server-link:https://discord.gg/exemplo gs-requirement:700 region:EU
```

Os campos opcionais incluem um segundo contato e região.

O comando solicita uma descrição de recrutamento em um modal do Discord. O markdown do Discord é suportado.

::: warning Links de Convite do Discord
O convite é exibido como um convite do Discord apenas quando começa com `https://discord.gg/`. Outros links são ocultados.
:::

Atualize uma guilda:

```text
/recruiting update gs-requirement:720
```

Remova uma guilda:

```text
/recruiting remove region:EU
```

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela de um post do navegador de recrutamento.
  Caminho sugerido: `/screenshots/community/recruiting-post.webp`
</div>

## Posts de Merc

Use posts de merc quando uma comunidade quer coletar jogadores procurando vagas de merc.

```text
/merc lf-signup
```

## Mensagem de Verificação

Poste a mensagem de verificação com:

```text
/verify post
```

## Atualizações de Tierlist pelo Discord

Os servidores de comunidade podem anunciar ou ver atualizações recentes de tierlist.

```text
/tierlist updates announce:false days:7
```

Os oficiais podem anunciar atualizações para um canal e opcionalmente mencionar um cargo.

## Problemas Comuns

### A descrição de recrutamento foi rejeitada

Reescreva a descrição sem conteúdo inadequado e envie novamente.

### A guilda já existe

Use `/recruiting update` em vez de registrar um duplicado.

### O convite não está visível

Use um link permanente `https://discord.gg/...` de convite.
