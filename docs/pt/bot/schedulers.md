# Agendadores

Os agendadores automatizam o trabalho repetitivo de eventos e lembretes. Configure-os no Discord com:

```text
/configure scheduler
```

## O que Faz

Os agendadores podem pingar membros indecisos, lembrar registros ausentes, postar inscrições de Node War, fechar inscrições, enviar anúncios pré-guerra e verificar membros inativos.

## Quem Pode Usar

Apenas oficiais/admins podem configurar agendadores.

## Permissões e Configuração Necessárias

- Tipo de servidor Guild / Aliança.
- Cargo de oficial/admin.
- Canais de inscrição relevantes.
- Um canal de log para algumas notificações.
- Premium para agendadores avançados marcados como Premium.

::: info Agendadores Gratuitos e Premium
Pingar membros indecisos e pingar registros ausentes estão disponíveis sem Premium. Postagem automática de inscrições, fechamento, anúncios de Node War e verificações de membros inativos são ferramentas do Premium.
:::

## Agendadores Disponíveis

| Agendador | Gratuito/Premium | O que faz |
| --- | --- | --- |
| Pingar membros indecisos | Gratuito | Pinga membros ainda marcados como indecisos nas inscrições em até três offsets de horas personalizados antes do horário do Node War. O Premium também pode ativar DMs atrasados para membros indecisos. |
| Pingar registros de Bot ausentes | Gratuito | Executa `/member missing` em um canal selecionado nos domingos antes do horário do Node War. |
| Postar inscrições de Node War automaticamente | Premium | Posta inscrições nos dias e canais selecionados com caps padrão e tempo de antecedência. |
| Fechar inscrições de Node War | Premium | Fecha inscrições um número definido de horas após o horário do Node War, com opções para limpeza de canal e resultado padrão. |
| Anúncio de Node War | Premium | Envia um lembrete pré-guerra nos canais de inscrição, pode mencionar membros marcados como Confirmados, e pode incluir contexto de presença/classe. |
| Verificar membros inativos | Premium | Verifica membros que não participaram por um número configurado de dias, pode enviar DM aos membros e pode pingar oficiais no canal de log. |

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela do `/configure scheduler`.
  Caminho sugerido: `/screenshots/premium/scheduler-config.webp`
</div>

## Postagem Automática de Inscrições

O agendador de inscrições automático permite que você escolha:

1. Canais onde as inscrições devem ser postadas.
2. Dias de Node War.
3. Caps de presença padrão.
4. Caps visíveis opcionais.
5. Tempo de antecedência antes do Node War.
6. Modo de postagem: por dia ou todos de uma vez.

::: tip Caps Visíveis
Os caps visíveis permitem que a inscrição mostre um cap público diferente do máximo de presença interno. Use isso quando os oficiais querem mostrar um número mais limpo aos membros enquanto ainda permitem overflow controlado.
:::

## Fechamento de Inscrições

O agendador de fechamento pode:

- Fechar a inscrição após um número configurado de horas.
- Limpar o canal.
- Excluir a mensagem de inscrição.
- Definir um resultado padrão como Vitória, Derrota, Empate ou Indefinido.

::: warning Indefinido Reabre o Estado da Inscrição
Use `Indefinido` quando não quiser que o evento seja tratado como um resultado final de vitória/derrota/empate ainda.
:::

## Verificações de Membros Inativos

As verificações de inatividade podem enviar DM aos membros ou notificar os oficiais se alguém não esteve participando de Node Wars por um número configurado de dias. Os pings de oficiais usam o canal de log.

## Problemas Comuns

### Um botão de agendador está bloqueado

Esse agendador requer Premium. Verifique:

```text
/premium
```

### Um agendador não postou

Verifique os canais selecionados, dias selecionados, região/fuso horário do servidor e se o canal de inscrição ainda existe.

### Membros não receberam DMs

Os utilitários de DM requerem Premium e os membros devem permitir DMs do servidor/bot.
