import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="bg-[#FFEED9] min-h-screen">
      <Nav />
      <Hero />
      <Work />
    </div>
  );
}
