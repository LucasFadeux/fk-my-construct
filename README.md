# FK My Construct — site vitrine

Site vitrine statique (HTML / CSS / JS, sans framework ni build) pour Farid Khibaziev, artisan maçon-carreleur (Hampteau, Belgique).

## Structure

```
index.html                Accueil
realisations.html         Galerie de réalisations (avec filtres)
contact.html               Coordonnées + formulaire de contact
mentions-legales.html      Mentions légales
conditions-generales.html  Conditions générales d'utilisation
css/style.css               Feuille de style unique
js/script.js                 Menu mobile, filtres galerie, validation du formulaire
images/                       Logo, favicon et visuels réels (voir ci-dessous)
vercel.json                   Config Vercel (URLs propres, sans .html)
```

## Logo & favicon

Déposer les fichiers dans `images/` avec ces noms exacts, puis me signaler pour que je les intègre dans le header/footer/onglet navigateur :

- `images/logo.png` — logo seul (juste le monogramme + "FK MY CONSTRUCT"), fond transparent si possible, pour le header (fond blanc).
- `images/logo-white.png` — variante claire/blanche du logo, pour le footer (fond sombre). Facultatif si le logo actuel passe déjà bien sur fond foncé.
- `images/favicon.png` — version carrée (512×512 mini) pour l'icône d'onglet.

La carte de visite complète (avec téléphone/adresse) ne convient pas telle quelle comme logo web : il faut un export ne contenant que le monogramme/texte de marque.

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
- Ajouter les fichiers logo/favicon dans `images/` (voir section ci-dessus).
- Définir une adresse email professionnelle (aucune n'existe encore) et l'ajouter dans le footer + page Contact.
- Brancher l'envoi réel du formulaire de contact (ex. Formspree, ou une fonction serverless Vercel) — actuellement seule la validation côté client est active.
- Vérifier/confirmer les chiffres du bandeau "15+ ans d'expérience / 200+ chantiers" sur l'accueil (actuellement des valeurs indicatives, à valider avec Farid).
