export default function Page() {
  // Step 1: Define your projects array
  const projects = [
    {
      id: 1,
      title: "Project One, Kelowna, BC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni dicta cupiditate velit quos, hic molestias eum repellat.",
      imageUrl: "path/to/image1.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Project Two, This Place",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni dicta cupiditate velit quos, hic molestias eum repellat.",
      imageUrl: "path/to/image2.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Project Two, Yeah this is something",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni dicta cupiditate velit quos, hic molestias eum repellat.",
      imageUrl: "path/to/image2.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      title: "Project Two, Yup, here too",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni dicta cupiditate velit quos, hic molestias eum repellat.",
      imageUrl: "path/to/image2.jpg", // Replace with actual image URL
    },
    // Add more projects as needed
  ];

  return (
    <div className="h-full w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-36">
      <div className="max-w-2xl lg:mx-0 mb-10 mt-10 lg:flex-row lg:flex lg:max-w-7xl lg:justify-between ">
        <div className="lg:max-w-lg mx-auto text-center">
          <h2 className="text-base lg:text- font-semibold leading-7 text-indigo-600">
            Projects
          </h2>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
               Our Services
              </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
                Aute magna irure deserunt veniam aliqua magna enim voluptate.
              </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative max-w-2xl mx-auto text-black shrinkAnimation transition3 "
          >
            {/* Image section */}
            <div
              className="bg-black h-[350px] bg-cover"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            ></div>

            {/* White content area with padding and shadow */}
            <div className="relative bg-white px-8 py-8 shadow-lg mx-auto mb-10 z-20 ring-1 ring-gray-200 border-b-8 border-indigo-500">
              <div className="absolute -top-10 w-16 h-16 bg-indigo-500 "></div>
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="text-lg leading-8 text-gray-600 mt-2">
                {project.description}
              </p>

             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
