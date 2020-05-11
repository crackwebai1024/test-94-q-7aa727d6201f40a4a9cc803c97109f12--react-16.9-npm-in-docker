import React from 'react';
import { connect } from 'react-redux';
import { MDBInput, MDBBtn } from 'mdbreact';
// import Range from './Range';
import Interval from './Interval';
import Number from './Number';


class Container extends React.Component{
    state = {
        url: "",
        selectitem:"",
    }

    handlechange = e => {
        debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    renderswitch = (param) => {
        switch(param){
            case 'interval-duration':
                return <Interval url={this.state.url}/>
            // case 'range-duration':
            //     return <Range />
            case 'number-of-segments':
                return <Number />
            default:
                return 
        }
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
                                <option value="range-duration" className="range-duration-option">Range duration</option>
                                <option value="number-of-segments" className="num-segments-option">Number of segments</option>
                            </select>
                            <hr></hr>
                            {this.renderswitch(this.state.selectitem)}
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
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Container)