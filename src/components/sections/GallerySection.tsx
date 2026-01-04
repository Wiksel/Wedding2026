
import { SectionTitle } from '../ui/SectionTitle';

export const GallerySection = () => {
    const images = [
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600"
    ];

    return (
        <section id="galeria" className="py-32 bg-stone-100/30">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <SectionTitle subtitle="Nasza Historia">Galeria Wspomnień</SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {images.map((img, i) => (
                        <div key={i} className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg group">
                            <img src={img} alt={`Zdjęcie ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
                <p className="mt-12 font-script text-2xl text-slate-400">Początek pięknej przygody...</p>
            </div>
        </section>
    );
};
