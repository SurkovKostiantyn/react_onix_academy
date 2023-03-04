import { Component } from 'react';
import LinksNewsBlock from '../../links/LinksNewsBlock';
import Button from '../../elements/Button';

import getImagesList from '../../functions/getImagesList';

const imagesList = getImagesList('BlogImages'); // что бы не писать ручками путь к картинкам

const NewsList = [
  {
    id: 0,
    title: 'Richird Norton photorealistic',
    date: '08/02/2021',
    text: 'Richird Norton photorealistic rendering as real photos',
    img: imagesList[0],
        
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    date: '07/09/2021',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    img: imagesList[1],
        
  },
  {
    id: 2,
    title: 'Aperiam consequatur, dolor',
    date: '03/08/2021',
    text: 'Aperiam consequatur, dolor earum illum placeat voluptate!',
    img: imagesList[2],
        
  },
  {
    id: 3,
    title: 'Architecto beatae consequuntur',
    date: '10/16/2021',
    text: 'Architecto beatae consequuntur libero molestiae, perferendis',
    img: imagesList[3],
        
  },
  {
    id: 4,
    title: 'Richird Norton photorealistic',
    date: '11/07/2019',
    text: 'Richird Norton photorealistic rendering as real photos',
    img: imagesList[4],
        
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet',
    date: '04/11/2021',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    img: imagesList[5],
        
  },
  {
    id: 6,
    title: 'Aperiam consequatur, dolor',
    date: '12/22/2021',
    text: 'Aperiam consequatur, dolor earum illum placeat voluptate!',
    img: imagesList[6],
        
  },
  {
    id: 7,
    title: 'Architecto beatae consequuntur',
    date: '05/09/2021',
    text: 'Architecto beatae consequuntur libero molestiae, perferendis',
    img: imagesList[7],
        
  },
];

export default class ContentNewsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: NewsList,
    };
  }

  funcSortByDateASC = () => {
    this.setState(({ list }) => {
      return {
        list: [...list].sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        })
      };
    });
  };

  funcSortByDateDESC = () => {
    this.setState(({ list }) => {
      return {
        list: [...list].sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        }).reverse()
      };
    });
  };

  funcRemoveLast = () => {
    this.setState(({ list }) => {
      return {
        list: list.slice(0, -1)
      };
    });
  };

  funcRemoveFirst = () => {
    this.setState(({ list }) => {
      return {
        list: list.slice(1)
      };
    });
  };

  funcSortByDateASCCustom = () => {
    // custom sort without sort() method
    const { list: arr } = this.state;
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i += 1) {
      for (let j = 0; j < arrLength - 1; j += 1) {
        if (new Date(arr[j].date) < new Date(arr[j + 1].date)) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    this.setState({ list: arr });
  };

  funcAddElement = () => {
    const { list: arr } = this.state;

    function getDateFormat() {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    }
    const newArr = [...arr, {
      title: 'Richird Norton photorealistic',
      date: getDateFormat(),
      text: 'Richird Norton photorealistic rendering as real photos',
      img: imagesList[Math.floor(Math.random() * 8)]
    }];
    this.setState({ list: newArr });
  };

  render() {
    const { list } = this.state;
    return (
      <>
        <div className="content-news-body">
          {list.map((x) => (
            <LinksNewsBlock
              href="single.html"
              className="content-news-body-item scalable"
              itemsList={x}
              key={x.id}
            />
          ))}
        </div>
        <div className="buttons-block">
          <Button className="btn" onClick={this.funcSortByDateASC} innerHTML="SORT" />
          <Button className="btn" onClick={this.funcSortByDateASCCustom} innerHTML="CUSTOM SORT" />
          <Button className="btn" onClick={this.funcSortByDateDESC} innerHTML="RSORT" />
          <Button className="btn" onClick={this.funcRemoveLast} innerHTML="DEL LAST" />
          <Button className="btn" onClick={this.funcRemoveFirst} innerHTML="DEL FIRST" />
          <Button className="btn" onClick={this.funcAddElement} innerHTML="ADD ELEMENT" />
        </div>
      </>
    );
  }
}
