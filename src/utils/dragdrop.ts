import { DraggableStateSnapshot } from 'react-beautiful-dnd';

export const getDragAndDropStyle = (style: { [key: string]: any }, snapshot: DraggableStateSnapshot) => {
  if (!snapshot.isDragging) return {};
  if (!snapshot.isDropAnimating) {
    return style;
  }

  return {
    ...style,
    // cannot be 0, but make it super tiny
    transitionDuration: `0.001s`,
  };
};

export const getComponentId = (term: string, text: string) => {
  const pattern = new RegExp(term, 'g');
  const [, itemId] = text.split(pattern);
  return itemId ? +itemId : -1;
};

export const isMoveFromDroppable = (source: string, destination: string) =>
  source.includes('droppable') && destination.includes('droppable');
