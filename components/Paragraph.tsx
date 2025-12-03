interface ParagraphProps {
  text: string;
}

const Paragraph = ({ text }: ParagraphProps) => {
  return (
    <p className="text-1xl md:text-2xl font-bold w-full text-center mb-1">
      {text}
    </p>
  );
};

export default Paragraph;
