import { continuousLearning } from "@constants/portfolio";
import FullScreen from "@layouts/FullScreen";

const ContinuousLearning = () => {
  return <FullScreen>
    {continuousLearning.map(c => (
      <div key={c.title}>
        <div>{c.title}</div>
      </div>
    ))}
  </FullScreen>;
};

export default ContinuousLearning;
