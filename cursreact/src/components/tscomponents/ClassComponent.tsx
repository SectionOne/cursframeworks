import React, { Component } from 'react';

// Definim una interfície per a les props
interface GreetingProps {
  name: string;
  age: number;
}

// Definim una interfície per a l'estat
interface GreetingState {
  isLoggedIn: boolean;
}

class GreetingLogin extends Component<GreetingProps, GreetingState> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({ isLoggedIn: !prevState.isLoggedIn }));
  };

  render() {
    const { name, age } = this.props;
    const { isLoggedIn } = this.state;

    return (
      <div>
        <p>Hola, {name}!</p>
        <p>Tens {age} anys.</p>
        <p>{isLoggedIn ? 'Estàs connectat!' : 'No estàs connectat.'}</p>
        <button onClick={this.toggleLogin}>Canviar estat</button>
      </div>
    );
  }
}

export default GreetingLogin;