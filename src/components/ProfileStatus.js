import React from "react";
// import { updateStatus } from './redux/profileReducer';

class ProfileStatus extends React.Component {
   // statusInputRef = React.createRef;
   state = {
      editMode: false,
      status: this.props.status
   }

   activateEditMode = () => {
      this.setState( {
         editMode: true
      })
   }

   deactivateEditMode = () => {
      this.setState( {
         editMode: false
      })
      this.props.updateStatus(this.state.status);
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      });
   }

   componentDidUpdate (prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
          this.setState({
              status: this.props.status
          });
      }
  }

  render () {
      return (
         <div>
            {!this.state.editMode &&
               <div>
                  <h4 onDoubleClick={ this.activateEditMode} className="App-content_main-desc_date">{this.props.status || 'no stat'} </h4>
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode} value={this.state.status}/>
               </div>
            }
         </div>
     )
   }
}

export default ProfileStatus;