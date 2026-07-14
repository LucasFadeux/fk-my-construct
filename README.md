# FK Construct — site vitrine

Site vitrine statique (HTML / CSS / JS, sans framework ni build) pour un artisan maçon-carreleur.

## Structure

```
index.html          Accueil
realisations.html   Galerie de réalisations (avec filtres)
contact.html         Coordonnées + formulaire de contact
css/style.css        Feuille de style unique
js/script.js          Menu mobile, filtres galerie, validation du formulaire
vercel.json           Config Vercel (URLs propres, sans .html)
```

## Aperçu en local

Aucune installation requise : ouvrir `index.html` dans un navigateur, ou servir le dossier avec n'importe quel serveur statique, par ex. :

```
npx serve .
```

## Déploiement (Vercel)

1. Pousser ce repo sur GitHub.
2. Sur [vercel.com](https://vercel.com), "Add New Project" → importer le repo GitHub.
3. Aucune configuration de build nécessaire (site statique, "Other" / pas de framework) — Vercel sert les fichiers tels quels.
4. Ajouter le nom de domaine personnalisé dans Project Settings → Domains une fois le domaine acheté.

## À faire avant mise en ligne chez le client

- Remplacer les images génériques (picsum.photos) par de vraies photos de chantiers.
- Remplacer les coordonnées fictives (adresse, téléphone, email) dans les 3 pages + footer.
- Brancher l'envoi réel du formulaire de contact (ex. Formspree, ou une fonction serverless Vercel) — actuellement seule la validation côté client est active.
- Remplacer l'iframe Google Maps (actuellement centrée sur Paris) par l'adresse réelle.
