
function Anchor(props) {
  return (
    <div>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.name}
        </a>
    </div>
  );
}

export default Anchor;
