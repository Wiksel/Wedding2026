import { useState, useEffect, useRef } from 'react';
import { Check, AlertCircle, Minus, Plus, ChevronDown } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const OptionGroup = ({ options, value, onChange, label, className = "" }: { options: string[], value: string, onChange: (val: string) => void, label?: string, className?: string }) => (
    <div className={`w-full ${className}`}>
        {label && <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block mb-4 text-center">{label}</label>}
        <div className="flex flex-wrap justify-center gap-4">
            {options.map((opt) => (
                <button
                    key={opt}
                    type="button"
                    onClick={() => onChange(opt)}
                    className={`px-4 md:px-6 py-3 rounded-full transition-all border shadow-lg backdrop-blur-md text-sm md:text-base font-serif flex-1 min-w-[120px] max-w-[240px] ${value === opt ? 'bg-wed-green/30 border-wed-green/50 text-white' : 'bg-white/5 border-white/10 text-wed-beige-light hover:border-white/20 hover:bg-white/10'}`}
                >
                    {opt}
                </button>
            ))}
        </div>
    </div>
);

const VerticalOptionGroup = ({ options, value, onChange, label, className = "" }: { options: string[], value: string, onChange: (val: string) => void, label?: string, className?: string }) => (
    <div className={`w-full ${className}`}>
        {label && <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block mb-4 text-center">{label}</label>}
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
            {options.map((opt) => (
                <button
                    key={opt}
                    type="button"
                    onClick={() => onChange(opt)}
                    className={`w-full px-6 py-4 rounded-2xl transition-all border shadow-lg backdrop-blur-md text-base md:text-lg font-serif text-center ${value === opt ? 'bg-wed-green/30 border-wed-green/50 text-white' : 'bg-white/5 border-white/10 text-wed-beige-light hover:border-white/20 hover:bg-white/10'}`}
                >
                    {opt}
                </button>
            ))}
        </div>
    </div>
);

const NumberCounter = ({ label, value, onChange, min = 1, max = 10 }: { label?: string, value: number, onChange: (val: number) => void, min?: number, max?: number }) => (
    <div className="w-full flex flex-col items-center">
        {label && <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block mb-3 text-center h-8 flex items-center justify-center">{label}</label>}
        <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-full py-2 px-4 shadow-lg backdrop-blur-md hover:border-wed-green/30 transition-all h-[56px] w-[140px]">
            <button
                type="button"
                onClick={() => onChange(Math.max(min, value - 1))}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-wed-green/20 text-wed-beige-light transition-colors disabled:opacity-50 disabled:hover:bg-white/5 shrink-0"
                disabled={value <= min}
            >
                <Minus size={18} />
            </button>
            <span className="font-serif text-xl w-8 text-center text-wed-beige-light shrink-0">{value}</span>
            <button
                type="button"
                onClick={() => onChange(Math.min(max, value + 1))}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-wed-green/20 text-wed-beige-light transition-colors disabled:opacity-50 disabled:hover:bg-white/5 shrink-0"
                disabled={value >= max}
            >
                <Plus size={18} />
            </button>
        </div>
    </div>
);

const MultiSelectChips = ({ options, selected, onChange }: { options: string[], selected: string[], onChange: (val: string) => void }) => {
    return (
        <div className="w-full -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex flex-nowrap overflow-x-auto py-4 px-2 justify-start sm:justify-center gap-3 sm:gap-4 w-full snap-x" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
                {options.map((opt) => {
                    const isSelected = selected.includes(opt);
                    return (
                        <label key={opt} className={`snap-center flex-shrink-0 flex items-center space-x-3 cursor-pointer group px-5 py-3 rounded-full transition-all border shadow-lg backdrop-blur-md ${isSelected ? 'bg-wed-green/30 border-wed-green/50 text-white' : 'bg-white/5 border-white/10 text-wed-beige-light hover:border-white/20 hover:bg-white/10'}`}>
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                    checked={isSelected}
                                    onChange={() => onChange(opt)}
                                />
                                <div className={`w-5 h-5 border rounded-full flex items-center justify-center transition-all ${isSelected ? 'border-wed-green-light bg-wed-green-light' : 'border-wed-beige/30 group-hover:border-white/50'}`}>
                                    <Check size={12} className={`text-black font-bold transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                                </div>
                            </div>
                            <span className="text-sm md:text-base font-serif">{opt}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

const SingleSelectChips = ({ options, value, onChange }: { options: string[], value: string, onChange: (val: string) => void }) => {
    return (
        <div className="w-full -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex flex-nowrap overflow-x-auto py-4 px-2 justify-start sm:justify-center gap-3 sm:gap-4 w-full snap-x" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
                {options.map((opt) => {
                    const isSelected = value === opt;
                    return (
                        <label key={opt} className={`snap-center flex-shrink-0 flex items-center space-x-3 cursor-pointer group px-5 py-3 rounded-full transition-all border shadow-lg backdrop-blur-md ${isSelected ? 'bg-wed-green/30 border-wed-green/50 text-white' : 'bg-white/5 border-white/10 text-wed-beige-light hover:border-white/20 hover:bg-white/10'}`}>
                            <div className="relative flex items-center">
                                <input
                                    type="radio"
                                    className="peer sr-only"
                                    checked={isSelected}
                                    onChange={() => onChange(opt)}
                                />
                                <div className={`w-5 h-5 border rounded-full flex items-center justify-center transition-all ${isSelected ? 'border-wed-green-light bg-wed-green-light' : 'border-wed-beige/30 group-hover:border-white/50'}`}>
                                    <div className={`w-2.5 h-2.5 bg-black rounded-full transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                                </div>
                            </div>
                            <span className="text-sm md:text-base font-serif">{opt}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

const CustomSelect = ({
    value,
    onChange,
    options,
    placeholder,
    className = "",
    menuClassName = "",
    searchable = false,
    formatDisplayValue
}: {
    value: string,
    onChange: (val: string) => void,
    options: string[],
    placeholder?: string,
    className?: string,
    menuClassName?: string,
    searchable?: boolean,
    formatDisplayValue?: (val: string) => string
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredOptions = searchable ? options.filter(o => o.toLowerCase().includes(search.toLowerCase())) : options;

    return (
        <div className={`relative ${className}`} ref={ref}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-full min-h-[48px] flex items-center justify-between px-2 sm:px-3 md:px-4 outline-none focus:outline-none rounded-full"
            >
                <span className={`truncate flex-1 text-center ${!value ? 'text-wed-beige-light/50/50' : 'text-wed-beige-light'}`}>
                    {formatDisplayValue ? formatDisplayValue(value || placeholder || '') : (value || placeholder)}
                </span>
                <ChevronDown size={16} className={`transition-transform duration-200 opacity-50 shrink-0 ml-1 md:ml-2 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className={`absolute z-50 mt-2 bg-wed-green-darker border border-white/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl ${menuClassName}`}>
                    {searchable && (
                        <div className="p-2 border-b border-white/10">
                            <input
                                type="text"
                                autoFocus
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Szukaj..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-sm text-wed-beige-light focus:outline-none focus:border-wed-green/50"
                                onClick={e => e.stopPropagation()}
                            />
                        </div>
                    )}
                    <div className="max-h-60 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#10b981 transparent' }}>
                        {filteredOptions.length > 0 ? filteredOptions.map(opt => (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                    onChange(opt);
                                    setIsOpen(false);
                                    setSearch("");
                                }}
                                className={`w-full text-left px-4 py-3 text-sm hover:bg-wed-green/20 transition-colors ${value === opt ? 'bg-wed-green/10 text-wed-green-light font-bold' : 'text-wed-beige-light'}`}
                            >
                                {opt}
                            </button>
                        )) : (
                            <div className="px-4 py-3 text-sm text-wed-beige-light/50 text-center">Brak wyników</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const COUNTRY_CODES = [
    "+48", "+44", "+1", "+49", "+31", "+43", "+420", "+421", "+7", "+20", "+27", "+30", "+32", "+33", "+34", "+36",
    "+39", "+40", "+41", "+45", "+46", "+47", "+51", "+52", "+53", "+54", "+55", "+56", "+57", "+58", "+60", "+61",
    "+62", "+63", "+64", "+65", "+66", "+81", "+82", "+84", "+86", "+90", "+91", "+92", "+93", "+94", "+95", "+98",
    "+212", "+213", "+216", "+218", "+220", "+221", "+222", "+223", "+224", "+225", "+226", "+227", "+228", "+229",
    "+230", "+231", "+232", "+233", "+234", "+235", "+236", "+237", "+238", "+239", "+240", "+241", "+242", "+243",
    "+244", "+245", "+246", "+248", "+249", "+250", "+251", "+252", "+253", "+254", "+255", "+256", "+257", "+258",
    "+260", "+261", "+262", "+263", "+264", "+265", "+266", "+267", "+268", "+269", "+290", "+291", "+297", "+298",
    "+299", "+350", "+351", "+352", "+353", "+354", "+355", "+356", "+357", "+358", "+359", "+370", "+371", "+372",
    "+373", "+374", "+375", "+376", "+377", "+378", "+380", "+381", "+382", "+385", "+386", "+387", "+389", "+423",
    "+500", "+501", "+502", "+503", "+504", "+505", "+506", "+507", "+508", "+509", "+590", "+591", "+592", "+593",
    "+594", "+595", "+596", "+597", "+598", "+599", "+670", "+672", "+673", "+674", "+675", "+676", "+677", "+678",
    "+679", "+680", "+681", "+682", "+683", "+685", "+686", "+687", "+688", "+689", "+690", "+691", "+692", "+850",
    "+852", "+853", "+855", "+856", "+880", "+886", "+960", "+961", "+962", "+963", "+964", "+965", "+966", "+967",
    "+968", "+970", "+971", "+972", "+973", "+974", "+975", "+976", "+977", "+992", "+993", "+994", "+995", "+996",
    "+998"
].sort((a, b) => parseInt(a) - parseInt(b));

const formatPhoneNumber = (value: string, code: string) => {
    const digits = value.replace(/\D/g, '');
    if (code === '+48') {
        // Polska: 9 cyfr, format XXX XXX XXX
        return digits.slice(0, 9).replace(/(\d{3})(?=\d)/g, '$1 ').trim();
    }
    if (code === '+44') {
        // UK: zazwyczaj 10 cyfr
        return digits.slice(0, 10).replace(/(\d{4})(\d{0,6})/, '$1 $2').trim();
    }
    if (code === '+1') {
        // US/Kanada: 10 cyfr, format XXX XXX XXXX
        const match = digits.slice(0, 10).match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
        if (match) return [match[1], match[2], match[3]].filter(Boolean).join(' ');
    }
    if (code === '+49') {
        // Niemcy: 10-11 cyfr
        return digits.slice(0, 11).replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    }
    if (code === '+33' || code === '+34') {
        // Francja/Hiszpania: 9 cyfr, format XXX XXX XXX
        return digits.slice(0, 9).replace(/(\d{3})(?=\d)/g, '$1 ').trim();
    }
    if (code === '+420' || code === '+421') {
        // Czechy/Słowacja: 9 cyfr, format XXX XXX XXX
        return digits.slice(0, 9).replace(/(\d{3})(?=\d)/g, '$1 ').trim();
    }
    // Domyślnie blokujemy po 15 cyfrach
    return digits.slice(0, 15);
};

export const RSVPSection = () => {
    const successRef = useRef<HTMLElement>(null);
    const [mainGuestName, setMainGuestName] = useState("");
    const [isAttending, setIsAttending] = useState<"Tak" | "Tylko na ślubie" | "Nie" | "">("");

    // Tylko na ślubie
    const [ceremonyGuestsCount, setCeremonyGuestsCount] = useState<number>(0);
    const [ceremonyGuests, setCeremonyGuests] = useState("");

    // Osoby towarzyszące i rodzina (Tak)
    const [hasPartner, setHasPartner] = useState<"Tak" | "Nie" | "">("");
    const [partnerName, setPartnerName] = useState("");
    const [hasChildren, setHasChildren] = useState<"Tak" | "Nie" | "">("");
    const [childrenCount, setChildrenCount] = useState<number>(1);
    const [childrenData, setChildrenData] = useState<{ name: string, age: string }[]>([{ name: '', age: '' }]);

    // Aktualizowanie tablicy danych dzieci w zależności od wybranej liczby dzieci
    useEffect(() => {
        setChildrenData(prev => {
            const newData = [...prev];
            while (newData.length < childrenCount) newData.push({ name: '', age: '' });
            return newData.slice(0, childrenCount);
        });
    }, [childrenCount]);

    const updateChildData = (index: number, field: 'name' | 'age', value: string) => {
        const newData = [...childrenData];
        newData[index] = { ...newData[index], [field]: value };
        setChildrenData(newData);
    };

    // Logistyka
    const [accommodation, setAccommodation] = useState("");
    const [accommodationAdults, setAccommodationAdults] = useState<number>(2);
    const [accommodationChildren, setAccommodationChildren] = useState<number>(0);
    const [accommodationRooms, setAccommodationRooms] = useState<number>(1);
    const [transport, setTransport] = useState("");
    const [transportGuests, setTransportGuests] = useState<number>(1);
    const [transportRemarks, setTransportRemarks] = useState("");

    // Obliczanie domyślnej liczby osób (do transportu i noclegu)
    const defaultAdults = 1 + (hasPartner === "Tak" ? 1 : 0);
    const defaultChildren = hasChildren === "Tak" ? childrenCount : 0;
    const defaultTotalGuests = defaultAdults + defaultChildren;

    useEffect(() => {
        setTransportGuests(defaultTotalGuests);
        setAccommodationAdults(defaultAdults);
        setAccommodationChildren(defaultChildren);
    }, [defaultTotalGuests, defaultAdults, defaultChildren]);

    // Preferencje
    const [selectedDiet, setSelectedDiet] = useState<string>("");
    const [selectedDietAdditions, setSelectedDietAdditions] = useState<string[]>([]);
    const [dietRemarks, setDietRemarks] = useState("");

    // Kontakt
    const [contactMethods, setContactMethods] = useState<string[]>([]);
    const [contactPhoneCode, setContactPhoneCode] = useState("+48");
    const [contactPhone, setContactPhone] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactWhatsappCode, setContactWhatsappCode] = useState("+48");
    const [contactWhatsapp, setContactWhatsapp] = useState("");
    const [contactFacebook, setContactFacebook] = useState("");

    // Automatyczne formatowanie przy zmianie numeru kierunkowego
    useEffect(() => {
        setContactPhone(prev => prev ? formatPhoneNumber(prev, contactPhoneCode) : "");
    }, [contactPhoneCode]);

    useEffect(() => {
        setContactWhatsapp(prev => prev ? formatPhoneNumber(prev, contactWhatsappCode) : "");
    }, [contactWhatsappCode]);

    const [message, setMessage] = useState("");

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (status === "success" && successRef.current) {
            // Dodajemy małe opóźnienie, aby DOM zdążył się na pewno zaktualizować
            setTimeout(() => {
                successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }, [status]);

    const handleTextareaResize = (e: React.FormEvent<HTMLTextAreaElement>) => {
        e.currentTarget.style.height = 'auto';
        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
    };

    const toggleContactMethod = (method: string) => {
        setContactMethods(prev => prev.includes(method) ? prev.filter(m => m !== method) : [...prev, method]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Walidacja
        if (!mainGuestName.trim()) {
            setErrorMsg("Proszę podać swoje imię i nazwisko.");
            return;
        }
        if (!isAttending) {
            setErrorMsg("Proszę zaznaczyć czy będziesz z nami.");
            return;
        }

        if (isAttending === "Tak") {
            if (!hasPartner) {
                setErrorMsg("Proszę zaznaczyć, czy będziesz z osobą towarzyszącą.");
                return;
            }
            if (!hasChildren) {
                setErrorMsg("Proszę zaznaczyć, czy zabierasz ze sobą dzieci.");
                return;
            }
            if (hasChildren === "Tak") {
                const missingChildData = childrenData.some(c => !c.name.trim() || !c.age.trim());
                if (missingChildData) {
                    setErrorMsg("Proszę podać imię i wiek każdego deklarowanego dziecka.");
                    return;
                }
            }
            if (!accommodation) {
                setErrorMsg("Proszę zaznaczyć opcję dotyczącą noclegu.");
                return;
            }
            if (!transport) {
                setErrorMsg("Proszę zaznaczyć opcję dotyczącą transportu.");
                return;
            }
            if (!selectedDiet) {
                setErrorMsg("Proszę wybrać opcję diety.");
                return;
            }

            if (contactMethods.length === 0) {
                setErrorMsg("Proszę wybrać przynajmniej jedną formę kontaktu.");
                return;
            }
            if (contactMethods.includes('Telefon')) {
                if (!contactPhone.trim()) {
                    setErrorMsg("Proszę podać numer telefonu.");
                    return;
                }
                const digits = contactPhone.replace(/[^0-9]/g, '');
                if (contactPhoneCode === '+48' && digits.length !== 9) {
                    setErrorMsg("Polski numer telefonu musi składać się dokładnie z 9 cyfr.");
                    return;
                }
                if (digits.length < 6) {
                    setErrorMsg("Proszę podać poprawny numer telefonu (za mało cyfr).");
                    return;
                }
            }
            if (contactMethods.includes('E-mail')) {
                if (!contactEmail.trim()) {
                    setErrorMsg("Proszę podać adres e-mail.");
                    return;
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(contactEmail)) {
                    setErrorMsg("Proszę podać poprawny adres e-mail.");
                    return;
                }
            }
            if (contactMethods.includes('WhatsApp')) {
                if (!contactWhatsapp.trim()) {
                    setErrorMsg("Proszę podać numer do WhatsApp.");
                    return;
                }
                const digits = contactWhatsapp.replace(/[^0-9]/g, '');
                if (contactWhatsappCode === '+48' && digits.length !== 9) {
                    setErrorMsg("Polski numer WhatsApp musi składać się dokładnie z 9 cyfr.");
                    return;
                }
                if (digits.length < 6) {
                    setErrorMsg("Proszę podać poprawny numer WhatsApp (za mało cyfr).");
                    return;
                }
            }
            if (contactMethods.includes('Facebook/Messenger') && !contactFacebook.trim()) {
                setErrorMsg("Proszę podać nazwę profilu lub link do Facebooka.");
                return;
            }
        }

        setErrorMsg("");
        setStatus("submitting");

        // 2. Przygotowanie ustrukturyzowanych danych do wysyłki 
        // Wysłanie danych jako płaski JSON sprawi, że FormSubmit stworzy przejrzystą tabelę HTML w e-mailu (dobre do czytania i automatyzacji)
        const payload: Record<string, string | number> = {
            "Główny Gość": mainGuestName,
            "Obecność": isAttending,
        };

        if (isAttending === "Tylko na ślubie") {
            payload["Dodatkowe osoby na ślubie (liczba)"] = ceremonyGuestsCount;
            if (ceremonyGuests.trim()) {
                payload["Dodatkowe osoby (imiona)"] = ceremonyGuests;
            }
        } else if (isAttending === "Tak") {
            payload["Osoba towarzysząca"] = hasPartner === "Tak" ? (partnerName.trim() ? `Tak - ${partnerName}` : "Tak") : "Brak";

            if (hasChildren === "Tak") {
                payload["Dzieci (liczba)"] = childrenCount;
                const childrenDetails = childrenData.map((c) => `${c.name || 'Brak imienia'} (${c.age || 'Brak wieku'})`).join("\n");
                payload["Dzieci (szczegóły)"] = childrenDetails;
            } else {
                payload["Dzieci"] = "Brak";
            }

            payload["Nocleg"] = accommodation === "Przydałby się nocleg" ? `Potrzebuje (dorosłych: ${accommodationAdults}, dzieci: ${accommodationChildren}, pokoje: ${accommodationRooms})` : "Nie potrzebuje";

            if (transport === "Potrzebuję transportu") {
                let transportInfo = `Potrzebuje (${transportGuests} osób)`;
                if (transportRemarks.trim()) {
                    transportInfo += `\nUwagi: ${transportRemarks}`;
                }
                payload["Transport"] = transportInfo;
            } else {
                payload["Transport"] = "Dojazd własny";
            }

            let dietInfo = `${selectedDiet}${selectedDietAdditions.includes('Bezglutenowa') ? ' (+ Bezglutenowa)' : ''}`;
            if (dietRemarks.trim()) {
                dietInfo += `\nUwagi do diety / Alergie: ${dietRemarks}`;
            }
            payload["Dieta"] = dietInfo;

            const contactInfo = [];
            if (contactMethods.includes('Telefon')) contactInfo.push(`Tel: ${contactPhoneCode} ${contactPhone}`);
            if (contactMethods.includes('E-mail')) contactInfo.push(`E-mail: ${contactEmail}`);
            if (contactMethods.includes('WhatsApp')) contactInfo.push(`WhatsApp: ${contactWhatsappCode} ${contactWhatsapp}`);
            if (contactMethods.includes('Facebook/Messenger')) contactInfo.push(`FB: ${contactFacebook}`);
            payload["Kontakt"] = contactInfo.join("\n");
        }

        if (message.trim()) {
            payload["Wiadomość dla Was"] = message;
        }

        // ---------------------------------------------------------------------
        // KONFIGURACJA WYSYŁKI E-MAIL (FormSubmit.co)
        // ---------------------------------------------------------------------
        const PRIMARY_EMAIL = "bartekkuszpit@gmail.com"; // <-- TUTAJ WPISZ GŁÓWNY ADRES E-MAIL
        const SECONDARY_EMAIL = "lotyczw@gmail.com";   // <-- TUTAJ WPISZ DRUGI ADRES E-MAIL (do wiadomości)

        // Dodanie technicznych parametrów dla FormSubmit
        const formSubmitPayload: Record<string, any> = {
            _subject: `Nowe RSVP: ${mainGuestName} - ${isAttending}`,
            _template: "table",     // Używa wbudowanego czytelnego szablonu w formie tabeli
            _captcha: "false",      // Wyłącza blokujący ekran Captcha przy użyciu AJAX
            ...payload
        };

        // Jeżeli podano drugi adres, dodajemy go jako CC
        if (SECONDARY_EMAIL && !SECONDARY_EMAIL.includes('twojadomena.pl')) {
            formSubmitPayload["_cc"] = SECONDARY_EMAIL;
        }

        // Jeżeli gość podał e-mail, można mu łatwo odpisać klikając "Odpowiedz" w skrzynce
        if (contactMethods.includes('E-mail') && contactEmail.trim()) {
            formSubmitPayload["_replyto"] = contactEmail.trim();
        }

        try {
            // Bezpiecznik aby zablokować wysyłkę jeśli maile nie zostały zmienione
            if (PRIMARY_EMAIL.includes('twojadomena.pl')) {
                console.log("Symulacja wysyłki - proszę uzupełnić adresy e-mail w kodzie!");
                console.log("Dane, które by poleciały:", formSubmitPayload);
                await new Promise(resolve => setTimeout(resolve, 1500));
                setStatus("success");
                return;
            }

            const response = await fetch(`https://formsubmit.co/ajax/${PRIMARY_EMAIL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formSubmitPayload),
            });

            const result = await response.json();
            if (result.success) {
                setStatus("success");
            } else {
                setStatus("error");
                setErrorMsg("Nie udało się wysłać formularza. Spróbuj ponownie później.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMsg("Wystąpił błąd sieci. Sprawdź połączenie z internetem.");
        }
    };

    if (status === "success") {
        return (
            <section id="rsvp" ref={successRef} className="pt-12 pb-20 md:pt-16 md:pb-32 relative min-h-[calc(100svh-68px)] flex flex-col justify-center" style={{ backgroundImage: 'radial-gradient(ellipse at top left, #2a3c2e 0%, #2a3c2e 20%, #1A261D 65%, #121c15 100%)' }}>

                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#3d2729] via-transparent to-transparent opacity-70"></div>
                </div>

                <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
                    <div className="w-24 h-24 bg-wed-green/20 border border-wed-green-light/30 rounded-full flex items-center justify-center mx-auto mb-8 text-wed-green-light">
                        <Check size={48} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Dziękujemy!</h2>
                    <p className="text-xl text-wed-beige-light font-serif mb-12">Twoja odpowiedź została zapisana i wysłana.</p>
                    <button
                        onClick={() => {
                            setStatus("idle");
                            setMainGuestName("");
                            setIsAttending("");
                            setCeremonyGuestsCount(0);
                            setCeremonyGuests("");
                            setHasPartner("");
                            setPartnerName("");
                            setHasChildren("");
                            setChildrenCount(1);
                            setChildrenData([{ name: '', age: '' }]);
                            setAccommodation("");
                            setAccommodationAdults(2);
                            setAccommodationChildren(0);
                            setAccommodationRooms(1);
                            setTransport("");
                            setTransportGuests(1);
                            setTransportRemarks("");
                            setSelectedDiet("");
                            setSelectedDietAdditions([]);
                            setDietRemarks("");
                            setContactMethods([]);
                            setContactPhoneCode("+48");
                            setContactPhone("");
                            setContactEmail("");
                            setContactWhatsappCode("+48");
                            setContactWhatsapp("");
                            setContactFacebook("");
                            setMessage("");
                        }}
                        className="text-wed-green-light uppercase tracking-[0.2em] text-sm hover:text-wed-green-light transition-colors border-b border-wed-green-light/30 hover:border-wed-green-light pb-1"
                    >
                        Wyślij kolejną odpowiedź
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="rsvp" className="pt-12 pb-20 md:pt-16 md:pb-32 relative min-h-[calc(100svh-68px)] flex flex-col justify-center" style={{ backgroundImage: 'radial-gradient(ellipse at top left, #2a3c2e 0%, #2a3c2e 20%, #1A261D 65%, #121c15 100%)' }}>


            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#3d2729] via-transparent to-transparent opacity-70"></div>
            </div>

            <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
                <SectionTitle theme="dark">Potwierdzenie Obecności</SectionTitle>

                <form onSubmit={handleSubmit} className="w-full mt-16 space-y-12 bg-white/5 p-6 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-xl">

                    {/* Główny Gość */}
                    <div className="space-y-8">
                        <div>
                            <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block mb-4 text-center">Twoje Imię i Nazwisko</label>
                            <input
                                type="text"
                                value={mainGuestName}
                                onChange={(e) => setMainGuestName(e.target.value)}
                                placeholder="Np. Jan Kowalski"
                                className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 text-center text-xl md:text-2xl font-serif text-wed-beige-light placeholder:text-wed-beige-light/60 focus:outline-none focus:border-wed-green/50 focus:bg-wed-beige/10 transition-all shadow-lg backdrop-blur-md"
                            />
                        </div>

                        <OptionGroup
                            label="Czy będziesz z nami?"
                            options={['TAK!!!', 'Tylko na ślubie', 'Niestety nie 😢']}
                            value={isAttending === "Tak" ? "TAK!!!" : isAttending === "Nie" ? "Niestety nie 😢" : isAttending}
                            onChange={(val) => {
                                if (val === 'TAK!!!') setIsAttending('Tak');
                                else if (val === 'Niestety nie 😢') setIsAttending('Nie');
                                else setIsAttending(val as "Tylko na ślubie");
                            }}
                        />
                    </div>

                    {isAttending === "Tylko na ślubie" && (
                        <div className="space-y-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-500">
                            <h3 className="text-xl font-serif text-white text-center mb-6">Osoby Towarzyszące</h3>
                            <div className="space-y-6 max-w-2xl mx-auto bg-white/5 p-6 rounded-3xl border border-white/10">
                                <NumberCounter
                                    label="Liczba dodatkowych osób (opcjonalnie)"
                                    value={ceremonyGuestsCount}
                                    onChange={setCeremonyGuestsCount}
                                    min={0} max={10}
                                />
                                {ceremonyGuestsCount > 0 && (
                                    <div className="animate-in fade-in zoom-in-95 duration-300 pt-4 border-t border-white/10">
                                        <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block mb-4 text-center">Imiona osób towarzyszących / dzieci (opcjonalnie)</label>
                                        <textarea
                                            value={ceremonyGuests}
                                            onChange={(e) => setCeremonyGuests(e.target.value)}
                                            onInput={handleTextareaResize}
                                            placeholder="Np. Jan Kowalski, Zosia (4 lata)"
                                            rows={2}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-center text-sm md:text-base font-serif text-wed-beige-light placeholder:text-wed-beige-light/60 focus:outline-none focus:border-wed-green/50 transition-all shadow-inner resize-none overflow-hidden"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {isAttending === "Tak" && (
                        <div className="space-y-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-500">

                            {/* Z kim będziesz */}
                            <div className="space-y-8">
                                <h3 className="text-xl font-serif text-white text-center mb-6">Osoby Towarzyszące i Rodzina</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <OptionGroup
                                            label="Czy będziesz z osobą towarzyszącą?"
                                            options={['Tak', 'Nie']}
                                            value={hasPartner}
                                            onChange={(val) => setHasPartner(val as "Tak" | "Nie")}
                                        />
                                        {hasPartner === "Tak" && (
                                            <input
                                                type="text"
                                                value={partnerName}
                                                onChange={(e) => setPartnerName(e.target.value)}
                                                placeholder="Imię i nazwisko (opcjonalnie)"
                                                className="w-full bg-white/5 border border-wed-green/30 rounded-full py-4 px-6 text-center text-lg font-serif text-wed-beige-light placeholder:text-wed-beige-light/60 focus:outline-none focus:border-wed-green transition-all shadow-lg backdrop-blur-md animate-in fade-in zoom-in-95 duration-300"
                                            />
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        <OptionGroup
                                            label="Czy zabierasz ze sobą dzieci?"
                                            options={['Tak', 'Nie']}
                                            value={hasChildren}
                                            onChange={(val) => setHasChildren(val as "Tak" | "Nie")}
                                        />
                                        {hasChildren === "Tak" && (
                                            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300 bg-white/5 p-6 rounded-3xl border border-white/10">
                                                <NumberCounter
                                                    label="Liczba dzieci (wymagane)"
                                                    value={childrenCount}
                                                    onChange={setChildrenCount}
                                                    min={1} max={10}
                                                />
                                                <div className="space-y-3 pt-4 border-t border-white/10">
                                                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block mb-4 text-center">Imiona i wiek dzieci (wymagane)</label>
                                                    {Array.from({ length: childrenCount }).map((_, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 sm:gap-3 relative" style={{ zIndex: 50 - idx }}>
                                                            <input
                                                                type="text"
                                                                value={childrenData[idx]?.name || ''}
                                                                onChange={(e) => updateChildData(idx, 'name', e.target.value)}
                                                                placeholder="Imię"
                                                                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-full py-3 px-4 md:px-6 text-center text-sm md:text-base font-serif text-wed-beige-light placeholder:text-wed-beige-light/60 focus:outline-none focus:border-wed-green/50 transition-all shadow-inner"
                                                            />
                                                            <CustomSelect
                                                                value={childrenData[idx]?.age || ''}
                                                                onChange={(val) => updateChildData(idx, 'age', val)}
                                                                options={['Poniżej 1. roku', '1 rok', '2 lata', '3 lata', '4 lata', '5 lat', '6 lat', '7 lat', '8 lat', '9 lat', '10 lat', '11 lat', '12 lat', 'Powyżej 12 lat']}
                                                                formatDisplayValue={(val) => {
                                                                    if (val === 'Poniżej 1. roku') return '< 1 rok';
                                                                    if (val === 'Powyżej 12 lat') return '> 12 lat';
                                                                    return val;
                                                                }}
                                                                placeholder="Wiek"
                                                                className="flex-[1.2] min-w-[130px] bg-white/5 border border-white/10 rounded-full text-sm md:text-base font-serif text-wed-beige-light shadow-inner"
                                                                menuClassName="w-full min-w-[160px] right-0 sm:left-0 origin-top-right sm:origin-top-left"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Logistyka */}
                            <div className="space-y-8 pt-8 border-t border-white/10">
                                <h3 className="text-xl font-serif text-white text-center mb-6">Logistyka</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <VerticalOptionGroup
                                            label="Nocleg"
                                            options={['Przydałby się nocleg', 'Nie potrzebuję noclegu']}
                                            value={accommodation}
                                            onChange={setAccommodation}
                                        />
                                        {accommodation === 'Przydałby się nocleg' && (
                                            <div className="animate-in fade-in zoom-in-95 duration-300 space-y-6 bg-white/5 p-6 rounded-3xl border border-white/10">
                                                <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block text-center mb-2">Szczegóły noclegu</label>
                                                <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
                                                    <NumberCounter
                                                        label="Dorośli"
                                                        value={accommodationAdults}
                                                        onChange={setAccommodationAdults}
                                                        min={0} max={10}
                                                    />
                                                    <NumberCounter
                                                        label="Dzieci"
                                                        value={accommodationChildren}
                                                        onChange={setAccommodationChildren}
                                                        min={0} max={10}
                                                    />
                                                    <NumberCounter
                                                        label="Liczba pokoi"
                                                        value={accommodationRooms}
                                                        onChange={setAccommodationRooms}
                                                        min={1} max={5}
                                                    />
                                                </div>
                                                <p className="text-center text-sm text-wed-beige-light/70 pt-2 font-serif italic border-t border-white/10">Noclegi organizowane są na noc weselną <br /> z piątku (02.10) na sobotę (03.10).</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        <VerticalOptionGroup
                                            label="Transport"
                                            options={['Potrzebuję transportu', 'Dojadę we własnym zakresie']}
                                            value={transport}
                                            onChange={setTransport}
                                        />
                                        {transport === 'Potrzebuję transportu' && (
                                            <div className="animate-in fade-in zoom-in-95 duration-300 bg-white/5 p-6 rounded-3xl border border-white/10 space-y-6">
                                                <div className="flex justify-center border-b border-white/5 pb-6">
                                                    <NumberCounter
                                                        label="Liczba osób do transportu"
                                                        value={transportGuests}
                                                        onChange={setTransportGuests}
                                                        min={1} max={15}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block mb-4 text-center">Dodatkowe uwagi (opcjonalnie)</label>
                                                    <textarea
                                                        value={transportRemarks}
                                                        onChange={(e) => setTransportRemarks(e.target.value)}
                                                        onInput={handleTextareaResize}
                                                        placeholder="Np. z kościoła do sali i z sali do hotelu lub pomiędzy kościołem, salą a hotelem itp."
                                                        rows={3}
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-center text-sm md:text-base font-serif text-wed-beige-light placeholder:text-wed-beige-light/60 focus:outline-none focus:border-wed-green/50 transition-all shadow-inner resize-none overflow-hidden"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Preferencje */}
                            <div className="space-y-8 pt-8 border-t border-white/10">
                                <h3 className="text-xl font-serif text-white text-center mb-6">Diety i Preferencje</h3>

                                <div className="space-y-6">
                                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block text-center">Wybierz główną dietę dla Ciebie i bliskich</label>
                                    <SingleSelectChips
                                        options={['Mięsna', 'Wegetariańska', 'Wegańska']}
                                        value={selectedDiet}
                                        onChange={setSelectedDiet}
                                    />
                                </div>

                                <div className="space-y-6 pt-4 border-t border-white/5">
                                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block text-center">Dodatkowe preferencje (opcjonalnie)</label>
                                    <MultiSelectChips
                                        options={['Bezglutenowa']}
                                        selected={selectedDietAdditions}
                                        onChange={(val) => setSelectedDietAdditions(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val])}
                                    />
                                </div>

                                <div className="space-y-6 pt-4">
                                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block text-center">Dodatkowe uwagi / Alergie (opcjonalnie)</label>
                                    <input
                                        type="text"
                                        value={dietRemarks}
                                        onChange={(e) => setDietRemarks(e.target.value)}
                                        placeholder="Np. Ania: alergia na orzechy, Jan: nietolerancja laktozy"
                                        className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-center text-lg font-serif text-wed-beige-light placeholder:text-wed-beige-light/60 focus:outline-none focus:border-wed-green/50 focus:bg-wed-beige/10 transition-all shadow-lg backdrop-blur-md"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Kontakt */}
                    {isAttending === "Tak" && (
                        <div className="space-y-8 pt-8 border-t border-white/10 animate-in fade-in duration-500">
                            <h3 className="text-xl font-serif text-white text-center mb-6">Jak mamy się z Tobą kontakować?</h3>

                            <div className="space-y-6">
                                <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block text-center">Wybierz formę kontaktu (min. 1)</label>
                                <MultiSelectChips
                                    options={['Telefon', 'E-mail', 'WhatsApp', 'Facebook/Messenger']}
                                    selected={contactMethods}
                                    onChange={toggleContactMethod}
                                />
                            </div>

                            {contactMethods.length > 0 && (
                                <div className="space-y-4 max-w-2xl mx-auto pt-4 border-t border-white/10 animate-in fade-in zoom-in-95 relative">
                                    {contactMethods.includes('Telefon') && (
                                        <div className="relative flex items-center h-[56px] bg-white/5 border border-white/10 rounded-full shadow-inner focus-within:border-wed-green/50 transition-all" style={{ zIndex: 40 }}>
                                            <div className="absolute left-0 top-0 bottom-0 flex items-center">
                                                <CustomSelect
                                                    value={contactPhoneCode}
                                                    onChange={setContactPhoneCode}
                                                    options={COUNTRY_CODES}
                                                    searchable={true}
                                                    className="w-[90px] h-full"
                                                    menuClassName="w-[280px] left-0 mt-2 origin-top-left"
                                                />
                                                <div className="w-px h-6 bg-wed-beige/10"></div>
                                            </div>
                                            <input
                                                type="tel"
                                                value={contactPhone}
                                                onChange={(e) => setContactPhone(formatPhoneNumber(e.target.value, contactPhoneCode))}
                                                placeholder="Numer telefonu"
                                                className="w-full bg-transparent h-full px-[100px] text-center text-lg font-serif text-wed-beige-light placeholder:text-wed-beige-light/60 focus:outline-none"
                                            />
                                        </div>
                                    )}
                                    {contactMethods.includes('E-mail') && (
                                        <div className="relative" style={{ zIndex: 30 }}>
                                            <input
                                                type="email"
                                                value={contactEmail}
                                                onChange={(e) => setContactEmail(e.target.value)}
                                                placeholder="Adres e-mail"
                                                className="w-full h-[56px] bg-white/5 border border-white/10 rounded-full px-[24px] text-center text-lg font-serif text-wed-beige-light placeholder:text-wed-beige-light/60 focus:outline-none focus:border-wed-green/50 transition-all shadow-inner"
                                            />
                                        </div>
                                    )}
                                    {contactMethods.includes('WhatsApp') && (
                                        <div className="relative flex items-center h-[56px] bg-white/5 border border-white/10 rounded-full shadow-inner focus-within:border-wed-green/50 transition-all" style={{ zIndex: 20 }}>
                                            <div className="absolute left-0 top-0 bottom-0 flex items-center">
                                                <CustomSelect
                                                    value={contactWhatsappCode}
                                                    onChange={setContactWhatsappCode}
                                                    options={COUNTRY_CODES}
                                                    searchable={true}
                                                    className="w-[90px] h-full"
                                                    menuClassName="w-[280px] left-0 mt-2 origin-top-left"
                                                />
                                                <div className="w-px h-6 bg-wed-beige/10"></div>
                                            </div>
                                            <input
                                                type="tel"
                                                value={contactWhatsapp}
                                                onChange={(e) => setContactWhatsapp(formatPhoneNumber(e.target.value, contactWhatsappCode))}
                                                placeholder="Numer telefonu (WhatsApp)"
                                                className="w-full bg-transparent h-full px-[100px] text-center text-lg font-serif text-wed-beige-light placeholder:text-wed-beige-light/60 focus:outline-none"
                                            />
                                        </div>
                                    )}
                                    {contactMethods.includes('Facebook/Messenger') && (
                                        <div className="relative" style={{ zIndex: 10 }}>
                                            <input
                                                type="text"
                                                value={contactFacebook}
                                                onChange={(e) => setContactFacebook(e.target.value)}
                                                placeholder="Nazwa profilu lub link"
                                                className="w-full h-[56px] bg-white/5 border border-white/10 rounded-full px-[24px] text-center text-lg font-serif text-wed-beige-light placeholder:text-wed-beige-light/60 focus:outline-none focus:border-wed-green/50 transition-all shadow-inner"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Wiadomość (zawsze widoczna) */}
                    {(isAttending === "Tak" || isAttending === "Tylko na ślubie" || isAttending === "Nie") && (
                        <div className="pt-8 border-t border-white/10 animate-in fade-in duration-500">
                            <label className="text-xs uppercase tracking-[0.2em] font-bold text-wed-green-light block mb-6 text-center">Wiadomość dla Nas (opcjonalnie)</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onInput={handleTextareaResize}
                                placeholder="Masz dodatkowe pytania? A może po prostu chcesz nam coś przekazać?"
                                rows={3}
                                className={`w-full bg-white/5 border border-white/10 p-6 md:p-8 px-8 text-lg font-serif text-wed-beige-light focus:border-wed-green/50 focus:bg-wed-beige/10 outline-none transition-all placeholder:text-wed-beige-light/60 rounded-[2rem] resize-none shadow-lg backdrop-blur-md overflow-hidden ${message.length > 0 ? 'text-left' : 'text-center'}`}
                            />
                        </div>
                    )}

                    {/* Error Message */}
                    {errorMsg && (
                        <div className="flex items-center justify-center gap-2 text-rose-400 bg-rose-500/10 py-3 px-6 rounded-full w-max mx-auto animate-in fade-in zoom-in-95">
                            <AlertCircle size={18} />
                            <span className="text-sm font-medium">{errorMsg}</span>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="bg-wed-green-dark hover:bg-[#2F4232] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed text-wed-beige-light px-12 md:px-16 py-5 md:py-6 rounded-full text-sm uppercase tracking-[0.3em] font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(58,82,65,0.5)] border border-wed-green-darker/20"
                        >
                            {status === "submitting" ? "Wysyłanie..." : "Wyślij odpowiedź"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
