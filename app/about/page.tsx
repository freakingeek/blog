import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
}

export default function About() {
  return (
    <section className="about">
      <h2>About!</h2>
    </section>
  );
}
