import { observable, action } from 'mobx';
import { shuffle } from 'utils/random';

export class GameStore {
  @observable private expectedResult = [0, 1, 2, 3, 4];
  @observable public sourceItems: number[] = [];
  @observable public destinationItems: number[] = [5, 6, 7, 8, 9];
  @observable public sourceItemsChanged = '';
  @observable public destinationItemsChanged = '';
  @observable public isGameCompleted: boolean = false;
  @observable public isGameStarted: boolean = false;
  @observable public countMistakes: number = 0;

  @action
  public setSourceItems(array: number[]) {
    this.sourceItems = array;
    this.sourceItemsChanged = JSON.stringify(array);
  }

  @action
  public setDestinationItems(array: number[]) {
    this.destinationItems = array;
    this.destinationItemsChanged = JSON.stringify(array);
  }

  @action verifyGame() {
    this.isGameCompleted = this.isCompleted();
  }

  private isCompleted() {
    return (
      this.destinationItems.length > 0 &&
      this.destinationItems
        .map(
          (destionation, index) =>
            ((destionation === 1 || destionation === 2) && (index === 1 || index === 2)) ||
            destionation === this.expectedResult[index],
        )
        .every(value => value)
    );
  }

  @action
  public matchedItems(destinationIndex: number, sourceIndex: number) {
    const newDestinationItems = [...this.destinationItems];
    const sourceValue = this.sourceItems[sourceIndex];

    const [itemReplaced] = newDestinationItems.splice(destinationIndex, 1, sourceValue);
    const newSourceItems = [...this.sourceItems];
    newSourceItems.splice(sourceIndex, 1, itemReplaced);

    // All Actions
    this.setDestinationItems(newDestinationItems);
    this.setSourceItems(newSourceItems);
  }

  @action changeDroppableItem(sourceInde: number, destinationIndex: number) {
    const newDestinationItems = [...this.destinationItems];
    const firstValue = this.destinationItems[sourceInde];
    const [itemReplaced] = newDestinationItems.splice(destinationIndex, 1, firstValue);
    newDestinationItems.splice(sourceInde, 1, itemReplaced);

    this.setDestinationItems(newDestinationItems);

    // Verify movement is correct or not
    if (firstValue !== destinationIndex) {
      this.addMistake();
    }
  }

  @action
  public initGame() {
    if (!this.isGameStarted) {
      this.isGameStarted = true;
    }
  }

  @action finishGame() {
    if (this.isGameStarted) {
      this.isGameStarted = false;
    }
  }

  @action addMistake() {
    this.countMistakes = this.countMistakes + 1;
  }

  @action resetGame() {
    this.countMistakes = 0;
    this.destinationItems = [5, 6, 7, 8, 9];
    this.sourceItemsChanged = '';
    this.destinationItemsChanged = '';
    this.isGameStarted = false;
    this.isGameCompleted = false;
    this.sourceItems = shuffle([0, 1, 2, 3, 4]);
  }
}
