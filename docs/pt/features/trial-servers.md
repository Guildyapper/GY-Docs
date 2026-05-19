# Servidores de Trial

O modo Trial Server cria um fluxo dedicado do Discord para candidatos. É separado de um servidor Guild / Aliança normal.

```text
/setup
/trial signup
/trial configure
/trial end result:passed reason:Boa adequação trialee:NomeDeFamília
```

## O que Faz

- Cria cargos, categorias, canais de texto e canais de voz para trials.
- Posta um botão de inscrição de trial.
- Cria canais privados de trial para candidatos.
- Armazena histórico de trial.
- Permite que a equipe encerre trials como aprovado ou reprovado.
- Arquiva canais de trial concluídos.

## Quem Pode Usar

A equipe de trial usa o cargo TrialMaster/oficial. Os candidatos usam o botão de inscrição de trial e recebem acesso como Trialee.

## Permissões e Configuração Necessárias

- Um servidor Discord dedicado a trials.
- `/setup` executado como Trial Server.
- Permissões do bot para criar cargos, canais, categorias e convites. O convite padrão é recomendado; o convite com permissões mínimas geralmente precisa de trabalho manual de permissões para Trial Servers.
- Cargo TrialMaster/oficial e cargo Trialee configurados.

::: warning Use um Servidor Dedicado
A configuração de trial cria vários canais, cargos, categorias e permissões. Não execute a configuração do Trial Server no seu Discord principal da guilda, a menos que queira intencionalmente essa estrutura lá.
:::

## O que a Configuração Cria

| Tipo | Item criado |
| --- | --- |
| Cargo | `TrialMaster` |
| Cargo | `Trialee` |
| Categoria | `Staff` |
| Categoria | `Trialee` |
| Categoria | `Trials` |
| Categoria | `Archive` |
| Canal de texto | `signup` |
| Canal de texto | `trial-history` |
| Canal de texto | `staff` |
| Canal de voz | `Staff` |
| Canal de voz | `General` |
| Canal de voz | `GroupFights-1` |
| Canal de voz | `GroupFights-2` |

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela da estrutura gerada do Trial Server.
  Caminho sugerido: `/screenshots/trials/generated-structure.webp`
</div>

## Mensagem de Inscrição de Trial

Se a mensagem de inscrição for excluída ou você quiser postá-la novamente, use:

```text
/trial signup
```

A mensagem inclui um botão que os candidatos clicam para se inscrever em um trial.

## Mensagem de Abertura do Trial

Os Trial Servers têm uma mensagem de abertura mostrada nos novos canais de trial. A equipe pode alterá-la clicando com o botão direito em uma mensagem e usando a ação do app:

```text
Apps -> Set Trial opening message
```

::: info Mensagem de Abertura Padrão
A mensagem padrão dá as boas-vindas ao trialee e diz a ele para fornecer informações adicionais ou aguardar a equipe.
:::

## Encerrando um Trial

Use `/trial end` com um resultado e motivo.

```text
/trial end result:passed reason:Forte desempenho trialee:NomeDeFamília
/trial end result:failed reason:Não atendeu aos requisitos trialee:NomeDeFamília
```

Quando um trial termina, o GuildYapper registra o resultado, posta o desfecho, renomeia o canal com `-passed` ou `-failed` e move o canal para uma categoria de Archive. Se necessário, cria outra categoria de Archive quando a atual estiver cheia.

::: warning Trials Reprovados Podem Remover o Membro
O fluxo de encerramento do trial pode expulsar um trialee reprovado do servidor. Certifique-se de que o trialee e o resultado selecionados estão corretos antes de usar.
:::

## Problemas Comuns

### O botão de inscrição está ausente

Reposte-o:

```text
/trial signup
```

### Os canais de trial não são privados

Verifique as permissões dos cargos TrialMaster e Trialee, depois execute:

```text
/trial configure
```

### O histórico de trial não está sendo postado

Verifique o canal de trial-history configurado em `/trial configure`.
