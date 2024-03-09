import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freakin' Geek - Just a random tech blog on the internet!",
};

function Home() {
  return (
    <section className="home">
      <p style={{ lineHeight: "160%" }}>
        {`I'm Yasin Silavi, just a random programmer on the vast expanse of the
        internet, armed with a keyboard and a head full of weird ideas. Whether
        I'm diving into the latest tech trends, hacking away at code, or
        conjuring up futuristic concepts, this is my corner of the digital
        universe where the unconventional meets the technological.`}
      </p>

      <div style={{ marginTop: 900 }}>
        This is about you, not the others.
        <br />
        {"Don't compare your first with others hundreds"}
      </div>
    </section>
  );
}

export default Home;
