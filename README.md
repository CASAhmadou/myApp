# ✅ Todo App – Node.js (Backend) & React.js (Frontend)

Mise en place d'une application de gestion de tâches (todos) avec authentification JWT, développée en **Node.js**, **React.js** et **PostgreSQL**.

---

## 📁 Structure du projet

```
/backend     → API Node.js + Express + PostgreSQL
/frontend    → Interface utilisateur React.js + TypeScript
```

---

## ⚙️ Prérequis

- Node.js (v18+ recommandé)
- PostgreSQL (v13+)
- npm ou yarn

---

## 🚀 Installation

### 1. versionner le projet

```bash
Backend: https://github.com/CASAhmadou/myApp
Frontend: https://github.com/CASAhmadou/my-app
```

---

## 🖥️ Backend – Node.js

### 📂 Accéder au dossier

```bash
cd myApp
```

### 📦 Installer les dépendances

```bash
npm install
```

### ⚙️ Configuration

Créer un fichier `.env` :

```env
PORT=5000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/my_app
JWT_SECRET=supersecret
```

Créer la base de données et la table :

```sql
CREATE DATABASE my_app;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  is_done BOOLEAN DEFAULT FALSE,
  user_id INTEGER REFERENCES users(id)
);
```

### ▶️ Lancer le serveur

```bash
npm start
```

L'API sera disponible sur : `http://localhost:3000`

---

## 🌐 Frontend – React.js

### 📂 Accéder au dossier

```bash-
cd ../my-app
```

### 📦 Installer les dépendances

```bash
npm install
```

### ⚙️ Configuration de l’API

Dans le fichier `api.ts` :

const API_BASE = "http://localhost:3000";

### ▶️ Lancer l’application

```bash
npm start
```

L'application sera disponible sur : `http://localhost:3001`

---

## 🔑 Fonctionnalités

- Inscription / Connexion (JWT)
- Ajout, édition, suppression de tâches
- Marquer une tâche comme terminée
- Redirection automatique si non connecté
- Interface claire et réactive

---

## 🧪 Exemple de requêtes API

- `POST /register` → Créer un utilisateur
- `POST /login` → Authentification
- `GET /todos` → Récupérer les tâches (token requis)
- `POST /todos` → Ajouter une tâche
- `PUT /todos/:id` → Modifier une tâche
- `DELETE /todos/:id` → Supprimer une tâche

---

## 🧑‍💻 Auteurs
[CASAhmadou](https://github.com/CASAhmadou)

Backend: https://github.com/CASAhmadou/myApp
Frontend: https://github.com/CASAhmadou/my-app

---

