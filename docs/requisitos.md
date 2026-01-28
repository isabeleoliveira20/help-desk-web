1. Introdução

Este documento apresenta a Engenharia de Requisitos do Sistema de Chamados (Help Desk Web), seguindo os conceitos, definições e processo apresentados no material da disciplina de Engenharia de Requisitos (base IEEE / ISO/IEC/IEEE 29148).

O objetivo do sistema é permitir o registro, acompanhamento e gerenciamento de chamados de suporte em um ambiente organizacional, simulando um sistema real utilizado em empresas.

Os requisitos aqui descritos especificam o que o sistema deve fazer e sob quais restrições, sem definir como será implementado.


2. Universo de Informações (UdI)

O Universo de Informações compreende o contexto organizacional onde o sistema está inserido.

2.1 Contexto

Organização que presta suporte interno (TI, RH, financeiro, etc.)

Usuários que necessitam registrar solicitações

Administradores responsáveis pelo atendimento

2.2 Atores do UdI

Usuário comum

Administrador do sistema

Organização (políticas internas)

2.3 Fontes de Informação

Entrevistas simuladas com usuários

Sistemas de chamados existentes no mercado

Material acadêmico de Engenharia de Requisitos

Políticas organizacionais fictícias


3. Processo de Engenharia de Requisitos

O processo seguiu as etapas:

Elicitação: identificação de atores, coleta de fatos e comunicação

Modelagem: representação dos requisitos por meio de histórias de usuário, cenários e casos de uso

Análise: verificação e validação dos requisitos


4. Elicitação de Requisitos
4.1 Identificação das Fontes

Usuários finais (funcionários)

Administradores do sistema

Sistemas similares (Help Desk corporativo)

4.2 Coleta de Fatos

Observação de fluxo típico de abertura de chamados

Análise de funcionalidades comuns em sistemas de suporte

Levantamento das necessidades principais

4.3 Comunicação

Linguagem simples e orientada ao domínio do usuário

Uso de exemplos práticos para validação do entendimento

5. Requisitos Funcionais
RF01 – Autenticação de Usuário

O sistema deve permitir que usuários realizem login informando email e senha.

RF02 – Diferenciação de Perfis

O sistema deve diferenciar usuários comuns e administradores.

RF03 – Criação de Chamado

O sistema deve permitir que o usuário crie um chamado informando título, descrição, categoria e prioridade.

RF04 – Listagem de Chamados do Usuário

O sistema deve permitir que o usuário visualize todos os seus chamados.

RF05 – Acompanhamento de Status

O sistema deve exibir o status do chamado (Aberto, Em andamento, Finalizado).

RF06 – Visualização Global (Administrador)

O sistema deve permitir que o administrador visualize todos os chamados registrados.

RF07 – Atualização de Status (Administrador)

O sistema deve permitir que o administrador altere o status dos chamados.

RF08 – Comentários do Administrador

O sistema deve permitir que o administrador registre observações nos chamados.

6. Requisitos Não Funcionais
RNF01 – Usabilidade

O sistema deve possuir interface simples e intuitiva.

RNF02 – Desempenho

As operações devem ser executadas com tempo de resposta aceitável em ambiente web local.

RNF03 – Portabilidade

O sistema deve ser acessível por navegadores modernos.

RNF04 – Armazenamento

Os dados devem ser armazenados localmente (LocalStorage).

RNF05 – Manutenibilidade

O código deve ser organizado de forma modular.

7. Restrições

O sistema será desenvolvido sem backend

Persistência de dados limitada ao navegador

Uso exclusivo de HTML, CSS e JavaScript


8. Modelagem dos Requisitos
8.1 Histórias de Usuário

Como usuário, quero registrar um chamado para solicitar suporte.

Como usuário, quero acompanhar o status do meu chamado.

Como administrador, quero gerenciar chamados para organizar o atendimento.