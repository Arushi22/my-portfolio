import React from 'react'

function Projects() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-10"  >
        <div 
  className="border p-5 rounded-lg bg-cover bg-center" 
  style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
>
    <h3 className="font-bold text-xl">Project Name</h3>
    <p className="text-sm">Short description of the project.</p>
    <div className="flex mt-4">
        <a href="link-to-project" className="mr-4 text-blue-500">Live Demo</a>
        <a href="link-to-github" className="text-gray-600">GitHub</a>
    </div>
</div>

        <div className="border p-5 rounded-lg"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        >
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