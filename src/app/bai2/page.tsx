import { CarouselDemo } from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Session from "./components/session/sessions";
import "./index.css";
export default function Page() {
  return (
    <div>
      <Header />
      <CarouselDemo />
      <Session />
      <Footer />
    </div>
  );
}
