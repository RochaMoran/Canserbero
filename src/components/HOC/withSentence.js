import React, {Component} from 'react'

const withSentence = (musics, WrappedComponent) => {
   return class WithSentence extends Component {

        constructor(props){
            super(props)
        }
        
        render(){
            return this.props[musics].length === 0 
                ? (
                    <div className="main-loader">
                        <div className="loader loader-2"></div>
                        <div className="loader loader-1"></div>
                        <p className="paragraph-loader">Cargando...</p>
                    </div>
                )
                : <WrappedComponent {...this.props}/>
        }
    }
}

export default withSentence