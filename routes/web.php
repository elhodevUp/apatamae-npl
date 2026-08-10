<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes - APATAM@E (Laravel + Inertia.js + React)
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('home');

Route::get('/qui-sommes-nous', function () {
    return Inertia::render('AboutPage');
})->name('about');

Route::get('/nos-programmes', function () {
    return Inertia::render('ProgramsPage');
})->name('programs');

Route::get('/impact-recits', function () {
    return Inertia::render('ImpactPage');
})->name('impact');

Route::get('/impact', function () {
    return Inertia::render('ImpactPage');
});

Route::get('/partenaires', function () {
    return Inertia::render('PartnersPage');
})->name('partners');

Route::get('/contact', function () {
    return Inertia::render('ContactPage');
})->name('contact');

// --- Form Submissions ---
Route::post('/contact/general', function (Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'organization' => 'nullable|string|max:255',
        'email' => 'required|email',
        'phone' => 'required|string|max:50',
        'subject' => 'required|string',
        'message' => 'required|string',
    ]);

    return back()->with('message', 'Votre message a été transmis avec succès au Secrétariat APATAM@E.');
})->name('contact.general');

Route::post('/contact/salle', function (Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email',
        'phone' => 'required|string',
        'activityType' => 'required|string',
        'date' => 'required|date',
    ]);

    return back()->with('message', 'Votre demande de réservation de salle a bien été enregistrée.');
})->name('contact.salle');

Route::post('/contact/chambre', function (Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email',
        'phone' => 'required|string',
        'location' => 'required|string',
        'checkIn' => 'required|date',
    ]);

    return back()->with('message', 'Votre demande d\'hébergement en chambre d\'hôtes a été reçue.');
})->name('contact.chambre');
