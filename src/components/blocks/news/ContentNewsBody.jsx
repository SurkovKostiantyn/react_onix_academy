import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LinksNewsBlock from '../../links/LinksNewsBlock';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import GifLoading from '../../../assets/images/loading.gif';

const KEY_W_CODE = 87;

function ButtonsBlock({
  onSortByDateASC, onSortByDateDESC, onRemoveLast, onRemoveFirst
}) {
  return (
    <div className="buttons-block">
      <Button className="btn btn-big" onClick={onSortByDateASC}>SORT A-Z</Button>
      <Button className="btn btn-big" onClick={onSortByDateDESC}>SORT Z-A</Button>
      <Button className="btn btn-big" onClick={onRemoveLast}>DEL LAST</Button>
      <Button className="btn btn-big" onClick={onRemoveFirst}>DEL FIRST</Button>
    </div>
  );
}

ButtonsBlock.propTypes = {
  onSortByDateASC: PropTypes.func.isRequired,
  onSortByDateDESC: PropTypes.func.isRequired,
  onRemoveLast: PropTypes.func.isRequired,
  onRemoveFirst: PropTypes.func.isRequired,
};

function ContentNewsBody() {
  const [list, setList] = useState([]);
  const [idSelected, setIdSelected] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [dragItem, setDragItem] = useState(null);
  const [dragOverItem, setDragOverItem] = useState(null);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=6&limit=12')
      .then((response) => response.json())
      .then(
        (arrayOfItems) => {
          setIsLoaded(true);
          setList(arrayOfItems);
        }
      ).catch((errorMsg) => {
        setIsLoaded(false);
        setError(errorMsg);
      });

    const handleKeyUp = (event) => {
      const hotKey = {
        [KEY_W_CODE]: () => {
          setIdSelected((idSelected + 1) % list.length);
        }
      };
      hotKey[event.keyCode]?.();
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [idSelected]);

  const funcOnDragStart = (id) => {
    setDragItem(id);
  };

  const funcSwitchItems = (draggedItem, staticItem) => {
    const dragItemIndex = list.findIndex((item) => item.id === draggedItem);
    const dragOverItemIndex = list.findIndex((item) => item.id === staticItem);
    const newList = [...list];
    newList.splice(dragItemIndex, 1);
    newList.splice(dragOverItemIndex, 0, list[dragItemIndex]);
    setList(newList);
  };

  const funcOnDragEnter = (id) => {
    setDragOverItem(id);
  };

  const funcOnDragEnd = () => {
    setDragOverItem(null);
    setDragItem(null);
    funcSwitchItems(dragItem, dragOverItem);
  };

  const funcGetClassName = (selectedId, id) => {
    let className = 'content-home-body-item scalable';
    const index = list.findIndex((item) => item.id === id);
    if (selectedId === index) {
      className += ' drag-active';
    }
    return className;
  };

  const funcSortByDateASC = () => {
    setList([...list].sort((a, b) => a.author.localeCompare(b.author)));
  };

  const funcSortByDateDESC = () => {
    setList([...list].sort((a, b) => b.author.localeCompare(a.author)));
  };

  const funcRemoveLast = () => {
    setList([...list].slice(0, -1));
  };

  const funcRemoveFirst = () => {
    setList([...list].slice(0, -1));
  };

  if (error) {
    return (
      <div className="message error">
        {error.message}
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="message loading">
        <Image src={GifLoading} alt="loading" />
      </div>
    );
  }

  return (
    <>
      <ButtonsBlock
        onSortByDateASC={funcSortByDateASC}
        onSortByDateDESC={funcSortByDateDESC}
        onRemoveLast={funcRemoveLast}
        onRemoveFirst={funcRemoveFirst}
      />
      <div className="content-home-body">
        {list.map((x) => (
          <LinksNewsBlock
            href="single.html"
            className={funcGetClassName(idSelected, x.id)}
            itemsList={x}
            key={x.id}
            draggable
            onDragStart={() => funcOnDragStart(x.id)}
            onDragEnter={() => funcOnDragEnter(x.id)}
            onDragEnd={funcOnDragEnd}
            onDragOver={(e) => e.preventDefault()}
          />
        ))}
      </div>
      <ButtonsBlock
        onSortByDateASC={funcSortByDateASC}
        onSortByDateDESC={funcSortByDateDESC}
        onRemoveLast={funcRemoveLast}
        onRemoveFirst={funcRemoveFirst}
      />
    </>
  );
}

export default ContentNewsBody;
