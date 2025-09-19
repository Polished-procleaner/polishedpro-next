// src/components/PageHero.jsx
export default function PageHero({ title, subtitle }) {
    return (
        <section className="bg-gradient-to-br from-sky-500 to-green-500 py-16 text-center text-white">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-relaxed">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-4 opacity-90 text-lg max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
