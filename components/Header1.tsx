interface Header1Props {
  text: string;
}

const Header1 = ({ text }: Header1Props) => {
  return (
    <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-white font-bold glowy-text-filled w-full text-center pb-3">
      {text}
    </h1>
  );
};

export default Header1;
