import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

function Navbar(props) {
    return (
        <div>
            <header>
            <h2><a>Recipe App</a></h2>
            <nav>
                <li><a onClick={props.onNewRecipe}>New Recipe</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </nav>
        </header>
    </div>
    );
}

Navbar.defaultProps = {
    onNewRecipe() {}
}

Navbar.propType = {
    onNewRecipe: PropTypes.func
}

export default Navbar;


// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import './Navbar.css';

// class Navbar extends Component {
//   static defaultProps = {
//     onNewRecipe() {}
//   }
  
//   static propTypes = {
//     onNewRecipe: PropTypes.func
//   }
  
//   render() {
//     return (
//       <header>
//         <h2><a>Recipe App</a></h2>
//         <nav>
//           <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
//           <li><a>Home</a></li>
//           <li><a>About</a></li>
//           <li><a>Contact Us</a></li>
//         </nav>
//       </header>
//     );
//   }
// }

// export default Navbar;
