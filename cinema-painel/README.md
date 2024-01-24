## Cinema - frontend, como rodar o projeto.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Arquitetura definida é a modular, que consiste em basicamente 3 pastas: 

  - core: responsável por serviços, plugins e gerencimento global de estado.
  - shared: compartilha pelo projeto o que pode ser reutilizável: componentes, layout e etc.
  - features: que está sendo representada por user, já que o roteamento interno do nextjs entende a pasta como parte do path. (não quis mudar no next.config)

Dentro de cada feature a arquitetura consitem em:
  ## API

  - dto: contrato entre o backend e o front.
  - user.api: responsável pelo endpoint que fará a requisição.
  - api.mapper: mapea os dados representados pelo model.

  ## Models

  representa a estrutura de dados da feature.

  ## Page

  entidade responsável pelo roteamento principal da feature, ainda tendo como opção subpastas.
