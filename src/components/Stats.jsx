import { motion } from "motion/react";
import { Award, Clock, Smile, Star } from "lucide-react";
import { containerVariant, stepVariant } from "@/constants/animationVariants";

export default function Stats() {
  const stats = [
    {
      num: "5+",
      label: "Years of Experience",
      icon: <Award className="size-5" strokeWidth={1.5} />,
      badge: "Experiences",
    },
    {
      num: "500+",
      label: "Happy Customers",
      icon: <Smile className="size-5" strokeWidth={1.5} />,
      badge: "Customers",
    },
    {
      num: "100%",
      label: "Satisfaction Rate",
      icon: <Star className="size-5" strokeWidth={1.5} />,
      badge: "Satisfaction",
    },
    {
      num: "24/7",
      label: "Support Available",
      icon: <Clock className="size-5" strokeWidth={1.5} />,
      badge: "Support",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariant}
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={stepVariant}
          className="rounded-2xl bg-gray-100 p-8 relative hover:-translate-y-1 hover:transition-transform hover:duration-200 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-10">
            <div className="px-5 py-2 rounded-full bg-white text-sm font-medium text-gray-900">
              {stat.badge}
            </div>
            <div className="flex items-center justify-center gap-2 size-9 rounded-full bg-white">
              {stat.icon}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="h2 text-gray-900">{stat.num}</h2>
            <div className="text-sm md:text-base font-medium text-gray-500">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
