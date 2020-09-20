import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { draggableAreaEmpty, getValueCard } from 'utils/cards';
import { CardGame } from 'app/components/CardGame/CardGame';
import { DroppableAreaStyles } from './DroppableArea.theme';
import { StoreContext } from 'store';
import { observer } from 'mobx-react';

export const DroppableArea: React.FC = observer(() => {
  const { Gamer } = React.useContext(StoreContext);
  const droppableAreaStyles = DroppableAreaStyles();
  const [destination, setDestination] = React.useState<Number[]>([]);

  React.useEffect(() => {
    setDestination(Gamer.destinationItems);
  }, [Gamer.destinationItemsChanged, Gamer.destinationItems]);

  return (
    <>
      <div css={droppableAreaStyles.droppableLabel}>
        <div>And drop them to make the logo great again</div>
      </div>
      <div css={droppableAreaStyles.droppableAreaContainer}>
        {destination.map((value, index) => (
          <Droppable droppableId={`droppable-${index}`} isDropDisabled={value === index}>
            {provided => (
              <div ref={provided.innerRef} css={droppableAreaStyles.itemContainer(draggableAreaEmpty(value))}>
                {getValueCard(value) !== 'x' ? (
                  <Draggable
                    key={index}
                    draggableId={`droppable-item-${index}`}
                    index={index}
                    isDragDisabled={Gamer.isGameCompleted}>
                    {provided => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <CardGame keyCard={getValueCard(value)} />
                      </div>
                    )}
                  </Draggable>
                ) : null}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </>
  );
});
