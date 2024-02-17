import Text from "../../components/Text";

const EducationalInfo = () => {
  return (
    <div className="sb-layout">
      <Text variant="h1">EducationalInfo</Text>
      <div>
        <Text variant="h3">
          Sri Shakthi Institute of Engineering and Technology
        </Text>
        <Text>2016 - 2020</Text>
        <Text>BE Computer Science and Engineering</Text>
        <Text>Secured 6.95 CGPA</Text>
      </div>

      <div>
        <Text variant="h3">St.Josephs's Metric Hr Secondary School</Text>
        <Text>2016</Text>
        <Text>HSC</Text>
        <Text>Secured 93.33%</Text>
      </div>

      <div>
        <Text variant="h3">St.Josephs's Metric Hr Secondary School</Text>
        <Text>2016</Text>
        <Text>SSLC</Text>
        <Text>Secured 93.40%</Text>
      </div>
    </div>
  );
};

export default EducationalInfo;
