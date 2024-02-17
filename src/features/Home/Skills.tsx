import Pills from "../../components/Pills";
import Text from "../../components/Text";

const Skills = () => {
  return (
    <div className="sb-layout">
      <Text variant="h1">Area of Interest | Skills</Text>
      <div>
        <Text variant="h3">
          Frontend Web Development
        </Text>
        <div className="sb-skills__pills">
          <Pills label="HTML, CSS" />
          <Pills label="Javascript" />
          <Pills label="React" />
        </div>
        <Text>
          Having around 4 years of experience working on react js technology across various libraries.
        </Text>
      </div>

      <div>
        <Text variant="h3">
          Backend Development
        </Text>
        <div className='sb-skills__pills'>
          <Pills label="NodeJS" />
          <Pills label="Ruby on Rails" />
        </div>
        <Text>
          Having 2 years of experience working on Ruby on rails and out of enthusiasm I've self learned on nodejs technology.
        </Text>
      </div>

      <div>
        <Text variant="h3">
          DataBase
        </Text>
        <div className='sb-skills__pills'>
          <Pills label="Postgres" />
        </div>
        <Text>
          Having 2 years of experience working on PostgreSQL.
        </Text>
      </div>

      <div>
        <Text variant="h3">
          Web Designing
        </Text>
        <div className='sb-skills__pills'>
        <Pills label="Figma" />
        <Pills label="Inkscape" />
        </div>
        <Text>
          Out of enthusiasm, I've tried using Web designing tools.
        </Text>
      </div>
    </div>
  );
};

export default Skills;
