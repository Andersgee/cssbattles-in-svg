import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import PlausibleProvider from "next-plausible";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain="cssbattlesinsvg.andyfx.net">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
};

export default MyApp;
