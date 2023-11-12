// import Button from "./components/Button";
// import Container from "./components/Container";
import { useRef } from "react";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      {/* <Input id="name" label="Your name" type="text" /> */}
      {/* <Input id="age" label="Your age" type="number" /> */}
      <Input id="test" label="Test" ref={input} />
      {/* <p>
        <Button href="https://www.google.com">A Link</Button>
      </p>
      <p>
        <Button>A Button</Button>
      </p> */}
      {/* <Container as={Button} onClick={() => console.log("Button clicked")}>
        Click Me
      </Container> */}
    </main>
  );
}

export default App;
