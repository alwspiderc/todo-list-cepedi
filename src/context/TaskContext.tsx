import { createContext, useContext, useEffect, useState } from 'react';
import { TaskData } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TaskContextType = {
	tasks: TaskData[];
	setTasks: React.Dispatch<React.SetStateAction<TaskData[]>>;
	aditTask: TaskData | undefined;
	setEditTask: React.Dispatch<React.SetStateAction<TaskData | undefined>>;
	handleCreateTask: (name: string, description: string) => void;
	handleEditTask: (task?: TaskData) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

type TaskProviderProps = {
	children: React.ReactNode;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
	const [tasks, setTasks] = useState<TaskData[]>([]);
	const [aditTask, setEditTask] = useState<TaskData | undefined>(undefined);

	useEffect(() => {
		loadTasks();
	}, []);

	async function loadTasks() {
		try {
			const storedTasks = await AsyncStorage.getItem('@tasks');
			const tasks = storedTasks ? JSON.parse(storedTasks) : [];
			setTasks(tasks);
		} catch (error) {
			console.error(error);
		}
	}

	async function handleCreateTask(name: string, description: string) {
		const newTask = {
			id: tasks.length + 1,
			name,
			description,
			checked: false
		};
		try {
			const storedTasks = await AsyncStorage.getItem('@tasks');
			const tasks = storedTasks ? JSON.parse(storedTasks) : [];
			const updatedTasks = [...tasks, newTask];
			await AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
			setTasks(updatedTasks);
		} catch (error) {
			console.error(error);
		}
	}
	async function handleEditTask(task?: TaskData) {
		if (!task) return;

		const editedTask = {
			id: task.id,
			name: task.name,
			description: task.description,
			checked: task.checked
		};
		try {
			const storedTasks = await AsyncStorage.getItem('@tasks');
			const tasks = storedTasks ? JSON.parse(storedTasks) : [];
			const updatedTasks = tasks.map((item: TaskData) => {
				if (editedTask.id === item.id) {
					return editedTask;
				}
				return item;
			});
			await AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
			setTasks(updatedTasks);
			setEditTask(editedTask);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<TaskContext.Provider
			value={{
				tasks,
				setTasks,
				aditTask,
				setEditTask,
				handleCreateTask,
				handleEditTask
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export const useTasks = () => {
	const context = useContext(TaskContext);
	if (!context) {
		throw new Error('useTasks must be used within a TaskProvider');
	}
	return context;
};
