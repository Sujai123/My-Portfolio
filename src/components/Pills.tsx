

type PillsProps = {
  label: string
}

const Pills = (props: PillsProps) => {
  const {label} = props;

  return (
    <div className="sb-pills">
      {label}
    </div>
  )
}

export default Pills