import React from 'react';
import { connect } from 'react-redux';
import { MDBInput, MDBBtn, MDBRow } from 'mdbreact';

class RangeElement extends React.Component{
    state = {
        duration_start: 0,
        duration_end: 0
    }

    handlechange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    delete = () => {
        this.props.delete(this.props.id)
    }

    render(){
        let clname = "range-duration-start-" + (this.props.id + 1)
        let suname = "range-duration-end-" + (this.props.id + 1)
        let btnname = "delete-range-duration-" + (this.props.id + 1)

        this.props.setstartandend(this.state.duration_start, this.state.duration_end, this.props.id)
        return(
            <MDBRow md="8">
                <MDBInput
                    label = "range duration start..."
                    type = "Number"
                    onChange = {this.handlechange}
                    name = "duration_start"
                    className = {clname}
                >
                </MDBInput>
                <MDBInput
                    label = "range duration start..."
                    type = "Number"
                    onChange = {this.handlechange}
                    name = "duration_end"
                    className = {suname}
                >
                </MDBInput>
                <MDBBtn
                    className={btnname}
                    onClick={this.delete}
                    color="pink"
                >
                    Delete
                </MDBBtn>
            </MDBRow>
        )
    }
}

const mapStateToProps = state => {
    return{

    }
} 

const matDispatchToProps = dispatch => {
    return{

    }
}

export default connect(
    mapStateToProps, matDispatchToProps
)(RangeElement)