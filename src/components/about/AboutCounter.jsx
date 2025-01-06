import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 1 , duration: 4 });
	useCountUp({ ref: 'githubStarsCounter', end: 19, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 7, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 });

	return (
		<div className="mt-5 sm:mt-10 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-normal container mx-auto py-20 block sm:flex sm:justify-between items-center text-[#001b5e]">
				<CounterItem
					title="Años de Experiencia"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Repositorios en GitHub"
					counter={<span id="githubStarsCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Semestre en Curso"
					counter={<span id="feedbackCounter" />}
					measurement="to"
				/>

				<CounterItem
					title="Proyectos Completos"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
