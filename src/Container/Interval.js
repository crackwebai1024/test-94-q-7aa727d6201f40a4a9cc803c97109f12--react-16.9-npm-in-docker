import React from 'react'
import { connect } from 'react-redux'
import { MDBInput , MDBBtn } from 'mdbreact'
import { Get_Video } from '../store/actions/action';

class Interval extends React.Component{
    state = {
        interval_duration: 0
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
            "interval_duration": Number(this.state.interval_duration) 
        }        
        this.props.getvideo(body)
    }

    validate = () => {
        if ((this.props.url.search("https://") !== 0 && this.props.url.search("http://") !== 0)){
            return false
        }
        if(this.state.interval_duration <= 0){
            return false
        }
        return true
    }

    render(){
        let validate=this.validate()
        return(
            <div>
                <MDBInput 
                    label="interval duration"
                    name="interval_duration"
                    type="Number"
                    className="interval-duration"
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
        getvideo: (body) => dispatch(Get_Video(body))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Interval)