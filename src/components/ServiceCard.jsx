import { FaCheckCircle } from "react-icons/fa";

export default function ServiceCard({ icon, title, desc, features }) {
    return (
        <div
            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white
                        p-10 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            {/* Línea superior gradiente (crece desde el centro hacia los lados) */}
            <span className="absolute left-0 top-0 h-1 w-full scale-x-0 origin-center bg-gradient-to-r from-sky-500 to-green-500
                            transition-transform duration-300 group-hover:scale-x-100 "/>

            {/* Icono con gradiente */}
            {icon && (
                <div className=" mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-2xl text-2xl text-white "
                    style={{ background: "linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-primary-green) 100%)" }} >
                    {icon}
                </div>
            )}

            {/* Título */}
            <h3 className="mb-4 font-space text-xl font-semibold text-gray-900">
                {title}
            </h3>

            {/* Descripción */}
            <p className="mb-6 leading-relaxed text-gray-600">{desc}</p>

            {/* Lista con checks */}
            {features && (
                <ul className="space-y-2">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCheckCircle className="text-green-500 text-sm" />
                            {f}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}