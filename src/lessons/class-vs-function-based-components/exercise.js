import React from 'react';

/**
 * Use this module to practice writing what you feel are some decent examples of both
 * class-based and functional components. You can write as many or as few of each kind
 * as you want, just make sure to render them as part of the output in the Exercise
 * component down below, so you can see them reflected in the lesson page.
 *
 * Some examples of class- and function-based components follow, use them for ideas.
 *
 * const HelloWorld = () => <span>Hello World!</span>;
 *
 * const SignupForm = ({ action, method }) => (
 *   <form action={action} method={method}>
 *     <input type="text" name="full_name" defaultValue="" placeholder="Full Name" />
 *     <input type="text" name="address" defaultValue="" placeholder="Street Address" />
 *     <input type="text" name="city" defaultValue="" placeholder="City" />
 *     <input type="text" name="state" defaultValue="" placeholder="State" />
 *     <input type="phone" name="zip" defaultValue="" placeholder="Zip Code" />
 *     <button type="submit">Submit Form</button>
 *   </form>
 * );
 *
 * const ManagedSignupForm = class extends React.Component {
 *   state = {
 *     fullName: '',
 *     address: '',
 *     city: '',
 *     state: '',
 *     zip: '',
 *   };
 *
 *   _onChange = e => {
 *     this.setState({ [e.target.name]: e.target.value });
 *   };
 *
 *   _onSubmit = (e) => {
 *     e.preventDefault();
 *     this.props.onComplete(this.state);
 *   };
 *
 *   render() {
 *     return (
 *       <form onSubmit={this._onSubmit}>
 *         <input
 *           name="full_name"
 *           onChange={this._onChange}
 *           placeholder="Full Name"
 *           type="text"
 *           value={this.state.full_name}
 *         />
 *         <input
 *           name="address"
 *           onChange={this._onChange}
 *           placeholder="Street Address"
 *           type="text"
 *           value={this.state.address}
 *         />
 *         <input
 *           name="city"
 *           onChange={this._onChange}
 *           placeholder="City"
 *           type="text"
 *           value={this.state.city}
 *         />
 *         <input
 *           name="state"
 *           onChange={this._onChange}
 *           placeholder="State"
 *           type="text"
 *           value={this.state.state}
 *         />
 *         <input
 *           name="zip"
 *           onChange={this._onChange}
 *           placeholder="Zip Code"
 *           type="phone"
 *           value={this.state.zip}
 *         />
 *         <button type="submit">Submit Form</button>
 *       </form>
 *     );
 *   }
 * };
 **/

// const Exercise = () => (
//   <span>From a functional component</span>
// );

class Exercise extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = { count: 0 };

    this.onIncreaseClick = this.onIncreaseClick.bind(this);
    this.onDecreaseClick = this.onDecreaseClick.bind(this);
  }

  onIncreaseClick() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  onDecreaseClick() {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  }

  render() {
    return (
      <div>
        <span>From a class component, it can manage state</span>
        <button onClick={this.onIncreaseClick}>Increase the count</button>
        <button onClick={this.onDecreaseClick}>Decrease the count</button>
        <div>The count: {this.state.count}</div>
      </div>
    );
  }
}

export default Exercise;
