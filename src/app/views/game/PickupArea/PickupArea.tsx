import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { getValueCard, draggableAreaEmpty } from 'utils/cards';
import { CardGame } from 'app/components/CardGame/CardGame';
import { PickupAreaStyles } from './PickupArea.theme';
import { StoreContext } from 'store';
import { observer } from 'mobx-react';

export const PickupArea: React.FC = observer(() => {
  const pickupAreaStyles = PickupAreaStyles();
  const { Gamer } = React.useContext(StoreContext);
  const [sourceItems, setSourceItems] = React.useState<Number[]>([]);

  React.useEffect(() => {
    setSourceItems(Gamer.sourceItems);
  }, [Gamer.sourceItemsChanged, Gamer.sourceItems]);

  return (
    <>
      <div css={pickupAreaStyles.pickupLabel}>
        <div>Pick Up the right cards</div>
        <div>The faster the better</div>
      </div>
      <div css={pickupAreaStyles.pickAreaContainer}>
        {sourceItems.map((value, index) => (
          <Droppable droppableId={`pickup-${value}`} isDropDisabled={true}>
            {provided => (
              <div ref={provided.innerRef} css={pickupAreaStyles.itemContainer(draggableAreaEmpty(value))}>
                {getValueCard(value) !== 'x' ? (
                  <Draggable key={index} draggableId={`pickup-item-${value}`} index={index}>
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
