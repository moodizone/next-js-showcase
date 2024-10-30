import * as React from "react";

function Header() {
  const [state, setState] = React.useState(false);

  return (
    <header className="flex-shrink-0 flex-grow-0 p-5 bg-red-300">
      header goes here
    </header>
  );
}

export default Header;
