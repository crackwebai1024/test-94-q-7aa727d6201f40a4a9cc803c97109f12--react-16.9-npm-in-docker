import React from 'react';
import { connect } from 'react-redux';
import { MDBInput, MDBBtn } from 'mdbreact';
import { Get_Video } from '../store/actions/action'


class Container extends React.Component{
    state = {
        url: "",
        selectitem:"",
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
            "video_link": this.state.url, 
            "interval_duration": Number(this.state.interval_duration) 
        } 
        this.props.getvideo(body)
    }

    validatesegment = () => {
        debugger
        for(let x in this.state){
            if(this.state[x].length == 0){
                debugger
                return false
            }
        }
        debugger
        if ((this.state.url.search("https://") !== 0 && this.state.url.search("http://") !== 0) || this.state.selectitem !== "interval-duration" ){
            debugger
            return false
        }

        if(this.state.interval_duration <= 0){
            debugger
            return false
        }

        return true
    }

    setvideo = (data) => {
        let item = []
        let i = 0
        for(let x in data){
            i = i + 1
            let segmentedvideo = "segmented-video-" + i 
            let segmentedvideosource = "segmented-video-source-" + i
            item.push(
                <div className="col-md-4">
                    <video className={segmentedvideo} width="250" height="250" controls>
                        <source
                            src = {data[x].video_url}
                            className = {segmentedvideosource}
                        >
                        </source>
                    </video>
                </div>    
            )
        }
        return item
    }

    render(){
        let validate = this.validatesegment()
        return(
            <div>
                <h1 style={{ paddingTop: "30px" }}>Segment Video</h1>
                <hr></hr>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form>
                            <MDBInput
                                label="video link..."
                                type="url"
                                name="url"
                                className="video-link"
                                value={this.state.url}
                                onChange={this.handlechange}
                                required    
                            >
                            </MDBInput>
                            <select className="segment-setting" name="selectitem" placeholder="Select Segment Settings..." onChange={this.handlechange}>
                                <option disabled selected value> -- select an option -- </option>
                                <option value="interval-duration" className="interval-duration-option">Interval duration</option>
                                <option value="range-duration">Range duration</option>
                                <option value="number of segments">Number of segments</option>
                            </select>
                            <hr></hr>
                            {this.state.selectitem !== ""?
                                <MDBInput
                                    label={this.state.selectitem}
                                    value={this.state.interval_duration}
                                    type="number"
                                    name="interval_duration"
                                    className="interval-duration"
                                    onChange={this.handlechange}
                                    required    
                                >
                                </MDBInput>:
                                ""
                            }
                            {/* {validate == true?
                                <MDBBtn
                                    className="process-video"
                                    color="pink"
                                    type="submit"
                                    onClick={this.onSubmit}
                                >
                                    segment video
                                </MDBBtn>:
                                <MDBBtn
                                    className="process-video"
                                    color="pink"
                                    type="submit"
                                    onClick={this.onSubmit}
                                    disabled
                                >
                                    segment video
                                </MDBBtn>
                            } */}
                            <MDBBtn
                                className="process-video"
                                color="pink"
                                type="submit"
                                onClick={this.onSubmit}
                                disabled
                            >
                                segment video
                            </MDBBtn>
                        </form>
                        <div className="row">
                            {this.setvideo(this.props.videodata.interval_videos)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
        videodata: state.user.data
    };
}

const mapDispatchToProps = dispatch => {
    return{
        getvideo: (body) => dispatch(Get_Video(body))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Container)