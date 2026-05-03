import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Countdown } from '../ui/Countdown';
import heroBg from '../../assets/Backgrounds/Hero_Background_v1.png';

const REF_W = 1920;
const REF_H = 1080;
const REF_BLUR_PX = 1.8;
const REF_BLUR_INSET = REF_BLUR_PX * 10;

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * Math.max(0, Math.min(1, t));
}

// All layout values as continuous functions of aspect ratio — no discrete jumps.
function computeLayout(w: number, h: number) {
    const ratio = w / h;

    // Scale: always center the box, never offset it (offset = black gaps).
    // 1.3 factor gives enough headroom on all sides.
    const scale = Math.max(w / REF_W, h / REF_H) * 1.3;
    const transform = `translate(-50%, -50%) scale(${scale})`;

    // Breakpoints
    const R_SQUARE = 1.0;
    const R_169 = 16 / 9;   // ~1.778
    const R_219 = 21 / 9;   // ~2.333

    // objectPosition Y%
    // portrait → 46%, 16:9 → 50%, 21:9 → 37%
    // LOWER Y% = image shifts DOWN on screen (counterintuitive but correct for objectFit:cover)
    let objY: number;
    if (ratio <= R_SQUARE) {
        objY = 46;
    } else if (ratio <= R_169) {
        objY = lerp(46, 55, (ratio - R_SQUARE) / (R_169 - R_SQUARE));
    } else if (ratio <= R_219) {
        objY = lerp(55, 37, (ratio - R_169) / (R_219 - R_169));
    } else {
        objY = 37;
    }

    // padding-bottom (vh): portrait=10.5, 16:9=12.0, 21:9=7.5
    // Lower value → content sits closer to bottom of viewport
    let pb: number;
    if (ratio <= R_SQUARE) {
        pb = 10.5;
    } else if (ratio <= R_169) {
        pb = lerp(10.5, 12.0, (ratio - R_SQUARE) / (R_169 - R_SQUARE));
    } else if (ratio <= R_219) {
        pb = lerp(12.0, 7.5, (ratio - R_169) / (R_219 - R_169));
    } else {
        pb = 7.5;
    }

    // title margin-bottom (px): portrait=8, 16:9+=4
    const titleMb = ratio <= R_SQUARE ? 8 : lerp(8, 4, (ratio - R_SQUARE) / (R_169 - R_SQUARE));

    // date row margin-bottom (px): portrait=-20, 16:9=-28, 21:9=-16
    let dateMb: number;
    if (ratio <= R_SQUARE) {
        dateMb = -20;
    } else if (ratio <= R_169) {
        dateMb = lerp(-20, -28, (ratio - R_SQUARE) / (R_169 - R_SQUARE));
    } else if (ratio <= R_219) {
        dateMb = lerp(-28, -16, (ratio - R_169) / (R_219 - R_169));
    } else {
        dateMb = -16;
    }

    // countdown margin-top (px): portrait=4, 16:9=0, 21:9=8
    let countdownMt: number;
    if (ratio <= R_SQUARE) {
        countdownMt = 4;
    } else if (ratio <= R_169) {
        countdownMt = lerp(4, 0, (ratio - R_SQUARE) / (R_169 - R_SQUARE));
    } else if (ratio <= R_219) {
        countdownMt = lerp(0, 8, (ratio - R_169) / (R_219 - R_169));
    } else {
        countdownMt = 8;
    }

    return { transform, objY, pb, titleMb, dateMb, countdownMt };
}

