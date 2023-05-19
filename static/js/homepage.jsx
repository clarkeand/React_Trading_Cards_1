'use strict';

function Homepage() {
  return (
    <div>
      <p>Welcome to Balloonicorn's Card Trade Game Website!</p>
      <p>Please click <a href="/cards">here</a> to go to our cards website.</p>
      <p>
      <img src = "/static/img/balloonicorn.jpg"></img>
      </p>
    </div>
  ) ;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
