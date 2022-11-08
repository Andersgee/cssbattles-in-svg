import type { NextPage } from "next";
//import Link from "next/link";
import { svgs } from "../assets/svgs";
import { AndyfxLogoAnimated } from "../components/AndyfxLogoAnimated";
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
                writing css.
              </p>
              <p>Below is a gallery of cssbattles recreated in svg.</p>
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
          {/* Footer */}
          <footer className="mx-8 mt-12 flex justify-center">
            <div className="max-w-xl flex-1 md:grid md:grid-cols-2">
              <div className="flex justify-center md:mt-8">
                <div>
                  <h2 className="mb-2 text-center text-2xl font-normal text-neutral-600 dark:text-neutral-300">
                    About
                  </h2>
                  <p className="text-left">
                    Cssbattles in svg is a small project with the purpose of me learning all the svg commands. If you
                    are curious you can inspect the html to see how the images are drawn.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <a href="https://www.andyfx.net" className="my-16 flex items-center justify-center p-2">
                  <AndyfxLogoAnimated className="h-16 w-16" />
                  <h1 className="text-2xl font-thin text-neutral-700 dark:text-neutral-200">Andyfx</h1>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
