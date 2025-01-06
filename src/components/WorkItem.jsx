// eslint-disable-next-line react/prop-types
const WorkItem = ({ year, title, duration, details_one, details_two, details_three, company }) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
      <li className='mb-5 ml-5'>
        <div className='absolute w-2 h-2 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-sm'> 
          <span className='inline-block px-2 py-0.5 font-semibold text-white bg-[#001b5e] rounded-md'>
            {year}
          </span>
          <span className='text-xl font-semibold text-[#001b5e]'>{title}</span>
          <span className='my-1 text-sm font-normal leading-none text-stone-400'>
            {duration}
          </span>
        </p>
        <p className='my-2 text-base font-normal text-[#001b5e]'>{company}</p> 
        <p className='my-2 text-sm font-normal text-stone-400'>{details_one}</p> 
        <p className='my-2 text-sm font-normal text-stone-400'>{details_two}</p>
        <p className='my-2 text-sm font-normal text-stone-400'>{details_three}</p>
      </li>
    </ol>
  );
};

export default WorkItem;

