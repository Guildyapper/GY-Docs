# Yap

O Yap é o recurso de mensagens comunitárias leve do GuildYapper. Os membros podem salvar mensagens curtas, e o bot pode postar depois um yap salvo aleatório.

```text
/addyap content:Lembre de reparar antes da guerra
/yap
```

## O que Faz

- Armazena mensagens yap específicas do servidor.
- Posta um yap aleatório com `/yap`.
- Permite que admins ativem ou desativem o Yap.
- Bloqueia menções de cargo por padrão.
- Pode bloquear todas as menções se ativado na configuração do servidor.
- Usa um cooldown para reduzir spam.

## Quem Pode Usar

Servidores Guild / Aliança e Comunidade podem usar o Yap quando está ativado. Os membros podem adicionar e postar yaps a menos que as regras do seu servidor restrinjam isso.

## Permissões e Configuração Necessárias

- Yap ativado em `/configure server`.
- Cargo de membro configurado.
- Cooldown personalizado opcional configurado em `/configure server`.
- Configuração opcional de "bloquear todas as menções" ativada para segurança mais rigorosa.

## Como Usar

1. Adicione uma mensagem.

```text
/addyap content:Hidrate-se antes do nodewar
```

2. Poste um yap aleatório.

```text
/yap
```

3. Remova um yap inadequado pelo menu de contexto da mensagem se disponível.

::: info Cooldown
O cooldown padrão do yap é de 3 minutos. Os oficiais podem definir um cooldown personalizado em `/configure server`.
:::

::: warning Menções
As menções de cargo são bloqueadas por padrão. Se sua comunidade continua tentando adicionar yaps barulhentos, ative a configuração que bloqueia todas as menções.
:::

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela de uma mensagem yap no Discord.
  Caminho sugerido: `/screenshots/yap/yap-message.webp`
</div>

## Problemas Comuns

### `/yap` não faz nada útil

Adicione alguns yaps primeiro:

```text
/addyap content:Sua mensagem
```

### Um yap com menções é rejeitado

Isso é esperado. As menções são restritas para evitar abuso.

### Usuários estão fazendo spam de yaps

Aumente o cooldown personalizado ou desative o Yap em:

```text
/configure server
```
