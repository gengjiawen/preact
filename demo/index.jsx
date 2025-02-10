import { render, Component } from 'preact';
import { useState } from 'preact/hooks';
import 'preact/devtools';

class Counter extends Component {
	state = { count: 0 };

	increment = () => {
		this.setState({ count: this.state.count + 1 });
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<h1>Class Component Count: {this.state.count}</h1>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

function CounterFunction() {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);

	return (
		<div>
			<h1>Function Component Count: {count}</h1>
			<button onClick={increment}>Increment</button>
		</div>
	);
}

render(
	<div>
		<Counter />
		<CounterFunction />
	</div>,
	document.body
);
