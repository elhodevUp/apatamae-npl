import React, { useState, useEffect } from 'react';
import { 
  Camera, Maximize2, X, ChevronLeft, ChevronRight, 
  MapPin, Info
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });

    const elements = document.querySelectorAll('.apple-reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [activeCategory]);

  const photos = [
    {
      id: 1,
      src: "/images/galeries/gallery_photo_1.jpeg",
      title: "Réunion d'Orientation & Action Citoyenne",
      category: "terrain",
      categoryName: "Terrain & Climat",
      location: "Thiès — ZAC Nord",
      spanClass: "col-span-1 sm:col-span-2 md:col-span-2 row-span-2 min-h-[320px] sm:min-h-[460px]"
    },
    {
      id: 2,
      src: "/images/galeries/gallery_photo_2.jpeg",
      title: "Cercle de Réflexion sous l'Apatam",
      category: "concertation",
      categoryName: "Concertations & Aînés",
      location: "Kaolack",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 3,
      src: "/images/galeries/gallery_photo_3.jpeg",
      title: "Atelier du Leadership Féminin & STEM",
      category: "stem",
      categoryName: "STEM & Formations",
      location: "Dakar",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 4,
      src: "/images/galeries/gallery_photo_4.jpeg",
      title: "Séminaire Institutionnel sur la Gouvernance",
      category: "concertation",
      categoryName: "Concertations & Aînés",
      location: "Thiès",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 5,
      src: "/images/galeries/gallery_photo_5.jpeg",
      title: "Chambre d'Hôtes Confort Exécutive",
      category: "hebergement",
      categoryName: "Hébergements & Salles",
      location: "Résidence Thiès ZAC Nord",
      spanClass: "col-span-1 sm:col-span-2 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 6,
      src: "/images/galeries/gallery_photo_6.jpeg",
      title: "Formation Pratique aux Technologies Vertes",
      category: "stem",
      categoryName: "STEM & Formations",
      location: "Saint-Louis",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 7,
      src: "/images/galeries/gallery_photo_7.jpeg",
      title: "Salle Mutualisée de Conférence Équipée",
      category: "hebergement",
      categoryName: "Hébergements & Salles",
      location: "Maison de la Citoyenneté",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 8,
      src: "/images/galeries/gallery_photo_8.jpeg",
      title: "Visite de Supervision de Projet Maraîcher",
      category: "terrain",
      categoryName: "Terrain & Climat",
      location: "Podor",
      spanClass: "col-span-1 sm:col-span-2 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 9,
      src: "/images/galeries/gallery_photo_9.jpeg",
      title: "Rencontre avec les Dépositaires de Sagesse",
      category: "concertation",
      categoryName: "Concertations & Aînés",
      location: "Matam",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 10,
      src: "/images/galeries/gallery_photo_10.jpeg",
      title: "Séance de Travail avec les Partenaires",
      category: "concertation",
      categoryName: "Concertations & Aînés",
      location: "Dakar Cité Promocap",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 11,
      src: "/images/galeries/gallery_photo_11.jpeg",
      title: "Coopérative Féminine Agro-Écologique",
      category: "terrain",
      categoryName: "Terrain & Climat",
      location: "Fatick",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 12,
      src: "/images/galeries/gallery_photo_12.jpeg",
      title: "Espace de Réunion Confortable & Insonorisé",
      category: "hebergement",
      categoryName: "Hébergements & Salles",
      location: "Thiès",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 13,
      src: "/images/galeries/gallery_photo_13.jpeg",
      title: "Forum de Concertation Citoyenne",
      category: "concertation",
      categoryName: "Concertations & Aînés",
      location: "Ziguinchor",
      spanClass: "col-span-1 sm:col-span-2 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 14,
      src: "/images/galeries/gallery_photo_14.jpeg",
      title: "Atelier de Codage & Robotique pour Lycéennes",
      category: "stem",
      categoryName: "STEM & Formations",
      location: "Kaolack",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 15,
      src: "/images/galeries/gallery_photo_15.jpeg",
      title: "Chambre d'Hôte de Charme à Saly Portudal",
      category: "hebergement",
      categoryName: "Hébergements & Salles",
      location: "Saly Portudal",
      spanClass: "col-span-1 min-h-[220px] sm:min-h-[280px]"
    },
    {
      id: 16,
      src: "/images/galeries/gallery_photo_16.jpeg",
      title: "Déploiement d'un Système d'Irrigation Solaire",
      category: "terrain",
      categoryName: "Terrain & Climat",
      location: "Bakel",
      spanClass: "col-span-1 sm:col-span-2 min-h-[220px] sm:min-h-[280px]"
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
    <section className="py-24 lg:py-32 bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section Header & Premium Filter Tabs */}
        <div className="flex flex-col gap-10 lg:gap-12">
          
          {/* Top: Description */}
          {showTitle ? (
            <div className="space-y-4 max-w-3xl mx-auto flex flex-col items-center text-center apple-reveal visible">
              <span className="text-[#daa520] font-bold tracking-[0.25em] uppercase text-xs flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#daa520] block" />
                Actions de Terrain
                <span className="w-6 h-[2px] bg-[#daa520] block" />
              </span>
              <h2 className="font-headline font-extrabold text-[#0A2540] text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                Mosaïque de Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#daa520] to-[#1B4332]">Récits Visuels</span>
              </h2>
              <p className="font-body text-[#414844] text-lg leading-relaxed max-w-2xl">
                Découvrez en images les rencontres citoyennes, les projets agro-écologiques, et les formations que nous portons au cœur des territoires.
              </p>
            </div>
          ) : (
            <div className="space-y-2 max-w-md mx-auto text-center">
              <h2 className="font-headline font-bold text-2xl text-[#0A2540]">
                Filtrer par Thématique
              </h2>
              <p className="text-sm text-[#414844]">
                Sélectionnez une catégorie pour explorer nos actions spécifiques.
              </p>
            </div>
          )}

          {/* Bottom: Full-line Filter Navigation */}
          <div className="w-full overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar apple-reveal visible sm:flex sm:justify-center" style={{ transitionDelay: '0.1s' }}>
            <div className="inline-flex gap-2 p-2 bg-white rounded-full border border-[#c1c8c2]/50 shadow-sm w-max mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-[#1B4332] text-white shadow-lg shadow-[#1B4332]/30 scale-100'
                      : 'text-[#414844] hover:text-[#1B4332] hover:bg-[#1B4332]/5 scale-95 hover:scale-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clean & Dynamic Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className={`group relative overflow-hidden rounded-[2rem] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-700 bg-white ${photo.spanClass} apple-reveal visible`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out absolute inset-0"
                loading="lazy"
              />

              {/* Glassmorphism Hover Info Panel (Slide up from bottom) */}
              <div className="absolute inset-x-2 bottom-2 translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                <div className="bg-white/95 backdrop-blur-xl p-5 rounded-[1.5rem] shadow-xl border border-white/50 flex flex-col justify-between h-full relative">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1B4332]/10 flex items-center justify-center text-[#1B4332]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-1 mb-2 rounded-full bg-[#daa520]/10 text-[#daa520] text-[10px] font-extrabold uppercase tracking-wider">
                      {photo.categoryName}
                    </span>
                    <h3 className="font-headline font-bold text-base text-[#0A2540] leading-snug mb-3 pr-8">
                      {photo.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#414844]">
                    <MapPin className="w-3.5 h-3.5 text-[#daa520]" />
                    <span>{photo.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Subtle Gradient to make sure bottom image edge looks nice behind glass */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Ultra-Immersive Lightbox */}
        {selectedPhotoIndex !== null && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#0A2540] transition-colors flex items-center justify-center z-50 backdrop-blur-md"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Left */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 text-white hover:bg-white hover:text-[#0A2540] transition-all flex items-center justify-center z-50 backdrop-blur-md"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Navigation Right */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 text-white hover:bg-white hover:text-[#0A2540] transition-all flex items-center justify-center z-50 backdrop-blur-md"
              aria-label="Suivant"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Center Image */}
            <div 
              className="w-full h-full max-h-[80vh] flex items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={displayPhotos[selectedPhotoIndex].src}
                alt={displayPhotos[selectedPhotoIndex].title}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              />
            </div>

            {/* Minimalist Bottom Info Bar */}
            <div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:px-8 sm:py-5 rounded-3xl w-[90%] max-w-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#daa520]/20 text-[#daa520] text-xs font-bold uppercase tracking-wider">
                    {displayPhotos[selectedPhotoIndex].categoryName}
                  </span>
                  <span className="text-sm text-white/80 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-4 h-4 text-[#daa520]" />
                    {displayPhotos[selectedPhotoIndex].location}
                  </span>
                </div>
                <h3 className="font-headline font-bold text-xl sm:text-2xl text-white">
                  {displayPhotos[selectedPhotoIndex].title}
                </h3>
              </div>

              <div className="text-sm font-bold text-white/50 shrink-0 bg-white/5 px-4 py-2 rounded-full">
                {selectedPhotoIndex + 1} / {displayPhotos.length}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
