import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { any } from 'prop-types';
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
    key: nanoid(),
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    date: '07/09/2021',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    img: imagesList[1],
    key: nanoid(),
  },
  {
    id: 2,
    title: 'Aperiam consequatur, dolor',
    date: '03/08/2021',
    text: 'Aperiam consequatur, dolor earum illum placeat voluptate!',
    img: imagesList[2],
    key: nanoid(),
  },
  {
    id: 3,
    title: 'Architecto beatae consequuntur',
    date: '10/16/2021',
    text: 'Architecto beatae consequuntur libero molestiae, perferendis',
    img: imagesList[3],
    key: nanoid(),
  },
  {
    id: 4,
    title: 'Richird Norton photorealistic',
    date: '11/07/2019',
    text: 'Richird Norton photorealistic rendering as real photos',
    img: imagesList[4],
    key: nanoid(),
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet',
    date: '04/11/2021',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    img: imagesList[5],
    key: nanoid(),
  },
  {
    id: 6,
    title: 'Aperiam consequatur, dolor',
    date: '12/22/2021',
    text: 'Aperiam consequatur, dolor earum illum placeat voluptate!',
    img: imagesList[6],
    key: nanoid(),
  },
  {
    id: 7,
    title: 'Architecto beatae consequuntur',
    date: '05/09/2021',
    text: 'Architecto beatae consequuntur libero molestiae, perferendis',
    // img: imagesList[7],
    img: 'https://error.example/blablabla.jpg',
    key: nanoid(),
  },
];

export default class ContentNewsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: NewsList,
      isDrageable: false,
      isActive: null,
      isSelected: null,
      isKeyPressed: false
    };
    this.dragItem = React.useRef < any > null;
    this.dragOverItem = React.useRef < any > null;
  }

  componentDidMount() {
    this.setState({ list: NewsList });
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event) => {
    // TODO: сделать функцию, которая будет проверять, находится ли элемент в зоне видимости
    switch (event.keyCode) {
      // key 'W' code is
      case 87:
        this.setState(({ isKeyPressed }) => ({ isKeyPressed: !isKeyPressed }));
        this.setState(({ list, isSelected }) => ({ isSelected: (isSelected + 1) % list.length }));
        break;
      default:
        break;
    }
  };

  funcSetDragable = () => {
    this.setState(({ isDrageable }) => ({ isDrageable: !isDrageable }));
  };

  funcOnDragStart = (id) => {
    this.dragItem = id;
    // console.log('funcOnDragStart', this.dragItem);
  };

  funcOnDragEnter = (id) => {
    this.dragOverItem = id;
    this.setState({ isActive: this.dragOverItem });
    // console.log('funcOnDragEnter', this.dragOverItem);
  };

  funcOnDragEnd = () => {
    const { list } = this.state;
    const dragItemIndex = list.findIndex((item) => item.id === this.dragItem);
    const dragOverItemIndex = list.findIndex((item) => item.id === this.dragOverItem);
    const newList = [...list];
    newList.splice(dragItemIndex, 1);
    newList.splice(dragOverItemIndex, 0, list[dragItemIndex]);
    this.dragOverItem = null;
    this.dragItem = null;
    setTimeout(() => {
      this.setState({ isActive: null, list: newList });
    }, 400);
  };

  funcSortByDateASC = () => {
    this.setState(({ list }) => ({
      list: [...list].sort((a, b) => new Date(a.date) - new Date(b.date))
    }));
  };

  funcSortByDateDESC = () => {
    this.setState(({ list }) => ({
      list: [...list].sort((a, b) => new Date(a.date) - new Date(b.date)).reverse()
    }));
  };

  funcRemoveLast = () => {
    this.setState(({ list }) => ({ list: [...list].slice(0, -1) }));
  };

  funcRemoveFirst = () => {
    this.setState(({ list }) => ({ list: [...list].slice(1) }));
  };

  funcSortByDateASCCustom = () => {
    // custom sort without sort() method
    const doCustomSort = (list) => {
      const copyOfListArray = [...list];
      const arrLength = copyOfListArray.length;
      for (let i = 0; i < arrLength; i += 1) {
        for (let j = 0; j < arrLength - 1; j += 1) {
          if (new Date(copyOfListArray[j].date) > new Date(copyOfListArray[j + 1].date)) {
            const temp = copyOfListArray[j];
            copyOfListArray[j] = copyOfListArray[j + 1];
            copyOfListArray[j + 1] = temp;
          }
        }
      }
      return copyOfListArray;
    };
    this.setState(({ list }) => ({
      list: (doCustomSort(list))
    }));
  };

  funcAddElement = () => {
    const { list: arr } = this.state;

    const getDateFormat = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    };
    const newArr = [...arr, {
      title: 'Richird Norton photorealistic',
      date: getDateFormat(),
      text: 'Richird Norton photorealistic rendering as real photos',
      img: imagesList[Math.floor(Math.random() * 8)],
      key: nanoid(),
    }];
    this.setState({ list: newArr });
  };

  render() {
    const {
      list, isDrageable, isActive, isSelected 
    } = this.state;
    return (
      <>
        <div className="content-news-body">
          {list.map((x) => (
            <LinksNewsBlock
              href="single.html"
              className="content-news-body-item scalable"
              itemsList={x}
              key={x.key}
              draggable={isDrageable}
              onDragStart={isDrageable ? () => this.funcOnDragStart(x.id) : () => {}}
              onDragEnter={isDrageable ? () => this.funcOnDragEnter(x.id) : () => {}}
              onDragEnd={isDrageable ? this.funcOnDragEnd : () => {}}
              onDragOver={isDrageable ? (e) => e.preventDefault() : () => {}}
              style={(x.id === isActive || x.id === isSelected) ? { opacity: 0.5 } : {}}
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
          <Button className="btn" onClick={this.funcSetDragable} innerHTML={['DragOFF', 'DragON'][+isDrageable]} />
        </div>
      </>
    );
  }
}
