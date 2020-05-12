import React from 'react';
import { connect } from 'react-redux';
import { MDBInput, MDBBtn } from 'mdbreact';
import RangeElement from './RangeElement';
import { Get_Video } from '../store/actions/action';

class Range extends React.Component{
    state = {
        item: [],
        durationlist:[]
    }

    validate = durationlist => {
        debugger
        if(durationlist.length == 0){
            debugger
            return false
        }
        debugger
        if ((this.props.url.search("https://") !== 0 && this.props.url.search("http://") !== 0)){
            debugger
            return false
        }
        debugger
        for(let x in durationlist){
            if(durationlist[x]['start'] >= durationlist[x]['end'] || durationlist[x]['start']==="" || durationlist[x]['end']===""){
                debugger
                return false
            }
            if(durationlist[x]['start']<0 || durationlist[x]['end']<0){
                debugger
                return false
            }
        }
        debugger
        return true
    }

    setstartandend = (start, end, i) => {
        let list = this.state.durationlist
        list[i] = {start: Number(start), end: Number(end)}
        this.setState({
            durationlist: list
        })
    }

    delete = i => {
        let itemlist = this.state.item
        let durationlist = this.state.durationlist
        itemlist.splice(i, 1)
        durationlist.splice(i, 1)
        this.setState({
            item: itemlist,
            durationlist: durationlist
        })
    }

    addrangesetting = () => {
        debugger
        let item=this.state.item
        let durationlist = this.state.durationlist
        item.push(
            <RangeElement 
                setstartandend={this.setstartandend} 
                delete={this.delete}
                id={this.state.item.length}
            />     
        )
        durationlist[durationlist.length]=[0,0]
        this.validate(durationlist)
        this.setState({
            item: item,
            durationlist: durationlist
        })
    }

    onSubmit = e => {
        e.preventDefault()
        let body ={ 
            "video_link": this.props.url, 
            "interval_range": this.state.durationlist 
        }        
        this.props.getvideo(body)
    }

    render(){
        let validate = this.validate(this.state.durationlist)
        return(
            <div>
                <MDBBtn
                    className="add-range-duration"
                    onClick={this.addrangesetting}
                >
                    add range duration
                </MDBBtn>
                <div>
                    {this.state.item}
                </div>
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

const mapStateToProps = state => {
    return{

    }
} 

const matDispatchToProps = dispatch => {
    return{
        getvideo: (body) => dispatch(Get_Video(body))
    }
}

export default connect(
    mapStateToProps, matDispatchToProps
)(Range)