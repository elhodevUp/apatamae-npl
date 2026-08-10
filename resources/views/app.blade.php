<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>APATAM@E — Agence Institutional & Développement Durable</title>
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="shortcut icon" type="image/png" href="/logo.png" />
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
  </head>
  <body class="font-sans antialiased text-[#191c1d] bg-[#f8f9fa]">
    @inertia
  </body>
</html>
