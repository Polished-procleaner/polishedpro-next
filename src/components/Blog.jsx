const posts = [
  {
    id: 1,
    title: 'Spotless Spaces: Your Guide to a Cleaner Home Every Day',
    href: '#',
    description:
     'Discover practical tips, eco-friendly cleaning hacks, and room-by-room guides to keep your home sparkling clean without the stress. Perfect for busy families or anyone wanting to stay organized and mess-free.',
    imageUrl:
      '/images/BA/b11.jpg',
    date: 'Mar 16, 2025',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
          name: 'PolishedPro',
      role: 'Blog Author',
      href: '#',
      imageUrl:
        '/images/img1.png',
    },
  },
  {
    id: 2,
    title: 'Clean & Professional: Commercial Cleaning Insights for Business Owners',
    href: '#',
    description: 'Learn how to maintain a pristine workspace that impresses clients and boosts employee productivity. This blog covers industry standards, cleaning schedules, and best practices for offices, retail spaces, and more.',
    imageUrl:
     '/images/BA/b12.jpg',
    date: 'Mar 10, 2025',
    datetime: '2020-03-10',
    category: { title: 'Sales', href: '#' },
    author: {
         name: 'PolishedPro',
      role: 'Blog Author',
      href: '#',
      imageUrl:
        '/images/img1.png',
    },
  },
  {
    id: 3,
    title: 'The Fresh Life: Simple Routines for a Cleaner, Healthier Living Space',
    href: '#',
    description:
      'Explore minimal-effort cleaning routines, product reviews, and health-focused cleaning methods to create a safe and welcoming environment at home. Ideal for those wanting a balanced and refreshing lifestyle.',
    imageUrl:
     '/images/BA/b14.jpg',
    date: 'Feb 12, 2025',
    datetime: '2020-02-12',
    category: { title: 'Business', href: '#' },
    author: {
      name: 'PolishedPro',
      role: 'Blog Author',
      href: '#',
      imageUrl:
        '/images/img1.png',
    },
  },
]

export default function Example() {
  return (
    <div className="bg-white py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      


          <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-sky-500">The Blog</h2>
          <a href="/services" className="hidden text-sm font-semibold text-green-600 hover:text-green-800 sm:block">
            Browse all blogs
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
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
                  >
                    
                  </a>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-100" />
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
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
