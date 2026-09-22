export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fa]">
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        
        {/* Content */}
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            School Uniforms
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Everything Your School Needs,
            <span className="block text-blue-600">
              All in One Place.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
            Find quality school uniforms, shoes, bags and accessories
            designed to make school shopping simple and convenient.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#schools"
              className="rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Shop by School
            </a>

            <a
              href="#products"
              className="rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:border-gray-900"
            >
              Explore Products
            </a>
          </div>

          {/* Small Trust Info */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-600">
            <div>
              <strong className="block text-lg text-gray-900">100+</strong>
              School Designs
            </div>

            <div>
              <strong className="block text-lg text-gray-900">Quality</strong>
              Products
            </div>

            <div>
              <strong className="block text-lg text-gray-900">Easy</strong>
              Ordering
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-gray-200 shadow-xl">
            <img
              src="/hero-uniform.jpg"
              alt="School uniforms"
              className="h-[450px] w-full object-cover lg:h-[540px]"
            />
          </div>

          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-lg sm:left-5">
            <p className="text-xs text-gray-500">
              Quality uniforms
            </p>
            <p className="font-semibold text-gray-900">
              Made for everyday school life
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}