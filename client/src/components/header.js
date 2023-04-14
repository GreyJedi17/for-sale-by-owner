import React, { useState } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState(
    'Welcome to Sale by Owner. Sell your home without relator fees'
  );

  return (
    <div className="card text-center">
      <div>{greeting}</div>
    </div>
  );
}

export default Greeting;
