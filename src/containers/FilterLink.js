import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

//random practice
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

//comparing arrays
function compare ( a1, a2, n ) {
  for( let i=0; i<=2; i++ ) {
    
    if ( a1[i] < a2[i]) {
      //if the array value is greater than or equal to the same then add the remainder to a new array
      array3.push(1);
      console.log( array3 );
    } else if ( a1[i] > a2[i] ) {
      //if the array value is less than or equal to the same then add the remainder to a new array
      array4.push(1);
      if(array4.length > 1) {
        array4.reduce(add, 0);
        function add( accumulator, a ) {
          console.log( '4', array4 );
          return accumulator + a; 
        }
      }
    } else {
      //if the array value is equal add nothing to the array
      console.log( n );
    }
  }
};
const array1 = [ 1, 3, 3 ];
const array2 = [ 3, 2, 1 ];
const array3 = [];
const array4 = [];
const newArray = [];

compare ( array1, array2, newArray );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Link );

const meal = 12;
const tip = 20;
const tax = 8;

function totalmealprice(meal, tip, tax) {
  const taxpercent = 0.01 * tax;
  const totaltax = meal * taxpercent;
  const tippercent = tip * 0.01;
  const totaltip = meal * tippercent;
  const totalmealcost = meal + totaltax + totaltip;
  const numtotalmealcost = Math.round(totalmealcost);
  console.log(taxpercent, totaltax, totalmealcost, totaltip, numtotalmealcost);
};

totalmealprice(meal, tip, tax);

