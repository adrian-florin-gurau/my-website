interface Header2Props {
  text: string;
}

const Header2 = ({ text }: Header2Props) => {
  return (
    <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white font-bold glowy-text w-full text-center pb-3">
      {text}
    </h2>
  );
};

export default Header2;
