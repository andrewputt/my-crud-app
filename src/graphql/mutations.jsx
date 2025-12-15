export const createTodo = `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const updateTodo = `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const deleteTodo = `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
