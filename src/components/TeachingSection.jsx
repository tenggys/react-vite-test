import WayToTeach from "./WayToRich";
import { ways } from "../data";

export default function TeachingSection() {
    return (
        <section className="container">
          <h1>Hello World!</h1>

          <ul>
            {ways.map((way) => (
              <WayToTeach key={way.title} {...way} />
            ))}
          </ul>
        </section>
    )
}