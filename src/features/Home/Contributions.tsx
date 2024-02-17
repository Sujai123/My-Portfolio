import Text from "../../components/Text.js"

const Contributions = () => {
  return (
    <div className="sb-layout">
      <Text variant="h1">
          Contributions
      </Text>
      <div>
        <Text variant="h3">
          IcodeThis
        </Text>
        <Text>
          Completed around 17 challenges in icodeThis Platform
        </Text>
      </div>

      <div>
        <Text variant="h3">
          CodePen
        </Text>
        <Text>
        Developed around 10 mini projects in CodePen Platform
        </Text>
      </div>

      <div>
        <Text variant="h3">
          CodeSandBox
        </Text>
        <Text>
          Developed few mini projects in CodeSandbox Platform
        </Text>
      </div>
    </div>
  )
}

export default Contributions