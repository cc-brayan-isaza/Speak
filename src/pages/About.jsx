import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text text-white'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Brayan
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-400'>
        <p className=" text-lg">
          A person of little talk but with a heart of chicken,
          passionate about software development, English and always give the best of me.
        </p>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text text-white'>Time Line</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-400'>
          <p className=" text-lg">
            This is a brief introduction of myself. If you are interested in knowing more, you can invite me for a coffee and talk 😉
          </p>
        </div>

        <div className='mt-12 flex'>

          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                dateClassName=" text-white"
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[100%] h-[100%]  object-cover rounded-full'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-md'
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <div className=" grid gap-2">
                  {experience?.images?.map((img, index) => (
                    <img key={index} src={img} className=" rounded-md w-50 h-50 pointer-events-none" />
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>

        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
