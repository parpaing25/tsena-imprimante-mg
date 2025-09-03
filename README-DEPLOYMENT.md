# Déploiement sur o2switch

## Instructions de déploiement

1. **Préparer le projet localement :**
   ```bash
   npm install
   npm run build
   ```

2. **Upload via cPanel File Manager :**
   - Connectez-vous à votre cPanel o2switch
   - Allez dans "Gestionnaire de fichiers"
   - Naviguez vers `/home/reti9202/Tsenaimprimante.artimmomada.com/`
   - Uploadez tout le contenu du dossier `dist/` vers ce répertoire

3. **Déploiement automatique (recommandé) :**
   - Le fichier `.cpanel.yml` est déjà configuré
   - Il suffit de pusher votre code vers votre repository
   - o2switch déploiera automatiquement

## Configuration

- **Domaine :** Tsenaimprimante.artimmomada.com
- **Node.js :** Version 20 (fallback vers 22 si nécessaire)
- **Build :** Vite génère le dossier `dist/`
- **Redirections :** `.htaccess` configuré pour React Router

## Fichiers importants

- `.cpanel.yml` : Configuration de déploiement automatique
- `public/.htaccess` : Redirections et optimisations Apache
- `vite.config.ts` : Configuration de build optimisée

## Vérifications post-déploiement

1. Vérifiez que toutes les pages fonctionnent
2. Testez les formulaires de contact
3. Vérifiez les images et assets
4. Testez la responsivité mobile