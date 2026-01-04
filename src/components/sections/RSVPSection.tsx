
import React, { useState } from 'react';
import './RSVPSection.css';
import { Button } from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const RSVPSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        attendance: 'yes',
        diet: 'standard',
        allergies: '',
        hasPlusOne: false,
        plusOneName: '',
        plusOneDiet: 'standard'
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const revealRef = useScrollReveal();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        // Handle checkbox separately if needed, but here simple values
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim()) {
            setError('Prosimy o podanie imienia.');
            return;
        }
        setError('');
        // Mock API call
        console.log('Form Submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section className="rsvp-section" id="rsvp">
                <div className="rsvp-success reveal-hidden" ref={revealRef}>
                    <svg className="flower-icon" viewBox="0 0 24 24" width="60" height="60">
                        <path fill="var(--color-antique-gold)" d="M12 2C9 7 4 9 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 9 15 7 12 2Z" />
                    </svg>
                    <h2>Dziękujemy!</h2>
                    <p>Twoje zgłoszenie zostało zapisane.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="rsvp-section" id="rsvp">
            <div className="rsvp-container reveal-hidden" ref={revealRef}>
                <h2 className="section-title">Potwierdź Obecność</h2>

                <form className="rsvp-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Imię i Nazwisko</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={error ? 'error' : ''}
                            placeholder="Jan Kowalski"
                        />
                        {error && <span className="error-msg">{error}</span>}
                    </div>

                    <div className="form-group radio-group">
                        <span className="label">Czy będziesz z nami?</span>
                        <div className="radio-options">
                            <label>
                                <input type="radio" name="attendance" value="yes" checked={formData.attendance === 'yes'} onChange={handleChange} />
                                Będę
                            </label>
                            <label>
                                <input type="radio" name="attendance" value="no" checked={formData.attendance === 'no'} onChange={handleChange} />
                                Niestety nie mogę
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="diet">Dieta</label>
                        <select name="diet" id="diet" value={formData.diet} onChange={handleChange}>
                            <option value="standard">Standardowa</option>
                            <option value="vegetarian">Wegetariańska</option>
                            <option value="vegan">Wegańska</option>
                            <option value="gluten-free">Bezglutenowa</option>
                            <option value="other">Inna</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="allergies">Alergie / Uwagi</label>
                        <textarea name="allergies" id="allergies" value={formData.allergies} onChange={handleChange} />
                    </div>

                    <div className="form-group checkbox-group">
                        <label className="checkbox-label">
                            <input type="checkbox" name="hasPlusOne" checked={formData.hasPlusOne} onChange={handleCheckbox} />
                            Osoba Towarzysząca
                        </label>
                    </div>

                    {formData.hasPlusOne && (
                        <div className="plus-one-fields fade-in">
                            <div className="form-group">
                                <label htmlFor="plusOneName">Imię i Nazwisko Osoby Towarzyszącej</label>
                                <input type="text" name="plusOneName" value={formData.plusOneName} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="plusOneDiet">Dieta Osoby Towarzyszącej</label>
                                <select name="plusOneDiet" value={formData.plusOneDiet} onChange={handleChange}>
                                    <option value="standard">Standardowa</option>
                                    <option value="vegetarian">Wegetariańska</option>
                                    <option value="vegan">Wegańska</option>
                                    <option value="gluten-free">Bezglutenowa</option>
                                    <option value="other">Inna</option>
                                </select>
                            </div>
                        </div>
                    )}

                    <div className="form-actions">
                        <Button type="submit">Wyślij</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

