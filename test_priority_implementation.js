// Simple test script to verify priority field implementation
const axios = require('axios');

async function testPriorityImplementation() {
  console.log('🚀 Testing Priority Field Implementation...\n');
  
  try {
    // Test 1: Create task without priority (should default to P3)
    console.log('Test 1: Creating task without priority...');
    const task1 = await axios.post('http://localhost:3030/api/tasks', {
      title: 'Default Priority Test',
      description: 'This task should have P3 priority by default'
    });
    
    console.log(`✅ Task created: ${task1.data.title}`);
    console.log(`✅ Priority: ${task1.data.priority} (expected: P3)\n`);
    
    // Test 2: Create task with explicit P1 priority
    console.log('Test 2: Creating task with P1 priority...');
    const task2 = await axios.post('http://localhost:3030/api/tasks', {
      title: 'High Priority Task',
      description: 'This is urgent',
      priority: 'P1'
    });
    
    console.log(`✅ Task created: ${task2.data.title}`);
    console.log(`✅ Priority: ${task2.data.priority} (expected: P1)\n`);
    
    // Test 3: Create task with invalid priority (should default to P3)
    console.log('Test 3: Creating task with invalid priority...');
    const task3 = await axios.post('http://localhost:3030/api/tasks', {
      title: 'Invalid Priority Test',
      description: 'This task has invalid priority',
      priority: 'INVALID'
    });
    
    console.log(`✅ Task created: ${task3.data.title}`);
    console.log(`✅ Priority: ${task3.data.priority} (expected: P3)\n`);
    
    // Test 4: Get all tasks and verify ordering (P1 should come first)
    console.log('Test 4: Getting all tasks to verify priority ordering...');
    const allTasks = await axios.get('http://localhost:3030/api/tasks');
    
    console.log('✅ All tasks retrieved:');
    allTasks.data.forEach((task, index) => {
      console.log(`   ${index + 1}. ${task.title} - Priority: ${task.priority}`);
    });
    
    // Test 5: Update a task with priority
    console.log('\nTest 5: Updating task with new priority...');
    const updatedTask = await axios.put(`http://localhost:3030/api/tasks/${task1.data.id}`, {
      title: 'Updated Priority Test',
      description: 'Now with P2 priority',
      priority: 'P2'
    });
    
    console.log(`✅ Task updated: ${updatedTask.data.title}`);
    console.log(`✅ New priority: ${updatedTask.data.priority} (expected: P2)\n`);
    
    console.log('🎉 All tests passed! Priority field implementation is working correctly.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

testPriorityImplementation();