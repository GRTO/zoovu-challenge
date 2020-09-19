import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { StoreContext } from 'store';
import { Header } from './Header/Header';
import { PickupArea } from './PickupArea/PickupArea';
import { DroppableArea } from './DroppableArea/DroppableArea';
import { getComponentId, isMoveFromDroppable } from 'utils/dragdrop';
import { getValueCard } from 'utils/cards';

const Game = withRouter(
  observer(() => {
    const { Gamer } = React.useContext(StoreContext);
    React.useEffect(() => {
      Gamer.resetGame();
    }, []);

    React.useEffect(() => {
      // Verify every action if the destination has been changed
      Gamer.verifyGame();
    }, [Gamer.destinationItemsChanged]);

    const onDragEnd = (result: DropResult) => {
      const { source, destination, draggableId } = result;

      // dropped outside
      if (!destination) {
        return;
      }
      const droppableIdNumber = getComponentId('pickup-item-', draggableId);
      const destinationIdNumber = getComponentId('droppable-', destination.droppableId);
      const sourceIdNumber = getComponentId('droppable-', source.droppableId);

      if (isMoveFromDroppable(source.droppableId, destination.droppableId)) {
        Gamer.changeDroppableItem(sourceIdNumber, destinationIdNumber);
      } else {
        Gamer.matchedItems(destinationIdNumber, source.index);
        if (getValueCard(droppableIdNumber) !== getValueCard(destinationIdNumber)) {
          Gamer.addMistake();
        }
      }
      return;
    };

    const onDragStart = () => {
      Gamer.initGame();
    };

    return (
      <>
        <Header />
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
          <PickupArea />
          <DroppableArea />
        </DragDropContext>
      </>
    );
  }),
);

export default Game;
