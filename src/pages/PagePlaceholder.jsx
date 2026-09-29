import { ArrowUpRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/common/Container.jsx";

export default function PagePlaceholder({ name }) {
  return (
    <section className="placeholder-page">
      <Container>
        <div className="placeholder-icon">
          <Compass size={25} />
        </div>
        <span className="eyebrow">Coming soon</span>
        <h1>{name}</h1>
        <p>This section will be built in a later phase.</p>
        <Link className="text-link" to="/">
          Return home <ArrowUpRight size={16} />
        </Link>
      </Container>
    </section>
  );
}
