type PillsProps = {
  label: string[]
}

const Pills = (props: PillsProps) => {
  const {label} = props;

  return (
    <div className="pills__container">
      {label.map((each) => (
        <div className="pills__item" key={each}>
          {each}
        </div>
      ))}
    </div>
  )
}

export default Pills