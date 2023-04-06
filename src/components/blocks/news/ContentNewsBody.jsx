import React, { Component } from 'react';
import LinksNewsBlock from '../../links/LinksNewsBlock';
import Button from '../../elements/Button';

export const KEY_W_CODE = 87;

export default class ContentNewsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [], // array of items from API
      idSelected: null,
      isLoaded: false,
      error: null
    };
    this.dragItem = null;
    this.dragOverItem = null;
  }

  componentDidMount() {
    fetch('https://picsum.photos/v2/list?page=6&limit=12')
      .then((response) => response.json())
      .then(
        (arrayOfItems) => {
          this.setState({
            isLoaded: true,
            list: arrayOfItems
          });
        }
      ).catch((error) => {
        this.setState({
          isLoaded: false,
          error
        });
      });
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event) => {
    // TODO: сделать функцию, которая будет проверять, находится ли элемент в зоне видимости
    const hotKey = {
      [KEY_W_CODE]: () => {
        this.setState(({ list, idSelected }) => ({
          idSelected: (idSelected + 1) % list.length
        }));
      }
    };
    hotKey[event.keyCode]?.();
  };

  funcOnDragStart = (id) => {
    this.dragItem = id;
  };

  funcOnDragEnter = (id) => {
    this.dragOverItem = id;
    if (this.dragItem === this.dragOverItem) return;
    this.funcSwitchItems(this.dragItem, this.dragOverItem);
  };

  funcOnDragEnd = () => {
    this.dragOverItem = null;
    this.dragItem = null;
  };

  funcSwitchItems = (draggedItem, staticItem) => {
    const { list } = this.state;
    const dragItemIndex = list.findIndex((item) => item.id === draggedItem); // который тащим
    const dragOverItemIndex = list.findIndex((item) => item.id === staticItem); // над которым висит
    const newList = [...list];
    newList.splice(dragItemIndex, 1);
    newList.splice(dragOverItemIndex, 0, list[dragItemIndex]);
    this.setState({ list: newList });
  };

  funcSortByDateASC = () => {
    this.setState(({ list }) => ({
      list: [...list].sort((a, b) => a.author.localeCompare(b.author))
    }));
  };

  funcSortByDateDESC = () => {
    this.setState(({ list }) => ({
      list: [...list].sort((a, b) => b.author.localeCompare(a.author))
    }));
  };

  funcRemoveLast = () => {
    this.setState(({ list }) => ({ list: [...list].slice(0, -1) }));
  };

  funcRemoveFirst = () => {
    this.setState(({ list }) => ({ list: [...list].slice(1) }));
  };

  funcGetClassName = (idSelected, id) => {
    let className = 'content-news-body-item scalable';
    const { list } = this.state;
    const index = list.findIndex((item) => item.id === id);
    if (idSelected === index) {
      className += ' drag-active';
    }
    return className;
  };

  funcDrawButtons = () => {
    return (
      <div className="buttons-block">
        <Button className="btn btn-big" onClick={this.funcSortByDateASC} innerHTML="SORT A-Z" />
        <Button className="btn btn-big" onClick={this.funcSortByDateDESC} innerHTML="SORT Z-A" />
        <Button className="btn btn-big" onClick={this.funcRemoveLast} innerHTML="DEL LAST" />
        <Button className="btn btn-big" onClick={this.funcRemoveFirst} innerHTML="DEL FIRST" />
      </div>
    );
  };

  render() {
    const {
      list, idSelected, isLoaded, error
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
      <>
        {this.funcDrawButtons()}
        <div className="content-news-body">
          {list.map((x) => (
            <LinksNewsBlock
              href="single.html"
              className={
               this.funcGetClassName(idSelected, x.id)
              }
              itemsList={x}
              key={x.id}
              draggable
              onDragStart={() => this.funcOnDragStart(x.id)}
              onDragEnter={() => this.funcOnDragEnter(x.id)}
              onDragEnd={this.funcOnDragEnd}
              onDragOver={(e) => e.preventDefault()}
            />
          ))}
        </div>
        {this.funcDrawButtons()}
      </>
    );
  }
}
