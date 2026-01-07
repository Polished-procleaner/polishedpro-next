export default function BadgeTitle({ children }) {
  return (
    <span className="w-fit inline-block px-3 py-1.5 rounded-full text-white font-semibold text-xs bg-gradient-to-r from-sky-500 to-green-500">
      {children}
    </span>
  );
}
