import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, FlatList, Button } from 'react-native';

const TodoList = () => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!text) return;
    setTodos([...todos, { 
      id: Date.now(), 
      text, 
      description, 
      priority, 
      dueDate, 
      completed: false 
    }]);
    setText('');
    setDescription('');
    setPriority('Low');
    setDueDate('');
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  const changePriority = (id, newPriority) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, priority: newPriority } : todo));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.todoItem}>

        <View style={{ flex: 1 }}>
          <Text style={[styles.todoText, item.completed && styles.completedText]}>
            {item.text} - Priority: {item.priority},
          </Text>
          <Text style={item.completed && styles.completedText}>{item.description}</Text>
        </View>
        <TouchableOpacity onPress={() => changePriority(item.id, 'High')}>
          <Text style={styles.priorityButton}>High</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changePriority(item.id, 'Medium')}>
          <Text style={styles.priorityButton}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changePriority(item.id, 'Low')}>
          <Text style={styles.priorityButton}>Low</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo"
        value={text}
        onChangeText={setText}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Due Date"
        value={dueDate}
        onChangeText={setDueDate}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  todoText: {
    fontSize: 12,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  priorityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#007bff',
    color: '#ffffff',
    borderRadius: 5,
    marginLeft: 5,
  },
  deleteText: {
    color: 'red',
  },
});

export default TodoList;
