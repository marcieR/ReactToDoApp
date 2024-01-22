import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

//test fizzBuzz
function fizzBuzz( n ) {
  for ( let n = 1; n<=15 ; n++ ) {
      if( n%15 === 0  ){ 
          console.log( "FizzBuzz" );
      } else if ( n%3 === 0 ) {
          console.log( "Fizz" );      
      } else if ( n%5 === 0 ) {
          console.log( "Buzz" );
      } else {
          console.log( n );
      }
  }
}
fizzBuzz();

// adding the items in an array
function sum ( n ) {

  console.log( n );
  const SOR = n.reduce( add, 0 );
  console.log ( SOR )
  function add( accumulator, a ) {
      return accumulator + a;
  }
};

const ar = [
  1
  , 2
  , 3
  , 4
  , 10
  , 11
]
sum( ar );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Link );
