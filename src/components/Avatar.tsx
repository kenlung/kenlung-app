import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 100px;
    width: 100px;
    background: url(${props => props.image});
    background-size: cover;
    border-radius: ${props => props.radius}px;
`

interface Props {
    radius: number;
}

interface State {
    photo: string;
}

export class Avatar extends React.Component<Props, State> {

    static defaultProps = {
        radius: 5
    }

    state = {
        photo: "https://uinames.com/api/photos/female/20.jpg"
    }

    componentDidMount = () => {
        
        const url = "https://uinames.com/api/?ext"
        fetch(url)
        .then(response => response.json()
        .then(response => {
            console.log(response.photo)
            this.setState({ photo: response.photo})
        }))
    }

    render(){
        return <Container image={this.state.photo} radius={this.props.radius} />;
    }

}

export default Avatar