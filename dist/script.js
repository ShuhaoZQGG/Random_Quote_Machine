function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const colors = ['#ff7f50', '#ff6b81', '#a4b0be', '#ff6348', '#ff4757', '#747d8c', '#2f3542', '#7bed9f', '#70a1ff', '#5352ed', '#3742fa', '#2ed573'];


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [],
      index: 0 });_defineProperty(this, "getRandomIndex",















    () => {
      const quotes = this.state;
      if (quotes.quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.quotes.length);
        this.setState({
          index });

      } else
      {
        console.log('error');
      }

      var elem_1 = document.getElementById('quote');
      elem_1.style.color = colors[Math.floor(Math.random() * colors.length)];

      var elem_2 = document.getElementById('author');
      elem_2.style.color = elem_1.style.color;

      var elem_3 = document.getElementById('quote-box');
      elem_3.style.backgroundColor = elem_2.style.color;
    });}componentDidMount() {// call API and update the state
    fetch(API).then(response => response.json()).then(response => {this.setState({ quotes: response.quotes }, this.getRandomIndex);});}


  render() {
    const { quotes, index } = this.state;
    const quote = quotes[index];
    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper d-flex justify-content-center align-items-center ", id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { className: "box col-10 p-6 rounded", id: "text" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { id: "quote", className: "" }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa fa-quote-left" }),
      quote && quote.quote), /*#__PURE__*/
      React.createElement("cite", { id: "author", className: "position-relative start-50" }, " ", /*#__PURE__*/React.createElement("strong", null, "-", quote && quote.author))), /*#__PURE__*/

      React.createElement("div", { className: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("a", { href: "twitter.com/intent/tweet", target: "_blank", className: "btn btn-primary", id: "tweet-quote" }, /*#__PURE__*/React.createElement("i", { className: "fab fa-twitter" }), " twitter"), /*#__PURE__*/
      React.createElement("button", { className: "btn btn-primary fab fa-random", id: "new-quote", onClick: this.getRandomIndex }, /*#__PURE__*/React.createElement("i", { className: "fas fa-random" }), "Next Quote")))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));