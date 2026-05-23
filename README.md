# SIGEA

Boilerplate full stack para um sistema de apoio agropecuário com cadastro de animais e análise simples de padrões de fertilidade usando uma API em Python.

## Tecnologias

- Backend: Python, FastAPI, SQLAlchemy e Pydantic
- Banco de dados: PostgreSQL via Docker Compose
- IA inicial: serviço baseado em regras para identificar padrões de fertilidade
- Frontend: React, Vite, Axios, Recharts e Lucide React
- Integração: API REST entre frontend e backend

## Estrutura do projeto

```text
SIGEA/
|-- backend/
|   |-- app/
|   |   |-- api/
|   |   |-- core/
|   |   |-- db/
|   |   |-- ml/
|   |   |-- models/
|   |   |-- repositories/
|   |   |-- schemas/
|   |   |-- services/
|   |   `-- main.py
|   |-- .env.example
|   `-- requirements.txt
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |-- services/
|   |   |-- styles/
|   |   |-- App.jsx
|   |   `-- main.jsx
|   |-- .env.example
|   |-- package.json
|   `-- package-lock.json
|-- docker-compose.yml
`-- README.md
```

## Pré-requisitos

Antes de rodar a aplicação, instale:

- Python 3.12 ou superior
- Node.js 20 ou superior
- npm
- Docker e Docker Compose

## Como rodar a aplicação

Execute os passos abaixo em três terminais separados: um para o banco, um para o backend e outro para o frontend.

### 1. Subir o PostgreSQL

Na raiz do projeto, execute:

```bash
docker compose up -d
```

O banco será iniciado com as credenciais definidas no `docker-compose.yml`:

```text
host: localhost
porta: 5432
banco: sigea_db
usuario: sigea
senha: sigea123
```

Para parar o banco:

```bash
docker compose down
```

### 2. Configurar e rodar o backend

Entre na pasta do backend:

```bash
cd backend
```

Crie o ambiente virtual:

```bash
python -m venv venv
```

Ative o ambiente virtual no Windows:

```bash
venv\Scripts\activate
```

No Linux ou macOS:

```bash
source venv/bin/activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

Crie o arquivo `.env` a partir do exemplo.

No Windows:

```bash
copy .env.example .env
```

No Linux ou macOS:

```bash
cp .env.example .env
```

Inicie a API:

```bash
uvicorn app.main:app --reload
```

A API ficará disponível em:

```text
http://localhost:8000
```

Documentação interativa:

```text
http://localhost:8000/docs
```

Rota de verificação:

```text
http://localhost:8000/health
```

### 3. Configurar e rodar o frontend

Em outro terminal, entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env` a partir do exemplo.

No Windows:

```bash
copy .env.example .env
```

No Linux ou macOS:

```bash
cp .env.example .env
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O frontend ficará disponível em:

```text
http://localhost:5173
```

## Variáveis de ambiente

### Backend

O backend lê as configurações do arquivo `backend/.env`.

```env
APP_NAME=SIGEA API
APP_VERSION=0.1.0
ENVIRONMENT=development
DATABASE_URL=postgresql+psycopg2://sigea:sigea123@localhost:5432/sigea_db
BACKEND_CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

### Frontend

O frontend usa `frontend/.env` para apontar para a API:

```env
VITE_API_URL=http://localhost:8000
```

## Fluxo implementado

1. Cadastrar animal
2. Listar animais cadastrados
3. Analisar padrão de fertilidade com IA simples
4. Exibir o resultado da análise no React

## Endpoints principais

```text
GET  /health
POST /api/animals
GET  /api/animals
POST /api/ai/fertility-pattern
```

## Scripts úteis

Backend:

```bash
uvicorn app.main:app --reload
```

Frontend:

```bash
npm run dev
npm run build
npm run preview
```

Docker:

```bash
docker compose up -d
docker compose down
docker compose logs -f postgres
```

## Observação sobre a IA

A IA deste boilerplate começa como uma pontuação baseada em regras. Ela pode evoluir para um modelo treinado com scikit-learn conforme a equipe adicionar dados reais ou simulados ao projeto.
