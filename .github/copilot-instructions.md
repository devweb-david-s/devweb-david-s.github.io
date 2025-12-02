# Instructions pour les agents AI (Copilot)

But : permettre à un agent d'être immédiatement productif sur ce site statique (portfolio).

1) Vue d'ensemble
- Site statique pour GitHub Pages. Point d'entrée : `index.html`.
- Pages supplémentaires dans `html/` (`a-propos.html`, `cv.html`, `projet.html`, `contact.html`, `competence.html`).
- Styles : source SCSS dans `scss/styles.scss` -> CSS compilé dans `css/styles.css`.
- Scripts : `js/` contient `changerDePage.js`, `darkMod.js`, `animations.js`.
- Module autonome : `jeuxchifoumieJs01/` contient un mini-jeu avec sa propre structure.

2) Flux de développement commun
- Modifier les styles : éditer `scss/styles.scss`, compiler vers `css/styles.css` (voir section 4).
- Ajouter/éditer une page : créer/modifier `html/*.html` et mettre à jour les liens dans `index.html` ou `js/changerDePage.js`.
- Debug JS : ouvrir `js/*.js` et tester via un serveur local, éviter d'ouvrir les fichiers via `file://` (chemins relatifs et fetch peuvent poser problème).

3) Conventions observées
- Langue : le contenu et commentaires sont majoritairement en français — conserver la langue pour cohérence.
- SCSS est la source de vérité pour les styles ; ne pas modifier directement `css/styles.css` à long terme.
- Le mini-jeu dans `jeuxchifoumieJs01/` est autonome : ne pas le refactorer sans demander.

4) Commandes utiles (exemples)
- Servir le site localement (PowerShell) :
```
python -m http.server 8000
```
ou
```
npx http-server -c-1 . -p 8000
```
- Compiler SCSS (si `sass` est installé) :
```
sass scss/styles.scss css/styles.css
# ou pour le développement
sass --watch scss:css
```
Remarque : le dépôt ne contient pas de `package.json` — ne pas ajouter d'outils npm sans validation.

5) Intégrations et dépendances
- Aucun back-end ou API externe détecté : tout est côté client.
- Déploiement : la branche `main` est compatible pour GitHub Pages (push sur `main` déploie le site si Pages est configuré).

6) Exemples de tâches concrètes
- Ajouter une nouvelle page : créer `html/nouvelle.html`, ajouter le lien dans `index.html` ou via `js/changerDePage.js`, vérifier styles.
- Corriger le thème sombre : inspecter `js/darkMod.js` puis les règles CSS liées dans `scss/styles.scss` / `css/styles.css`.

7) Ce que l'agent ne doit pas faire
- Ne pas créer de `package.json` ou pipeline CI sans validation préalable.
- Ne pas modifier le contenu de `jeuxchifoumieJs01/` sans accord.

8) Questions à poser au mainteneur
- Voulez-vous que j'ajoute un `package.json` pour les outils (sass, http-server) ?
- Préférez-vous les commits en français ou bilingues pour les messages de commit ?

Merci — dites-moi si vous voulez que j'ajoute des scripts de build, des exemples de PR, ou un petit guide de contribution.
