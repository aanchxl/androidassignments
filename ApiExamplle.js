import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const API_BASE_URL = 'https://dummy.restapiexample.com/api/v1';

const ApiExample = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/employees`);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createEmployee = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'John Doe',
          salary: '2000',
          age: '30',
        }),
      });
      const json = await response.json();
      console.log('Employee created:', json.data);
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  const updateEmployee = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/update/1`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Updated Employee',
          salary: '2500',
          age: '35',
        }),
      });
      const json = await response.json();
      console.log('Employee updated:', json.data);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const deleteEmployee = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/delete/2`, {
        method: 'DELETE',
      });
      const json = await response.json();
      console.log('Employee deleted:', json);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>API Example</Text>
      <Button title="Fetch Data" onPress={fetchData} />
      <Button title="Create Employee" onPress={createEmployee} />
      <Button title="Update Employee" onPress={updateEmployee} />
      <Button title="Delete Employee" onPress={deleteEmployee} />

      {data && (
        <View>
          <Text>Employees:</Text>
          {data.map((employee) => (
            <Text key={employee.id}>
              {employee.employee_name}, {employee.employee_salary}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default ApiExample;
