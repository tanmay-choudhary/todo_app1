import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, setVisibilityFilter } from "../src/redux/actions";
import AddTodo from "@/components/AddTodo";
import Tab from "@/components/Tab";
import Tado from "@/components/Todo";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    //console.log("mounted");
    this.setState({ mounted: true });
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.props;

    if (todos !== prevProps.todos) {
      //console.log(todos);
    }
  }

  componentWillUnmount() {
    //console.log("Unmouted");
  }

  render() {
    const { dispatch, todos, visibilityFilter } = this.props;

    return (
      <div className="p-8 container mx-auto lg:w-[60%]">
        {this.state.mounted && (
          <AddTodo onAddTodo={(text) => dispatch(addTodo(text))} />
        )}
        <Tab
          setVisibilityFilter={(filter) =>
            dispatch(setVisibilityFilter(filter))
          }
        />

        <div className="">
          {todos.map((todo) => {
            if (
              visibilityFilter === "ALL_TASKS" ||
              (visibilityFilter === "ACTIVE" && todo.active) ||
              (visibilityFilter === "COMPLETED" && !todo.active)
            ) {
              return <Tado key={todo.id} todo={todo} />;
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter,
});

export default connect(mapStateToProps)(Home);
