import React from 'react'
import { connect } from 'react-redux'
import { MDBInput , MDBBtn } from 'mdbreact'
import { Get_Num } from '../store/actions/action';

class Interval extends React.Component{
    state = {
        no_of_segments: 0
    }

    handlechange = e => {
        debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        let body ={ 
            "video_link": this.props.url, 
            "no_of_segments": Number(this.state.no_of_segments) 
        }        
        this.props.getvideo(body)
    }

    validate = () => {
        if ((this.props.url.search("https://") !== 0 && this.props.url.search("http://") !== 0)){
            return false
        }
        if(this.state.no_of_segments <= 0 || this.state.no_of_segments === ""){
            return false
        }
        return true
    }

    render(){
        let validate=this.validate()
        return(
            <div>
                <MDBInput 
                    label="number of segments"
                    name="no_of_segments"
                    type="Number"
                    className=""
                    onChange={this.handlechange}
                >
                </MDBInput>
                {validate?
                <MDBBtn
                    className="process-video"
                    onClick={this.onSubmit}
                >
                    Segment Video
                </MDBBtn>:
                <MDBBtn
                    className="process-video"
                    onClick={this.onSubmit}
                    disabled
                >
                    Segment Video
                </MDBBtn>
                }
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getvideo: (body) => dispatch(Get_Num(body))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Interval)