export const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const bgBoxRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const dateRowRef = useRef<HTMLDivElement>(null);
    const countdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const bgBox = bgBoxRef.current;
        const img = imgRef.current;
        const content = contentRef.current;
        const title = titleRef.current;
        const dateRow = dateRowRef.current;
        const countdown = countdownRef.current;
        if (!section || !bgBox || !img || !content || !title || !dateRow || !countdown) return;

        // Direct DOM mutations — zero React re-renders, zero CSS transition lag.
        function applyLayout() {
            const w = section!.clientWidth || window.innerWidth;
            const h = section!.clientHeight || window.innerHeight;
            const { transform, objY, pb, titleMb, dateMb, countdownMt } = computeLayout(w, h);

            bgBox!.style.transform = transform;
            img!.style.objectPosition = `center ${objY}%`;
            content!.style.paddingBottom = `${pb}vh`;
            title!.style.marginBottom = `${titleMb}px`;
            dateRow!.style.marginBottom = `${dateMb}px`;
            countdown!.style.marginTop = `${countdownMt}px`;
        }

        // Synchronous initial paint — already correct before first frame.
        applyLayout();

        // ResizeObserver is more reliable than window 'resize':
        // it fires when the section itself changes size (including svh settling).
        let rafId = 0;
        const ro = new ResizeObserver(() => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(applyLayout);
        });
        ro.observe(section);

        return () => {
            ro.disconnect();
            cancelAnimationFrame(rafId);
        };
    }, []);

    const scrollToNextSection = () => {
        const el = document.getElementById('rsvp');
        if (el) {
            const offsetPosition =
                el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="relative bg-black flex flex-col justify-end items-center overflow-hidden"
            style={{ height: '100svh' }}
        >
            <div className="absolute inset-0 overflow-hidden">
                {/* Reference box — always centered, never offset → no black gaps */}
                <div
                    ref={bgBoxRef}
                    style={{
                        position: 'absolute',
                        width: REF_W,
                        height: REF_H,
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'center center',
                        overflow: 'hidden',
                        willChange: 'transform',
                        // NO CSS transition — values update every rAF frame during resize.
                        // Transitions would fight with continuous updates and add lag/jitter.
                    }}
                >
                    <img
                        ref={imgRef}
                        src={heroBg}
                        style={{
                            position: 'absolute',
                            inset: -REF_BLUR_INSET,
                            width: `calc(100% + ${REF_BLUR_INSET * 2}px)`,
                            height: `calc(100% + ${REF_BLUR_INSET * 2}px)`,
                            objectFit: 'cover',
                            objectPosition: 'center 46%', // overridden by applyLayout()
                            filter: `blur(${REF_BLUR_PX}px) brightness(0.85)`,
                        }}
                        alt="Tło ślubne"
                    />
                </div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 pointer-events-none" />

            <div
                ref={contentRef}
                className="relative text-center text-wed-accent-light px-4 w-full max-w-7xl"
                style={{ paddingBottom: '10.5vh' }}
            >
                <h1
                    ref={titleRef}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-script leading-none animate-in slide-in-from-bottom duration-1000 tracking-wide drop-shadow-2xl whitespace-nowrap"
                    style={{ marginBottom: '8px' }}
                >
                    Wiktoria &amp; Bartek
                </h1>

                <div
                    ref={dateRowRef}
                    className="flex items-center justify-center space-x-3 md:space-x-8 animate-in fade-in duration-1000 delay-300"
                    style={{ marginBottom: '-20px' }}
                >
                    <div className="h-px w-6 md:w-24 bg-wed-accent-light/40" />
                    <p className="text-sm sm:text-base md:text-2xl font-light tracking-[0.2em] md:tracking-[0.4em] uppercase drop-shadow-md whitespace-nowrap">
                        02.10.2026 • Kroczewo
                    </p>
                    <div className="h-px w-6 md:w-24 bg-wed-accent-light/40" />
                </div>

                <div ref={countdownRef} style={{ marginTop: '4px' }}>
                    <Countdown targetDate="2026-10-02T16:00:00" />
                </div>
            </div>

            <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
                onClick={scrollToNextSection}
            >
                <ChevronDown size={40} className="md:w-[44px] md:h-[44px] text-wed-accent-light" />
            </div>
        </section>
    );
};
