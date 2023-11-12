import Button from "./components/Button";
// import Input from "./components/Input";

function App() {
  return (
    <main>
      {/* <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" /> */}
      <p>
        <Button element="anchor" href="https://www.google.com">
          A Link
        </Button>
      </p>
      <p>
        <Button element="button">A Button</Button>
      </p>
    </main>
  );
}

export default App;
