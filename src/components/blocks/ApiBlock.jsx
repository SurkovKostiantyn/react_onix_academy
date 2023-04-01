import { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faArrowLeftLong, faArrowRightLong
// } from '@fortawesome/free-solid-svg-icons';
import Text from '../elements/Text';
// import Button from '../elements/Button';
import Image from '../elements/Image';

export default class ApiBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayFromAPI: [],
      isLoaded: false,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://picsum.photos/v2/list?page=6&limit=30')
      .then((response) => response.json())
      .then(
        (arrayOfItems) => {
          this.setState({
            isLoaded: true,
            arrayFromAPI: arrayOfItems
          });
          console.log(arrayOfItems);
        }
      ).catch((error) => {
        this.setState({
          isLoaded: false,
          error
        });
      });
  }

  render() {
    const {
      arrayFromAPI, isLoaded, error
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
    return (
      <div className="block_api">
        {
          arrayFromAPI.map((item) => (
            <div key={item.id} className="block_api_grid">
              <Text text={item.author} />
              <Image src={item.download_url} />
            </div>
          ))
        }
      </div>
    );
  }
}
