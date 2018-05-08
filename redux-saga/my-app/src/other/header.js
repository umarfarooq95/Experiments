import React, { Component } from 'react';

class Header extends React.Component {
   render() {
      return (
         
        <thead>
             <tr>
                 <td>Id</td>
                 <td>Name</td>
                 <td>Age</td>
                 <td>Remove</td>
                 <td>Edit</td>
             </tr>
         </thead>
       
      );
   }
}
    export default Header;