// src/components/CTASection.jsx
import Image from "next/image";
import Link from "next/link";

export default function CTASection({
    title,
    description,
    buttonText,
    buttonLink,
    ButtonIcon
}) {
    return (
        <section className="relative py-20 text-center text-white bg-gradient-to-br from-sky-500 to-green-500 overflow-hidden">
            {/* Imagen de fondo semitransparente */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Image
                    src="/images/img1.png"
                    alt="Background decorative"
                    width={250}
                    height={250}
                    className="object-contain"
                />
            </div>

            <div className="relative z-10 max-w-3xl px-6 mx-auto">
                <h2 className="font-display text-3xl md:text-5xl font-bold leading-relaxed">
                    {title}
                </h2>
                <p className="mt-6 text-lg opacity-90">{description}</p>
                <Link
                    href={buttonLink}
                    className="inline-flex items-center gap-2 px-8 py-3 mt-8 font-semibold text-sky-600 bg-white rounded-full shadow-lg transition-transform hover:-translate-y-1"
                >
                    {ButtonIcon && <ButtonIcon />}
                    {buttonText}
                </Link>
            </div>
        </section>
    );
}
