import HornedBeast from "./HornedBeast";

function Main() {
  const smaugUrl =
    "https://th-thumbnailer.cdn-si-edu.com/q3TDBi4NruarXFGLMuEfqOff9Hc=/fit-in/1600x0/filters:focal(949x245:950x246)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/6a/e6/6ae65dac-2e24-452d-a39e-0a6a7fb280f0/smaug_par_david_demaret.jpg";
  const merylUrl =
    "https://media.vanityfair.com/photos/576c585744d93e6e4482bb27/16:9/w_1280,c_limit/meryl-streep-devil-wears-prada.jpg";

  return (
    <main>
      <HornedBeast title="Smaug" imageUrl={smaugUrl} description="Scary dragon" />
      <HornedBeast title="The Devil" imageUrl={merylUrl} description="Scary fashion lady" />
    </main>
  );
}

export default Main;
