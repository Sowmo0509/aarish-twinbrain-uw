import "@/styles/globals.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { theme } from "@/theme";

import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </RecoilRoot>
  );
}
