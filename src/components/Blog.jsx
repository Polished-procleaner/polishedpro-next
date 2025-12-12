import Image from "next/image";
import Container from "./design/Container";
import { containerVariant, stepVariant } from "@/constants/animationVariants";
import { motion } from "motion/react";
import BadgeTitle from "./design/BadgeTitle";

const posts = [
  {
    id: 1,
    title: "Spotless Spaces: Your Guide to a Cleaner Home Every Day",
    href: "#",
    description:
      "Discover practical tips, eco-friendly cleaning hacks, and room-by-room guides to keep your home sparkling clean without the stress. Perfect for busy families or anyone wanting to stay organized and mess-free.",
    imageUrl: "/images/blogs/1.jpg",
    date: "Mar 16, 2025",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "PolishedPro",
      role: "Blog Author",
      href: "#",
      imageUrl: "/images/1.png",
    },
  },
  {
    id: 2,
    title:
      "Clean & Professional: Commercial Cleaning Insights for Business Owners",
    href: "#",
    description:
      "Learn how to maintain a pristine workspace that impresses clients and boosts employee productivity. This blog covers industry standards, cleaning schedules, and best practices for offices, retail spaces, and more.",
    imageUrl: "/images/blogs/2.jpg",
    date: "Mar 10, 2025",
    datetime: "2020-03-10",
    category: { title: "Sales", href: "#" },
    author: {
      name: "PolishedPro",
      role: "Blog Author",
      href: "#",
      imageUrl: "/images/1.png",
    },
  },
  {
    id: 3,
    title:
      "The Fresh Life: Simple Routines for a Cleaner, Healthier Living Space",
    href: "#",
    description:
      "Explore minimal-effort cleaning routines, product reviews, and health-focused cleaning methods to create a safe and welcoming environment at home. Ideal for those wanting a balanced and refreshing lifestyle.",
    imageUrl: "/images/blogs/3.jpg",
    date: "Feb 12, 2025",
    datetime: "2020-02-12",
    category: { title: "Business", href: "#" },
    author: {
      name: "PolishedPro",
      role: "Blog Author",
      href: "#",
      imageUrl: "/images/1.png",
    },
  },
];

export default function Blog() {
  return (
    <div className="bg-white py-20 sm:py-20">
      <Container className={"py-16 sm:py-24 flex flex-col gap-16"}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={stepVariant}
          className="sm:flex sm:items-end sm:justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <BadgeTitle>Our Blog</BadgeTitle>
              <h2 className="h2 text-gray-900">
                Explore Our <span className="text-theme">Cleaning</span>{" "}
                Insights
              </h2>
            </div>
            {/* <p className=" text-gray-500 max-w-4xl text-pretty ">
              Discover expert tips, practical guides, and industry knowledge
              designed to help you keep your home or business spotless. From
              maintenance advice to deep-cleaning strategies, our blog provides
              valuable insights to make cleaning easier, smarter, and more
              effective.
            </p> */}
          </div>
          <a
            href="/services"
            className="hidden text-sm font-semibold text-green-600 hover:text-green-800 sm:block"
          >
            Browse all blogs
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariant}
          className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.article
              variants={stepVariant}
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <Image
                  alt=""
                  src={post.imageUrl}
                  width={500}
                  height={500}
                  unoptimized
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                />
                <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10" />
              </div>
              <div className="flex max-w-xl grow flex-col justify-between">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  ></a>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <div className="size-12 rounded-full bg-gray-50 overflow-hidden">
                    <Image
                      alt=""
                      src={"/apple-touch-icon.png"}
                      className="size-full object-cover "
                      width={40}
                      height={40}
                      unoptimized
                    />
                  </div>
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
