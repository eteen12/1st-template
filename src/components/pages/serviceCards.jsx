import Link from "next/link";



export default function ServiceCards({project}){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative max-w-2xl mx-auto text-black shrinkAnimation transition3 "
          >
            <div
              className="bg-black h-[350px] bg-cover"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            ></div>
            <div className="relative bg-white px-8 py-8 shadow-lg mx-auto mb-10 z-20 ring-1 ring-gray-200 border-b-8 border-indigo-500">
              <div className="absolute -top-10 w-16 h-16 bg-indigo-500 "></div>
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="text-lg leading-8 text-gray-600 mt-2">
                {project.description}
              </p>
              <Link href={`/services/${project.id}`} className="text-lg leading-8 text-gray-600 mt-2 hover:underline">
                {project.linkText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
}