import { Component } from 'react';
import './App.css';
import {MyClassComponent} from "./Components/Myclasscomponent"
import { MyFunctionalComponent } from './Components/Myfunctionalcomponent';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showClass:false,
      showFunc:false,
    }
  }
  toggleShowClassComponent = () =>{
    this.setState((prevState)=>({ showClass: !prevState.showClass}));
  }

  toggleShowFuncComponent = () =>{
    this.setState((prevState)=>({ showFunc: !prevState.showFunc}));
  }

  render(){
  return (
    <>
    <h1 className='Heading'>Styling Using Function and class based Component</h1>
    <div className="Function-Heading" onClick={this.toggleShowFuncComponent}>To see Styling in Functional Component</div>
    <div className='Class-Heading' onClick={this.toggleShowClassComponent}>To See Styling in Class Component</div>
    { this.state.showClass && <MyClassComponent/>}
   {this.state.showFunc && < MyFunctionalComponent/>}
    </>
  );
}
}

export default App;