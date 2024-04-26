import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { useState } from "react";
import { Modal } from "../components/Modal";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const openModal = (project) => {
    setIsOpen(true);
    setSelectedProject(project);
  };


  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className='max-container'>
      <h1 className='head-text text-white'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Hobbies
        </span>
      </h1>

      <p className='text-slate-400 mt-2 leading-relaxed text-lg'>
        When I’m not busy with day-to-day responsibilities, I like to immerse myself in activities that fill me with energy and joy.
        They are like little escapes that allow me to explore my creativity and disconnect from stress.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full relative' key={project.name}>
            <div className='block-container w-20 h-20'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-2/3 h-2/3 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl text-white font-poppins font-semibold'>
                {project.name}
              </h4>

              {project?.description?.map((descrip, index) => (
                <p key={index} className='mt-2 text-slate-400'>{descrip}</p>
              ))}

              <div className='mt-5 flex items-center gap-2 font-poppins cursor-pointer'>
                <p className='font-semibold text-blue-600' onClick={() => openModal(project)}>
                  Open
                </p>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>

            <div className="flex justify-center items-center h-screen absolute">
              <Modal isOpen={isOpen} onClose={closeModal}>
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4 text-white">{selectedProject?.modalTitle}</h2>
                  <div className="grid grid-cols-2 gap-4 w-[700px] md:w-[1000px] h-[500px] md:h-[800px]">
                    {selectedProject?.imgs?.map((img, index) => (
                      <img key={index} src={img} alt="project image" className=" w-full h-full rounded-md pointer-events-none object-cover" />
                    ))}
                  </div>
                  <button
                    className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
