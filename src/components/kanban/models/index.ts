export interface IElement {
  id: string;
  title: string;
  content: string;
  column: string;
  priority: string;
  dueDate?: Date | string;
}

export interface DragEndEvent {
  active: any;
  over: any;
}

export interface IDraggableElement {
  card: IElement;
  data: IElement[];
  setData: React.Dispatch<React.SetStateAction<IElement[]>>;
  showModal: boolean;
  setShowModal: (value: React.SetStateAction<boolean>) => void;
}
