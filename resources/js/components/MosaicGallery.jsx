import React, { useState } from 'react';
import { 
  Sparkles, Maximize2, X, ChevronLeft, ChevronRight, 
  MapPin, Camera, Filter, CheckCircle2, ArrowUpRight 
} from 'lucide-react';

export default function MosaicGallery({ showTitle = true, limit = 0 }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'Toutes les Photos' },
    { id: 'terrain', label: 'Terrain & Climat' },
    { id: 'stem', label: 'STEM & Formations' },
    { id: 'concertation', label: 'Concertations & Aînés' },
    { id: 'hebergement', label: 'Hébergements & Salles' }
  ];

  const photos = [
    {
      id: 1,
      src: "/images/galeries/WhatsApp Image 2026-07-27 at 00.48.09.jpeg",
      title: "Réunion d'Orientation & Action Citoyenne",
      category: "terrain",
      categoryName: "Terrain & Climat",
      location: "Thiès — ZAC Nord",
      spanClass: "col-span-1 sm:col-span-2 md:col-span-2 row-span-2 min-h-[320px] sm:min-h-[420px]"
    },
    {
      id: 2,
      src: "/images/galeries/WhatsApp Image 2026-07-27 at 00.48.09 (2).jpeg",
      title: "Cercle de Réflexion sous l'Apatam",
      category: "concertation",
      categoryName: "Concertations & Aînés",
      location: "Kaolack",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 3,
      src: "/images/galeries/WhatsApp Image 2026-07-27 at 00.48.09 (3).jpeg",
      title: "Atelier du Leadership Féminin & STEM",
      category: "stem",
      categoryName: "STEM & Formations",
      location: "Dakar",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 4,
      src: "/images/galeries/WhatsApp Image 2026-07-27 at 00.48.10.jpeg",
      title: "Séminaire Institutionnel sur la Gouvernance",
      category: "concertation",
      categoryName: "Concertations & Aînés",
      location: "Thiès",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 5,
      src: "/images/galeries/WhatsApp Image 2026-07-27 at 00.48.10 (1).jpeg",
      title: "Chambre d'Hôtes Confort Exécutive",
      category: "hebergement",
      categoryName: "Hébergements & Salles",
      location: "Résidence Thiès ZAC Nord",
      spanClass: "col-span-1 sm:col-span-2 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 6,
      src: "/images/galeries/WhatsApp Image 2026-07-27 at 00.48.10 (2).jpeg",
      title: "Formation Pratique aux Technologies Vertes",
      category: "stem",
      categoryName: "STEM & Formations",
      location: "Saint-Louis",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 7,
      src: "/images/galeries/WhatsApp Image 2026-07-27 at 00.48.10 (3).jpeg",
      title: "Salle Mutualisée de Conférence Équipée",
      category: "hebergement",
      categoryName: "Hébergements & Salles",
      location: "Maison de la Citoyenneté",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 8,
      src: "/images/galeries/WhatsApp Image 2026-07-27 at 00.48.10 (4).jpeg",
      title: "Visite de Supervision de Projet Maraîcher",
      category: "terrain",
      categoryName: "Terrain & Climat",
      location: "Podor",
      spanClass: "col-span-1 sm:col-span-2 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 9,
      src: "/images/galeries/WhatsApp Image 2026-07-27 at 00.48.10 (5).jpeg",
      title: "Rencontre avec les Dépositaires de Sagesse",
      category: "concertation",
      categoryName: "Concertations & Aînés",
      location: "Matam",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 10,
      src: "/images/galeries/WhatsApp Image 2026-07-27 at 00.48.11.jpeg",
      title: "Séance de Travail avec les Partenaires",
      category: "concertation",
      categoryName: "Concertations & Aînés",
      location: "Dakar Cité Promocap",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 11,
      src: "/images/galeries/WhatsApp Image 2026-07-27 at 00.48.11 (1).jpeg",
      title: "Coopérative Féminine Agro-Écologique",
      category: "terrain",
      categoryName: "Terrain & Climat",
      location: "Fatick",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 12,
      src: "/images/galeries/WhatsApp Image 2026-07-28 at 16.40.25.jpeg",
      title: "Espace de Réunion Confortable & Insonorisé",
      category: "hebergement",
      categoryName: "Hébergements & Salles",
      location: "Thiès",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 13,
      src: "/images/galeries/WhatsApp Image 2026-07-28 at 16.40.26.jpeg",
      title: "Forum de Concertation Citoyenne",
      category: "concertation",
      categoryName: "Concertations & Aînés",
      location: "Ziguinchor",
      spanClass: "col-span-1 sm:col-span-2 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 14,
      src: "/images/galeries/WhatsApp Image 2026-08-09 at 21.35.03.jpeg",
      title: "Atelier de Codage & Robotique pour Lycéennes",
      category: "stem",
      categoryName: "STEM & Formations",
      location: "Kaolack",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 15,
      src: "/images/galeries/WhatsApp Image 2026-08-09 at 21.35.03 (1).jpeg",
      title: "Chambre d'Hôte de Charme à Saly Portudal",
      category: "hebergement",
      categoryName: "Hébergements & Salles",
      location: "Saly Portudal",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[250px]"
    },
    {
      id: 16,
      src: "/images/galeries/WhatsApp Image 2026-08-09 at 21.35.03 (2).jpeg",
      title: "Déploiement d'un Système d'Irrigation Solaire",
      category: "terrain",
      categoryName: "Terrain & Climat",
      location: "Bakel",
      spanClass: "col-span-1 sm:col-span-2 min-h-[220px] sm:min-h-[250px]"
    }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  const displayPhotos = limit > 0 ? filteredPhotos.slice(0, limit) : filteredPhotos;

  const openLightbox = (photo) => {
    const index = displayPhotos.findIndex(p => p.id === photo.id);
    setSelectedPhotoIndex(index !== -1 ? index : 0);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev + 1) % displayPhotos.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev - 1 + displayPhotos.length) % displayPhotos.length);
  };

  return (
    <section className="py-12 sm:py-20 bg-[#f8f9fa] text-[#191c1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {showTitle ? (
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#daa520]/20 border border-[#daa520]/40 text-[#012d1d] text-xs font-bold uppercase tracking-wider">
                <Camera className="w-3.5 h-3.5 text-[#daa520]" />
                <span>Mosaïque de Nos Actions de Terrain</span>
              </span>
              <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-[#012d1d] tracking-tight">
                Galerie Photo & <span className="text-[#396093]">Récits Visuels</span>
              </h2>
              <p className="text-sm text-[#414844] leading-relaxed">
                Découvrez en images les rencontres citoyennes, les projets agro-écologiques, les formations STEM et nos espaces d'accueil à Thiès, Saly et en régions.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <h2 className="font-headline font-bold text-xl text-[#012d1d]">
                Filtrer par Thématique
              </h2>
              <p className="text-xs text-[#414844]">
                Sélectionnez une catégorie ci-contre pour afficher les photos correspondantes.
              </p>
            </div>
          )}

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#edeeef] rounded-2xl border border-white/80 self-start md:self-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#012d1d] text-white shadow-md'
                    : 'text-[#414844] hover:text-[#012d1d] hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mosaic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/80 ${photo.spanClass}`}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out absolute inset-0"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/90 via-[#012d1d]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#012d1d] text-[11px] font-extrabold shadow-md">
                  {photo.categoryName}
                </span>
              </div>

              {/* Top Zoom Icon */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-[#daa520] text-[#012d1d] flex items-center justify-center shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#daa520] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{photo.location}</span>
                </div>
                <h3 className="font-headline font-bold text-sm sm:text-base text-white leading-snug drop-shadow-sm">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#daa520] hover:text-[#012d1d] transition-all z-50 shadow-xl"
              aria-label="Fermer la vue agrandie"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#daa520] hover:text-[#012d1d] transition-all z-50 shadow-xl"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-[#daa520] hover:text-[#012d1d] transition-all z-50 shadow-xl"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <div 
              className="max-w-4xl w-full bg-[#012d1d] rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={displayPhotos[selectedPhotoIndex].src}
                  alt={displayPhotos[selectedPhotoIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              <div className="p-6 bg-[#012d1d] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-3 py-1 rounded-full bg-[#daa520] text-[#012d1d] text-[11px] font-bold">
                      {displayPhotos[selectedPhotoIndex].categoryName}
                    </span>
                    <span className="text-xs text-white/70 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#daa520]" />
                      {displayPhotos[selectedPhotoIndex].location}
                    </span>
                  </div>
                  <h3 className="font-headline font-bold text-lg text-white">
                    {displayPhotos[selectedPhotoIndex].title}
                  </h3>
                </div>

                <div className="text-xs font-medium text-white/60 shrink-0">
                  {selectedPhotoIndex + 1} / {displayPhotos.length}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
