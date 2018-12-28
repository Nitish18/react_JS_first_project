let counter = 1;
let myarray = [[0,1,2],
               [3,4,5],
               [6,7,8]
              ];

function checkWinner(i,j, win_val, val, cnt){
      


        if(i==0 && j==0){

                if(myarray[i+1][j]==win_val && myarray[i+2][j]==win_val){
                    return true;
                };

                if(myarray[i][j+1]==win_val && myarray[i][j+2]==win_val){
                  return true;
                };

                if(myarray[i+1][j+1]==win_val && myarray[i+2][j+2]==win_val){
                  return true;
                };

        }

        else if(i==0 && j==1){

                if(myarray[i][j-1]==win_val && myarray[i][j+1]==win_val){
                    return true;
                };

                if(myarray[i+1][j]==win_val && myarray[i+2][j]==win_val){
                  return true;
                };

        }
      
        else if(i==0 && j==2){

            if(myarray[i][j-1]==win_val && myarray[i][j-2]==win_val){
                return true;
            };

            if(myarray[i+1][j]==win_val && myarray[i+2][j]==win_val){
              return true;
            };

            if(myarray[i+1][j-1]==win_val && myarray[i+2][j-2]==win_val){
              return true;
            };

        
        }

        else if(i==1 && j==0){

            if(myarray[i-1][j]==win_val && myarray[i+1][j]==win_val){
                return true;
            };

            if(myarray[i][j+1]==win_val && myarray[i][j+1]==win_val){
              return true;
            };

        }

        else if(i==1 && j==1){


              if(myarray[i-1][j]==win_val && myarray[i+1][j]==win_val){
                  return true;
              };

              if(myarray[i][j-1]==win_val && myarray[i][j+1]==win_val){
                return true;
              };

              if(myarray[i-1][j-1]==win_val && myarray[i+1][j+1]==win_val){
                return true;
              };

              if(myarray[i-1][j+1]==win_val && myarray[i+1][j-1]==win_val){
                return true;
              };      

        
        }

        else if(i==1 && j==2){

              if(myarray[i][j-1]==win_val && myarray[i][j-2]==win_val){
                  return true;
              };

              if(myarray[i+1][j]==win_val && myarray[i-1][j]==win_val){
                return true;
              };

             

        }

        else if(i==2 && j==0){

              if(myarray[i-1][j]==win_val && myarray[i-2][j]==win_val){
                  return true;
              };

              if(myarray[i][j+1]==win_val && myarray[i][j+2]==win_val){
                return true;
              };

              if(myarray[i-1][j+1]==win_val && myarray[i-2][j+2]==win_val){
                return true;
              };
        
        }

        else if(i==2 && j==1){

              if(myarray[i][j-1]==win_val && myarray[i][j+1]==win_val){
                  return true;
              };

              if(myarray[i-1][j]==win_val && myarray[i-2][j]==win_val){
                return true;
              };

        
        }

        else if(i==2 && j==2){

              if(myarray[i-1][j]==win_val && myarray[i-2][j]==win_val){
                  return true;
              };

              if(myarray[i][j-1]==win_val && myarray[i][j-2]==win_val){
                return true;
              };

              if(myarray[i-1][j-1]==win_val && myarray[i-2][j-2]==win_val){
                return true;
              };

        
        }

}

function updateMyArray(pos_val,val){
          let i = 0;
          let j = 0;
          for(i=0;i<3;i++){
              for(j=0;j<3;j++){
                  if(myarray[i][j]==val){
                     myarray[i][j] = pos_val;
                     flag = 1;
                     return [i,j];
                  }  
              }
          }
}


class Square extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {

             if(counter){
                if(this.state.value==null){
                    this.setState({ value: 'X' }, function () {
                         let pos_array = updateMyArray(this.state.value, this.props.value);
                         let winner = checkWinner(pos_array[0],pos_array[1],this.state.value, this.props.value, 0);
                         if(winner){
                            console.log("Winner is X");
                         }
                    });
                    counter = 0;   
                } 
             }
             else{
               if(this.state.value==null){
                  this.setState({ value: 'O' }, function () {
                        
                        let pos_array = updateMyArray(this.state.value, this.props.value);
                        let winner = checkWinner(pos_array[0],pos_array[1],this.state.value, this.props.value, 0);
                        if(winner){
                            console.log("Winner is O");
                         }
                  });
                  counter = 1;
               }
             }
        }}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

