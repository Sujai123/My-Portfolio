type ButtonProps = {
  label: string;
};


const Button = (props: ButtonProps) => {
  const { label } = props;

  return (
    <div>
      <a className="sb-button" href="#">
        {label}
      </a>
    </div>
  );
};

export default Button;
