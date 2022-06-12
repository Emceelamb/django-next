import { NextPage } from "next";
import { useState, useEffect, useRef } from "react";

import Layout from "../../components/Layouts/Layout";
import { todosGET, todosPATCH, todosPOST, todosDELETE } from "../../utils/api";

import { Card } from "../../components/Todos/Card";
import { AddNewCard } from "../../components/Todos/AddNewCard";
import { TodoType } from "../../utils/Types";
import { CardContainer } from "../../components/Todos/CardContainer";

const Home: NextPage = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const getTodos = async () => {
      const response = await todosGET();
      setTodos(response["data"]);
      return response;
    };
    getTodos();
  }, []);

  return (
    <Layout>
      <CardContainer>
        {todos &&
          (todos as []).map((item: TodoType) => (
            <Card
              key={item.id}
              id={item.id}
              todo={item.todo}
              status={item.status}
              patch={todosPATCH}
              delete={todosDELETE}
              setTodos={setTodos}
            />
          ))}
        <AddNewCard post={todosPOST} setTodos={setTodos} />
      </CardContainer>
    </Layout>
  );
};

export default Home;
