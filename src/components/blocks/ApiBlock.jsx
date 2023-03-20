import { Component } from 'react';
import Text from '../elements/Text';
import Button from '../elements/Button';

export default class ApiBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayFromAPI: [],
      page: 0,
      isLoaded: false,
      error: null
    };
    this.maxPages = 1;
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    // fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then(
        (arrayOfItems) => {
          this.setState({
            isLoaded: true,
            arrayFromAPI: arrayOfItems
          });
          this.maxPages = Math.ceil(arrayOfItems.length / 10);
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      );
  }

  funcNextPage = (page) => {
    this.setState({ page: (page + 1) % this.maxPages });
  };

  funcPrevPage = (page) => {
    this.setState({ page: (page - 1) < 0 ? this.maxPages - 1 : (page - 1) });
  };

  funcGetPage = (page) => {
    return `Page ${page + 1} of ${this.maxPages}`;
  };

  funcGetButtonsBlock = (page) => {
    return (
      <div className="buttons-block">
        <Button innerHTML="PREV" onClick={() => this.funcPrevPage(page)} className="btn" />
        <Text text={(this.funcGetPage(page))} />
        <Button innerHTML="NEXT" onClick={() => this.funcNextPage(page)} className="btn" />
      </div>
    );
  };

  render() {
    const {
      arrayFromAPI, page, isLoaded, error
    } = this.state;
    if (error) {
      return (
        <div>
          {error.message}
        </div>
      );
    } if (!isLoaded) {
      return (
        <div>Loading...</div>
      );
    }
    const currentBlock = [...arrayFromAPI].slice(page * 10, page * 10 + 10);
    return (
      <div className="block_api">
        {this.funcGetButtonsBlock(page)}
        {
          currentBlock.map((item) => (
            <div key={item.id} className="block_api_grid">
              <Text text={item.id} />
              <Text text={item.title} />
              <Text text={item.body} />
            </div>
          ))
        }
        {this.funcGetButtonsBlock(page)}
      </div>
    );
  }
}
