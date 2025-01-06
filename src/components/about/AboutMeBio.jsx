import profileImage from '../../assets/profile.png';

import { useContext } from 'react';
import AboutMeContext from '../../components/about/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="flex flex-col sm:flex-row sm:gap-10 sm:mt-10">
			<div className="w-full sm:w-1/4 flex justify-center items-center">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-normal w-full sm:w-3/4 text-center sm:text-left text-[#001b5e] flex items-center mt-5">
				<div>
					{aboutMe.map((bio) => (
						<p className="mb-4 text-base sm:mt-5" key={bio.id}>
							{bio.bio}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutMeBio;

