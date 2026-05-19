# Pontuações

As pontuações permitem que sua guilda colete resultados de guerra a partir de capturas de tela ou logs do Ikusa, e depois revise as sessões no Discord e no site.

<div class="quick-links">
  <a href="https://guildyapper.com/management/scores">Gerenciamento de Pontuações</a>
  <a href="https://guildyapper.com/scores">Pontuações Pessoais</a>
  <a href="https://guildyapper.com/class-performance">Desempenho de Classes</a>
</div>

## O que Faz

- Faz upload de capturas de tela de pontuação de guerra do BDO pelo Discord ou pelo site.
- Suporta múltiplos anexos de capturas de tela em um único upload pelo Discord.
- Suporta uploads do logger Ikusa no site.
- Vincula sessões de pontuação a inscrições quando possível.
- Mostra detalhamentos por aliança, guilda, jogador, classe e sessão.
- Dá aos membros histórico de pontuações pessoais e análises.

## Quem Pode Usar

Os membros podem fazer upload e ver pontuações pessoais onde permitido. Os oficiais gerenciam as sessões de pontuação do servidor.

## Permissões e Configuração Necessárias

- Tipo de servidor Guild / Aliança.
- Cargo de membro para acesso normal.
- Cargo de oficial/admin para páginas de gerenciamento e correções.
- Uma inscrição é útil quando você quer pontuações vinculadas a um evento.

## Comandos do Discord

```text
/scores menu
/scores upload file:pontuacao.png
```

Você pode fazer upload de uma captura de tela obrigatória mais capturas de tela adicionais opcionais.

::: tip Use Capturas de Tela Nítidas
O OCR do BDO depende da qualidade da imagem. Use capturas de tela de placar limpas e legíveis e evite compressão excessiva.
:::

## Pontuações OCR do BDO

O OCR do BDO usa capturas de tela do placar no jogo. É rápido e fácil porque qualquer membro pode fazer upload de capturas de tela, mas o OCR pode precisar de revisão quando a imagem é de baixa qualidade.

Os campos comuns de pontuação do BDO incluem mortes, mortes sofridas, dano, dano recebido, CCs, dano ao forte, estatísticas de canhão, armadilhas, cura e tempo vivo/morto onde disponível.

## Pontuações Ikusa

Os uploads do Ikusa usam dados de log do logger Ikusa. Eles podem fornecer detalhes de combate em toda a aliança, detalhamentos de aliança/guilda inimiga, contexto de killfeed, killstreaks e relações de classe/jogador.

::: info Duas Fontes de Pontuação
O GuildYapper mantém OCR do BDO e Ikusa como fontes de pontuação separadas. O site permite que você alterne entre elas onde ambas estão disponíveis.
:::

## Páginas de Pontuação no Site

| Página | Link | Use para |
| --- | --- | --- |
| Gerenciamento de Pontuações | [Abrir](https://guildyapper.com/management/scores) | Upload, revisão e gerenciamento de sessões por oficiais. |
| Pontuações Pessoais | [Abrir](https://guildyapper.com/scores) | Uploads pessoais, favoritos e estatísticas dos membros. |
| Desempenho de Classes | [Abrir](https://guildyapper.com/class-performance) | Comparar desempenho por classe a partir dos dados de pontuação. |

<div class="screenshot-slot">
  <strong>Espaço reservado para captura de tela</strong>
  Adicione uma captura de tela de uma página de detalhes de sessão de pontuação.
  Caminho sugerido: `/screenshots/scores/session-detail.webp`
</div>

## Problemas Comuns

### O OCR obteve um valor errado

Use a página de gerenciamento do site para revisar e corrigir a sessão se tiver acesso de oficial.

### A pontuação não está vinculada a uma inscrição

Escolha a inscrição relacionada durante o upload ou gerencie a sessão depois se a página oferecer a associação.

### Um membro não consegue ver estatísticas pessoais

Certifique-se de que o perfil/nome de família do GuildYapper deles corresponde aos dados de pontuação enviados com proximidade suficiente para identificá-los.
