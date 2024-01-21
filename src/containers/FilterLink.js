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
          console.log("FizzBuzz");
      } else if ( n%3 === 0 ) {
          console.log("Fizz");      
      } else if ( n%5 === 0 ) {
          console.log("Buzz");
      } else {
          console.log(n);
      }
  }
}
fizzBuzz();

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
