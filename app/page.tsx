export const metadata = {
  title: "App Router",
};

import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Page() {
  return <h1>App Router</h1>;
}
