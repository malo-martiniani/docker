# Job 08 - Fullstack Hot Reload

Stack dev React + Node + MySQL avec hot reload et healthcheck.

## Prerequis
- Docker Desktop (Compose v2)

## Lancer la stack
1. Ajuste les variables dans `.env`.
2. Lance : `docker compose up`

Les dependances npm sont installees automatiquement au demarrage des conteneurs.

## URLs utiles
- Frontend : http://localhost:5173
- Backend : http://localhost:3000
- Test MySQL : http://localhost:3000/db-test

## Hot reload
- Modifie `backend/server.js` : Node relance automatiquement.
- Modifie `frontend/src/App.jsx` : Vite recharge automatiquement.

## Verification healthcheck
- `docker compose ps` doit afficher `db (healthy)` avant le backend.

## Nettoyer
- `docker compose down -v` pour supprimer la base locale.
