import React from 'react'

function Projects() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-10">
        <div className="border p-5 rounded-lg">
            <h3 className="font-bold text-xl">Project Name</h3>
            <p className="text-sm">Short description of the project.</p>
            <div className="flex mt-4">
            <a href="link-to-project" className="mr-4 text-blue-500">Live Demo</a>
            <a href="link-to-github" className="text-gray-600">GitHub</a>
            </div>
        </div>
        <div className="border p-5 rounded-lg">
            <h3 className="font-bold text-xl">Project Name</h3>
            <p className="text-sm">Short description of the project.</p>
            <div className="flex mt-4">
            <a href="link-to-project" className="mr-4 text-blue-500">Live Demo</a>
            <a href="link-to-github" className="text-gray-600">GitHub</a>
            </div>
        </div>
        <div className="border p-5 rounded-lg">
            <h3 className="font-bold text-xl">Project Name</h3>
            <p className="text-sm">Short description of the project.</p>
            <div className="flex mt-4">
            <a href="link-to-project" className="mr-4 text-blue-500">Live Demo</a>
            <a href="link-to-github" className="text-gray-600">GitHub</a>
            </div>
        </div>
    </section>
  )
}

export default Projects