import { CarouselDemo } from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Session from "./components/content/sessions";
export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <CarouselDemo />
      <Session />
      <Footer />
    </div>
  );
}
