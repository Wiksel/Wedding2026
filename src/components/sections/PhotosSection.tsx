import { QRCodeSVG } from 'qrcode.react';
import { ExternalLink } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import type { WeddingPhase } from '../../lib/weddingPhase';

export const ALBUM_URL = 'https://drive.google.com/drive/folders/1SCR2PgpAFbVBuYgSx2hooEVYWq3R2jEv';

const INTRO: Record<WeddingPhase, string> = {
    before: 'Zróbcie nam i sobie mnóstwo zdjęć! Po ceremonii i w trakcie zabawy wrzucajcie je do naszego wspólnego albumu. Każde ujęcie z Waszej perspektywy to dla nas bezcenna pamiątka.',
    during: 'Zrobiliście fajne zdjęcie? Wrzućcie je do naszego wspólnego albumu. Każde ujęcie z Waszej perspektywy to dla nas bezcenna pamiątka.',
    after: 'Jeśli w Waszych telefonach zostały zdjęcia z naszego wesela, podzielcie się nimi. Z radością obejrzymy ten dzień Waszymi oczami.',
};

export const PhotosSection = ({ phase }: { phase: WeddingPhase }) => (
    <section id="zdjecia" className="py-16 md:py-24 relative scroll-mt-[68px]">
        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
            <SectionTitle>Wasze Zdjęcia</SectionTitle>

            <div className="glass-card rounded-[3rem] p-8 md:p-14 grid md:grid-cols-[1fr_auto] gap-10 items-center">
                <div className="text-center md:text-left space-y-6">
                    <p className="text-wed-text/80 leading-relaxed text-lg">{INTRO[phase]}</p>
                    <a
                        href={ALBUM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-wed-green text-wed-beige-light rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-wed-green-dark transition-all shadow-xl"
                    >
                        Otwórz album <ExternalLink size={14} />
                    </a>
                </div>
                <div className="hidden md:flex flex-col items-center gap-3">
                    <div className="bg-white p-4 rounded-2xl shadow-lg">
                        <QRCodeSVG value={ALBUM_URL} size={168} fgColor="#1A261D" />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-wed-text/50">Zeskanuj telefonem</p>
                </div>
            </div>
        </div>
    </section>
);
