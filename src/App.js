import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ContactList from './components/ContactList';

const data = [
	{
		id: 'item-1',
		content: 'Item-1',
	},
	{
		id: 'item-2',
		content: 'Item-2',
	},
	{
		id: 'item-3',
		content: 'Item-3',
	},
	{
		id: 'item-4',
		content: 'Item-4',
	},
	{
		id: 'item-5',
		content: 'Item-5',
	},
	{
		id: 'item-6',
		content: 'Item-6',
	},
	{
		id: 'item-7',
		content: 'Item-7',
	},
	{
		id: 'item-8',
		content: 'Item-8',
	},
	{
		id: 'item-9',
		content: 'Item-9',
	},
];

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
};

const App = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(data);
	}, []);

	const onDragEnd = (result) => {
		if (!result.destination) {
			return;
		}

		const reorderedItems = reorder(items, result.source.index, result.destination.index);
		setItems(reorderedItems);
	};

	return (
		<div className="main_content">
			<DragDropContext onDragEnd={onDragEnd}>
				<ContactList items={items} />
			</DragDropContext>
		</div>
	);
};

export default App;
