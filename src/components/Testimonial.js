function Testimonial() {
  return (
    <div className="w-full py-10 bg-gray-200">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center justify-center mx-auto space-y-5 md:w-4/5">
          <h3 className="text-sm leading-10 text-center text-gray-600">
            Building on the bedrock of excellence,{" "}
            <strong>Good Foundation</strong> stands as a testament to unwavering
            commitment, innovation, and craftsmanship. Our foundation is rooted
            in quality, and we construct dreams with a blend of precision and
            passion. At Good Foundation, we don&apos;t just build structures; we
            forge legacies, creating spaces where vision meets reality. Trust in
            the strength of a foundation that believes in constructing not just
            buildings, but enduring landmarks that echo the spirit of quality
            and dedication.
          </h3>
          <div className="flex flex-row items-center justify-center space-x-5">
            <h6 className="font-bold">Michael Zekry</h6>
            <span className="text-xl font-extrabold text-blue-600">/</span>
            <h6>Founder & CEO of Good Foundation LLC.</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
