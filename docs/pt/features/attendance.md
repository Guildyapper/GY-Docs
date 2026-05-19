# Presença

A presença rastreia como os membros respondem aos eventos e dá aos oficiais uma forma de revisar a participação ao longo do tempo.

<div class="quick-links">
  <a href="https://guildyapper.com/management/signups">Inscrições no Site</a>
  <a href="/pt/features/signups">Inscrições</a>
  <a href="/pt/bot/members-and-roster">Membros e Roster</a>
</div>

## O que Faz

- Mostra presença pessoal.
- Mostra presença de membros para oficiais.
- Fornece visões gerais de presença do servidor.
- Exporta presença para CSV.
- Permite que oficiais atualizem manualmente os estados de presença nas inscrições.
- Alimenta resumos de roster e visualizações de detalhes de membros.

## Quem Pode Usar

Os membros podem ver sua própria presença. Oficiais/admins podem ver a presença de membros e do servidor, exportar arquivos CSV e atualizar presença de eventos.

## Permissões e Configuração Necessárias

- Tipo de servidor Guild / Aliança.
- Cargo de membro para visualizações de membros.
- Cargo de oficial/admin para visão geral, exportação e visualizações de membros.
- Histórico de inscrições existente.

## Comandos do Discord

```text
/attendance me
/attendance member member:@Membro
/attendance overview
/attendance export
```

Opções úteis:

| Opção | Usada em | Significado |
| --- | --- | --- |
| `range` | overview, export, me, member | Olha para trás pelos últimos X dias. |
| `guild` | overview, export | Filtra por nome de guilda. |
| `member` | member, export | Mostra ou exporta um membro. |
| `private` | overview, export | Mantém a resposta visível apenas para você. |

::: tip Mantenha as Exportações Privadas
As exportações CSV podem incluir dados de presença em nível de membro. Use a opção `private` a menos que queira intencionalmente que seja visível.
:::

## Visualizações de Presença no Site

A presença é mostrada dentro das ferramentas de inscrição e roster:

- Visualização detalhada da inscrição: estados de presença atuais e visualização de grupos.
- Card de detalhes do membro: detalhamento de presença e histórico recente.
- Página de roster: resumos de presença entre membros.

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela de um detalhamento de presença de membro.
  Caminho sugerido: `/screenshots/attendance/member-breakdown.webp`
</div>

## Atualizações Manuais de Presença

Os oficiais podem mover membros entre estados como Confirmado, Aguardando, Não Pode, Férias, Não Compareceu e Indeciso. As atualizações também podem ser registradas no canal de log configurado.

::: info Presença e Pontuações
O histórico de presença pode se conectar a snapshots de pontuação quando as pontuações do evento são enviadas, tornando as visualizações de detalhes do membro mais úteis após as guerras.
:::

## Problemas Comuns

### A presença parece vazia

A presença precisa de histórico de inscrições. Crie e execute inscrições primeiro.

### Um membro diz que sua presença está errada

Abra a inscrição, verifique o estado do evento deles e atualize-o na visualização de gerenciamento se necessário.

### A exportação CSV não inclui o período esperado

Verifique a opção `range`. Ela significa "últimos X dias".
