import TextModifier from "react-text-modifier";

const SingleSlide = ({ slider }) => {
  const { title, bg } = slider;
  return (
    <>
      <div
        // style added in index.css file for globally.
        className="image-layer"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-white main-slider__details">
        <TextModifier
          text={title}
          as="h1"
          renderSeparator={() => <div className="mt-1 md:mt-4" />}
          className="font-bold text-2xl md:text-4xl lg:text-5xl"
          highlight={["Buy", "Sale"]}
          highlightClassName="text-3xl md:text-5xl lg:text-6xl text-[#EE9322]"
        />
      </div>
    </>
  );
};

export default SingleSlide;
