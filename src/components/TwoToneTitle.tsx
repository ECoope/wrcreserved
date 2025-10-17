interface TwoToneTitleProps {
  first: string;
  second: string;
  className?: string;
}

const TwoToneTitle = ({ first, second, className = "" }: TwoToneTitleProps) => {
  return (
    <h1 className={`font-serif ${className}`}>
      <span className="font-bold">{first}</span>
      <span className="font-bold"> {second}</span>
    </h1>
  );
};

export default TwoToneTitle;
