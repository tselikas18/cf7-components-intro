import {Component} from "react";

type State = {
    count: number;
}

class ClassComponentWithState extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increase = () => {
        this.setState({count: this.state.count + 1});
    }

    reset = () => {
        this.setState({count: 0});
    }

    render() {
        return (
            <>
                <div className="space-y-8 pt-12">
                    <h1 className="text-center">Count is {this.state.count}</h1>
                    <div className="text-center space-x-4">
                        <button className="bg-black text-white py-2 px-4"
                                onClick={this.increase}>
                            Increase
                        </button>
                        <button className="bg-red-400 text-white py-2 px-4"
                                onClick={this.reset}>
                            Reset
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default ClassComponentWithState;