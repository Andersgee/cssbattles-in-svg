import type { NextPage } from "next";
import { svgs } from "../assets/svgs";
import { Head } from "../components/Head";

const CLICKABLE = [24, 36, 37, 39, 40, 41, 50, 53, 54, 55, 75];

const Home: NextPage = () => {
  return (
    <>
      <Head
        title="cssbattles in svg"
        description="A gallery of all css battles but written in svg."
        domainUrl="https://cssbattlesinsvg.andyfx.net"
        url="https://cssbattlesinsvg.andyfx.net"
      />
      <div className="flex justify-center">
        <div>
          <div className="mx-4 mt-32 mb-12 flex justify-center">
            <div>
              <h1 className="mb-2 text-2xl">CSSbattles written in svg</h1>
              <p>
                A fun way to learn svg; writing <a href="https://cssbattle.dev/">CSSBattle</a> by hand in svg.
              </p>
              <p>
                While css battles can show off how great you are at css, it also does an excellent job at highlighting
                what css is not meant for: drawing images.
              </p>
              <p>
                Arguably, you are not meant to write svg images by hand either, but it turns out to be pretty
                straightforward. In any case: drawing images by writing svg is certainly more pleasant than it is by
                writing css. Below is a gallery of cssbattles recreated in svg.
              </p>
            </div>
          </div>

          <main className="mb-4 flex flex-wrap justify-center gap-4">
            {svgs.map(({ name, Svg }, i) => {
              const isClickable = CLICKABLE.includes(i + 1);
              return (
                <figure key={name} className="relative">
                  <Svg
                    width={200}
                    height={150}
                    aria-label={name}
                    role={isClickable ? "button" : "img"}
                    tabIndex={isClickable ? 0 : undefined}
                    onClick={isClickable ? () => null : undefined}
                  />
                  <figcaption className="absolute bottom-1 left-1 rounded-sm bg-neutral-800 px-1 text-sm text-neutral-200">
                    {`#${i + 1} ${name}`}
                  </figcaption>
                </figure>
              );
            })}
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
