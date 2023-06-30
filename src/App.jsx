import "./App.css";

const stats = [
  {
    id: 1,
    title: "10k+",
    subtitle: "companies",
  },
  {
    id: 2,
    title: "314",
    subtitle: "templates",
  },
  {
    id: 3,
    title: "12m+",
    subtitle: "queries",
  },
];

const App = () => {
  return (
    <div className="bg-my-very-dark-blue min-h-screen px-5 grid place-items-center">
      <main className="bg-my-dark-desaturated-blue rounded-lg overflow-hidden md:flex md:flex-row-reverse md:max-w-5xl">
        {/* image */}
        <section className="relative flex-1">
          <img
            src="./images/image-header-mobile.jpg"
            alt="image header"
            className="md:hidden h-full w-full object-cover"
          />
          <img
            src="./images/image-header-desktop.jpg"
            alt="image header"
            className="hidden md:block h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-my-soft-violet opacity-50" />
        </section>
        {/* Details */}
        <section className="flex-1">
          <h1 className="text-center md:text-left text-2xl text-my-white font-bold font-inter mt-8 px-5 md:px-16 md:text-4xl md:mt-16">
            Get <span className="text-my-soft-violet">insights</span> that help
            your business grow.
          </h1>

          <p className="font-lexend-deca text-my-slightly-transparent-white px-5 md:px-16 text-center md:text-left mt-4 text-sm md:mt-6 leading-6 md:text-[0.875rem] md:max-w-[29rem]">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>

          <section className="text-center md:text-left pt-10 pb-4 md:flex md:space-x-12 md:px-16 md:mt-8">
            {stats.map((stat) => (
              <article key={stat.id} className="mb-6">
                <h2 className="text-my-white font-bold font-inter text-2xl">
                  {stat.title}
                </h2>
                <h3 className="text-my-slightly-transparent-white uppercase font-lexend-deca text-xs tracking-widest mt-1">
                  {stat.subtitle}
                </h3>
              </article>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
};

export default App;
