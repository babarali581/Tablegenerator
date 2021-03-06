import React, {Component, Fragment} from 'react'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getInput: 0,
            From: 0,
            To : 0
        };
      }
 

    render() {
        let  {From ,To} =    this.state
        let addOne = parseInt(To)+1
        let val = this.state.getInput
        let finalResp = []
        
         for(let i= 0 ; i < addOne; i++){
             if(i !== 0 && i > From ){
             finalResp.push(<p style= {{fontSize: '150%' , color: '#8B008B' , backgroundColor: ''}}>{val} x {i} = {val * i}</p>)
             }

            }
        return (
            <Fragment>
                <div style ={{ height:'100vh' , width:"100%", display: 'flex' , flexDirection: 'column' , alignItems:'center' , backgroundColor: '#33BBFF' }}>
                <h1 style = {{paddingTop : 40 , color :"#8B008B"}}>Table Generator</h1>

             <div style ={{ height:300 , width:"100%", display: 'flex' ,  justifyContent: 'center' , alignItems: 'center' ,flexWrap:'wrap' }}>   
            <div>
                Enter Table
             <input type = "number"  style = {{height: '30px' , width: '50px', margin:'5px' ,textAlign: 'center'}} onChange={e => this.setState({getInput : e.target.value}) }/>
             </div>
             <div>
             From <input type = "number"  style = {{height: '30px' , width: '50px',  margin:'5px' ,textAlign: 'center'}} onChange={e => this.setState({From : e.target.value})} /> 
             </div>
             <div>
             To <input type = "number"  style = {{height: '30px' , width: '50px', margin:'5px' ,textAlign: 'center'}} onChange={e => this.setState({To : e.target.value})}/>
             </div>
             </div>
             <div style = {{display: "flext", alignItems : 'center'}}>
             {finalResp}
             </div>
             </div>
            </Fragment>
        )
    }

}
export default Main