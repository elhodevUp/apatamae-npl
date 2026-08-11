# APATAM@E — Agence Institutionnelle & Développement Durable

Plateforme web institutionnelle développée avec **Laravel 12**, **Inertia.js**, **React**, **Tailwind CSS** et **DaisyUI**.

---

## 🚀 Guide d'Installation & LancementRapide

Toute personne qui **clone** ou **pull** ce dépôt doit exécuter les étapes suivantes pour installer et lancer le projet localement :

### 1. Cloner / Récupérer le projet
```bash
git clone https://github.com/elhodevUp/apatamae-npl.git
cd apatamae-npl
```
*(ou `git pull origin main` si le projet est déjà cloné)*

### 2. Installer les dépendances PHP & JavaScript
```bash
composer install
npm install
```

### 3. Configurer le fichier d'environnement `.env`
```bash
cp .env.example .env
php artisan key:generate
```

> **Note d'environnement** : Assurez-vous d'avoir les variables suivantes configurées dans votre `.env` :
> ```env
> SESSION_DRIVER=file
> CACHE_STORE=file
> QUEUE_CONNECTION=sync
> ```

### 4. Compiler les assets Frontend
```bash
npm run build
```

### 5. Lancer le serveur local
```bash
# Lancer le serveur backend Laravel
php artisan serve --port=8000

# En mode développement réactif (Hot Module Replacement)
npm run dev
```

### 6. Accéder à l'application
Ouvrez votre navigateur sur : [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

---

## 🛠️ Stack Technique
- **Backend** : Laravel 12 (PHP)
- **Adaptateur SPA** : Inertia.js React
- **Frontend** : React 18, Tailwind CSS v3, DaisyUI, Lucide React Icons
- **Bundler** : Vite
