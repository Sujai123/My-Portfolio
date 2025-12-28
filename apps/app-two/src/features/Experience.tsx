import { experience } from "@constants/portfolio";
import FullScreen from "@layouts/FullScreen";

const Experience = () => {
	return (
		<FullScreen>
			{experience.map((e) => (
				<div key={e.companyName}>
					<div>{e.companyName} - {e.role}</div>
					<div>{e.year}</div>
					<div>{JSON.stringify(e.responsibilities)}</div>
				</div>
			))}
		</FullScreen>
	);
};

export default Experience;
