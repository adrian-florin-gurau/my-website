interface InfoTextProps {
  text: string;
}

const InfoText = ({ text }: InfoTextProps) => {
  return (
    <p className="opacity-95 text-xs font-bold w-full text-center text-black dark:text-white">
      {text}
    </p>
  );
};

export default InfoText;
