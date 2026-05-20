# Job 07 - LAMP

Stack LAMP composee de PHP 8.2 + MySQL 8 + phpMyAdmin.

## Demarrage
1. Copier .env.example en .env et ajuster les valeurs.
2. Lancer la stack :
   docker compose up -d

## Acces
- http://localhost:8080 (phpinfo + test MySQL)
- http://localhost:8081 (phpMyAdmin)

## Arret
- docker compose down

## Suppression des donnees
- docker compose down -v

## Ports
- 8080 -> PHP (80 dans le conteneur)
- 8081 -> phpMyAdmin (80 dans le conteneur)

## Notes
- Le hostname MySQL a utiliser dans le code est db.
