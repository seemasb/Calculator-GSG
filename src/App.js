import React from 'react';
import './App.css';
import Button from './Components/Button';
class App extends React.Component {
  state = {
    input: '',
    Operation: '',
    Num2: '',
    clearFlag: 'false',
  };

  Change = (parameter) => {
    // this.setState({input: ""})

    if (this.state.clearFlag === 'true') {
      //i'm inserting Num2
      const oldNum2 = this.state.Num2;
      this.setState({ Num2: oldNum2 + parameter });
    } else {
      const oldInput = this.state.input;
      this.setState({ input: oldInput + parameter });
    }
  };

  // dontChange = (parameter)=>{
  //   this.Change('')
  // }

  // ChangeNum2 = (parameter)=>{
  //   const oldNum2 = this.state.Num2
  //   this.setState({Num2: oldNum2+parameter})

  // }

  // ClearInput = ()=>{
  //   this.setState({input: ""})

  // }

  Action = (parameter) => {
    if (!isNaN(parameter) || parameter === '.') {
      if (this.state.clearFlag === 'true') {
        if (parameter === '.') {
          if (this.state.Num2.includes('.')) {
            this.Change('');
          } else this.Change(parameter);
        } else this.Change(parameter);
      } else {
        if (parameter === '.') {
          if (this.state.input.includes('.')) {
            this.Change('');
          } else this.Change(parameter);
        } else this.Change(parameter);
      }
    } else if (parameter === 'AC') {
      this.setState({ input: '', Operation: '', Num2: '', clearFlag: 'false' });
      // console.log(this.state.Operation)
      // console.log(this.state.clearFlag)
    }
    // else if(parameter==='+/-'){
    //   console.log(this.state)

    // }
    else if (
      parameter === '+' ||
      parameter === 'x' ||
      parameter === '÷' ||
      parameter === '-' ||
      parameter === '=' ||
      parameter === '%' ||
      parameter === '+/-'
    ) {
      if (this.state.Operation === '' && parameter !== '=') {
        if (parameter === '%') {
          const numb1 = parseFloat(this.state.input);
          const result = numb1 / 100;
          this.setState({
            input: result + '',
            Operation: '',
            Num2: '',
            clearFlag: 'true',
          });
        } else if (parameter === '+/-') {
          const numb1 = parseFloat(this.state.input);
          const result = numb1 * -1;
          this.setState({
            input: result + '',
            Operation: '',
            Num2: '',
            clearFlag: 'true',
          });
        } else this.setState({ Operation: parameter, clearFlag: 'true' });
      } else {
        if (this.state.Operation === '+') {
          const numb1 = parseFloat(this.state.input);
          const numb2 = parseFloat(this.state.Num2);
          const result = numb1 + numb2;
          if (parameter === '=') {
            this.setState({
              input: result + '',
              Operation: '',
              Num2: '',
              clearFlag: 'false',
            });
          } else
            this.setState({
              input: result + '',
              Operation: parameter,
              Num2: '',
              clearFlag: 'true',
            });
        } else if (this.state.Operation === 'x') {
          const numb1 = parseFloat(this.state.input);
          const numb2 = parseFloat(this.state.Num2);
          const result = numb1 * numb2;
          if (parameter === '=') {
            this.setState({
              input: result + '',
              Operation: '',
              Num2: '',
              clearFlag: 'false',
            });
          } else
            this.setState({
              input: result + '',
              Operation: parameter,
              Num2: '',
              clearFlag: 'true',
            });
        } else if (this.state.Operation === '-') {
          const numb1 = parseFloat(this.state.input);
          const numb2 = parseFloat(this.state.Num2);
          const result = numb1 - numb2;
          if (parameter === '=') {
            this.setState({
              input: result + '',
              Operation: '',
              Num2: '',
              clearFlag: 'false',
            });
          } else
            this.setState({
              input: result + '',
              Operation: parameter,
              Num2: '',
              clearFlag: 'true',
            });
        } else if (this.state.Operation === '÷') {
          const numb1 = parseFloat(this.state.input);
          const numb2 = parseFloat(this.state.Num2);
          const result = numb1 / numb2;
          if (parameter === '=') {
            this.setState({
              input: result + '',
              Operation: '',
              Num2: '',
              clearFlag: 'false',
            });
          } else
            this.setState({
              input: result + '',
              Operation: parameter,
              Num2: '',
              clearFlag: 'true',
            });
        }
      }

      //make clearflag false
    }
  };

  render() {
    return (
      <>
        <div className="App">
          <div className="Buttons_wrapper">
            {/* <Input value={ this.state.clearFlag ? this.state.input : this.state.Num2}  onChange={this.Change}> </Input> */}
            <Input
              value={this.state.input + this.state.Operation + this.state.Num2}
              onChange={this.Change}
            >
              {' '}
            </Input>
            {/* <Input value={()=>{
        if(this.state.clearFlag)return this.state.Num2
        else return this.state.input
      }}  onChange={this.Change}> </Input> */}

            <div className="row">
              <Button myAction={this.Action}>AC</Button>
              <Button myAction={this.Action}>+/-</Button>
              <Button myAction={this.Action}>%</Button>
              <Button myAction={this.Action}>÷</Button>
            </div>

            <div className="row">
              <Button myAction={this.Action}>7</Button>
              <Button myAction={this.Action}>8</Button>
              <Button myAction={this.Action}>9</Button>
              <Button myAction={this.Action}>x</Button>
            </div>

            <div className="row">
              <Button myAction={this.Action}>4</Button>
              <Button myAction={this.Action}>5</Button>
              <Button myAction={this.Action}>6</Button>
              <Button myAction={this.Action}>-</Button>
            </div>

            <div className="row">
              <Button myAction={this.Action}>1</Button>
              <Button myAction={this.Action}>2</Button>
              <Button myAction={this.Action}>3</Button>
              <Button myAction={this.Action}>+</Button>
            </div>

            <div className="row">
              <ButtonZero myAction={this.Action}>0</ButtonZero>
              <Button myAction={this.Action}>.</Button>
              <Button myAction={this.Action}>=</Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function ButtonZero(props) {
  return (
    <div>
      <button
        onClick={() => props.myAction(props.children)}
        className="SpecialZero"
      >
        {props.children}
      </button>
    </div>
  );
}

function Input(props) {
  const { value, onChange } = props;
  return (
    <div>
      <input
        type="text"
        className="Input_design"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
