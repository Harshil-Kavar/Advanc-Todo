import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Paper, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import TodoFrom from "../components/todo-components/TodoFrom";
import TodoItem from "../components/todo-components/TodoItem";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    marginBottom: "20px",
  },
});

const TodoApp = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Container className="">
        <Container className="d-flex justify-content-center">
          <Paper square className={`${classes.root}`}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="icon label tabs example"
            >
              <Tab icon={<PhoneIcon />} label="Add Todo" />
              <Tab icon={<FavoriteIcon />} label="Todo List" />
            </Tabs>
          </Paper>
        </Container>
        <Card>
          {value === 0 && <TodoFrom />}
          {value === 1 && <TodoItem />}
        </Card>
      </Container>
    </>
  );
};

export default TodoApp;
