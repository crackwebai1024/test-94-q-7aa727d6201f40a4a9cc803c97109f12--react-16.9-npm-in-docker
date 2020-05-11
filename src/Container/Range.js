import React from 'react';
import { connect } from 'react-redux';
import { MDBInput, MDBBtn } from 'mdbreact';
import RangeElement from './RangeElement';
import { Send_Data } from '../store/actions/action'

class Range extends React.Component{
    state = {
        item: [],
        durationlist:[]
    }

    validate = durationlist => {
        debugger
        for(let x in durationlist){
            if(durationlist[x][0] >= durationlist[x][1] || durationlist[x][0]==undefined || durationlist[x][1]==undefined){
                this.props.setrangevalidation(false)
                return
            }
        }
        this.props.send(durationlist)
        this.props.setrangevalidation(true)
    }

    setstartandend = (start, end, i) => {
        let list = this.state.durationlist
        list[i] = [start, end]
        debugger
        this.validate(list)
        this.setState({
            durationlist: list
        })
    }

    delete = i => {
        let itemlist = this.state.item
        let durationlist = this.state.durationlist
        itemlist.splice(i, 1)
        durationlist.splice(i, 1)
        this.validate(durationlist)
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
            <div>
                <RangeElement 
                    setstartandend={this.setstartandend} 
                    delete={this.delete}
                    id={this.state.item.length}
                />
            </div>            
        )
        durationlist[durationlist.length]=[0,0]
        this.validate(durationlist)
        this.setState({
            item: item,
            durationlist: durationlist
        })
    }

    render(){
        debugger
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
        send: (durationlist) => dispatch(Send_Data(durationlist))
    }
}

export default connect(
    mapStateToProps, matDispatchToProps
)(Range)