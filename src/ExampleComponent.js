import React, { Component } from 'react';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class ExampleComponent extends Component {
  render() {
    return (
      <div className="example">
        <img src="https://i.redd.it/4qae0hfqxho11.png" alt="whoa"/>
        <img src="https://external-preview.redd.it/wd_1DbYGWB7EKFRJd1nJhrhphzg9b56UbITiMUmQGjI.jpg?auto=webp&s=e4b08e8e034ba1d7d00a661bf9182302bcc25d11" />
        <p>Whoa!</p>
      </div>
    );
  }
}

export default ExampleComponent;
